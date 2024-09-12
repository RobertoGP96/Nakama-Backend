import z, { number } from "zod";

export const PreSaveSchema = z
  .object({
    pre_elements: z
      .number({
        invalid_type_error: "Elements must be a number array",
        required_error: "Elements is required",
      })
      .array(),
  })
  .partial();
export function validatePreSave(input) {
  return PreSaveSchema.safeParse(input);
}