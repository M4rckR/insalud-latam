import { z } from "zod";

export const LocationSchema = z.object({
    country: z.string(),
})