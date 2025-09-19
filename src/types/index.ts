export type { MetaProps, Routes } from './meta.types';
export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export type {
  DivProps,
  IChildren,
  IGlobalError,
  IParams,
  SectionProps,
} from './react.types';

export type {
  IEvent,
  IScrollingText,
  ITeamMember,
  IUpcomingEvent,
} from './apiData.types';
