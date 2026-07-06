/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Card, CardTitle } from '@/components/ui/Card';

/**
 * Assets
 */
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Briefcase01Icon,
} from '@hugeicons/core-free-icons';

/**
 * Constants
 */
import { EXPERIENCES } from '@/constants';

export const Experience = () => {
  return (
    <Card className='bg-surface-container md:col-span-2'>
      <CardTitle className='flex items-center gap-2 mb-6'>
        <HugeiconsIcon icon={Briefcase01Icon} />

        <h2 className='font-bold text-xl text-on-surface'>Experience</h2>
      </CardTitle>

      <ol className='space-y-5'>
        {EXPERIENCES.map(
          (
            { joinDate, resignDate, position, company, achievements, skills },
            index,
          ) => (
            <li
              key={index}
              className='px-7 text-on-surface-variant relative before:absolute before:left-0 before:top-0 before:bg-primary before:size-4 before:rounded-full after:absolute after:left-1.75 after:top-0 after:bg-primary/15 after:w-0.5 after:h-full'
            >
              <p className='text-xs font-bold text-primary mb-2'>
                {joinDate} - {!resignDate ? 'Present' : resignDate}
              </p>

              <h3 className='font-bold text-on-surface mb-2'>{position}</h3>

              <p className='text-sm'>{company}</p>

              <ul className='mt-2'>
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-2 text-xs mt-1'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide text-primary lucide-trending-up-icon lucide-trending-up w-4 h-4 mt-0.5'
                      aria-hidden
                    >
                      <path d='M16 7h6v6' />
                      <path d='m22 7-8.5 8.5-5-5L2 17' />
                    </svg>

                    {achievement}
                  </li>
                ))}
              </ul>

              <div className='flex items-center gap-1 mt-2'>
                {skills.map((skill, index) => (
                  <span
                    className='block px-2 py-0.5 text-[10px] font-medium tracking-[0.1px] bg-primary-container text-on-primary-container rounded-2xl'
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ),
        )}
      </ol>
    </Card>
  );
};
