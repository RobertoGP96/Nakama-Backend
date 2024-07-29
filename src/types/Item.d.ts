
interface Item {
  id: string
  title: string
  description: string
  poster: string
  category: string
  rating: number
}
interface ResponseItem {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface TMDB_Response {
  page: number
  results: ResponseItem[]
  total_pages: number
  total_results: number
}

interface BackDrop {
  url: string
}

interface CodeGenre {
  [key: string]: string
}

interface ActorData {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}
