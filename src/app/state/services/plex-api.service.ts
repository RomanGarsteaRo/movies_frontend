import {Injectable} from "@angular/core";
import {HttpClient,} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {IPlex} from "../models/plex.interface";

@Injectable({
	providedIn: 'root'
})
export class PlexApiService {

	private plexURL = "https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/library/sections/1/all?type=1&includeCollections=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.87.2&X-Plex-Client-Identifier=yxti8gld2yndgo8hh9zauojl&X-Plex-Platform=Chrome&X-Plex-Platform-Version=126.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Windows&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x919%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=763&X-Plex-Token=uqUhdUPHx6rHGwZa2jg4&X-Plex-Provider-Version=5.1&X-Plex-Text-Format=plain&X-Plex-Language=en";

	constructor(private http: HttpClient) {}

	getAll(): Observable<any> {
		return this.http.get<any>(this.plexURL).pipe(
			map((data: any) => data?.MediaContainer?.Metadata),
			catchError(error => throwError(() => error))
		);
	}
}
