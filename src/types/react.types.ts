import React from 'react';

export interface IChildren {
  children: React.ReactNode;
}

export interface IParams {
  params: Promise<{ slug: string }>;
}

export interface IGlobalError {
  error: Error & { digest?: string };
  reset: () => void;
}

export type ElementProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>;

export type DivProps = ElementProps<'div'>;
export type SectionProps = ElementProps<'div'>;
