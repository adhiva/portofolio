export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "PT Tempo Inti Media Tbk",
    position: "Head of Application and Development",
    location: "Jakarta Selatan, Indonesia",
    period: "Dec 2023 - Present",
    description: "Tempo is one of the biggest media companies in Indonesia, focused on idealism about politics and approaching digital transformation.",
    achievements: [
      "Establishing coding standards and optimizing application performance",
      "Leading the development of new features and collaborating with the Product Management team to ensure alignment with business goals",
      "Mentoring team members and conducting research on development tools to enhance productivity across teams",
      "Conducting one-on-one sessions with team members to support their professional growth and development",
      "Driving team growth with a focus on creating revenue impact through innovative solutions",
      "Reporting directly to the CTO and CEO, providing updates on team progress, performance, and the features being developed"
    ],
    technologies: ["GoLang", "TypeScript", "React", "AWS", "Docker", "Jenkins"]
  },
  {
    company: "PT MNC Aladin Indonesia",
    position: "Engineering Squad Leader",
    location: "Jakarta, Indonesia",
    period: "Oct 2021 - Dec 2024",
    description: "Online Travel Agent focused on B2B selling but still have B2C service. Expanding company business in E-Commerce.",
    achievements: [
      "Responsible for managing engineering team for User and Payment team including FE, BE, QA and Mobile Apps",
      "Coordinated with PM (Product Manager) to develop features on products that meet business goals while maintaining high technical quality",
      "Mentored engineers on their growth, both technical and individual aspects",
      "Provided regular reports and communicated with other departments and Head of Engineering regarding squad achievements",
      "Supported team members to be productive",
      "Used agile software development methodologies (SCRUM) with tools provided by JIRA",
      "Maintained Jenkins as CI/CD Tools",
      "Maintained Lambda, API Gateway, ECS, EC2, SQS, etc. AWS Services"
    ],
    technologies: ["GoLang", "PHP", "TypeScript", "AWS Lambda", "ECS", "Jenkins", "JIRA"]
  },
  {
    company: "PT MNC Aladin Indonesia",
    position: "Senior Backend Engineer",
    location: "Jakarta, Indonesia",
    period: "Jul 2020 - Sep 2021",
    description: "Online Travel Agent focused on B2B selling but still have B2C service. Expanding company business in E-Commerce.",
    achievements: [
      "Developed new Payment Gateway API using GoLang",
      "Developed Flight Gateway services API using GoLang",
      "Enhanced performance and maintenance of services built",
      "Optimized cloud costs by migrating ECS to Lambda in AWS Cloud"
    ],
    technologies: ["GoLang", "AWS Lambda", "ECS", "API Gateway"]
  },
  {
    company: "PT MNC Aladin Indonesia",
    position: "Backend Engineer",
    location: "Jakarta, Indonesia",
    period: "Jul 2019 - Jul 2020",
    description: "Online Travel Agent focused on B2B selling but still have B2C service.",
    achievements: [
      "Maintained existing services using PHP Lumen, GoLang, and TypeScript",
      "Developed User/Member service",
      "Built new service for reporting scheduler to Finance and Business Team",
      "Developed Notification Service for OTP"
    ],
    technologies: ["PHP Lumen", "GoLang", "TypeScript", "MySQL"]
  },
  {
    company: "PT Andalabs",
    position: "Staff Programmer",
    location: "Jakarta Pusat, Indonesia",
    period: "Sep 2016 - Jul 2019",
    description: "Focused on Mobile Internet and expanding business to IoT sector, building Smart Vending Machine and Smart CCTV.",
    achievements: [
      "Developed dashboard for IoT product Smart Vending Machine",
      "Developed engine SMS Gateway for several providers like XL, 3, and Malaysia Provider",
      "Developed dashboard for VPN Management",
      "Developed dashboard Billing Gateway for Management Client using SMS Gateway"
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "IoT"]
  },
  {
    company: "PT Japati Indonesia",
    position: "Web Programmer",
    location: "Tangerang Selatan, Banten",
    period: "Jul 2015 - Sep 2016",
    description: "Main project: E-Cooperative aimed at growing UMKM with Cooperative. Also developed various projects including Attendance System for BPPT, SIMRS (Hospital Management System) for RSUD Tangsel, POS for Kans Shoes and Care.",
    achievements: [
      "Developed websites using CI PHP Framework, PHP Native, JavaScript (jQuery), and MySQL for database management",
      "Leveraged expertise in these technologies to create dynamic and responsive web solutions",
      "Created reporting for tasks completed for Lead and Director"
    ],
    technologies: ["CodeIgniter", "PHP", "JavaScript", "jQuery", "MySQL"]
  }
];
