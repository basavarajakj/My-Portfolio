/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Types
 */
import type { HugeiconsIcon } from '@hugeicons/react';

export interface Project {
  Icon: HugeiconsIcon;
  bg: string;
  title: string;
  desc: string;
  techStacks: string[];
  projectUrl: string;
}
