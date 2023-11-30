import { z } from 'zod';

export const FipeSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string()
});
