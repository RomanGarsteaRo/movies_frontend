import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";


@Injectable()
export abstract class UrlOmdb {
	public static url: string;
	public static key: string;
}
