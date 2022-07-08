interface IHttpClient{
  status?: number,
  statusText?: string
}

interface IGetAutenticationLogin extends IHttpClient{
  success: boolean,
  expires_at: string,
  request_token: string
}

interface IGetSession extends IHttpClient{
  success: boolean,
  session_id: string,
  status_message?: string,
  status_code?: number
}

type BodyTypes = IBodyList | IBodyListAddMovie | IBodyLogin | IBodySession

interface IGetReturn extends IHttpClient{
    url : string,
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    body?: BodyInit | null | BodyTypes
}

interface IGetToken extends IHttpClient{
  success: boolean,
  expires_at: string,
  request_token: string
}

interface IBodyLogin{
  username: string,
  password: string,
  request_token: string
}

interface IBodyList{
  name: string,
  description: string,
  language: "pt-br"
}

interface IBodyListAddMovie{
  media_id: string
}

interface IBodySession{
  request_token: string
}

interface IFilmeResultados extends IHttpClient{
  adult: boolean,
  backdrop_path: string,
  genre_ids: string[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

interface IFilmeResposta extends IHttpClient{
  page: number,
  results: IFilmeResultados[],
  total_pages: number,
  total_results: number
}

interface ICreateList extends IHttpClient{
  status_message: string,
  success: boolean,
  status_code: number,
  list_id: string
}

interface IAddMovieToList extends IHttpClient{
  success: boolean,
  status_code: number,
  status_message: string
}

interface IGetList extends IHttpClient{
  create_by: string,
  description: string,
  favorite_count: number,
  id: string,
  items: IFilmeResultados[],
  item_count: number,
  iso_639_1: string,
  name: string,
  poster_path: string | null
}
