import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";


@Injectable()
export abstract class UrlOmdb {

	public static url: string;
	public static key: string;

	private constructor() {
		UrlOmdb.url = environment.omdbUrl
		UrlOmdb.key = environment.omdbKey
	}

}
