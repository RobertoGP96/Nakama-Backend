import { oldElement } from "../../types/old_db";
import { TmdbServise } from "../../services/tmdb";
import { OMDBServise } from "../../services/omdb";
import { CollectInfo } from "../collect/colect_info";

import { ElementModel } from "../../models/element";
import { createElement } from "../../types/element";
export function BackupOldDBAltern({
  oldItem,
}: {
  oldItem: oldElement;
}): Promise<createElement> {
  return new Promise<createElement>((resolve, reject) => {
    TmdbServise.FindByImdbId({
      imdbId: oldItem.omdbDB.imdbID,
    })
      .then((tmdbIds) => {
        if (oldItem.omdbDB.Type == "movie") {
          const tmdbid = tmdbIds.movie_results[0].id + "";
          TmdbServise.BigQueryES({
            tmdbId: tmdbid,
            type: "movie",
            lang: "es-ES",
          })
            .then((tmdbItem) => {
              OMDBServise.getByID({
                id: oldItem.omdbDB.imdbID,
                type: "movie",
                year: oldItem.omdbDB.Year,
              })
                .then((omdbItem) => {
                  resolve(CollectInfo.takeInfo({ omdbItem, tmdbItem }));
                })
                .catch((error) => reject(error));
            })
            .catch((error) => reject(error));
        } else {
          const tmdbid = tmdbIds.movie_results[0].id + "";
          TmdbServise.BigQueryES({ tmdbId: tmdbid, type: "tv", lang: "es-ES" })
            .then((tmdbItem) => {
              OMDBServise.getByID({
                id: oldItem.omdbDB.imdbID,
                type: "tv",
                year: oldItem.omdbDB.Year,
              })
                .then((omdbItem) => {
                  resolve(CollectInfo.takeInfo({ omdbItem, tmdbItem }));
                })
                .catch((error) => reject(error));
            })
            .catch((error) => reject(error));
        }
      })
      .catch((error) => reject(error));
  });
}
export async function BackupOldDB({ oldItem }: { oldItem: oldElement }) {
  TmdbServise.FindByImdbId({
    imdbId: oldItem.omdbDB.imdbID,
  }).then((tmdbIds) => {
    if (oldItem.omdbDB.Type == "movie") {
      const tmdbid = tmdbIds.movie_results[0].id + "";
      TmdbServise.BigQueryES({
        tmdbId: tmdbid,
        type: "movie",
        lang: "es-ES",
      }).then((tmdbItem) => {
        OMDBServise.getByID({
          id: oldItem.omdbDB.imdbID,
          type: "movie",
          year: oldItem.omdbDB.Year,
        }).then((omdbItem) => {
          return CollectInfo.takeInfo({ omdbItem, tmdbItem });
        });
      });
    } else {
      const tmdbid = tmdbIds.movie_results[0].id + "";
      TmdbServise.BigQueryES({
        tmdbId: tmdbid,
        type: "tv",
        lang: "es-ES",
      }).then((tmdbItem) => {
        OMDBServise.getByID({
          id: oldItem.omdbDB.imdbID,
          type: "tv",
          year: oldItem.omdbDB.Year,
        }).then((omdbItem) => {
          return ElementModel.create({
            input: CollectInfo.takeInfo({ omdbItem, tmdbItem }),
          });
        });
      });
    }
  });
}
