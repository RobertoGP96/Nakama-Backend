import { categoryName } from "@prisma/client";

interface resourceItem {
  id: string;
  addres: string;
  
  type: categoryName;

  e_found: number;
  e_pending: number;
  e_ids: number[];
}

enum categoryR {
  "Película",
  "Serie",
  "Novela",
  "Documental",
  "Dorama",
  "Anime",
  "Reality",
  "Show"
}