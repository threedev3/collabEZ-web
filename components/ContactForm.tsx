"use client";
import React, { useState } from "react";
// import Select, { SingleValue, MultiValue } from "react-select";
import { PhoneNumberUtil } from "google-libphonenumber";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import Image from "next/image";

const Select = dynamic(() => import("react-select"), { ssr: false });

interface OptionType {
  value: string;
  label: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: any;
  projectBudget: any;
  projectTimeline: any;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: any;
  projectBudget?: any;
  projectTimeline?: any;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: null,
    projectBudget: null,
    projectTimeline: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone: any) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const isValid = isPhoneValid(formData.phone);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  // const handleSelectChange = (
  //   newValue: SingleValue<OptionType> | MultiValue<OptionType>,
  //   actionMeta: any
  // ) => {
  //   const selectedOption = newValue as SingleValue<OptionType>;
  //   const { name } = actionMeta; // Get the 'name' attribute from the select field

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: selectedOption ? selectedOption.value : "", // Update value based on the 'name'
  //   }));
  // };

  const handleSelectChange = (selectedOption: any, actionMeta: any) => {
    setFormData((prev) => ({ ...prev, [actionMeta.name]: selectedOption }));
  };

  // const defaultOptions = {
  //   loop: copied,
  //   autoplay: copied,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const validateForm = () => {
    const formErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!formData.firstName) {
      formErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last Name is required.";
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !isValid) {
      formErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.projectType) {
      formErrors.projectType = "Project Type is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_SERVICE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

      const projectTypeValue = formData.projectType
        ? formData.projectType.value
        : "";
      const projectBudgetValue = formData.projectBudget
        ? formData.projectBudget.value
        : "";
      const projectTimelineValue = formData.projectTimeline
        ? formData.projectTimeline.value
        : "";

      const templateParams = {
        from_firstName: formData.firstName,
        from_lastName: formData.lastName,
        to_name: "CollabEZ",
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company,
        projectType: projectTypeValue,
        projectBudget: projectBudgetValue,
        projectTimeline: projectTimelineValue,
      };

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
          // console.log("Form Data", templateParams);
          // Reset form data after successful submission

          // console.log("Form Data", templateParams);
          toast.success("Request submitted. We'll be in touch soon.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            projectType: null,
            projectBudget: null,
            projectTimeline: null,
          });
          setIsSubmitting(false);
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

  const projectTypeOptions: OptionType[] = [
    { value: "Website Development", label: "Website Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "E-commerce Solutions", label: "E-commerce Solutions" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "Game Development", label: "Game Development" },
  ];
  const projectBudgetOptions: OptionType[] = [
    { value: "$1,000–$5,000", label: "$1,000–$5,000" },
    { value: "$5,000–$10,000", label: "$5,000–$10,000" },
    { value: "$10,000–$25,000", label: "$10,000–$25,000" },
    { value: "$25,000+", label: "$25,000+" },
  ];
  const projectTimelineOptions: OptionType[] = [
    { value: "ASAP", label: "ASAP" },
    { value: "1–3 months", label: "1–3 months" },
    { value: "3–6 months", label: "3–6 months" },
    { value: "More than 6 months", label: "More than 6 months" },
  ];

  const customStyles = {
    control: (provided: any, state: { selectProps: { isMulti: any } }) => ({
      ...provided,
      maxHeight: "56px",
      backgroundColor: "#FFFFFF05",
      border: "2px solid rgb(255 255 255 / 0.2)",
      padding: "0.35rem 1rem 0.4rem 1rem",
      borderRadius: "8px",
      //   boxShadow: state.isFocused ? "none" : "none", // remove the blue box-shadow
      color: "rgb(255 255 255 / 0.6)",
      outline: "none", // remove the default focus outline
      WebkitTapHighlightColor: "transparent",
      cursor: "pointer",
      fontSize: "1rem", // text-sm in Tailwind
      lineHeight: "1.25rem",
      height: "auto",
      // Custom scrollbar styles
      "&:hover": {
        border: "2px solid rgb(255 255 255 / 0.2)",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)", // placeholder color (text-gray-400)
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white", // value color (text-black)
    }),
    dropdownIndicator: (provided: any, state: { isDisabled: any }) => ({
      ...provided,
      color: "rgb(255 255 255 / 0.6)", // dropdown arrow color (text-black)
      paddingRight: "0.5rem",
      display: state.isDisabled ? "none" : "block", // hide arrow when disabled
    }),
    indicatorSeparator: () => ({ display: "none" }), // remove separator

    menu: (provided: any) => ({
      ...provided,
      borderRadius: "0.375rem",
      border: "1px solid #38383856",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#272727",
      overflow: "hidden", // Ensure overflow is properly handled
      position: "absolute",
      zIndex: 10000,
    }),

    // Properly apply scrolling behavior to the list of options
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: "210px",
      overflowY: "auto",
      backgroundColor: "#272727",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#272727",
        borderRadius: "6px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#888888",
        borderRadius: "6px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555555",
      },
    }),
    option: (provided: any, state: { isSelected: any; isFocused: any }) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(0 0 0 / 0.6)" // selected background color (from your example)
        : state.isFocused
        ? "#3e3e3e"
        : "#272727",
      color: state.isSelected ? "white" : "#ffffff", // selected text color (text-white)
      padding: "0.5rem 1rem", // padding for options
      cursor: "pointer",
      overflowY: "auto",
      outline: "none", // Remove default outline on focus
      // Optional: add a transition for a smoother effect
      transition: "background-color 0.2s ease",
      // To prevent the light blue background when clicked
      "&:active": {
        backgroundColor: state.isFocused ? "rgb(0 0 0 / 0.6)" : "#3e3e3e",
      },
    }),
  };

  return (
    <div className="relative sm:px-10 px-5 sm:py-10 py-5 w-full " id="contact">
      <div className="max-w-[93%] w-full mx-auto flex flex-col xl:gap-8 lg:gap-6 gap-6 items-start justify-center h-full">
        <div className="flex  min-[806px]:gap-6 gap-0 items-start justify-between w-full">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-heroColor via-white to-heroColor max-w-full min-[1525px]:text-[75px] min-[1420px]:text-[70px]  min-[1260px]:text-[60px] min-[1071px]:text-[50px] min-[976px]:text-[45px] min-[899px]:text-[40px] sm:text-[40px] text-[28px] min-[375px]:text-[32px] min-[414px]:text-[32px] leading-snug font-[family-name:var(--font-satoshi)] text-center mx-auto">
            Contact Us Today
          </h3>
        </div>

        <div className="bg-gradient-to-r from-[#854CFF10] via-contactFormBg to-contactFormBg  w-full rounded-xl relative z-10 md:py-10 py-5 md:px-10 px-5 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-4 h-full justify-center">
            <div className="flex flex-col gap-1">
              <h3 className="font-[family-name:var(--font-satoshi-bold)] text-white md:text-4xl min-[540px]:text-3xl text-2xl mb-2">
                Let&apos;s connect today
              </h3>
              <p className="font-[family-name:var(--font-satoshi)] text-white/80 min-[540px]:text-base text-sm max-w-[410px]">
                We&apos;d love to hear from you! Please fill out the form below,
                and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => handleSubmit(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // Prevents form submission on pressing Enter
                }
              }}
            >
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {errors.firstName && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                  />
                  {errors.lastName && (
                    <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                />
                {errors.email && (
                  <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <PhoneInput
                  defaultCountry="pk"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone number"
                  className="w-full font-[family-name:var(--font-satoshi)] py-1.5 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none"
                />
                {errors.phone && (
                  <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full font-[family-name:var(--font-satoshi)] py-3 px-6 rounded-lg bg-white/5 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:ring-none "
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Select
                  id="projectType-select"
                  name="projectType"
                  options={projectTypeOptions}
                  placeholder="Project Type"
                  // value={projectTypeOptions.find(
                  //   (option) => option.value === formData.projectType
                  // )}
                  value={formData.projectType}
                  styles={customStyles}
                  onChange={handleSelectChange}
                  className="w-full font-[family-name:var(--font-satoshi)]"
                  classNamePrefix="react-select"
                />
                {errors.projectType && (
                  <span className="text-red-500 font-[family-name:var(--font-satoshi)] lg:text-base text-sm">
                    {errors.projectType}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Select
                  id="projectBudget-select"
                  name="projectBudget"
                  options={projectBudgetOptions}
                  placeholder="Project Budget"
                  // value={projectBudgetOptions.find(
                  //   (option) => option.value === formData.projectBudget
                  // )}
                  value={formData.projectBudget}
                  styles={customStyles}
                  onChange={handleSelectChange}
                  className="w-full font-[family-name:var(--font-satoshi)]"
                  classNamePrefix="react-select"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Select
                  id="projectTimeline-select"
                  name="projectTimeline"
                  options={projectTimelineOptions}
                  placeholder="Project Timeline"
                  // value={projectTimelineOptions.find(
                  //   (option) => option.value === formData.projectTimeline
                  // )}
                  value={formData.projectTimeline}
                  styles={customStyles}
                  onChange={handleSelectChange}
                  className="w-full font-[family-name:var(--font-satoshi)]"
                  classNamePrefix="react-select"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#763AF5] to-[#A604F2] w-full py-3 px-6 rounded-lg font-[family-name:var(--font-satoshi-bold)] md:text-lg text-base font-bold "
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:flex justify-end items-center hidden">
            <Image
              src="/contactImg.png"
              alt=""
              className="w-auto"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-40 -right-48 bg-blur-gradient-purple  w-[900px] h-[900px]" /> */}
    </div>
  );
};

export default ContactForm;
