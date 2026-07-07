/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Assets
 */
import {
  ArrowUpRight01Icon,
  CheckmarkCircle01Icon,
  ExternalLinkIcon,
  SparklesIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

/**
 * Types
 */
import type { Project } from '@/types';
import type { HTMLMotionProps, Variants } from 'motion/react';
import Carousel from './ImageCarousel/Carousel';
import { useState } from 'react';
import { ProjectDialog } from './ProjectDialog';

/**
 * Motion variants
 */
const cardVariants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: 20 },
} satisfies Variants;

export function ProjectCardSm({
  project,
  ...props
}: React.ComponentProps<'div'> & { project: Project }) {
  const { Icon, title, description, bg } = project;
  const displayIcon = Icon || SparklesIcon;

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div
        className='relative flex items-center gap-4 bg-surface-container-low/70 p-3 not-last:mb-4 rounded-2xl transition-colors hover:bg-surface-container cursor-pointer group'
        {...props}
        onClick={() => setDialogOpen(true)}
      >
        <div
          className='size-12 shrink-0 grid place-items-center rounded-2xl'
          style={{ backgroundColor: bg }}
        >
          <HugeiconsIcon
            icon={displayIcon}
            size={20}
            className='text-black/70'
          />
        </div>

        <div>
          <div className='flex gap-2'>
            <h3 className='text-[16px] font-bold text-on-surface-variant flex items-center gap-2'>
              {title}
            </h3>
            <button className='cursor-pointer'>
              <HugeiconsIcon
                icon={ExternalLinkIcon}
                size={18}
                className='opacity-0 transition group-hover:opacity-100'
              />
            </button>
          </div>

          <p className='font-normal text-on-surface-variant/80 text-xs line-clamp-1'>
            {description}
          </p>
        </div>
      </div>

      <ProjectDialog
        open={dialogOpen}
        onOpen={() => setDialogOpen(false)}
        project={project}
      />
    </>
  );
}

export const ProjectCardLg = ({
  project,
  ...props
}: HTMLMotionProps<'div'> & {
  project: Project;
}) => {
  const {
    title,
    subtitle,
    description,
    features,
    projectUrl,
    githubUrl,
    techStacks,
    images,
    status,
  } = project;

  return (
    <motion.div
      className='group overflow-hidden rounded-[1.75rem] border border-outline-variant/70 bg-surface-container-high p-3 shadow-sm transition-[box-shadow,background-color,border-color] duration-300 hover:shadow-lg md:p-5'
      variants={cardVariants}
      {...props}
    >
      <div className='grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6'>
        <div className='overflow-hidden rounded-[1.25rem]'>
          <Carousel
            images={images}
            alt={title}
          />
        </div>

        <div className='flex flex-col justify-between gap-4'>
          <div className='space-y-3'>
            <div className='flex flex-wrap items-center gap-2'>
              <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary'>
                <HugeiconsIcon
                  icon={SparklesIcon}
                  size={14}
                />
                {status}
              </span>
              <span className='text-sm text-on-surface-variant'>
                {subtitle}
              </span>
            </div>

            <div className='space-y-2'>
              <h3 className='flex items-center gap-2 text-xl font-semibold text-on-surface'>
                {title}
                <HugeiconsIcon
                  icon={ExternalLinkIcon}
                  size={18}
                  className='opacity-70 transition-opacity group-hover:opacity-100'
                />
              </h3>
              <p className='text-sm leading-6 text-on-surface-variant'>
                {description}
              </p>
            </div>

            <div className='space-y-2'>
              <p className='text-sm font-semibold text-on-surface'>
                Highlights
              </p>
              <ul className='space-y-2'>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-2 text-sm text-on-surface-variant'
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={16}
                      className='mt-0.5 shrink-0 text-primary'
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='space-y-3'>
            <ul className='flex flex-wrap gap-2'>
              {techStacks.map((techStack, index) => (
                <li
                  key={`${techStack}-${index}`}
                  className='rounded-full border border-outline-variant/70 bg-surface-container px-2.5 py-1 text-[11px] font-medium tracking-[0.12em] text-on-surface-variant uppercase'
                >
                  {techStack}
                </li>
              ))}
            </ul>

            <div className='flex flex-wrap gap-3'>
              {projectUrl ? (
                <a
                  href={projectUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary transition hover:opacity-90'
                >
                  View project
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                  />
                </a>
              ) : null}

              {githubUrl ? (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface-variant transition hover:bg-surface-container'
                >
                  GitHub
                  <HugeiconsIcon
                    icon={ExternalLinkIcon}
                    size={16}
                  />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
