export type { MetaProps, Routes } from './meta.types';
export type {
  DivProps,
  IChildren,
  IGlobalError,
  IParams,
  SectionProps,
} from './react.types';

export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
