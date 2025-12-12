export type { MenuGroup } from './admin-menu';
export type { MetaConfig, MetaProps, Routes } from './meta.types';

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
  Children,
  DivProps,
  IGlobalError,
  Params,
  SearchParams,
  SectionProps,
} from './next.types';

export type {
  Auth,
  IAiTraining,
  IBlog,
  IEvent,
  IJob,
  IJobType,
  IScrollingText,
  ITeamJoinRequest,
  ITeamMember,
  IUpcomingEvent,
  IUser,
} from './api.types';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}
