"use client";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { diseases } from "../BookConsultation/consultList";
import classes from "./ConsultForm.module.css";

export const ConsultForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
    },
    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid name"),
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
    },
  });

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);

      const response = await fetch('/api/post-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.values.name,
          phone: form.values.phone,
          disease: form.values.disease,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Text fz={24} fw={600}>
        Book Free Consultation
      </Text>
      <Divider c="#D7DEDD" my={15} />
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label="Name"
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
          label="Phone No."
          placeholder="+91 111222333"
          key={form.key("phone")}
          {...form.getInputProps("phone")}
          value={form.values.phone}
          onChange={(event) =>
            form.setFieldValue("phone", event.currentTarget.value)
          }
          radius="md"
          my={20}
        />
        <Autocomplete
          classNames={{ label: classes.label, input: classes.input__root }}
          label="Select Disease"
          placeholder="Select"
          key={form.key("disease")}
          {...form.getInputProps("disease")}
          value={form.values.disease}
          onChange={(value) => form.setFieldValue("disease", value)}
          data={diseases}
          maxDropdownHeight={200}
        />
        <Button
          loading={isLoading}
          type="submit"
          radius="md"
          mt={20}
          mb={10}
          bg="#14967F"
          fullWidth
        >
          {isSubmitted ? 'Submitted' : 'Book'}
        </Button>
        {isSubmitted && (
          <Text c="dimmed" fz={12}>
            Thank You! We&apos;ll reach out to you
          </Text>
        )}
      </form>
    </Box>
  );
};