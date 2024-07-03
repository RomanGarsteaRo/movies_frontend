/*

	// 1. ////////////////////////////////////////////////////
	public getList(): Observable<INasExtended[]> {
		const url: string = this.nasBaseURL;
		return this.http.get<INasExtended[]>(url).pipe(
			tap(arr => this.init(arr)),

			// Temporarily.
			// GET JSON from OMDB
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(0,20))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(20,25))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(25,100))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(100,200))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(200,400))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(400, 500))),
			// mergeMap(arr => this.processMovieList(this.enTitle.slice(500, 592))),
		);
	}


	private processMovieList(arr: INasExtended[]): Observable<INasExtended[]> {
		return from(arr).pipe(
			mergeMap(movie => this.processMovie(movie)),
			toArray(),
			tap(arr => console.log(arr)),
		);
	}

	private processMovie(movie: INasExtended): Observable<INasExtended> {
		return this.http.get<any>(`${this.omdbBaseURL + movie.title}`).pipe(
			map(movieDetails => movieDetails)
		);
	}







	// 2. ////////////////////////////////////////////////////
	this.omdb = this.deleteDuplicateInOmdbJson(this.omdb);
	private deleteDuplicateInOmdbJson(arr: IOmdb[]): any[]{
		// console.log(arr.length);
		let notDuplicateTitle: Set<string> = new Set<string>();
		let newArr: IOmdb[] = [];
		// let duplicateArr: IOmdb[] = [];
		arr.forEach(item => {
			if(item?.Title && !notDuplicateTitle.has(item.Title)) {
				notDuplicateTitle.add(item.Title);
				newArr.push(item);
			} else {
				// duplicateArr.push(item);
			}

		})
		// console.log(newArr.length);
		// console.log(arr.length - newArr.length);
		// console.log(duplicateArr);
		// console.log(newArr);

		return newArr;
	}






	// 3. ////////////////////////////////////////////////////
	//  Temporarily.
	//  Transform Omdb JSON for DB. Preparing data for write in DB.


	// Exclude property 'Ratings'
	// Add     property 'RottRating'  ("Rotten Tomatoes Rating")
	private transformOMDB() {
		this.omdb = this.omdb.map(item => {
			const { Ratings, ...remainingObject} = item;
			const newObj: any = {};
			if (Ratings) {
				for(let i = 0; i <= Ratings.length; i++) {
					if (Ratings[i]?.Source === "Rotten Tomatoes") {
						newObj['RottRating'] = Ratings[i].Value;
					}
				}
			}
			return {...remainingObject, ...newObj};
		});
	}



*/
