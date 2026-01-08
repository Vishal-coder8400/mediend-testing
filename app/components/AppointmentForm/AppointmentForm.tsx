"use client";
import {
  Autocomplete,
  Box,
  Button,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "../Appointment/Appointment.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { citylist } from "../Appointment/citylist";
import { useMediaQuery } from "@mantine/hooks";

const AppointmentForm = ({
  pageName,
}: {
  pageName: string | string[] | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mobile = useMediaQuery(`(min-width: 1000px)`);
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
      city: "",
    },
    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid name"),
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
      city: (val: string) => (val.length !== 0 ? null : "Select a city"),
    },
  });

  const pageNameData = typeof pageName !== "string" ? " " : pageName;

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);

      const response = await fetch('/api/post-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.values.name,
          phone: form.values.phone,
          countryCode: "+91",
          disease: pageNameData,
          city: form.values.city,
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
    <Box className="flex justify-center py-4">
      <Box className="flex-1">
        <form onSubmit={form.onSubmit(submitHandler)}>
          <TextInput
            label="Patient Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            value={form.values.name}
            classNames={{ label: classes.label, input: classes.input__input }}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
            p={5}
            my={10}
          />
          <TextInput
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Enter 10 digit mobile number"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
            value={form.values.phone}
            onChange={(event) =>
              form.setFieldValue("phone", event.currentTarget.value)
            }
            radius="md"
            p={5}
            my={10}
          />
          <Autocomplete
            classNames={{ label: classes.label, input: classes.input__input }}
            label="Select City"
            key={form.key("city")}
            {...form.getInputProps("city")}
            my={10}
            value={form.values.city}
            onChange={(value) => form.setFieldValue("city", value)}
            data={citylist}
            maxDropdownHeight={200}
          />
          <Button
            type="submit"
            radius="md"
            variant={isSubmitted?"outline":"filled"}
            disabled={isSubmitted?true:false}
            mt={20}
            fullWidth
            loading={isLoading}
            loaderProps={{ type: "dots" }}
            onClick={()=>submitHandler()}
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
    </Box>
  );
};

export default AppointmentForm;