"use client";
import { Box, Table, Text, Title } from "@mantine/core";
import { ProcedureType } from "../../../lib/utils/adsDiseaseType";

export const Procedure = ({ data }: { data: ProcedureType }) => {
  return (
    <Box maw={810} my={80}>
      {/* Render the heading */}
      <Title fz={{ base: 23, sm: 36 }} mb={10}>
        {data?.heading}
      </Title>

      {/* Render the table */}
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            {/* Dynamically render table headers */}
            {data?.table?.rows[0]?.cells.map((cell: string, index: number) => (
              <Table.Th
                key={index}
                fz={{ base: 10, sm: 20 }}
                c={index === 2 ? "#3269DB" : "#000"}
              >
                {cell}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {/* Dynamically render table rows */}
          {data?.table?.rows.slice(1).map((row, rowIndex) => (
            <Table.Tr key={row._key} my={10} bg="#EEF0F5">
              {row.cells.map((cell: string, cellIndex: number) => (
                <Table.Td key={cellIndex}>
                  <Text
                    fz={{ base: 10, sm: 16 }}
                    fw={500}
                    bg={
                      cellIndex === 0
                        ? "transparent"
                        : cellIndex === 1
                          ? "#fff"
                          : "#3269DB"
                    }
                    p={10}
                    ta="center"
                    c={cellIndex !== 2 ? "#000" : "#fff"}
                    style={{ borderRadius: 20 }}
                  >
                    {cell}
                  </Text>
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  );
};
