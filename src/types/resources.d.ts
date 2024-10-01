import { categoryName } from "@prisma/client";

interface resourceItem {
  id: string;
  addres: string;
  
  device: string;

  type: categoryName;
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