import z from 'zod'

export const newMageFormSchema = z.object({
  name: z.string().min(1),
})

export type NewMageForm = z.infer<typeof newMageFormSchema>

export type NewMageFormInput = z.input<typeof newMageFormSchema>
