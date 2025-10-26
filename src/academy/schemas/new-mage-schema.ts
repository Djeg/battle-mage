import z from 'zod'

export const newMageSchema = z.object({
  name: z.string().min(1),
})

export type NewMage = z.infer<typeof newMageSchema>

export type NewMageInput = z.input<typeof newMageSchema>
