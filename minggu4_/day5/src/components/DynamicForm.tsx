// src/components/DynamicForm.tsx
import React from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema } from "../lib/validations"
import type { ProjectForm } from "../lib/validations"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function DynamicForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      teamMembers: [{ name: "", email: "", role: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "teamMembers",
  })

  const onSubmit = async (data: ProjectForm) => {
    // simulate api
    await new Promise((r) => setTimeout(r, 800))
    console.log("Submitted project:", data)
    alert("Project submitted! Cek console.")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold">Create Project</h2>

      {/* Project Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Project Name</label>
        <Input {...register("projectName")} placeholder="Project name" />
        {errors.projectName && (
          <p className="text-sm text-red-600 mt-1">{errors.projectName.message}</p>
        )}
      </div>

      {/* Team Members */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Team Members</h3>
          <Button
            type="button"
            onClick={() => append({ name: "", email: "", role: "" })}
            className="text-sm"
          >
            + Add Member
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="p-4 border rounded-md space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Member {index + 1}</span>
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                  className="text-sm"
                >
                  Remove
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <Input
                  {...register(`teamMembers.${index}.name` as const)}
                  placeholder="Full name"
                />
                {errors.teamMembers?.[index]?.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.name?.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input
                  {...register(`teamMembers.${index}.email` as const)}
                  type="email"
                  placeholder="member@example.com"
                />
                {errors.teamMembers?.[index]?.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.email?.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">Role</label>
                <Input
                  {...register(`teamMembers.${index}.role` as const)}
                  placeholder="Role (e.g. Frontend)"
                />
                {errors.teamMembers?.[index]?.role && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.teamMembers[index]?.role?.message as string}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Show top-level teamMembers error (e.g. min length) */}
        {errors.teamMembers && !Array.isArray(errors.teamMembers) && (
          // If zod returns top-level array error, show generic message
          <p className="text-sm text-red-600">{(errors.teamMembers as any).message}</p>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Project"}
        </Button>
      </div>
    </form>
  )
}
