import { $ } from 'bun'

await $`bunx supabase gen types typescript --project-id ${process.env.SUPABASE_PROJECT_ID} > src/generated/supabase-types.ts`
