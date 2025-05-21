import { z } from "zod";

export const LocationSchema = z.object({
    network: z.object({
        autonomous_system: z.object({
            country: z.string(),
        })
    })
})

