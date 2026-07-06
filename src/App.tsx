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
import { useEffect } from 'react';

/**
 * Custom modules
 */
import { cn } from './lib/utils';

/**
 * Components
 */
import Header from './components/Header';
import Profile from './components/Profile';

/**
 * Assets
 */

export default function App() {
  return (
    <div className='min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-on-primary-container md:p-8 lg:p-12'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <Header />

        <motion.main>
          <Profile />
        </motion.main>
      </div>
    </div>
  );
}
