import envVars from '@/config/env.config';
import axios from 'axios';

export const useAxios = axios.create({
  baseURL: envVars.baseUrl,
});
