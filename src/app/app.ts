import { Component, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLightTheme = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  profile = {
    name: 'Emmanuel (Eghosa) Gabriel',
    title: 'Software Engineer • System Architecture • Monolith/Microservices | Distributed Systems 💻',
    location: 'Remote 😉',
    company: 'Scalefort (Founder)',
    education: 'University of Benin'
  };

  contact = {
    email: 'contacteghosa@gmail.com',
    website: 'https://egabriel.dev',
    websiteDisplay: 'egabriel.dev',
    linkedin: '/in/egabriel',
    linkedinUrl: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
    github: '/eghosa-gabriel',
    githubUrl: 'https://github.com/Virifortissimi?tab=repositories'
  };

  skills = [
    'ASP.NET Core',
    'C# & .NET',
    'Microservices Architecture',
    'REST, GraphQL, gRPC',
    'MongoDB & SQL Server',
    'Microsoft Azure & AWS',
    'Dapr & Distributed Systems',
    'React & Angular',
    'System Design',
    'Entity Framework'
  ];

  experience = [
    {
      role: 'Software Engineer',
      company: 'First Bank of Nigeria',
      period: 'Mar 2025 - Present',
      description: 'Building enterprise banking solutions'
    },
    {
      role: 'Founder',
      company: 'Scalefort',
      period: 'Jan 2021 - Present',
      description: 'Empowering Tech Careers, Bootcamp for Future Innovators'
    },
    {
      role: 'Senior Software Engineer',
      company: 'COURE Technologies, Inc',
      period: 'Apr 2024 - Oct 2025',
      description: 'Built distributed billing service with sharded database, MongoDB, Dapr'
    },
    {
      role: 'Intermediate Software Engineer',
      company: 'COURE Technologies, Inc',
      period: 'Nov 2022 - May 2024',
      description: 'Maintained billing service with sharded database for scalability'
    },
    {
      role: 'Software Developer Dotnet',
      company: 'COURE Technologies, Inc',
      period: 'Apr 2022 - Oct 2022',
      description: 'Distributed billing service using ASP.NET, C#, MongoDB, Dapr'
    },
    {
      role: 'Senior Backend Engineer',
      company: 'Wellahealth (Part-time)',
      period: 'Mar 2022 - Sep 2025',
      description: 'Developed .NET apps with ASP.NET Core, Entity Framework, REST/GraphQL APIs'
    },
    {
      role: 'C# Software Developer',
      company: 'Black Insure',
      period: 'Oct 2020 - Mar 2022',
      description: 'Built web platform with C# ASP.NET, SQL Server, Azure deployment'
    },
    {
      role: 'Technical Trainer (C#)',
      company: 'Wellahealth',
      period: 'Dec 2020 - Mar 2021',
      description: 'Trained developers on C# web development, OOP, ASP.NET, Entity Framework'
    },
    {
      role: 'Frontend Dev/Product Manager',
      company: 'ScholarX (Part-time)',
      period: 'Jun 2020 - Mar 2022',
      description: 'Built LearnAm App with HTML/CSS/JS, ReactJs apps, product management'
    }
  ];

  certifications = [
    'Certified in CyberSecurity (CC) - ISC2',
    'AWS Certified Cloud Practitioner',
    'Microsoft Certified: Azure Fundamentals',
    'Introduction to Cybersecurity - Cisco',
    'Enterprise Design Thinking Practitioner - IBM'
  ];

  openSourceWorks = [
    {
      title: 'Microservices Architecture: gRPC & Dapr (2-Part Series)',
      description: 'Advanced Distributed Systems: Deep dive on building scalable Microservices using C#/.NET with gRPC and Dapr',
      links: [
        { label: 'Part 1', url: 'https://www.youtube.com/live/HfoO56yIrKg?si=LBjmK2IvCv-iJjzW' },
        { label: 'Part 2', url: 'https://www.youtube.com/live/k0b2HnAKIkE?si=ZZ8LLaRSictNNH9R' }
      ]
    },
    {
      title: 'Wella School Backend Training',
      description: 'Technical Mentorship: Developed foundational training for backend engineers covering .NET ecosystem and C# fundamentals',
      links: [
        { label: 'View Training', url: 'https://www.youtube.com/watch?v=qNuMHzfU40c&list=PL8ng0dcMwes9Z-fP9ypQNig95_o2LuxBE' }
      ]
    },
    {
      title: 'Building a Robust API',
      description: 'Backend Engineering: Tutorial on practical steps and best practices for developing RESTful APIs',
      links: [
        { label: 'View Tutorial', url: 'https://www.youtube.com/watch?v=_wO-rH-Y9ck&list=LL&index=32&t=2572s' }
      ]
    }
  ];

  bio = "Experienced Software Engineer with a passion for driving innovation in web and mobile applications. I specialize in ASP.NET, C#, .NET Core, MongoDB, and Dapr. My expertise extends to system design, distributed systems, and building scalable microservices architectures. Throughout my career, I've consistently demonstrated a commitment to excellence in software architecture and design, contributing to complex billing systems, analytics systems, healthcare platforms, and educational technology products.";

  lineNumbers = Array.from({length: 100}, (_, i) => i + 1);

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      this.renderer.addClass(this.document.documentElement, 'light');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'light');
    }
  }
}
