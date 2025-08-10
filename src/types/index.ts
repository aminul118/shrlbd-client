export type { IChildren, IParams } from './react.types';
export type { MetaProps, Routes } from './meta.types';
export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
