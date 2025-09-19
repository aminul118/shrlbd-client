export type { MetaProps, Routes } from './meta.types';

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
  meta?: IMeta;
}

export type {
  DivProps,
  IChildren,
  IGlobalError,
  IParams,
  ISearchParams,
  SectionProps,
} from './react.types';

export type {
  IEvent,
  IScrollingText,
  ITeamMember,
  IUpcomingEvent,
} from './apiData.types';
