import { OMDBServise } from "../services/omdb";
import { TmdbServise } from "../services/tmdb";

export function extractMetadata(itemCollect: elementDir, type: string) {
  TmdbServise.Search({
    pageParam: 1,
    search: itemCollect.title,
    type,
    year: itemCollect.year,
  }).then((results) => {
    if (results.total_results == 0) {
      return "";
    }
    if(results.results.length==0)
      return undefined
    else
    return results.results[0].id ;
  });
}
