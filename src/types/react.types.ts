import React from 'react';

export interface IChildren {
  children: React.ReactNode;
}

export interface IParams {
  params: Promise<{ slug: string }>;
}
