import { oldElement } from "../types/old_db";
import { TmdbServise } from "../services/tmdb";
import { OMDBServise } from "../services/omdb";
import { createElement } from "../types/element";
import { CollectInfo } from "./colect_info";

export async function BackupOldDB({ oldItem }: { oldItem: oldElement }) {
  TmdbServise.FindByImdbId({
    imdbId: oldItem.omdbDB.imdbID,
  }).then((tmdbIds) => {
    if (oldItem.omdbDB.Type == "movie") {
      const tmdbid = tmdbIds.movie_results[0].id+"";
      TmdbServise.BigQueryES( {  tmdbId:tmdbid, type: "movie", lang:"es-ES" } )
      .then((tmdbItem)=>{
        OMDBServise.getByID({id:oldItem.omdbDB.imdbID, type: "movie",year: oldItem.omdbDB.Year}).then((omdbItem)=>{
          return (CollectInfo.takeInfo({omdbItem, tmdbItem}))
        })
      })
    } else {
      const tmdbid = tmdbIds.movie_results[0].id+"";
      TmdbServise.BigQueryES( {  tmdbId:tmdbid, type: "tv", lang:"es-ES" } )
      .then((tmdbItem)=>{
        OMDBServise.getByID({id:oldItem.omdbDB.imdbID, type: "tv",year: oldItem.omdbDB.Year}).then((omdbItem)=>{
          return (CollectInfo.takeInfo({omdbItem, tmdbItem}))
        })
      })
    }
  });
}
