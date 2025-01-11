// Copied from Prisma Schema on backend
export type Pets = {
  id: number;
  name: string | null;
  category: string;
  subcategory: string;
  price: number | null;
  description: string | null;
  vaccinated: boolean | null;
  image_url: string | null;
}
