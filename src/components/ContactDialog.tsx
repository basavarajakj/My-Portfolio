/**
 * @copyright 2026 Basavaraja KJ
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import emailjs from '@emailjs/browser';

/**
 * Hooks
 */
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type SubmitEventHandler,
} from 'react';

/**
 * Custom module
 */
import { cn } from '@/lib/utils';

/**
 * Assets
 */
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Alert02Icon,
  CheckmarkCircle03Icon,
  LoaderCircle,
  Sent02Icon,
} from '@hugeicons/core-free-icons';

/**
 * Components
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/Dialog';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/Textarea';
import { Button } from './ui/Button';

/**
 * Types
 */
type FormState = 'idle' | 'submitting' | 'failed' | 'success';
type ContactDialogProps = { open: boolean; onOpen: () => void };

export function ContactDialog({ open, onOpen }: ContactDialogProps) {
  const form = useRef<HTMLFormElement>(null);
  const [formSate, setFormSate] = useState<FormState>('idle');

  const sendEmail: SubmitEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      if (!form.current) return;

      setFormSate('submitting');

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          },
        );

        setFormSate('success');
      } catch (err) {
        setFormSate('failed');
        console.log(err);
      } finally {
        setTimeout(() => {
          setFormSate('idle');
          onOpen();
        }, 2000);
      }
    },
    [form.current],
  );

  const formStateIcon = useMemo(
    () => ({
      idle: <HugeiconsIcon icon={Sent02Icon} />,
      submitting: (
        <HugeiconsIcon
          icon={LoaderCircle}
          className='animate-spin'
        />
      ),
      success: <HugeiconsIcon icon={CheckmarkCircle03Icon} />,
      failed: <HugeiconsIcon icon={Alert02Icon} />,
    }),
    [],
  );

  const formStateLabel = useMemo(
    () => ({
      idle: 'Send Message',
      submitting: 'Submitting...',
      success: 'Success',
      failed: 'Something went wrong',
    }),
    [],
  );
  return (
    <Dialog
      open={open}
      onOpen={onOpen}
    >
      <DialogHeader onOpen={onOpen}>
        <DialogTitle>Let's Connect</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='space-y-4'
        >
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              type='text'
              name='name'
              placeholder='You name'
              required
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='jhon@example.com'
              required
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>
            <TextArea
              name='message'
              id='message'
              placeholder='Tell me about your project'
              required
            />
          </div>

          <Button
            className={cn(
              'w-full',
              formSate === 'failed' && 'bg-error text-on-error',
            )}
            disabled={formSate === 'submitting'}
          >
            {formStateIcon[formSate]}
            {formStateLabel[formSate]}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
