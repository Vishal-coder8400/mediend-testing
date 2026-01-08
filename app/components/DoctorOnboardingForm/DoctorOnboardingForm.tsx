"use client";

import { Box, Button, FileInput, Text, TextInput } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconFileCv } from "@tabler/icons-react";
import { useState } from "react";

const DoctorOnboardingForm = () => {
  const [userCV, setUserCV] = useState<FileWithPath | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      specialization: "",
      degree: "",
      experienceBeforePG: "",
      experienceAfterPG: "",
    },
    validate: {
      name: (value: string) =>
        value.trim().length !== 0 ? null : "Invalid Name",
      email: (value: string) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Invalid email address",
      phone: (value: string) =>
        /^[0-9]{10}$/.test(value)
          ? null
          : "Invalid phone number (10 digits required)",
      specialization: (value: string) =>
        value.trim().length !== 0 ? null : "Specialization is required",
      degree: (value: string) =>
        value.trim().length !== 0 ? null : "Degree is required",
      experienceBeforePG: (value: string) =>
        value.trim().length !== 0 ? null : "Experience (before PG) is required",
      experienceAfterPG: (value: string) =>
        value.trim().length !== 0 ? null : "Experience (after PG) is required",
    },
  });

  const submitHandler = async (values: typeof form.values) => {
    if (!userCV) {
      setIsError(true);
      return;
    }
    setIsError(false);

    try {
      setIsLoading(true);
      setIsSubmitted(false);
      // Convert the CV file to a base64 string
      const reader = new FileReader();
      reader.readAsDataURL(userCV);
      reader.onload = async () => {
        const base64File = reader.result?.toString().split(',')[1];

        const response = await fetch('/api/post-doctor-onboarding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            cvFile: {
              name: userCV.name,
              type: userCV.type,
              data: base64File,
            },
          }),
        });

        if (response.ok) {
          setIsSubmitted(false);
          notifications.show({
            title: 'Thanks for applying',
            message: "We'll contact you shortly",
          });
          form.reset();
          close();
        } else {
          console.error('Failed to submit form');
        }
      };
    } catch (error) {
      console.error('Error creating document:', error);
      notifications.show({
        title: 'Error',
        message: 'An error occurred while submitting the form',
        color: 'red',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const close = () => {
    // Implement your close logic here (e.g., close a modal or navigate away)
    console.log("Form closed");
  };

  return (
    <Box>
      <form
        onSubmit={form.onSubmit(submitHandler)}
        className="grid grid-cols-2 gap-x-8"
      >
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
          label="Email address*"
          type="email"
          {...form.getInputProps("email")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Phone Number*"
          type="tel"
          {...form.getInputProps("phone")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Specialization*"
          {...form.getInputProps("specialization")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Degree*"
          {...form.getInputProps("degree")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Experience (after MBBS/BDS)*"
          {...form.getInputProps("experienceBeforePG")}
        />
        <TextInput
          size="sm"
          c="#212529"
          my={10}
          label="Experience (after PG)*"
          {...form.getInputProps("experienceAfterPG")}
        />

        <FileInput
          rightSection={<IconFileCv size={18} stroke={1.5} />}
          label="Attach your CV"
          placeholder="Your CV"
          rightSectionPointerEvents="none"
          c="#212529"
          my={10}
          size="sm"
          onChange={(file) => {
            setUserCV(file);
            setIsError(false);
          }}
          accept=".pdf,.doc,.docx"
        />

        {/* Display error message or uploaded file name */}
        {isError && (
          <Text c="red" size="sm" mt={10}>
            Please upload your CV
          </Text>
        )}
        {userCV && (
          <Text c="dimmed" size="sm" mt={10}>
            {userCV.name}
          </Text>
        )}

        <Button
          loading={isLoading}
          loaderProps={{ type: "dots" }}
          variant={isSubmitted?"outline":"filled"}
          disabled={isSubmitted?true:false}
          type="submit"
          size="sm"
          my={10}
          w="-webkit-fill-available"
          className="col-span-2"
        >
          {isSubmitted ? 'Submitted' : 'Apply'}
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

export default DoctorOnboardingForm;