"use client"
import React, { useEffect, useState } from 'react';
import { 
  Accordion,
  Container,
  Title,
  Paper,
  Text,
  Group,
  Stack,
  Loader,
  Center
} from '@mantine/core';
import { IconStethoscope, IconEye, IconBone, IconHeart, IconWeight, IconWoman, IconSparkles, IconEar } from '@tabler/icons-react';
import LoadingScreen from '../components/Loading/loading';

interface FAQ {
  _key?: string;
  _type?: string;
  question: string;
  answer: string;
}

interface Department {
  title: string;
  faqs: FAQ[];
}

interface SanityResponse {
  result: Department[];
}

interface IconMapping {
  [key: string]: React.FC<{ size: number }>;
}

const DepartmentFAQs: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async (): Promise<void> => {
      try {
        const response = await fetch('https://7rljkuk3.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%27department%27%5D%7B%0A++title%2C%0A++faqs%0A%7D');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: SanityResponse = await response.json();
        setDepartments(data.result);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  // Map department names to icons
  const getDepartmentIcon = (dept: string): JSX.Element => {
    const icons: IconMapping = {
      'Urology': () => <IconStethoscope />,
      'Proctology': () => <IconStethoscope />,
      'Laparoscopy': () => <IconStethoscope />,
      'Ophthalmology': () => <IconEye />,
      'Orthopedic': () => <IconBone />,
      'Fertility': () => <IconHeart />,
      'Weight Loss': () => <IconWeight />,
      'Gynaecology': () => <IconWoman />,
      'Aesthetics': () => <IconSparkles />,
      'ENT': () => <IconEar />,
      'Vascular': () => <IconHeart />
    };
    const Icon = icons[dept] || IconStethoscope;
    return <Icon size={24} />;
  };

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  if (error) {
    return (
      <Center style={{ height: '100vh' }}>
        <Text color="red" size="lg">Error: {error}</Text>
      </Center>
    );
  }

  if (!departments.length) {
    return (
      <Center style={{ height: '100vh' }}>
        <Text size="lg">No departments found</Text>
      </Center>
    );
  }

  return (
    <Container size="lg" className="py-32">
      <Title order={1} mb={32} className="text-center">
        Frequently Asked Questions
      </Title>

      <Stack gap="xl" >
        {departments.map((department, index) => (
          <Paper 
            key={department.title} 
            shadow="sm" 
            radius="md" 
            className="p-6"
            withBorder
          >
            <Group className="mb-4">
              {getDepartmentIcon(department.title)}
              <Title order={2} className="text-xl">
                {department.title}
              </Title>
            </Group>

            <Accordion 
              variant="separated" 
              radius="md"
              classNames={{
                item: 'mb-2',
                control: 'hover:bg-gray-50',
                content: 'bg-gray-50'
              }}
            >
              {department.faqs?.map((faq, faqIndex) => (
                <Accordion.Item 
                  key={faq._key || faqIndex} 
                  value={faq._key || `${faqIndex}`}
                >
                  <Accordion.Control>
                    <Text fw={500} size="sm">
                      {faq.question}
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm" className="leading-relaxed">
                      {faq.answer}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default DepartmentFAQs;