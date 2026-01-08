import React, { useRef, useEffect, useState } from "react";
import { ScrollArea, Tabs, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

const StickyTabs = ({slug}:{slug:string}) => {
  const router = useRouter();
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeTab, setActiveTab] = useState("aboutDoctor");
  const [originalOffset, setOriginalOffset] = useState(0);

  useEffect(() => {
    // Update the initial offset on mount
    if (tabsRef.current) {
      setOriginalOffset(tabsRef.current.offsetTop);
    }

    const handleScroll = () => {
      if (!tabsRef.current) return;

      const scrollTop = window.scrollY|| document.documentElement.scrollTop;


      // Add sticky if scrolled past original position; remove sticky when scrolling back up
      setIsSticky(scrollTop-900 > originalOffset);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [originalOffset]);

  return (
    <>
      {/* Placeholder to prevent layout shift */}
      {isSticky && <div style={{ height: tabsRef.current?.offsetHeight || 0 }}></div>}
    <ScrollArea className="my-4">
      <Tabs
        ref={tabsRef}
        defaultValue="aboutDoctor"
        value={activeTab}
        onChange={(value) => {
          if (!value) value = "";
          setActiveTab(value);
          router.push(`/doctor/${slug}/#${value}`);
        }}
        className={`
          ${isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"}
          bg-white shadow-md transition-all duration-300 ease-in-out
          w-full
        `}
      >
        <Tabs.List>
          <Tabs.Tab value="aboutDoctor">
            <Text>About Doctor</Text>
          </Tabs.Tab>
          <Tabs.Tab value="treatment">
            <Text>Treatment</Text>
          </Tabs.Tab>
          <Tabs.Tab value="reviews">
            <Text>Reviews</Text>
          </Tabs.Tab>
          <Tabs.Tab value="healthFeed">
            <Text>Health Feed</Text>
          </Tabs.Tab>
          <Tabs.Tab value="FAQs">
            <Text>FAQs</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      </ScrollArea>
    </>
  );
};

export default StickyTabs;
