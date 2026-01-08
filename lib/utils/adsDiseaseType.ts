export type Herobox = {
  list: string[];
  title: {
    cityName: string;
    mainTitle: string;
  };
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
};
export type DiseaseContent = {
  diseaseQue: string;
  diseaseans: string;
  diseaseImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
};
export type Doctor = {
  specialities: string;
  recommended: number;
  _type: "doctor";
  name: string;
  _key: string;
  experience: number;
  type: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
};
export type Faq = {
  question: string;
  answer: string;
  _type: "faq";
  _key: string;
};
export type AdsFooter = {
  expertsLink: string;
  whatsappLink: string;
};
export type BenefitsType = {
  heading: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
};
export type AdsHeader = {
  callLink: string;
  whatsappLink: string;
  isCallLink: boolean;
  isWhatsapp: boolean;
};
export type ProcedureType = {
  heading: string;
  _type: string;
  table: {
    rows: {
      _type: "tableRow";
      _key: string;
      cells: string[];
    }[];
  };
};
export type About = {
  que: string;
  ans: string[];
  _type: "info";
  _key: string;
};

export type AdsDisease = {
  _id: string;
  _type: "ads";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  diseaseName: string;
  consultLink: string;
  insuranceLink: string;
  herobox: Herobox;
  faqs: Faq[];
  disease: DiseaseContent;
  doctors: Doctor[];
  footer: AdsFooter;
  benefits: BenefitsType;
  header: AdsHeader;
  procedure: ProcedureType;
  about: About[];
};
