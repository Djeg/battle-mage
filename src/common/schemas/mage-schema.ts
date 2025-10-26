import z from 'zod'

export const mageSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Mage = z.infer<typeof mageSchema>

export type MageInput = z.input<typeof mageSchema>
