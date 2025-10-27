import { z } from "zod"

export const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
})

export const projectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  teamMembers: z.array(teamMemberSchema).min(1, "At least one team member is required"),
})

export type ProjectForm = z.infer<typeof projectSchema>
