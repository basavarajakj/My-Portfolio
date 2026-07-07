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
import { useTheme } from './hooks/useTheme';

/**
 * Custom modules
 */
import { cn } from './lib/utils';

/**
 * Components
 */
import Header from './components/Header';
import Profile from './components/Profile';
import FeaturedProject from './components/FeaturedProject';
import { Experience } from './components/Experience';
import { Education } from './components/Eduction';
import { TechStack } from './components/TechStack';
import { Button } from './components/ui/Button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun02Icon } from '@hugeicons/core-free-icons';
import { Footer } from './components/Footer';

/**
 * Assets
 */

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-on-primary-container md:p-8 lg:p-12'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <Header />

        <motion.main
          className='grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Profile />

          <FeaturedProject />

          <Experience />

          <Education />

          <TechStack />
        </motion.main>
        <Footer />

        <Button
          size='iconSmall'
          className='fixed top-6 right-6 z-30 [&_svg]:transition-all [&_svg]:duration-250 *:absolute *:top-1/2 *:left-1/2 *:-translate-1/2'
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <HugeiconsIcon
            icon={Sun02Icon}
            className={cn(
              'opacity-0 rotate-0',
              isDark && 'opacity-100 rotate-180',
            )}
          />

          <HugeiconsIcon
            icon={Moon02Icon}
            className={cn(
              'opacity-0 rotate-180',
              !isDark && 'opacity-100 rotate-0',
            )}
          />
        </Button>
      </div>
    </div>
  );
}
