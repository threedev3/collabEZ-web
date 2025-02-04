// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import type React from "react"; // Import React

// interface FeatureCardProps {
//   number: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   className?: string;
// }

// export function SEOCard({
//   number,
//   title,
//   description,
//   icon,
//   className = "",
// }: FeatureCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className={`flex flex-col items-center text-center ${className}`}
//     >
//       <div className="relative mb-6">
//         <div className="rounded-full bg-purple-600 flex items-center justify-center w-32 h-32">
//           <Image
//             src={icon}
//             alt="seoIcon"
//             width={100}
//             height={100}
//             className="w-12 h-12 "
//           />
//         </div>

//         <div className="absolute -top-2 -left-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full w-8 h-8 flex items-center justify-center">
//           {number}
//         </div>
//       </div>
//       <h3 className="text-white text-xl md:text-2xl font-medium mb-4">
//         {title}
//       </h3>
//       <p className="text-gray-400 text-sm md:text-base max-w-[300px]">
//         {description}
//       </p>
//     </motion.div>
//   );
// }
