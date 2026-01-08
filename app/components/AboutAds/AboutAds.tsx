"use client";
import {
  Grid,
  Box,
  Text,
  Paper,
  TextInput,
  Button,
  List,
  Stack,
  Flex,
  Image,
} from "@mantine/core";
import { About } from "../../../lib/utils/adsDiseaseType";

import { Autocomplete, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { diseases } from "../BookConsultation/consultList";
import classes from "./AboutAds.module.css";
import { sanityAds } from "../../../lib/sanity";

export const AdsConsultForm = ({ slug }: { slug?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      mobile: "",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const formData = {
        ...form.values,
        slug: slug || "",
        _type: "consultForm",
      };
      console.log("Submitting form data:", formData);
      const result = await sanityAds.create(formData);
      console.log("Form submitted successfully:", result);
      setIsSubmitted(true);
      notifications.show({
        title: "Success!",
        message: "Your consultation request has been submitted. We'll contact you shortly.",
        color: "green",
      });
      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      notifications.show({
        title: "Error",
        message: error?.message || "Failed to submit the form. Please try again.",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box maw={390}>
      <Text fz={24} fw={600}>
        Book Free Consultation
      </Text>
      <Divider c="#D7DEDD" my={15} />
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label="Patient  Name"
          placeholder="Your name"
          key={form.key("name")}
          {...form.getInputProps("name")}
          value={form.values.name}
          classNames={{ label: classes.label, input: classes.input__root }}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
          radius="md"
          my={20}
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Mobile No."
          leftSection={<Text>+91</Text>}
          placeholder="111222333"
          key={form.key("mobile")}
          {...form.getInputProps("mobile")}
          value={form.values.mobile}
          onChange={(event) =>
            form.setFieldValue("mobile", event.currentTarget.value)
          }
          radius="md"
          my={20}
        />
        <Button
          loading={isLoading}
          type="submit"
          radius="md"
          mt={20}
          mb={10}
          fullWidth
          disabled={isSubmitted}
          color={isSubmitted ? "green" : undefined}
        >
          {isSubmitted ? "Submitted ✓" : "Book"}
        </Button>
      </form>
    </Box>
  );
};

export const StickyForm = ({ data, slug }: { data: string; slug?: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      mobile: "",
      condition: "",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
      condition: (val: string) =>
        val.length !== 0 ? null : "Enter a condition",
    },
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const formData = {
        ...form.values,
        slug: slug || "",
        _type: "callBackForm",
      };
      console.log("Submitting form data:", formData);
      const result = await sanityAds.create(formData);
      console.log("Form submitted successfully:", result);
      setIsSubmitted(true);
      notifications.show({
        title: "Success!",
        message: "Your request has been submitted. We'll contact you shortly.",
        color: "green",
      });
      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      notifications.show({
        title: "Error",
        message: error?.message || "Failed to submit the form. Please try again.",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper
      visibleFrom="lg"
      h="fit-content"
      pos="sticky"
      mt={150}
      top="10%"
      shadow="lg"
      p="md"
      maw={390}
    >
      <Text fz={24} fw={600}>
        Get Rid for {data}
      </Text>
      <Text fz={12} c="dimmed" mb="md">
        Speak to one of our representatives by filling the form below
      </Text>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Patient Name"
          placeholder="Enter your name"
          mb="sm"
          key={form.key("name")}
          {...form.getInputProps("name")}
          onChange={(event) =>
            form.setFieldValue("name", event.currentTarget.value)
          }
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Mobile Number"
          placeholder="Enter your number"
          leftSection={<Text>+91</Text>}
          mb="sm"
          key={form.key("mobile")}
          {...form.getInputProps("mobile")}
          onChange={(event) =>
            form.setFieldValue("mobile", event.currentTarget.value)
          }
        />
        <TextInput
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Condition"
          mb="sm"
          key={form.key("condition")}
          {...form.getInputProps("condition")}
          onChange={(event) =>
            form.setFieldValue("condition", event.currentTarget.value)
          }
        />
        <Button 
          loading={isLoading} 
          fullWidth 
          type="submit"
          disabled={isSubmitted}
          color={isSubmitted ? "green" : undefined}
        >
          {isSubmitted ? "Submitted ✓" : "Request a call back"}
        </Button>
      </form>
    </Paper>
  );
};

export const AboutAds = ({ data }: { data: About[] }) => {
  if (!data) {
    return <></>;
  }
  return (
    <Flex
      align="center"
      justify={{ base: "center", lg: "space-between" }}
      mb={50}
    >
      <Stack style={{ position: "relative" }}>
        {data?.map(
          ({ que, ans }: { que: string; ans: string[] }, index: number) => (
            <Paper
              key={index}
              p="lg"
              my={{ base: "md", sm: "xl" }}
              maw={529}
              bg="#E9F1FF"
              radius={15}
            >
              <Text fw={600} fz={{ base: 18, sm: 25 }}>
                {que}
              </Text>
              <List type="unordered" my={10} listStyleType="disc">
                {ans.map((el: string, index) => (
                  <List.Item fz={{ base: 10, xs: 16 }} my={5} key={index}>
                    {el}
                  </List.Item>
                ))}
              </List>
            </Paper>
          )
        )}
      </Stack>
      <Image visibleFrom="lg" src="/assets/adspage/lines_new.png" alt="lines" />
    </Flex>
  );
};
