import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";



const MOVIES = 'movies/';

class EndPointMovies {
	public static root = MOVIES;
	public static token = MOVIES + 'connect/token';
}

export class EndPoint {
	public static movies = EndPointMovies;
}



@Injectable()
export abstract class UrlBase {
	public static url: string;
}
