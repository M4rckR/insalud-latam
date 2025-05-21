import { LocationSchema } from "@/schemas/location";
import { z } from "zod";

export type Location = z.infer<typeof LocationSchema>