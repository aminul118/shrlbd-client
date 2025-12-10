'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/ui/submit-button';
import { Textarea } from '@/components/ui/textarea';

import { contactAction } from '@/services/contact/contact';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const ContactForm2 = () => {
  const [state, formAction] = useActionState(contactAction, null);
  console.log(state);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success('Message sent successfully!');
    } else {
      toast.error('Failed to send message.');
    }
  }, [state, toast]);

  return (
    <>
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input name="name" placeholder="John Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="john@doe.com" />
        </div>
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input name="subject" placeholder="Subject" />
        </div>
        <div>
          <Label htmlFor="Message">Message</Label>
          <Textarea
            name="message"
            placeholder="Write something.."
            className="h-38"
          />
        </div>
        <SubmitButton text="Submit" />
      </form>
    </>
  );
};

export default ContactForm2;
