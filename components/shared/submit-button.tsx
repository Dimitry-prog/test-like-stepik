'use client';

import Button from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import Loader from '@/components/shared/loader';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isDisabled={pending} aria-disabled={pending}>
      {pending ? <Loader /> : 'Submit'}
    </Button>
  );
};

export default SubmitButton;
