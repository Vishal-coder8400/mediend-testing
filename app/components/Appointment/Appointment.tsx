"use client";
import {
  Autocomplete,
  Box,
  Button,
  Image,
  Select,
  Stepper,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./Appointment.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { diseasesList } from "./diseaseList";
import { citylist } from "./citylist";
import { IconPhonePlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const countryCodes = [
  { value: "+1", label: "+1 (USA)" },
  { value: "+91", label: "+91 (India)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+61", label: "+61 (Australia)" },
  // Add more country codes as needed
];

const Appointment = () => {
  const [active, setActive] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mobile = useMediaQuery(`(min-width: 1000px)`);
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      disease: "",
      city: "",
      countryCode: "+91", // Default country code
    },
    validate: {
      name: (val: string) => (val.length !== 0 ? null : "Invalid name"),
      disease: (val: string) => (val.length !== 0 ? null : "Select a disease"),
      city: (val: string) => (val.length !== 0 ? null : "Select a city"),
      phone: (val: string) => (val.length === 10 ? null : "Enter a valid 10-digit number"),
      countryCode: (val: string) => (val.length !== 0 ? " " : "Select a country code"),
    },
  });

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);
      const fullPhoneNumber = `${form.values.countryCode}${form.values.phone}`;

      const response = await fetch('/api/post-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.values.name,
          phone: fullPhoneNumber,
          disease: form.values.disease,
          city: form.values.city,
          countryCode: form.values.countryCode,
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
    <Box className={classes.main} style={{ backgroundImage: "url('/assets/bg.png')", backgroundSize: '100%', backgroundPosition: 'center' }}>
      {mobile && (
        <>
          <Box className={classes.main__content}>
            <Box>
              <Text fw={600} fz={24} c="">Making Surgery Simple and Seamless.</Text>
              <Text c="" fz={14}>
              Consult with our expert surgeon for more than 50+ diseases
              </Text>
            </Box>
            <Box className={classes.stepper__main} my={20}>
              <Text fz={14} mb={10} fw={600} c="">Next Steps</Text>
              <Stepper
                classNames={{
                  stepIcon: classes.stepIcon,
                  stepCompletedIcon: classes.stepCompletedIcon,
                  verticalSeparator: classes.verticalSeparator,
                }}
                active={4}
                onStepClick={setActive}
                orientation="vertical"
              >
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010264.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="Once you share your details, our care coordinator will get in touch with you."
                />
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010263.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="The coordinator will understand your symptoms and health condition in detail."
                />
                <Stepper.Step
                  completedIcon={
                    <Image
                      fit="contain"
                      className={classes.stepper_completed_icon}
                      src="https://img.pristyncare.com/static_pages%2FNewbookAppointmentForm%2FGroup%2010262.svg"
                      alt="call person"
                    />
                  }
                  fz={14}
                  description="Your consultation will be scheduled at the earliest."
                />
              </Stepper>
            </Box>
          </Box>
          <div className={classes.divider}></div>
        </>
      )}

      <Box className={classes.main__form}>
        <form onSubmit={form.onSubmit(submitHandler)}>
          <TextInput
            placeholder="Patient Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
            value={form.values.name}
            classNames={{ label: classes.placeholder, input: classes.input__input }}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
            p={5}
            my={20}
          />
           <Box style={{ display: "flex", gap: "10px", alignItems:  "center", margin:"0" }}>
      <Select
        placeholder="Country Code"
        data={countryCodes}
        value={form.values.countryCode || ''}
        onChange={(value) => form.setFieldValue("countryCode", typeof(value)=="string"?value:" ")}
        classNames={{ input: classes.input__input }}
        style={{ flex: 1 }}
      />
      <TextInput
        placeholder="Enter 10 digit mobile number"
        key={form.key("phone")}
        {...form.getInputProps("phone")}
        value={form.values.phone}
        onChange={(event) => form.setFieldValue("phone", event.currentTarget.value)}
        max={10}
        classNames={{ input: classes.input__input }}
        radius="md"
        p={5}
        my={20}
        style={{ flex: 3 }}
      />
    </Box>
          <Autocomplete
            classNames={{ label: classes.placeholder, input: classes.input__input }}
            placeholder="Select City"
            key={form.key("city")}
            {...form.getInputProps("city")}
            p={5}
            my={20}
            value={form.values.city}
            onChange={(value) => form.setFieldValue("city", value)}
            data={citylist}
            maxDropdownHeight={200}
          />
          <Autocomplete
            classNames={{ label: classes.placeholder, input: classes.input__input }}
            placeholder="Select Disease"
            p={5}
            my={20}
            key={form.key("disease")}
            {...form.getInputProps("disease")}
            value={form.values.disease}
            onChange={(value) => form.setFieldValue("disease", value)}
            maxDropdownHeight={200}
            data={diseasesList}
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

export default Appointment;