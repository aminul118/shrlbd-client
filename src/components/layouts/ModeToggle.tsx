'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useId } from 'react';

export default function ModeToggle() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  const checked = theme === 'dark';

  const handleToggle = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
      <Label htmlFor={id}>
        {checked ? (
          <MoonIcon size={16} aria-hidden="true" />
        ) : (
          <SunIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
