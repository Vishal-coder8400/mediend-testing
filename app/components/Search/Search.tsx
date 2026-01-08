"use client";
import { useState } from "react";
import {
  Input,
  Loader,
  Card,
  ScrollArea,
  Text,
  Box,
  Image,
  Stack,
} from "@mantine/core";
import debounce from "lodash.debounce";
import { search } from "../../../app/actions/search";
import { useRouter } from "next/navigation";
import {IconSearch} from '@tabler/icons-react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const debouncedSearch = debounce(async (term: string) => {
    if (!term) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const data = await search(term);
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  }, 300); // 300ms debounce

  // Function to reset the search bar and navigate
  const handleResultClick = (result: any) => {
    setSearchTerm(""); // Clear the search term
    setResults([]); // Clear the search results
    // Navigate to the appropriate page
    if (result._type === "diseaseInCity") {
      router.push(`/city/${result.slug}`);
    } else {
      router.push(`/${result._type}/${result.slug}`);
    }
  };

  return (
    <Box className="relative w-96">
      <Input
        leftSection={<IconSearch height={20}></IconSearch>}
        placeholder="Search departments, diseases, doctors..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          debouncedSearch(e.target.value);
        }}
        className="w-full bg-white shadow-lg rounded-md relative z-10"
      />
      {results.length > 0 && (
        <div className="absolute top-full left-0 w-full z-20 mt-1 ">
          <ScrollArea
            style={{ height: 400 }}
            className="bg-white  shadow-lg rounded-md border"
          >
          <Stack className="bg-white" gap="sm">
            {results.map((result) => (
              <div
                key={result._id}
                style={{ cursor: "pointer" }}
                className="bg-white p-4 hover:bg-zinc-100"
                onClick={() => handleResultClick(result)} // Handle click
              >
                <div className="flex items-center justify-start gap-4">
                  {result.imageUrl && (
                    <Image
                      src={result.imageUrl}
                      alt={result.title}
                      height={80} // Reduced height
                      width={80} // Reduced width
                      fit="cover"
                      className="h-[50px] w-[50px] rounded-sm"
                    />
                  )}
                  <div className="flex flex-col gap-2">
                    <Text fw={500}>{result.title}</Text>
                    {result._type === "doctor" && (
                      <Text size="sm" c="dimmed">
                        {result.speciality}
                      </Text>
                    )}
                    {result._type === "department" && (
                      <Text size="sm" c="dimmed">
                        Department
                      </Text>
                    )}
                    {result._type === "disease" && (
                      <Text size="sm" c="dimmed">
                        {result.header}
                      </Text>
                    )}
                    {result._type === "diseaseInCity" && (
                      <Text size="sm" c="dimmed">
                        {result.header}
                      </Text>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Stack>
          </ScrollArea>
        </div>
      )}
    </Box>
  );
}