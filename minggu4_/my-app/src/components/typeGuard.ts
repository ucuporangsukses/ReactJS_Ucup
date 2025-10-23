export type User = {
  id: number;
  name: string;
  email: string;
};

export function isUserArray(data: unknown): data is User[] {
  return Array.isArray(data) && data.every(
    item => typeof item === "object" && item !== null && "id" in item && "name" in item && "email" in item
  );
}
