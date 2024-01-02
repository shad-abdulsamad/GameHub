/* import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";
import { FetchResponse } from "./useData";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const useGenres = ()=> useQuery({
    queryKey:["genres"],
    queryFn: ()=>{
        apiClient.get<FetchResponse<Genre>>("/genres").then(res=>res.data)
    }

});
 
export default useGenres; */

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (): UseQueryResult<FetchResponse<Genre>> =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24*60*60*1000,
    initialData: {count: genres.length, results: genres}
  });

export default useGenres;
