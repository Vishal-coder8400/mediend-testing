"use client";

import { Box, Image, rem, Text } from "@mantine/core";
import { memo } from "react";
import Link from "next/link";
import type { Doctor } from "../../doctor/[doctorName]/page";
import classes from "./OurDoctors.module.css";
import PlaceholderImage from "./default-placeholder-doctor-halflength-portrait-600nw-1058724875.webp";

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

const DoctorCard = memo(function DoctorCard({ doctor, index }: DoctorCardProps) {
  const truncateSpeciality = (speciality: string) => {
    return speciality.length > 30
      ? `${speciality.substring(0, 25)}...`
      : speciality;
  };

  return (
    <Box className={classes.box}>
      <Link href={doctor.slug ? `/doctor/${doctor.slug}` : ""}>
        <Image
          src={doctor.imageUrl || PlaceholderImage.src}
          height={236}
          fit="contain"
          alt={doctor.title}
          data-aos={index % 2 ? "zoom-in-up" : "zoom-in-down"}
          className="h-[236px]"
          loading="lazy"
          onError={(e) => console.error(`Image load error for ${doctor.title}`, e)}
        />
        <Box my={20}>
          <Text c="#023E8A" px={10} fz={rem(20)} className={classes.title}>
            {doctor.title}
          </Text>
          <Text c="#999999" my={10} px={10} className={classes.domain}>
            {truncateSpeciality(doctor.speciality)}
          </Text>
          <Text c="#999999" px={10}>
            {doctor.yearsOfExperience}+ Years experience
          </Text>
        </Box>
      </Link>
    </Box>
  );
});

export default DoctorCard;