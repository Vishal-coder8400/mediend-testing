"use client";
import { Box, Button, Group, Radio, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { sanityAds } from "../../../lib/sanity";
import classes from "../AboutAds/AboutAds.module.css";

interface AdsFormProps {
  onSuccess?: () => void;
  slug?: string;
}

export const AdsForm = ({ onSuccess, slug }: AdsFormProps) => {
  const form = useForm({
    initialValues: {
      name: "",
      mobile: "",
      isInsurance: "no",
    },
    validate: {
      mobile: (val: string) => (val.length === 10 ? null : "Invalid number"),
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const formData = {
        ...form.values,
        slug: slug || "",
        _type: "modalForm",
      };
      console.log("Submitting form data:", formData);
      const result = await sanityAds.create(formData);
      console.log("Form submitted successfully:", result);
      setIsSubmitted(true);
      notifications.show({
        title: "Success!",
        message: "Your insurance verification request has been submitted. We'll contact you shortly.",
        color: "green",
      });
      form.reset();
      onSuccess?.();
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
    <Box>
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
        />{" "}
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
        <Radio.Group
          mb="sm"
          key={form.key("isInsurance")}
          {...form.getInputProps("isInsurance")}
          onChange={(event) => form.setFieldValue("isInsurance", event)}
          name="isInsurance"
          label="Do you have insurance?"
        >
          <Group gap={10}>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Button 
          loading={isLoading} 
          fullWidth 
          type="submit"
          disabled={isSubmitted}
          color={isSubmitted ? "green" : undefined}
        >
          {isSubmitted ? "Submitted ✓" : "Submit"}
        </Button>
      </form>
    </Box>
  );
};
