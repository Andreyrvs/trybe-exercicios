import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlade: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };