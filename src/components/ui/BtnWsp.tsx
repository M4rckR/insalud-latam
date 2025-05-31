"use client"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const BtnWsp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Link
      href="https://wa.me/51976234160"
      className={`fixed bottom-2 right-2 md:bottom-8 md:right-8 bg-in-wsp rounded-full p-3 z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      target="_blank"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </Link>
  );
};
