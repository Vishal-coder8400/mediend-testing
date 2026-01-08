"use client"

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
  Paper,
} from "@mantine/core";
import { IconSend, IconUser, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'; // Corrected import path
import { indianStates } from './states';
import Link from 'next/link';

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    message: ''
  });



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // Reset form
    setForm({ name: '', email: '', phone: '', state: '', message: '' });
  };

  return (
    <Container size="lg" py={40}>
      <Paper 
        radius="lg" 
        withBorder 
        shadow="md"
        className="bg-gradient-to-br from-blue-900 to-blue-800"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Section - Form Description */}
          <div className="space-y-6 p-4">
            <Title 
              order={2}
              className="text-white text-3xl md:text-4xl font-bold"
            >
              Have a Medical Query?
              <br />
              Let&apos;s Discuss
            </Title>
            
            <Text className="text-lg" c={"blue.1"}>
              Our medical team is here to help. Fill out the form and we&apos;ll get back 
              to you within 24 hours. For emergencies, please call our hotline directly.
            </Text>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3 text-blue-100">
                <IconPhone size={20} />
                <Text>24/7 Emergency: +91 8750300099</Text>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <IconMail size={20} />
                <Text><Link href="mailto:info@mediend.com">info@mediend.com</Link></Text>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <IconMapPin size={20} />
                <Text>Sector 63, Noida, UP 201301</Text>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <Paper className="p-6 rounded-xl bg-white/95 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Group grow>
                <TextInput
                  required
                  label="Full Name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  leftSection={<IconUser size={16} />}
                />
                <TextInput
                  required
                  type="email"
                  label="Email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  leftSection={<IconMail size={16} />}
                />
              </Group>

              <Group grow>
                <TextInput
                  required
                  label="Phone Number"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  leftSection={<IconPhone size={16} />}
                />
                <Select
                  required
                  label="State"
                  placeholder="Select your state"
                  data={indianStates}
                  value={form.state}
                  onChange={(value) => setForm({ ...form, state: value?value:"" })}
                  leftSection={<IconMapPin size={16} />}
                />
              </Group>

              <Textarea
                required
                label="Your Message"
                placeholder="Please describe your medical query or concern..."
                minRows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <Button 
                type="submit"
                loading={loading}
                fullWidth
                size="md"
                rightSection={<IconSend size={16} />}
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </div>
      </Paper>
    </Container>
  );
};

export default ContactUsForm;