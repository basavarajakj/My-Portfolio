/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion, stagger } from 'motion/react';
import { AnimatePresence } from 'motion/react';

/**
 * custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Button } from '@/components/ui/Button';

/**
 * Types
 */
import type { HTMLMotionProps } from 'motion/react';
import type { Variants } from 'motion';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
type DialogProps = { open: boolean; onOpen: () => void };

/**
 * Motion variants
 */
const dialogVariants = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delayChildren: stagger(0.05, { startDelay: 0.2 }) },
  },
  close: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
} satisfies Variants;

export function Dialog({
  children,
  className,
  open,
  onOpen,
  ...props
}: HTMLMotionProps<'div'> & DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={cn(
              'fixed left-1/2 top-1/2 z-50 w-[min(92vw,32rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-background p-6 shadow-2xl sm:p-8',
              className,
            )}
            variants={dialogVariants}
            initial='close'
            exit='close'
            animate='open'
            {...props}
          >
            {children}
          </motion.div>

          <motion.div
            className='fixed inset-0 bg-scrim/50 backdrop-blur-sm z-40'
            onClick={onOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export const DialogHeader = ({
  children,
  onOpen,
}: React.PropsWithChildren & { onOpen: () => void }) => {
  return (
    <div className='flex justify-between items-center mb-6 '>
      {children}

      <Button
        variant='ghost'
        size='iconSmall'
        onClick={onOpen}
        aria-label='Close dialog'
      >
        <HugeiconsIcon icon={Cancel01Icon} />
      </Button>
    </div>
  );
};

export const DialogTitle = ({ children }: React.PropsWithChildren) => {
  return <h2 className='text-3xl font-bold text-on-surface'>{children}</h2>;
};

export const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
};
