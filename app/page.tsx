import { Card } from "@mantine/core";
import Blogs from "./components/Blogs/Blogs";
import BookConsultation from "./components/BookConsultation/BookConsultation";
import ConsultationBox from "./components/ConsultationBox/ConsultationBox";
import DiseaseList from "./components/DiseaseList/DiseaseList";
import { faqs } from "./components/FAQs/faqs";
import FrequentlyAskedQuestions from "./components/FAQs/FrequentlyAskedQuestions";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Herobox from "./components/Herobox/Herobox";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import Showcase from "./components/Showcase/Showcase";
import Specialities from "./components/Specialities/Specialities";
import { specialitiesData } from "./components/Specialities/specialitiesData";
import Stories from "./components/Stories/Stories";
import WhyUs from "./components/WhyUs/WhyUs";
import DesktopGraphic from "../public/assets/desktop-graphic.png";
import MobileGraphic from "../public/assets/mobile-graphic.png";
import Image from "next/image";

const storiesData = [
  {
    imageUrl: "/assets/stories/stories_3.png",
    highlight: "“A new ray of hope for my daughter”",
    review:
      "After months of struggling, we finally found something that worked. My daughter's confidence has improved, and her communication has become much clearer.",
    name: "Ananya Iyer",
  },
  {
    imageUrl: "/assets/stories/stories_4.png",
    highlight: "“Every day feels like a fresh start”",
    review:
      "The transformation has been incredible. From barely making eye contact to engaging in meaningful conversations—our journey has been nothing short of miraculous!",
    name: "Rohan Malhotra",
  },
  {
    imageUrl: "/assets/stories/stories_5.png",
    highlight: "“My son can now express himself better”",
    review:
      "I never thought I’d see my son confidently express his thoughts. This program has been life-changing for our family.",
    name: "Meera Srivastava",
  },
  {
    imageUrl: "/assets/stories/stories_6.png",
    highlight: "“Patience and perseverance paid off”",
    review:
      "It took time, but the results are truly rewarding. We see positive changes every day, and my child is much happier!",
    name: "Sandeep Agarwal",
  },
  {
    imageUrl: "/assets/stories/stories_7.png",
    highlight: "“A turning point in our lives”",
    review:
      "My son used to struggle with social interactions, but now he enjoys playing with other children. We are so grateful for this journey.",
    name: "Ritika Kapoor",
  },
  {
    imageUrl: "/assets/stories/stories_8.png",
    highlight: "“More smiles and laughter in our home”",
    review:
      "We used to feel lost and alone, but now we see progress every single day. Our home is filled with joy and laughter again.",
    name: "Vikram Nair",
  },
];



export default function HomePage() {
  return (
    <div>
      <Herobox />
      <div data-aos="zoom-in" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ConsultationBox />
      </div>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <DiseaseList />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Showcase />
      </div>
      <WhyUs />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Specialities specialitiesData={specialitiesData} />
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Card className="flex justify-center items-center">
          <Image
            src={DesktopGraphic}
            alt="infographic"
            className="hidden sm:flex my-8"
          ></Image>
          <Image
            src={MobileGraphic}
            alt="infographic"
            className="sm:hidden flex my-8"
          ></Image>
        </Card>
      </div>
      <GetInTouch />
      <div style={{ maxWidth: "1370px", margin: "0 auto" }}>
        <OurDoctors />
      </div>
      <Stories reviews={storiesData} />
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Blogs />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FrequentlyAskedQuestions faqs={faqs} />
        <BookConsultation />
      </div>
    </div>
  );
}
