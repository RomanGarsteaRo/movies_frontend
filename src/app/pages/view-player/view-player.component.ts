import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {catchError, of, tap} from "rxjs";
import {IMovie} from "../../services/movie/movie.interface";

@Component({
  selector: 'app-view-player',
  standalone: true,
	imports: [
		NgIf
	],
  templateUrl: './view-player.component.html',
  styleUrl: './view-player.component.scss'
})
export class ViewPlayerComponent implements OnInit{

	videoSrc: string | null = null;
	movie!: IMovie;
	movieId!: string | null;

	constructor(private http: HttpClient,
				private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		// this.loadVideo('\\\\NAS\\MoviesB\\Movis\\10 Cloverfield Lane (2016).mkv');
		// this.loadVideo('\\\\NAS\\Movies\\100 Girls (2000).avi');
		// this.loadVideo('\\\\NAS\\Movies\\A Good Old Fashioned Orgy (2011).mkv');

		this.movie   = history.state.movie;
		this.movieId = this.route.snapshot.paramMap.get('id');
	}

	loadVideo(filename: string) {
		const url = `http://localhost:3000/player/play`;

		// Отправляем GET-запрос с параметром filename в виде query-параметра
		this.http.get(url, {
			params: { filename: filename },
			responseType: 'blob' // Ожидаем ответ в формате blob
		}).pipe(
			tap((response: Blob) => {
				const objectUrl = URL.createObjectURL(response);
				this.videoSrc = objectUrl;
				console.log('Video URL:', objectUrl);
			}),
			catchError((error) => {
				console.error('Ошибка при загрузке видео:', error);
				this.videoSrc = null;
				return of(null);
			})
		).subscribe();
	}


	// loadVideo(filename: string) {
	// 	const url = `http://localhost:3000/player/play`;
	// 	// `http://localhost:3000/player/play?filename=\\\\NAS\\Movies\\The Monster (1994).mkv`;
	//
	// 	const xhr = new XMLHttpRequest();
	// 	xhr.open('GET', `${url}?filename=${encodeURIComponent(filename)}`, true);
	//
	// 	// Устанавливаем начальный диапазон
	// 	xhr.setRequestHeader('Range', 'bytes=0-99999'); // Запрашиваем первые 100КБ
	// 	xhr.responseType = 'blob';
	//
	// 	xhr.onload = () => {
	// 		if (xhr.status === 206 || xhr.status === 200) {
	// 			const objectUrl = URL.createObjectURL(xhr.response);
	// 			this.videoSrc = objectUrl;
	// 			console.log('Video URL:', objectUrl);
	//
	// 			// Теперь, когда мы получили первые байты, мы можем запрашивать оставшиеся части
	// 			this.loadRemainingVideo(filename);
	// 		} else {
	// 			console.error('Ошибка при загрузке видео:', xhr.statusText);
	// 			this.videoSrc = null;
	// 		}
	// 	};
	//
	// 	xhr.onerror = () => {
	// 		console.error('Ошибка при загрузке видео:', xhr.statusText);
	// 		this.videoSrc = null;
	// 	};
	//
	// 	xhr.send();
	// }
	//
	// loadRemainingVideo(filename: string) {
	// 	const url = `http://localhost:3000/player/play`;
	// 	const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
	//
	// 	videoElement.addEventListener('playing', () => {
	// 		const currentTime = videoElement.currentTime;
	// 		const bytesPerSecond = 1024 * 1024; // примерная скорость загрузки
	// 		const startByte = Math.floor(currentTime * bytesPerSecond);
	// 		const endByte = startByte + bytesPerSecond - 1; // Запрашиваем 1МБ за раз
	//
	// 		const xhr = new XMLHttpRequest();
	// 		xhr.open('GET', `${url}?filename=${encodeURIComponent(filename)}`, true);
	// 		xhr.setRequestHeader('Range', `bytes=${startByte}-${endByte}`);
	// 		xhr.responseType = 'blob';
	//
	// 		xhr.onload = () => {
	// 			if (xhr.status === 206 || xhr.status === 200) {
	// 				const objectUrl = URL.createObjectURL(xhr.response);
	// 				// Здесь можно использовать objectUrl, чтобы обновить источник видео
	// 				console.log('Video URL:', objectUrl);
	// 			}
	// 		};
	//
	// 		xhr.onerror = () => {
	// 			console.error('Ошибка при загрузке видео:', xhr.statusText);
	// 		};
	//
	// 		xhr.send();
	// 	});
	// }


}
