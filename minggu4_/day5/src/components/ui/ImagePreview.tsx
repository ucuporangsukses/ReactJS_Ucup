// src/ui/ImagePreview.tsx
interface ImagePreviewProps {
  fileUrl: string | null;
}

export function ImagePreview({ fileUrl }: ImagePreviewProps) {
  if (!fileUrl) return null;
  return (
    <img
      src={fileUrl}
      alt="preview"
      className="w-40 h-40 object-cover rounded-md border"
    />
  );
}
