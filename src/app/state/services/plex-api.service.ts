import {Injectable} from "@angular/core";
import {HttpClient,} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class PlexApiService {

	private plexURL = "https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/library/sections/1/all?type=1&includeCollections=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.132.2&X-Plex-Client-Identifier=1zpukv230pz3zpwx8jf8r3nh&X-Plex-Platform=Chrome&X-Plex-Platform-Version=137.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Windows&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=2739x1178%2C3072x1728&X-Plex-Container-Start=0&X-Plex-Container-Size=977&X-Plex-Token=7JUGfzsLZmGo1xeNN32s&X-Plex-Provider-Version=6.5&X-Plex-Text-Format=plain&X-Plex-Language=en&includeAdvanced=1&includeMeta=1";
					      // "https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/library/sections/1/all?type=1&includeCollections=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.87.2 &X-Plex-Client-Identifier=1zpukv230pz3zpwx8jf8r3nh&X-Plex-Platform=Chrome&X-Plex-Platform-Version=126.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Windows&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x919%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=763&X-Plex-Token=uqUhdUPHx6rHGwZa2jg4&X-Plex-Provider-Version=5.1&X-Plex-Text-Format=plain&X-Plex-Language=en";
	constructor(private http: HttpClient) {}

	getAll(): Observable<any> {
		return this.http.get<any>(this.plexURL).pipe(
			map((data: any) => data?.MediaContainer?.Metadata),
			catchError(error => throwError(() => error))
		);
	}
}
