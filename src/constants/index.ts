/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Assets
 */

import {
  React,
  NextJs,
  TypeScript,
  NodeJs,
  Docker,
  PostgreSQL,
} from '@/assets/TechStackIcons';
import taskyaiBanner1 from '@/assets/taskyai-banner1.png';
import taskyaiBanner2 from '@/assets/taskyai-banner2.png';
import taskyaiBanner from '@/assets/taskyai-banner.png';
import taskyaiThumnail from '@/assets/taskyai-thumbnail.png';
import phoenixThumbnail from '@/assets/phoenix-thumnail.png';
import phoenixBanner from '@/assets/phoenix.png';
import phoenixBanner1 from '@/assets/phoenix1.png';
import phoenixBanner2 from '@/assets/phoenix2.png';
import styleLoom from '@/assets/styleloom.png';
import styleLoom1 from '@/assets/styleloom1.png';
import styleLoom2 from '@/assets/styleloom2.png';
import styleLoom3 from '@/assets/styleloom3.png';

/**
 * Types
 */
import type { Project } from '@/types';
import {
  Globe02Icon,
  ArtificialIntelligence04Icon,
  ChatBotIcon,
  ShoppingBag02Icon,
} from '@hugeicons/core-free-icons';

export const PROFILE_TAGS = [
  'React 19',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Redux',
];

export const PROJECTS: Project[] = [
  {
    title: 'Tasky AI',

    subtitle: 'AI Powered Productivity Platform',

    description:
      'An intelligent task management application powered by AI. It helps you organize, prioritize, and complete your tasks with intelligent assistance.',

    featured: true,

    status: 'Completed',

    images: [taskyaiThumnail, taskyaiBanner2, taskyaiBanner1, taskyaiBanner],

    features: [
      'AI Task Generator',
      'Authentication',
      'Analytics Dashboard',
      'Dark Mode',
      'Responsive Design',
      'Reusable Components',
    ],

    techStacks: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Radix UI',
      'Appwrite',
      'Google Generative AI',
    ],

    projectUrl: 'https://taskyai-lake.vercel.app/',

    githubUrl: 'https://github.com/basavarajakj/taskyai',
    bg: '#D0E4FF',
    Icon: ArtificialIntelligence04Icon,
  },
  {
    title: 'Phoenix AI',

    subtitle: 'Conversational AI Assistant',

    description:
      'A conversational assistant delivering natural conversations, creative content, coding help, and productivity through a modern, responsive interface.',

    featured: true,

    status: 'Completed',

    images: [phoenixThumbnail, phoenixBanner, phoenixBanner1, phoenixBanner2],

    features: [
      'Human-like Conversational AI',
      'Context-Aware Multi-turn Chat',
      'Markdown & Rich Text Rendering',
      'Smart Prompt Suggestions',
      'Conversation History',
      'Secure Authentication',
    ],

    techStacks: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Google Gemini API',
      'Motion',
      'Vite',
    ],

    projectUrl: 'https://phoenix-three-rho.vercel.app/',

    githubUrl: 'https://github.com/basavarajakj/phoenix',
    bg: '#FAD8FD',
    Icon: ChatBotIcon,
  },
  {
    title: 'Style.loom',

    subtitle: 'Modern E-Commerce Platform',

    description:
      'Style.loom is a full-stack e-commerce platform supporting customers, vendors, and administrators with secure authentication, product management, payments, and a responsive shopping experience.',

    featured: true,

    status: 'In Progress',

    images: [styleLoom, styleLoom1, styleLoom2, styleLoom3],

    features: [
      'Multi-Role Authentication',
      'Vendor & Admin Dashboard',
      'Product & Inventory Management',
      'Shopping Cart & Checkout',
      'Stripe Payment Integration',
      'Advanced Data Tables',
    ],

    techStacks: [
      'React 19',
      'TanStack Start',
      'TypeScript',
      'Drizzle ORM',
      'Better Auth',
      'Stripe',
    ],

    // projectUrl: '...',

    githubUrl: 'https://github.com/basavarajakj/style-loom',
    bg: '#E2F1E6',
    Icon: ShoppingBag02Icon
  },
];

export const EXPERIENCES = [
  {
    company: 'CloudScale System',
    position: 'Senior Backend Engineer',
    joinDate: '2021',
    achievements: [
      'Led migration to microservices architecture, improving system scalability by 300%',
      'Mentored team of 8 junior developers',
    ],
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    company: 'Nexus Labs',
    position: 'Full Stack Developer',
    joinDate: '2019',
    resignDate: '2021',
    achievements: [
      'Built real-time analytics dashboard serving 50K+ users',
      'Implemented CI/CD pipeline reducing bugs by 60%',
    ],
    skills: ['View.js', 'Python', 'PostgreSQL'],
  },
];

export const EDUCATIONS = [
  {
    title: 'B.S. Computer Science',
    academy: 'Tech Institute of Excellence',
    year: '2019',
    certificate: 'Graduated with Honors',
    Icon: Globe02Icon,
    skills: ['Algorithm', 'Distributed Systems', 'ML'],
  },
  {
    title: 'AWS Certified Architect',
    academy: 'Amazon Web Services',
    year: '2022',
    certificate: 'Amazon Web Services',
    Icon: Globe02Icon,
    skills: ['Cloud Architecture', 'Security', 'Cost Optimization'],
  },
  {
    title: 'Google Cloud Professional',
    academy: 'Google Cloud',
    year: '2023',
    certificate: 'Google Cloud',
    Icon: Globe02Icon,
    skills: ['Infrastructure', 'DevOps', 'Networking'],
  },
];

export const TECH_STACKS = [
  {
    name: 'React',
    Icon: React,
  },
  {
    name: 'Next.js',
    Icon: NextJs,
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
  },
  {
    name: 'NodeJs',
    Icon: NodeJs,
  },
  {
    name: 'Docker',
    Icon: Docker,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQL,
  },
];

export const FOOTER_LINKS = [
  {
    url: '#',
    label: 'Resume',
  },
  {
    url: '#',
    label: 'LinkedIn',
  },
  {
    url: '#',
    label: 'Github',
  },
];
