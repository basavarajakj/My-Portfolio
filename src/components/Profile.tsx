/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Components
 */
import { HugeiconsIcon } from '@hugeicons/react';
import { Card } from './ui/Card';

/**
 * Assets
 */
import Avatar from '@/assets/avatar.png';
import { Location08Icon } from '@hugeicons/core-free-icons';
import { PROFILE_TAGS } from '@/constants';

export default function Profile() {
  return (
    <Card className='bg-primary-container text-on-primary-container flex flex-col gap-4 md:col-span-2 lg:col-span-3'>
      <div className='flex justify-between items-start'>
        <figure className='bg-background/50 size-18 p-2 rounded-xl'>
          <img
            src={Avatar}
            alt='Basavaraja KJ profile photo'
            className='object-cover rounded-lg'
          />
        </figure>

        <div className='text-right'>
          <span className='text-sm font-semibold text-primary'>Based in</span>

          <span className='flex items-center gap-1'>
            <HugeiconsIcon
              icon={Location08Icon}
              className='w-5'
            />
            <p className='font-bold text-lg'>Bengaluru, Ind</p>
          </span>
        </div>
      </div>

      <h2 className='text-3xl font-bold mt-auto'>
        Solving complex problems through elegant codebases.
      </h2>

      <div className='flex flex-wrap items-center gap-2'>
        {PROFILE_TAGS.map((tag) => (
          <span
            className='h-7 flex justify-center items-center text-xs font-medium tracking-[0.1px] text-on-surface px-3 rounded-full border border-outline/50'
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
