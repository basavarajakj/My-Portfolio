/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Hooks
 */
import { useState } from 'react';

/**
 * Components
 */
import { Button } from '@/components/ui/Button';
import { ContactDialog } from './ContactDialog';

/**
 * Assets
 */
import {
  GithubIcon,
  Linkedin02Icon,
  MailAtSign01Icon,
  SparklesIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <header className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
      <motion.div
        className='space-y-2'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className='flex items-center gap-2 text-primary font-semibold tracking-tight'>
          <HugeiconsIcon icon={SparklesIcon} />
          <p>Front end developer</p>
        </div>

        <h1 className='text-4xl font-bold tracking-tight text-on-background md:text-7xl'>
          Basavaraja KJ <span className='text-primary'>(Bassu)</span>
        </h1>

        <p className='text-xl text-on-surface-variant max-w-xl leading-relaxed'>
          Crafting fluid digital experience where code meets human-centric
          design. Focused on scalable React ecosystems and robust cloud
          architecture
        </p>
      </motion.div>

      <motion.div
        className='flex gap-4'
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Button onClick={() => setDialogOpen(true)}>
          <HugeiconsIcon icon={MailAtSign01Icon} />
          Let's Connect
        </Button>

        <ContactDialog
          open={dialogOpen}
          onOpen={() => setDialogOpen(false)}
        />

        <div className='flex gap-2'>
          <Button
            variant='secondary'
            size='icon'
            asChild
          >
            <a
              href='https://github.com/basavarajakj'
              target='_blank'
              aria-label="Basavaraja's Github"
            >
              <HugeiconsIcon icon={GithubIcon} />
            </a>
          </Button>

          <Button
            variant='secondary'
            size='icon'
            asChild
          >
            <a
              href='www.linkedin.com/in/basavarajakj'
              target='_blank'
              aria-label="Basavaraja's linkedin"
            >
              <HugeiconsIcon icon={Linkedin02Icon} />
            </a>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
