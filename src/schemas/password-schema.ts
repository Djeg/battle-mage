import z from 'zod'

export const passwordSchema = z
  .string()
  .min(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères',
  })
  .regex(/[A-Z0-9@$!%*?&]/, {
    message:
      'Le mot de passe doit contenir au moins une lettre majuscule, un chiffre et un caractère spécial (@$!%*?&)',
  })
