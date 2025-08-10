export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}
