/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Types
 */
// import { Globe02Icon } from '@hugeicons/core-free-icons';

// export type HugeIconType = typeof Globe02Icon;

export interface Project {
  title: string;
  subtitle: string;

  description: string;

  images: string[];

  features: string[];

  techStacks: string[];

  projectUrl?: string;

  githubUrl: string;

  featured?: boolean;

  status: 'Completed' | 'In Progress';
  bg?: string;
  Icon?: any;
}
