/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */
/**
 * Components
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { ProjectCardLg } from '@/components/ProjectCard';

/**
 * Types
 */
import type { Project } from '@/types';
type ProjectDialogProps = {
  open: boolean;
  onOpen: () => void;
  project: Project;
};

export const ProjectDialog = ({
  open,
  onOpen,
  project,
}: ProjectDialogProps) => {
  return (
    <Dialog
      open={open}
      onOpen={onOpen}
      className='max-w-4xl max-h-[90vh] overflow-hidden p-4'
    >
      <DialogHeader onOpen={onOpen}>
        <DialogTitle>{project.title} - {project.subtitle}</DialogTitle>
      </DialogHeader>

      <DialogContent className='grid max-h-[70vh] grid-cols-1 gap-4 overflow-y-auto md:overflow-hidden pr-1 mt-3'>
        <ProjectCardLg project={project} />
      </DialogContent>
    </Dialog>
  );
};
