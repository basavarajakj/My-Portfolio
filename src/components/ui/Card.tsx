/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

export function Card({ children, className }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 shadow-sm transition-shadow  hover:shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, ...props }: React.ComponentProps<'div'>) {
  return <div {...props}>{children}</div>;
}
