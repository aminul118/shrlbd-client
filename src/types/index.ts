export type { MenuGroup } from './admin-menu';
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
} from './next.types';

export type {
  IAiTraining,
  IEvent,
  IScrollingText,
  ITeamMember,
  IUpcomingEvent,
} from './apiData.types';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}
