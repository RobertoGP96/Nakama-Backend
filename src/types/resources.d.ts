import { categoryName } from "@prisma/client";

interface resourceItem {
  id: string;
  addres: string;
  
  type: categoryName;

  e_found_count: number[];
  e_pending_count: number[];
  e_founds: number[];

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

type editResourse = Omit<resourceItem, 'id'>
type createResourse = Pick<resourceItem, 'addres' | 'type'>