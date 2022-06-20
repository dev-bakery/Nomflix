const API_KEY = "f9d745ac97aea7b5dc148567c07bcbb2";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_result: number;
}

interface ITv {
    id: number;
    poster_path: string;
    original_name: string;
    overview: string;
}

export interface IGetTvs {
    page: number;
    results: ITv[];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}

export function getTvs() {
    return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}

