"use client";

import { Box, Button, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";

const HospitalOnboardingForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      name: "",
      hospitalName: "",
      phone: "",
      city: "",
    },
    validate: {
      name: (value: string) =>
        value.trim().length !== 0 ? null : "Invalid Name",
      phone: (value: string) =>
        /^[0-9]{10}$/.test(value)
          ? null
          : "Invalid phone number (10 digits required)",
       city: (value: string) => 
        value.trim().length !== 0 ? null : "Invalid City",
       hospitalName: (value: string) => 
        value.trim().length !== 0 ? null : "Invalid City",
    },
      
  });

  const submitHandler = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/post-hospital-onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.values.name,
          hospitalName: form.values.hospitalName,
          phone: form.values.phone,
          city: form.values.city,
        }),
      });

      if (response.ok) {
        notifications.show({
          title: 'Thanks for applying',
          message: "We'll contact you shortly",
        });
        setIsSubmitted(true)
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit(submitHandler)} className="grid grid-cols-2 gap-x-8">
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Name*"
          {...form.getInputProps("name")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Phone Number*"
          type="number"
          maxLength={10}
          
          {...form.getInputProps("phone")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Hospital Name*"
          name="hospitalName"
          {...form.getInputProps("hospitalName")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="City*"
          name="city"
          {...form.getInputProps("city")}
        />
        <Button
            loading={isLoading}
            loaderProps={{ type: "dots" }}
            variant={isSubmitted?"outline":"filled"}
            type="submit"
            radius="md"
            mt={20}
            mb={10}
            fullWidth
            onClick={()=>{submitHandler()}}
            className="col-span-2"
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

export default HospitalOnboardingForm;