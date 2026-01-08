"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import {
  IconChevronDown,
  IconSearch,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Box, Button, Image, Modal, TextInput } from "@mantine/core";
import Appointment from "../Appointment/Appointment";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";
import { tabs } from "./headerData";
import Search from "../Search/Search";

const MedicalServicesNavigation = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
  const pathname = usePathname();
  const isDiseasesPage = pathname.startsWith("/diseases");
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);


  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 100;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveTab(null);
    setIsCompanyDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveTab(null);
    setIsCompanyDropdownOpen(false);
  };

  // Our Company dropdown links
  const companyLinks = [
    { label: "Partner With Us", link: "/partner-with-us" },
    { label: "Doctor Onboarding", link: "/doctor-onboarding" },
    { label: "FAQs", link: "/faqs" },
  ];

  return (
    <Box
      style={{ display: isDiseasesPage ? "none" : "block" }}
      className="fixed top-0 z-[40] w-full"
    >
      <motion.nav
        className="w-full bg-white shadow-md"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* Mobile Header */}
        <div className="bg-[#062D4C] lg:hidden flex justify-between items-center px-4 py-2">
          <Box component={Link} href="/">
            <Image
              style={{ cursor: "pointer" }}
              src="/logo.png"
              alt="logo"
              fit="cover"
              w="100px"
            />
          </Box>
          <div className="flex items-center gap-3 z-100">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? (
                <IconX size={24} color="white" />
              ) : (
                <IconMenu2 size={24} color="white" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="bg-[#062D4C] w-full h-[84px] hidden lg:flex justify-between items-center px-4 lg:px-8">
          <div className="flex w-full max-w-[1132px] justify-between items-center mx-auto">
            <Box component={Link} href="/">
              <Image
                style={{ cursor: "pointer" }}
                src="/logo.png"
                alt="logo"
                fit="cover"
                w="150px"
              />
            </Box>
            <Search></Search>
            <div className="flex gap-6 justify-center items-center">
              <div className="flex flex-row justify-center items-center">
                {/* Our Company Dropdown - Independent State */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                >
                  <button className="p-2 text-gray-200 flex items-center text-sm">
                    Our Company
                    <IconChevronDown className="ml-2 h-4 w-4" />
                  </button>

                  {isCompanyDropdownOpen && (
                    <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-0 bg-white shadow-lg border rounded-md min-w-[190px]">
                      <div className="py-2">
                        {companyLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button color="#14967F" size="lg" radius="xl" onClick={modalOpen}>
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white absolute top-15 left-0 w-full z-50 shadow-lg">
            {/* Our Company Mobile Menu */}
            <div className="border-b">
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className="w-full text-left px-4 py-3 flex justify-between items-center "
              >
                Our Company
                <IconChevronDown
                  className={`ml-2 h-5 w-5 transform transition-transform ${
                    isCompanyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCompanyDropdownOpen && (
                <div className="bg-gray-50 px-4">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      className="block py-2 text-gray-700 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Navigation Items */}
            {tabs.map((tab, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() =>
                    setActiveTab(activeTab === index ? null : index)
                  }
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-100"
                >
                  <Link href={tab.departmentLink}>
                  {tab.label}
                  </Link>
                  {tab.links.length > 0 && (
                    <IconChevronDown
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        activeTab === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {tab.links.length > 0 && activeTab === index && (
                  <div className="bg-gray-50 px-4">
                    {tab.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.link || "#"}
                        className="block py-2 text-gray-700 hover:text-blue-600"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <Button
                onClick={() => {
                  modalOpen();
                  closeMobileMenu();
                }}
                className="w-full"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="h-[50px] py-2 hidden lg:block container mx-auto px-4 lg:px-8">
          <div className="flex flex-row justify-center items-center">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveTab(index)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <Link href={tab.departmentLink}>
                <button className="p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center text-sm">
                  {tab.label}
                  {tab.links.length > 0 && (
                    <IconChevronDown className="ml-2 h-4 w-4" />
                  )}
                </button>
                </Link>

                {tab.links.length > 0 && activeTab === index && (
                  <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-0 bg-white shadow-lg border rounded-md min-w-[190px] max-w-[calc(100vw-2rem)]">
                    <div className="py-2">
                      {tab.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.link || "#"}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.nav>

      <Modal
        size="55em"
        zIndex={2000}
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        opened={modalOpened}
        onClose={modalClose}
        withCloseButton={true}

        fullScreen={isMobile8 ? false : true}
        radius={isMobile8 ? "lg" : 0}
        title={customHeader}
        >
        <Appointment />
      </Modal>
    </Box>
  );
};

export default MedicalServicesNavigation;


const customHeader = (
  <div className="bg-[#062D4C] flex justify-between items-center w-full gap-10">
    <img src={"/logo.png"} alt="Logo" className="h-8" />
    <span className="">
      
    </span>
  </div>
);
