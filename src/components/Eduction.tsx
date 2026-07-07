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
import { Mortarboard01Icon } from '@hugeicons/core-free-icons';

/**
 * Constants
 */
import { EDUCATIONS } from '@/constants';
import { HugeiconsIcon } from '@hugeicons/react';

export const Education = () => {
  return (
    <Card className='bg-surface-container-low flex flex-col gap-6 md:col-span-2'>
      <CardTitle className='flex items-center gap-2 mb-auto'>
        <HugeiconsIcon
          icon={Mortarboard01Icon}
          className='text-on-surface'
        />

        <h2 className='font-bold text-xl text-on-surface'>
          Education & Contributions
        </h2>
      </CardTitle>

      <ol className='flex flex-col gap-2'>
        {EDUCATIONS.map(
          (
            { Icon, title, description, academy, certificate, year, skills },
            index,
          ) => (
            <li
              className='flex items-start gap-3'
              key={index}
            >
              <div className='size-10 bg-primary-container grid place-content-center rounded-2xl text-on-primary-container'>
                <HugeiconsIcon
                  icon={Icon}
                  size={20}
                />
              </div>

              <div className='space-y-1'>
                <h3 className='font-bold text-sm text-on-surface'>{title}</h3>

                <p className='text-xs text-on-surface-variant/80'>
                  {certificate} • {year}
                </p>

                <p className='text-xs text-on-surface-variant/80'>{academy}</p>
                {description && (
                  <ul className='mt-2'>
                    {description.map((desc, index) => (
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

                        {desc}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className='flex flex-wrap gap-1 mt-2'>
                  {skills.map((skill, index) => (
                    <li
                      className='text-[10px] font-medium tracking-[0.1px] border border-outline-variant/60 py-0.5 px-2 rounded-2xl'
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ),
        )}
      </ol>
    </Card>
  );
};
