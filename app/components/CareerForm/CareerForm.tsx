"use client";

import { useState } from "react";
import { IconUpload } from "@tabler/icons-react";
import { Box, Button, Flex, Text, Textarea, TextInput } from "@mantine/core";
import {
  Dropzone,
  FileWithPath,
  MS_WORD_MIME_TYPE,
  PDF_MIME_TYPE,
} from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { sanity } from "../../../lib/sanity";

const CareerForm = ({ role }: { role: string }) => {
  const [userCV, setUserCV] = useState<FileWithPath | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      role,
      whyUs: "",
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
    },
  });

  const submitHandler = async () => {
    if (!userCV) {
      setIsError(true);
      return;
    }
    setIsError(false);
    try {
      setIsLoading(true);
      const fileUpload = await sanity.assets.upload("file", userCV);

      await sanity.create({
        ...form.values,
        userCV: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: fileUpload._id,
          },
        },
        _type: "applicants",
      });
      notifications.show({
        title: "Thanks for applying",
        message: "We'll contact you shortly",
      });
    } catch (error) {
      console.error("Error creating document:", error);
    } finally {
      setIsLoading(false);
    }
    close();
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          size="md"
          c="#212529"
          my={20}
          label="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          size="md"
          c="#212529"
          my={20}
          label="Email address"
          type="email"
          {...form.getInputProps("email")}
        />
        <TextInput
          size="md"
          c="#212529"
          my={20}
          label="Phone Number"
          type="number"
          {...form.getInputProps("phone")}
        />
        <TextInput
          size="md"
          c="#212529"
          my={20}
          label="Job Role"
          readOnly
          value={role}
          {...form.getInputProps("role")}
        />
        <Textarea
          size="md"
          c="#212529"
          my={20}
          label="Why you want to join us?"
          name="whyUs"
          {...form.getInputProps("whyUs")}
        />
        <Dropzone
          multiple={false}
          onDrop={(files) => {
            setUserCV(files[0]);
            setIsError(false);
          }}
          maxSize={5 * 1024 ** 2}
          accept={[...PDF_MIME_TYPE, ...MS_WORD_MIME_TYPE]}
        >
          <Flex
            justify="center"
            align="center"
            direction="column"
            gap="sm"
            style={{ pointerEvents: "none" }}
          >
            <IconUpload size={25} />
            <Text size="md" inline>
              Upload CV
            </Text>
          </Flex>
        </Dropzone>

        {/* Display error message or uploaded file name */}
        {isError && (
          <Text c="red" size="sm" mt={10}>
            &apos;Please upload CV&apos;
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
          type="submit"
          size="md"
          my={20}
          w="-webkit-fill-available"
        >
          Apply
        </Button>
      </form>
    </Box>
  );
};

export default CareerForm;
