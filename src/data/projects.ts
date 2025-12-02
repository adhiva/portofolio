export interface Project {
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "DevOps" | "Management" | "IoT";
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Payment Gateway Integration",
    description: "Developed a comprehensive payment gateway API system handling multiple payment providers for e-commerce and travel booking platforms.",
    category: "Backend",
    technologies: ["GoLang", "AWS Lambda", "API Gateway", "PostgreSQL", "Redis"],
    highlights: [
      "Processed thousands of transactions daily",
      "Integrated multiple payment providers",
      "Implemented secure transaction handling",
      "Reduced processing time by 40%"
    ]
  },
  {
    title: "Flight Booking Service",
    description: "Built scalable microservices for flight booking system with real-time availability and pricing updates.",
    category: "Backend",
    technologies: ["GoLang", "AWS ECS", "SQS", "Redis", "MySQL"],
    highlights: [
      "Real-time inventory management",
      "High-availability architecture",
      "Integration with multiple airline APIs",
      "Optimized for cost efficiency"
    ]
  },
  {
    title: "Smart Vending Machine Platform",
    description: "IoT-based management system for smart vending machines with real-time monitoring and inventory tracking.",
    category: "IoT",
    technologies: ["PHP", "JavaScript", "MySQL", "MQTT", "IoT Sensors"],
    highlights: [
      "Real-time inventory monitoring",
      "Remote machine management",
      "Analytics dashboard",
      "Payment integration"
    ]
  },
  {
    title: "SMS Gateway Engine",
    description: "Multi-provider SMS gateway system supporting XL, 3, and international providers for OTP and notifications.",
    category: "Backend",
    technologies: ["PHP", "MySQL", "Redis", "Cron Jobs"],
    highlights: [
      "Multi-provider failover system",
      "Queue management for high volume",
      "Delivery tracking and reporting",
      "Billing integration"
    ]
  },
  {
    title: "Media Platform Migration",
    description: "Led digital transformation initiative migrating legacy systems to modern cloud-based architecture at Tempo Media.",
    category: "Management",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices"],
    highlights: [
      "Led team of 10+ engineers",
      "Zero-downtime migration strategy",
      "Improved system performance by 60%",
      "Reduced infrastructure costs by 30%"
    ]
  },
  {
    title: "Notification Service",
    description: "Centralized notification service handling email, SMS, and push notifications for multiple applications.",
    category: "Backend",
    technologies: ["GoLang", "TypeScript", "AWS SQS", "Redis", "PostgreSQL"],
    highlights: [
      "Handles 100K+ notifications daily",
      "Template management system",
      "Retry mechanism with exponential backoff",
      "Multi-channel support"
    ]
  }
];

export const categories = ["All", "Frontend", "Backend", "DevOps", "Management", "IoT"] as const;
