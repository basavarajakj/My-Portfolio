/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */


/**
 * Hooks
 */
import { useState } from 'react';

/**
 * Components
 */
import { Card, CardTitle } from '@/components/ui/Card';
import { ProjectCardSm } from '@/components/ProjectCard';
import { AllProjectDialog } from '@/components/AllProjectDialog';

/**
 * Constants
 */
import { PROJECTS } from '@/constants';

/**
 * Assets
 */
import {
  CircleArrowUpRight02Icon,
  Layers01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';


export default function FeaturedProject() {
    const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Card className='bg-surface-container-highest md:col-span-2 lg:col-span-3'>
      <CardTitle className='flex items-center gap-2 mb-6'>
        <HugeiconsIcon
          icon={Layers01Icon}
          size={20}
        />

        <h2 className='text-xl font-bold text-on-surface-variant'>
          Featured projects
        </h2>

        <button className='ml-auto text-sm text-on-surface-variant font-medium flex items-center gap-1 cursor-pointer hover:underline '>
          View all
          <HugeiconsIcon
            icon={CircleArrowUpRight02Icon}
            size={18}
          />
        </button>

        <AllProjectDialog
          open={dialogOpen}
          onOpen={() => setDialogOpen(false)}
        />
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
