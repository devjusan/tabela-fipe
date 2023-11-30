import { string, object } from 'zod';

export const fipeSchema = object({
  brandId: string().min(1),
  modelId: string().min(1),
  year: string().min(1)
});
