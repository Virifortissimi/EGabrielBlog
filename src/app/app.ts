import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';

interface EditorLine {
  type: 'section' | 'field' | 'list' | 'link' | 'blank';
  indent?: 0 | 1 | 2;
  label?: string;
  value?: string;
  href?: string;
  accent?: boolean;
}

interface Stat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  eyebrow: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

interface LinkItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly themeStorageKey = 'portfolio-theme';
  private readonly isBrowser: boolean;

  protected readonly profile = {
    name: 'Emmanuel (Eghosa) Gabriel',
    shortName: 'Eghosa Gabriel',
    role: 'Senior .NET Engineer & Systems Architect',
    location: 'Nigeria · Remote · Open to EU/US/Global',
    company: 'Norebase · First Bank of Nigeria · Founder at Scalefort',
    intro:
      'Most engineers can build the system. Few can diagnose why it\'s failing at a systems level — and fewer still can translate that diagnosis directly into business outcomes.',
    summary:
      'I studied Biochemistry before I wrote a single line of code — and it turned out to be a strategic advantage. I approach software architecture the way a biochemist approaches a living cell: as an interconnected system where a change in one pathway cascades through everything downstream. That mindset has shaped 7+ years of building enterprise-grade .NET systems across Healthcare, Fintech, and EdTech.',
  };

  protected readonly navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly primaryLinks: LinkItem[] = [
    {
      label: 'Email',
      value: 'hello@egabriel.dev',
      href: 'mailto:hello@egabriel.dev',
    },
    {
      label: 'Website',
      value: 'egabriel.dev',
      href: 'https://egabriel.dev',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/emmanuel-eghosa-gabriel',
      href: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/Virifortissimi',
      href: 'https://github.com/Virifortissimi?tab=repositories',
      external: true,
    },
  ];

  protected readonly focusAreas = [
    'Backend architecture and distributed systems design',
    'ASP.NET Core APIs, gRPC, GraphQL, and event-driven integration',
    'Agentic AI workflows on enterprise .NET infrastructure',
    'Real-time analytics pipelines (CDC, Debezium, ClickHouse)',
    'Enterprise identity protocols (SCIM, WorkOS)',
    'Cloud delivery across Azure and AWS (Lambda, Docker, Kubernetes)',
  ];

  protected readonly stats: Stat[] = [
    { value: '7+', label: 'years building production enterprise software' },
    { value: '98%', label: 'latency reduction on analytics dashboards via CDC pipeline' },
    { value: '100+', label: 'developers trained and mentored through Scalefort' },
    { value: '3', label: 'bank subsidiaries served with payment processing infrastructure' },
  ];

  protected readonly featuredProjects: Project[] = [
    {
      title: 'Real-Time Analytics Pipeline',
      eyebrow: 'Norebase · Data Infrastructure',
      summary:
        'Architected a CDC pipeline using Debezium and ClickHouse that replaced a CRUD-over-Postgres approach that could not scale — enabling real-time data visibility across the platform.',
      outcomes: [
        'Reduced dashboard API response time from ~300ms to ~5ms — a 98% latency reduction.',
        'Replaced slow CRUD queries with event-streamed, real-time analytics infrastructure.',
        'Drove architectural decisions on data ingestion and event streaming across a cross-functional team.',
      ],
      stack: ['.NET Core', 'Debezium', 'ClickHouse', 'PostgreSQL', 'Docker'],
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
        },
      ],
    },
    {
      title: 'Enterprise Payment Processing',
      eyebrow: 'First Bank of Nigeria · Fintech',
      summary:
        'Building mission-critical payment processing and transaction infrastructure for one of West Africa\'s largest financial institutions — serving 3 subsidiaries and their mobile banking customers.',
      outcomes: [
        'Designing and deploying server-side .NET applications powering client payment processing and transaction management.',
        'Engineering backend services for high-volume financial transaction flows with strict reliability and compliance requirements.',
        'Implementing API layers supporting mobile app customers across multiple subsidiary brands under real production load.',
      ],
      stack: ['ASP.NET Core', '.NET 8', 'SQL Server', 'Azure', 'Docker', 'Microservices'],
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
        },
      ],
    },
    {
      title: 'Enterprise Identity & SCIM Integration',
      eyebrow: 'Norebase · Identity Infrastructure',
      summary:
        'Designed and implemented SCIM-based enterprise identity synchronisation, enabling seamless directory integration and automated user lifecycle management at scale.',
      outcomes: [
        'Serving 3 enterprise integrations across customer directories.',
        'Reduced manual onboarding friction through automated provisioning and deprovisioning.',
        'Worked across identity protocols, directory services, and event-driven architecture.',
      ],
      stack: ['.NET Core', 'SCIM', 'WorkOS', 'PostgreSQL', 'Event-driven architecture'],
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
        },
      ],
    },
  ];

  protected readonly experience: ExperienceItem[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Norebase',
      period: 'Nov 2025 – Present',
      summary:
        'Building high-performance analytics infrastructure and enterprise identity solutions for Norebase\'s data platform and customer integration layer.',
      highlights: [
        'Architected a real-time CDC pipeline (Debezium + ClickHouse) achieving 98% latency reduction on dashboard APIs.',
        'Designed SCIM-based identity synchronisation serving 3 enterprise client integrations.',
        'Driving architectural decisions on data ingestion, event streaming, and identity protocols across a 2–6 person team.',
      ],
    },
    {
      role: 'Senior .NET Developer',
      company: 'First Bank of Nigeria',
      period: 'Mar 2025 – Present',
      summary:
        'Building and maintaining mission-critical payment processing infrastructure for one of West Africa\'s largest and oldest financial institutions.',
      highlights: [
        'Designing and deploying server-side .NET applications powering payment processing across 3 subsidiaries.',
        'Engineering backend services for high-volume financial transactions with strict regulatory compliance.',
        'Operating within financial industry standards where failure has direct business and regulatory consequences.',
      ],
    },
    {
      role: 'Founder',
      company: 'Scalefort',
      period: 'Jan 2020 – Present',
      summary:
        'Founded and scaled a hybrid Tech School and IT Services company — training developers and delivering client software projects simultaneously.',
      highlights: [
        'Trained 50–100 developers on .NET, backend architecture, cloud, and modern engineering practices.',
        'Led end-to-end software delivery for client projects, owning architecture, development, and stakeholder communication.',
        'Sustained 6+ years of bootstrapped operation while maintaining senior engineering roles in parallel.',
        'Built a mentorship model emphasising systems thinking, TDD adoption, and production-ready habits.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'COURE Technologies, Inc',
      period: 'Apr 2022 – May 2025',
      summary:
        'Led migration of monolithic ASP.NET MVC projects to microservices and built distributed billing services designed for scale.',
      highlights: [
        'Migrated monolithic systems to microservices using .NET Core 6, Blazor, gRPC, and Dapr Building Blocks.',
        'Built billing services backed by sharded MongoDB data models and distributed service communication.',
        'Delivered across multiple levels of ownership — from implementation to broader service design decisions.',
      ],
    },
    {
      role: 'Senior Backend Engineer',
      company: 'Wellahealth',
      period: 'Mar 2022 – Sep 2025',
      summary:
        'Delivered backend applications and APIs for healthcare products, balancing product iteration with codebase maintainability.',
      highlights: [
        'Developed ASP.NET Core applications and data-access layers for health technology products.',
        'Worked across REST and GraphQL API surfaces in a fast-moving product environment.',
      ],
    },
  ];

  protected readonly writingAndSpeaking: Project[] = [
    {
      title: 'Microservices Architecture: gRPC and Dapr',
      eyebrow: 'Live technical session',
      summary:
        'A two-part walkthrough on practical microservice communication and orchestration using .NET, gRPC, and Dapr.',
      outcomes: [
        'Explains tradeoffs in service-to-service communication patterns.',
        'Connects architectural ideas to real implementation choices in C#.',
      ],
      stack: ['YouTube', '.NET', 'gRPC', 'Dapr'],
      links: [
        {
          label: 'Part 1',
          url: 'https://www.youtube.com/live/HfoO56yIrKg?si=LBjmK2IvCv-iJjzW',
        },
        {
          label: 'Part 2',
          url: 'https://www.youtube.com/live/k0b2HnAKIkE?si=ZZ8LLaRSictNNH9R',
        },
      ],
    },
    {
      title: 'Building a Robust API',
      eyebrow: 'Practical backend tutorial',
      summary:
        'A session focused on building APIs with stronger structure, maintainability, and engineering discipline.',
      outcomes: [
        'Frames API work around design decisions, not just endpoints.',
        'Shows how to move from beginner implementation to production-ready habits.',
      ],
      stack: ['API design', 'C#', '.NET'],
      links: [
        {
          label: 'Watch tutorial',
          url: 'https://www.youtube.com/watch?v=_wO-rH-Y9ck&list=LL&index=32&t=2572s',
        },
      ],
    },
  ];

  protected readonly certifications = [
    'ISC2 Certified in Cybersecurity (CC)',
    'AWS Certified Cloud Practitioner',
    'Microsoft Certified: Azure Fundamentals',
    'Cisco Introduction to Cybersecurity',
    'IBM Enterprise Design Thinking Practitioner',
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      label: 'Core',
      items: ['.NET Core / C#', 'Microservices Architecture', 'Microsoft Azure', 'Agentic AI Development', 'System Design'],
    },
    {
      label: 'Infrastructure & Data',
      items: [
        'ASP.NET Core', 'gRPC', 'Docker / Kubernetes', 'PostgreSQL', 'ClickHouse',
        'Event-Driven Architecture', 'Debezium / CDC', 'AWS Lambda', 'REST API Design',
        'SCIM / Identity Management', 'Dapr', 'SQL Server', 'Redis', 'Angular / Blazor',
        'Technical Leadership',
      ],
    },
  ];

  protected readonly editorLines: EditorLine[] = [
    { type: 'section', label: 'profile' },
    { type: 'field', indent: 1, label: 'name', value: 'Emmanuel (Eghosa) Gabriel' },
    {
      type: 'field',
      indent: 1,
      label: 'role',
      value: 'Senior .NET Engineer & Systems Architect',
    },
    { type: 'field', indent: 1, label: 'location', value: 'Nigeria · Remote · Open globally' },
    {
      type: 'field',
      indent: 1,
      label: 'focus',
      value: '.NET, distributed systems, agentic AI, analytics',
    },
    { type: 'blank' },
    { type: 'section', label: 'links' },
    {
      type: 'link',
      indent: 1,
      label: 'website',
      value: 'egabriel.dev',
      href: 'https://egabriel.dev',
    },
    {
      type: 'link',
      indent: 1,
      label: 'linkedin',
      value: 'linkedin.com/in/emmanuel-eghosa-gabriel',
      href: 'https://www.linkedin.com/in/emmanuel-eghosa-gabriel/',
    },
    {
      type: 'link',
      indent: 1,
      label: 'github',
      value: 'github.com/Virifortissimi',
      href: 'https://github.com/Virifortissimi?tab=repositories',
    },
    {
      type: 'field',
      indent: 1,
      label: 'email',
      value: 'hello@egabriel.dev',
    },
    { type: 'blank' },
    { type: 'section', label: 'signal' },
    { type: 'list', indent: 1, value: '7+ years building enterprise production systems' },
    { type: 'list', indent: 1, value: '98% latency reduction via CDC analytics pipeline' },
    { type: 'list', indent: 1, value: '100+ developers trained through Scalefort' },
    { type: 'list', indent: 1, value: 'Payment infrastructure serving 3 bank subsidiaries', accent: true },
  ];

  protected isLightTheme = false;

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  protected get lineNumbers(): number[] {
    return Array.from({ length: this.editorLines.length }, (_, index) => index + 1);
  }

  protected get themeLabel(): string {
    return this.isLightTheme ? 'Switch to dark mode' : 'Switch to light mode';
  }

  ngOnInit(): void {
    const theme = this.resolveInitialTheme();
    this.applyTheme(theme);
  }

  protected toggleTheme(): void {
    this.applyTheme(this.isLightTheme ? 'dark' : 'light');
  }

  private resolveInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem(this.themeStorageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    if (typeof window.matchMedia === 'function') {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    return 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.isLightTheme = theme === 'light';

    if (this.isLightTheme) {
      this.renderer.addClass(this.document.documentElement, 'light');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'light');
    }

    if (this.isBrowser) {
      window.localStorage.setItem(this.themeStorageKey, theme);
    }
  }
}
