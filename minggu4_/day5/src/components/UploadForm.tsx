// src/components/UploadForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePreview } from "../components/ui/ImagePreview"

const uploadSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  file: z
    .any()
    .refine((files) => files?.length > 0, "File wajib diupload")
    .refine((files) => files?.[0]?.type.startsWith("image/"), "File harus gambar"),
});

type UploadFormData = z.infer<typeof uploadSchema>;

export function UploadForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadFormData>({ resolver: zodResolver(uploadSchema) });

  const onSubmit = (data: UploadFormData) => {
    alert("Form submitted cuy ✅");
    console.log("DATA:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register("title")}
          placeholder="Judul gambar..."
          className="border px-2 py-1 rounded w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <input
          type="file"
          accept="image/*"
          {...register("file")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className="border px-2 py-1 rounded w-full"
        />
        {errors.file && <p className="text-red-500">{errors.file.message}</p>}
      </div>

      <ImagePreview fileUrl={preview} />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
}
