"use client";
import {
  Box,
  Tabs,
  ScrollArea,
  Grid,
  Image,
  Text,
  Paper,
  Card,
} from "@mantine/core";
import Link from "next/link";

const TabbedDiseaseList = () => {
  const departments = {
    "Top Surgeries": [
      { img: "/assets/mediend-icons/Lipoma.svg", title: "Lipoma", link: "/disease/lipoma" },
      { img: "/assets/mediend-icons/Gynecomastia.svg", title: "Gynecomastia", link: "/disease/gynecomastia" },
      { img: "/assets/mediend-icons/Lasik Eye Surgery.svg", title: "Lasik Eye Surgery", link: "/disease/lasik-eye-surgery" },
      { img: "/assets/mediend-icons/Gallstone.svg", title: "Gallstone", link: "/disease/gallstone" },
      { img: "/assets/mediend-icons/Piles.svg", title: "Piles", link: "/disease/piles" },
      { img: "/assets/mediend-icons/Appendectomy.svg", title: "Appendectomy", link: "/disease/appendicitis" },
      { img: "/assets/mediend-icons/Liposuction.svg", title: "Liposuction",link:"/disease/liposuction" }, 
      { img: "/assets/mediend-icons/Kidney Stone.svg", title: "Kidney Stone", link: "/disease/kidney-stones" },
      { img: "/assets/mediend-icons/Hydrocelectomy.svg", title: "Hydrocelectomy", link: "/disease/hydrocelectomy" },
      { img: "/assets/mediend-icons/Laser Circumcision.svg", title: "Laser Circumcision", link: "/disease/circumcision" },
      { img: "/assets/mediend-icons/Breast Augmentation.svg", title: "Breast Augmentation", link: "/disease/breast-augmentation" },
      { img: "/assets/mediend-icons/Breast Reduction.svg", title: "Breast Reduction", link: "/disease/breast-reduction" },
    ],
    Aesthetics: [
      { img: "/assets/mediend-icons/Lipoma.svg", title: "Lipoma", link: "/disease/lipoma" },
      { img: "/assets/mediend-icons/Liposuction.svg", title: "Liposuction",link:"/disease/liposuction" }, 
      { img: "/assets/mediend-icons/Breast Augmentation.svg", title: "Breast Augmentation", link: "/disease/breast-augmentation" },
      { img: "/assets/mediend-icons/Axillary Breast.svg", title: "Axillary Breast", link: "/disease/axillary-breast" },
      { img: "/assets/mediend-icons/Breast Reduction.svg", title: "Breast Reduction", link: "/disease/breast-reduction" },
      { img: "/assets/mediend-icons/Sebaceous Cyst.svg", title: "Sebaceous Cyst", link: "/disease/sebaceous-cyst" },
      { img: "/assets/mediend-icons/Breast Lift.svg", title: "Breast Lift", link: "/disease/breast-lift" },
      { img: "/assets/mediend-icons/Gynecomastia.svg", title: "Gynecomastia", link: "/disease/gynecomastia" },
      { img: "/assets/mediend-icons/Rhinoplasty.svg", title: "Rhinoplasty", link: "/disease/rhinoplasty" },
    ],
    Ophthalmology: [
      { img: "/assets/mediend-icons/Cataract.svg", title: "Cataract", link: "/disease/cataract" },
      { img: "/assets/mediend-icons/Lasik Eye Surgery.svg", title: "Lasik Eye Surgery", link: "/disease/lasik-eye-surgery" },
    ],
    Proctology: [
      { img: "/assets/mediend-icons/Piles.svg", title: "Piles", link: "/disease/piles" },
      { img: "/assets/mediend-icons/Anal Fissure.svg", title: "Anal Fissure", link: "/disease/fissure" },
      { img: "/assets/mediend-icons/Anal Fitsula.svg", title: "Anal Fistula", link: "/disease/fistula" },
      { img: "/assets/mediend-icons/Pilonidal Sinus.svg", title: "Pilonidal Sinus", link: "/disease/pilonidal-sinus" },
    ],
    Laproscopy: [
      { img: "/assets/mediend-icons/Umbilical Hernia.svg", title: "Umbilical Hernia", link: "/disease/umbilical-hernia" },
      { img: "/assets/mediend-icons/Ingunial Hernia.svg", title: "Inguinal Hernia", link: "/disease/inguinal-hernia" },
    ],
    Urology: [
      { img: "/assets/mediend-icons/Kidney Stone.svg", title: "Kidney Stone", link: "/disease/kidney-stones" },
      { img: "/assets/mediend-icons/Hydrocelectomy.svg", title: "Hydrocelectomy", link: "/disease/hydrocelectomy" },
      { img: "/assets/mediend-icons/Laser Circumcision.svg", title: "Laser Circumcision", link: "/disease/circumcision" },
      { img: "/assets/mediend-icons/ZSR Circumcision.svg", title: "ZSR Circumcision", link: "/disease/zsr-circumcision" },

    ],
    Orthopedics: [
      { img: "/assets/mediend-icons/Meniscus Tear.svg", title: "Meniscus Tear", link: "/disease/meniscus-tear" },
      { img: "/assets/mediend-icons/ACL Tear.svg", title: "ACL Tear", link: "/disease/acl-tear" },
      { img: "/assets/mediend-icons/Shoulder Disclocation.svg", title: "Shoulder Dislocation", link: "/disease/shoulder-dislocation" },
      { img: "/assets/mediend-icons/Shoulder Replacement.svg", title: "Shoulder Replacement", link: "/disease/shoulder-replacement" },
      { img: "/assets/mediend-icons/Spine Surgery.svg", title: "Spine Surgery", link: "/disease/spine-surgery" },
    ],
    Vascular: [
      { img: "/assets/mediend-icons/Deep Vain Thrombosis.svg", title: "Deep Vein Thrombosis", link: "/disease/deep-vein-thrombosis" },
      { img: "/assets/mediend-icons/Vericose Veins.svg", title: "Varicose Veins", link: "/disease/varicose-veins" },
      { img: "/assets/mediend-icons/Vericocele.svg", title: "Varicocele", link: "/disease/varicocele" },
      { img: "/assets/mediend-icons/Diabetic Foot Ulcer.svg", title: "Diabetic Foot Ulcer", link: "/disease/diabetic-foot-ulcers" },
    ],
    ENT: [
      { img: "/assets/mediend-icons/Tonsillectomy.svg", title: "Tonsillectomy", link: "/disease/throat-infection" },
      { img: "/assets/mediend-icons/Septoplasty.svg", title: "Septoplasty", link: "/disease/septoplasty" }, 
      { img: "/assets/mediend-icons/FESS.svg", title: "FESS", link: "/disease/fess" }, 
      { img: "/assets/mediend-icons/Adenoidectomy.svg", title: "Adenoidectomy", link: "/disease/adenoidectomy" },
      { img: "/assets/mediend-icons/Mastoidectomy.svg", title: "Mastoidectomy", link: "/disease/mastoidectomy" },
      { img: "/assets/mediend-icons/Tympanoplasty.svg", title: "Tympanoplasty", link: "/disease/tympanoplasty" },
    ],
    Gynecology: [
      { img: "/assets/mediend-icons/Hysterectomy.svg", title: "Hysterectomy", link: "/disease/hysterectomy" },
      { img: "/assets/mediend-icons/Endometriosis.svg", title: "Endometriosis" }, // No matching link
      { img: "/assets/mediend-icons/Uterine Fibroid.svg", title: "Uterine Fibroid", link: "/disease/uterine-fibroid" },
      { img: "/assets/mediend-icons/Ectopic Pregnancy.svg", title: "Ectopic Pregnancy", link: "/disease/ectopic-pregnancy" }, // No matching link
      { img: "/assets/mediend-icons/Vaginoplasty.svg", title: "Vaginoplasty", link: "/disease/vaginoplasty" }, // No matching link
      { img: "/assets/mediend-icons/Hymenoplasty.svg", title: "Hymenoplasty", link: "/disease/hymenoplasty" }, // No matching link
      { img: "/assets/mediend-icons/Labiaplasty.svg", title: "Labiaplasty", link: "/disease/labiaplasty" }, // No matching link
    ],
    Fertility: [
      { img: "/assets/mediend-icons/IUI.svg", title: "IUI", link:"/disease/male-infertility" }, // No matching link
      { img: "/assets/mediend-icons/IVF.svg", title: "IVF", link:"/disease/female-infertility" }, // No matching link
    ],
    "Medical Management": [
      // No matching links
    ],
  };
  

  return (
    <Box className='flex flex-col justify-center items-center w-full'>
    <Card p={"sm"} className='w-[100%] md:w-[85%]'>
      <Tabs defaultValue="Top Surgeries" variant="outline">
        <div style={{ position: 'relative' }} className='flex justify-center items-center flex-col'>
          <ScrollArea.Autosize type="scroll" scrollbarSize={1}  w={"100%"}>
            <Tabs.List mb="xl" mt="sm" style={{ flexWrap: 'nowrap', minWidth: 'max-content' }}>
              {Object.keys(departments).map((dept) => (
                <Tabs.Tab
                  key={dept}
                  value={dept}
                  styles={{
                    tab: {
                      padding: '8px 16px',
                      whiteSpace: 'nowrap',
                      '&[data-active]': {
                        backgroundColor: '#1a365d',
                        color: 'white',
                     },
                    },
                  }}
                >
                  <Text size="md">
                  {dept}
                  </Text>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </ScrollArea.Autosize>
        </div>
          <Card py={"lg"} shadow='lg' className='border'>
        {Object.entries(departments).map(([dept, conditions]) => (
          <Tabs.Panel key={dept} value={dept}>
            <Grid gutter={"md"}>
              {conditions.map((condition, index) => (
                <Grid.Col key={index} span={{ base: 6, md: 3, lg: 2 }}>
                  <Link href={condition.link || ""}>
                  <Paper
                    p="md"
                    radius="md"
                    withBorder
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height:'100%',
                    }}
                    data-aos="zoom-in"
                  >
                    
                      <Image
                        src={condition.img}
                        alt={condition.title}
                        w={60}
                        h={60}
                        fit="cover"
                      />

                    <Text fz="sm" fw={500} ta="center">
                      {condition.title}
                    </Text>
                  </Paper>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>
            
           
          </Tabs.Panel>
        ))}
        </Card>
      </Tabs>
      </Card>
    </Box>
  );
};
export default TabbedDiseaseList;
