'use client';

import { useEffect, useId, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export default function ModeToggle() {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(true);
  const { setTheme } = useTheme();

  // Apply theme when checked changes
  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={setChecked} aria-label="Toggle switch" />
      <Label htmlFor={id}>
        <span className="sr-only">Toggle switch</span>
        {checked ? (
          <MoonIcon size={16} aria-hidden="true" />
        ) : (
          <SunIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
