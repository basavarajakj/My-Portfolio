/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Card, CardTitle } from '@/components/ui/Card';
import { ProjectCardSm } from '@/components/ProjectCard';

/**
 * Constants
 */
import { PROJECTS } from '@/constants';

/**
 * Assets
 */
import {
  Layers01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function FeaturedProject() {


  return (
    <Card className='bg-surface-container-highest md:col-span-2 lg:col-span-3'>
      <CardTitle className='flex items-center gap-2 mb-3'>
        <HugeiconsIcon
          icon={Layers01Icon}
          size={20}
        />

        <h2 className='text-xl font-bold text-on-surface-variant'>
          Featured projects
        </h2>
       
      </CardTitle>

      {PROJECTS.map(
        (Project, index) =>
          index < 3 && (
            <ProjectCardSm
              key={index}
              project={Project}
            />
          ),
      )}
    </Card>
  );
}
