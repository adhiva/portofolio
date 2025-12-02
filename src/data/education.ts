export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const education: Education = {
  institution: "STTI NIIT I-Tech",
  degree: "Bachelor of Computer Science",
  field: "Computer Science",
  location: "Jakarta Selatan, Indonesia",
  period: "Sep 2014 - Jul 2019",
  gpa: "3.75/4.00"
};

export const certifications: Certification[] = [
  {
    title: "Scalable Web Service with Golang",
    issuer: "Hacktiv8",
    year: "2022",
    description: "Build scalable service using Go Lang"
  },
  {
    title: "Architecting on AWS Associate",
    issuer: "Trainocate",
    year: "2021",
    description: "Training for AWS Associate certification"
  },
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    issuer: "Trainocate",
    year: "2021",
    description: "Training about Google Cloud fundamentals"
  },
  {
    title: "Japanese Online Learning Program Shokyuu I - III",
    issuer: "Sakura JLC",
    year: "2021",
    description: "Learning Japanese N5 Certification"
  }
];

export const organizations = [
  {
    name: "Nekotaku Studio",
    role: "Co-Founder",
    location: "Indonesia",
    period: "Sep 2022 - Present",
    description: "A social media platform for creating content about Japanese culture especially anime, cosplay, games, etc.",
    responsibilities: [
      "Content planner, Photographer, and Videographer"
    ]
  }
];
