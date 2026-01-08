import { Box, Center, HoverCard, Modal, Stack, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";
import Appointment from "../Appointment/Appointment";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const HoverCards = ({ data }: any) => {
  const isMobile8 = useMediaQuery(`(min-width: 800px)`);
  const [opened, { open, close }] = useDisclosure(false);

  const redirectHandler = (link: string) => {
    if (link !== "") window.location.href = link;
    else open();
  };
  return (
    <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
      <HoverCard.Target>
        <a className={classes.link}>
          <Center inline>
            <Box component="span" mx={3} className={classes.hover_box}>
              <Text mr={2}> {data.label}</Text>
              <IconChevronDown size="0.9rem" stroke={1.5} />
            </Box>
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown>
        <Stack>
          {data.links.map(
            (el: { label: string; link: string }, index: number) => (
              <a
                className={classes.innerLink}
                key={index}
                onClick={() => redirectHandler(el.link)}
              >
                {el.label}
              </a>
            )
          )}
        </Stack>
      </HoverCard.Dropdown>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen={isMobile8 ? false : true}
        radius={isMobile8 ? "lg" : 0}
        classNames={{
          content: classes.modal__content,
          header: classes.modal__header,
          title: classes.modal__title,
          close: classes.modal__close,
        }}
        title="Book Your FREE Consultation Now"
      >
        <Appointment />
      </Modal>
    </HoverCard>
  );
};

export default HoverCards;
