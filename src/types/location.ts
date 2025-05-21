import { LocationSchema } from "@/schemas/location";
import { z } from "zod";

export type Location = z.infer<typeof LocationSchema>
export type Country = Location['network']['autonomous_system']['country']