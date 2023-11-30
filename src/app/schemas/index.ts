import { string, number, object } from 'zod';

export const fipeSchema = object({
  brandId: string().min(1),
  modelId: number().min(1),
  year: string().min(1)
});
