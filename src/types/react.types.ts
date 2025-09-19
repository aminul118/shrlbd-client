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
export type SectionProps = ElementProps<'section'>;

export interface IApiParams {
  [key: string]: string | number | undefined;
}

export interface IFetchOptions {
  cache?: RequestCache; // 'force-cache' | 'no-store' | 'reload' | 'only-if-cached'
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export interface ISearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
