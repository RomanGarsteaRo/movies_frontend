import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";


@Injectable()
export abstract class UrlBase {

	public static url: string;
	protected constructor() {
		UrlBase.url = environment.baseUrl;
	}
}
