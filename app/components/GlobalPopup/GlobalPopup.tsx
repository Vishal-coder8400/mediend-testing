"use client"
import { Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import classes from "../Header/Header.module.css";
import Appointment from "../Appointment/Appointment";
import { usePathname } from "next/navigation";
import Logo from '../../../public/logo.png'

interface GlobalPopupProps {
  scrollThreshold?: number;
}

const customHeader = (
  <div className="bg-[#062D4C] flex justify-between items-center w-full gap-10">
    <img src={"/logo.png"} alt="Logo" className="h-8" />
    <span className="">
      
    </span>
  </div>
);


const GlobalPopup = ({
  scrollThreshold = 300,
}: GlobalPopupProps) => {
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);
  const [opened, { open, close }] = useDisclosure(false);
  const path = usePathname();

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem('popupShown');
    
    if (!hasShownPopup) {
      // Small delay to ensure smooth transition
      const timeoutId = setTimeout(() => {
        open();
        // Mark popup as shown
        localStorage.setItem('popupShown', 'true');
      }, 10000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [path]); 

  const handleClose = () => {
    close();
  };

  return (
    <Modal
    zIndex={2000}
    opened={opened}
    size="55em"
    onClose={handleClose}
    fullScreen={isMobile8 ? false : true}
    radius={isMobile8 ? "lg" : 0}
    classNames={{
      content: classes.modal__content,
      header: classes.modal__header,
      title: classes.modal__title,
      close: classes.modal__close,
    }}
    title={customHeader}
  >
    <Appointment />
  </Modal>
  );
};

export default GlobalPopup;