import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";

export interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const redirectHandler = (link: string) => {
    if (link !== "") window.location.href = link;
  };
  const items = (hasLinks ? links : []).map((link, index: number) => (
    <Text<"a">
      component="a"
      className={classes.link}
      onClick={() => redirectHandler(link.link)}
      key={index}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group
          justify="space-between"
          style={{ borderBottom: "1px solid #d0d0d0", margin: "5px 0" }}
          gap={0}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box ml="md" c="#505257" fw={600} my={5}>
              {label}
            </Box>
          </Box>
          {hasLinks && (
            <Box className={classes.chevron__box}>
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            </Box>
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}
