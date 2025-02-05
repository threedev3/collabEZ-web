"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import { ActionMeta, SingleValue, StylesConfig } from "react-select";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Select = dynamic(() => import("react-select"), { ssr: false });

interface OptionType {
  value: string;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: OptionType | null;
  aiSolutions: string[];
  projectDetails: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  aiSolutions?: string;
  projectDetails?: string;
}

const AIContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherSolution, setOtherSolution] = useState("");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: null,
    aiSolutions: [],
    projectDetails: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const handleSelectChange = (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>
  ): void => {
    const selectedOption = newValue as SingleValue<OptionType>;
    setFormData((prevData) => ({
      ...prevData,
      industry: selectedOption,
    }));
  };

  const handleCheckboxChange = (solution: string) => {
    setFormData((prevData) => {
      const newSolutions = prevData.aiSolutions.includes(solution)
        ? prevData.aiSolutions.filter((s) => s !== solution)
        : [...prevData.aiSolutions, solution];

      // Reset 'Other' input when unchecked
      if (
        solution === "Other (Specify)" &&
        !newSolutions.includes("Other (Specify)")
      ) {
        setOtherSolution("");
      }

      return { ...prevData, aiSolutions: newSolutions };
    });
  };

  const handleOtherSolutionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherSolution(e.target.value);
  };

  const validateForm = () => {
    const formErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[\d\s-]{10,}$/;

    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required.";
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      formErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.company) {
      formErrors.company = "Company Name is required.";
    }

    if (!formData.industry) {
      formErrors.industry = "Industry is required.";
    }

    if (formData.aiSolutions.length === 0) {
      formErrors.aiSolutions = "Please select at least one AI solution.";
    }
    // Modify validation
    if (
      formData.aiSolutions.includes("Other (Specify)") &&
      !otherSolution.trim()
    ) {
      formErrors.aiSolutions = "Please specify your AI solution.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_SERVICE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

      const templateParams = {
        from_fullName: formData.fullName,
        to_name: "CollabEZ",
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company,
        industry: formData.industry?.value || "",
        aiSolutions: formData.aiSolutions.join(", "),
        otherSolution: formData.aiSolutions.includes("Other (Specify)")
          ? otherSolution
          : "",
        projectDetails: formData.projectDetails,
        // Adding empty values for unused template fields
        from_city: "",
        from_country: "",
        projectType: "",
        projectBudget: "",
        projectTimeline: "",
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            industry: null,
            aiSolutions: [],
            projectDetails: "",
          });
          router.push("/thank-you");
        })
        .catch((error) => {
          console.log("FAILED..", error);
          toast.error("Something Went Wrong!");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const industryOptions: OptionType[] = [
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
    { value: "retail", label: "Retail" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "other", label: "Other" },
  ];

  const customStyles: StylesConfig<unknown, boolean> = {
    control: (provided) => ({
      ...provided,
      maxHeight: "56px",
      backgroundColor: "#FFFFFF05",
      border: "2px solid rgb(255 255 255 / 0.2)",
      padding: "0.35rem 1rem 0.4rem 1rem",
      borderRadius: "8px",
      color: "rgb(255 255 255 / 0.6)",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      height: "auto",
      "&:hover": {
        border: "2px solid rgb(255 255 255 / 0.2)",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)",
      paddingRight: "0.5rem",
      display: state.isDisabled ? "none" : "block",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#272727",
      border: "1px solid #38383856",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(0 0 0 / 0.6)"
        : state.isFocused
        ? "#3e3e3e"
        : "#272727",
      color: state.isSelected ? "white" : "#ffffff",
    }),
  };

  return (
    <div
      className="relative sm:px-10 px-5 sm:py-10 py-5 w-full"
      id="contact-ai"
    >
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 md:gap-6 gap-3 items-start justify-center h-full relative z-10">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full ">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[28px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto ">
            Get a Free AI Consultation
          </h3>
        </div>
        <div className="relative z-20 w-full ">
          <div className="bg-gradient-to-r from-[#854CFF10] via-contactFormBg to-contactFormBg w-full rounded-xl  md:py-10 py-5 md:px-10 px-5">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none"
                  />
                  {errors.company && (
                    <span className="text-red-500 text-sm">
                      {errors.company}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Select
                    options={industryOptions}
                    value={formData.industry}
                    onChange={handleSelectChange}
                    placeholder="Industry"
                    styles={customStyles}
                    className="w-full"
                  />
                  {errors.industry && (
                    <span className="text-red-500 text-sm">
                      {errors.industry}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* Left column - Phone and Checkboxes */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <PhoneInput
                      defaultCountry="ae"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Phone number"
                      className="w-full font-[family-name:var(--font-satoshi)] py-1.5 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Checkbox section directly below phone */}
                  <div className="flex flex-col gap-3">
                    <label className="text-white/80">
                      What AI Solutions Are You Interested In?
                    </label>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                      {[
                        "Chatbots",
                        "Data Analysis",
                        "Computer Vision",
                        "Other (Specify)",
                      ].map((solution) => (
                        <label
                          key={solution}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={formData.aiSolutions.includes(solution)}
                            onChange={() => handleCheckboxChange(solution)}
                            className="w-4 h-4"
                          />
                          {solution}
                        </label>
                      ))}
                    </div>
                    {formData.aiSolutions.includes("Other (Specify)") && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        value={otherSolution}
                        onChange={handleOtherSolutionChange}
                        className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white"
                      />
                    )}
                    {errors.aiSolutions && (
                      <span className="text-red-500 text-sm">
                        {errors.aiSolutions}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right column - Textarea */}
                <div className="flex flex-col gap-2">
                  <textarea
                    name="projectDetails"
                    placeholder="Tell Us About Your AI Needs"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full h-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#763AF5] to-[#A604F2] w-full py-3 px-6 rounded-lg font-[family-name:var(--font-satoshi-bold)] md:text-lg text-base font-bold text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="absolute -z-20 top-0 -left-48 bg-blur-gradient-purple lg:w-[600px] lg:h-[600px] " /> */}
    </div>
  );
};

export default AIContactForm;
