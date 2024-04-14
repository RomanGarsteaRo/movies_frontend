// export const path = 'http://www.omdbapi.com/?t=oblivion&plot=full&apikey=8adee8c7';
// export const path = 'http://www.omdbapi.com/?t=Warrior &plot=full&apikey=8adee8c7&y=2011';

export interface IOmdb {
	"Title"?: string,
	"Year"?: string,
	"Rated"?: string,
	"Released"?: string,
	"Runtime"?: string,
	"Genre"?: string,
	"Director"?: string,
	"Writer"?: string,
	"Actors"?: string,
	"Plot"?: string,
	"Language"?: string,
	"Country"?: string,
	"Awards"?: string,
	"Poster"?: string,
	"Ratings"?: {"Source": string, "Value": string }[],
	"Metascore"?: string,
	"imdbRating"?: string,
	"imdbVotes"?: string,
	"imdbID"?: string,
	"Type"?: string,
	"DVD"?: string,
	"BoxOffice"?: string,
	"Production"?: string,
	"Website"?: string,
	"totalSeasons"?: string,
	"Response"?: string,
	"Error"?: string
}


export const json_omdb: IOmdb[] = [
	{
		"Title": "1917",
		"Year": "2019",
		"Rated": "R",
		"Released": "10 Jan 2020",
		"Runtime": "119 min",
		"Genre": "Action, Drama, War",
		"Director": "Sam Mendes",
		"Writer": "Sam Mendes, Krysty Wilson-Cairns",
		"Actors": "Dean-Charles Chapman, George MacKay, Daniel Mays",
		"Plot": "April 1917, the Western Front. Two British soldiers are sent to deliver an urgent message to an isolated regiment. If the message is not received in time the regiment will walk into a trap and be massacred. To get to the regiment they will need to cross through enemy territory. Time is of the essence and the journey will be fraught with danger.",
		"Language": "English, French, German",
		"Country": "United Kingdom, United States, India, Spain",
		"Awards": "Won 3 Oscars. 135 wins & 207 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "78/100"
			}
		],
		"Metascore": "78",
		"imdbRating": "8.2",
		"imdbVotes": "669,206",
		"imdbID": "tt8579674",
		"Type": "movie",
		"DVD": "25 Dec 2019",
		"BoxOffice": "$159,227,644",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "3:10 to Yuma",
		"Year": "2007",
		"Rated": "R",
		"Released": "07 Sep 2007",
		"Runtime": "122 min",
		"Genre": "Action, Crime, Drama",
		"Director": "James Mangold",
		"Writer": "Halsted Welles, Michael Brandt, Derek Haas",
		"Actors": "Russell Crowe, Christian Bale, Ben Foster",
		"Plot": "Rancher Dan Evans heads into Bisbee to clear up issues concerning the sale of his land when he witnesses the closing events of a stagecoach robbery led by famed outlaw Ben Wade. Shortly thereafter, Wade is captured by the law in Bisbee and Evans finds himself one of the escorts who will take Wade to the 3:10 to Yuma train in Contention for the reward of $200. Evans' effort to take Wade to the station is in part an effort to save his land but also part of an inner battle to determine whether he can be more than just a naive rancher in the eyes of his impetuous and gun slinging son William Evans. The transport to Contention is hazardous and filled with ambushes by Indians, pursuits by Wade's vengeful gang and Wade's own conniving and surreptitious demeanor that makes the ride all the more intense.",
		"Language": "English, Chinese",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 3 wins & 32 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "7.6",
		"imdbVotes": "330,229",
		"imdbID": "tt0381849",
		"Type": "movie",
		"DVD": "14 Dec 2015",
		"BoxOffice": "$53,606,916",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "27 Dresses",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "18 Jan 2008",
		"Runtime": "111 min",
		"Genre": "Comedy, Romance",
		"Director": "Anne Fletcher",
		"Writer": "Aline Brosh McKenna",
		"Actors": "Katherine Heigl, James Marsden, Malin Akerman",
		"Plot": "Two things about Jane: she never says no to her friends (she's been a bridesmaid 27 times and selflessly plans friends' weddings), and she's in love with her boss, George, nurturing dreams of a lovely, romantic wedding of her own. She meets Kevin, a cynical writer who finds her attractive, and that same week her flirtatious younger sister Tess comes to town. Jane silently watches George fall for Tess, a manipulative pretender. Worse, Jane may be called upon to plan their wedding. Meanwhile, Kevin tries to get Jane's attention and has an idea that may advance his career. Can Jane uncork her feelings?",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjgwODVmMjItMTk4Mi00ZTUxLWE5OTgtYzUxMDJmODBhNmYxXkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "40%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.1",
		"imdbVotes": "174,154",
		"imdbID": "tt0988595",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$76,808,654",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "6 Souls",
		"Year": "2010",
		"Rated": "R",
		"Released": "01 Mar 2013",
		"Runtime": "112 min",
		"Genre": "Horror, Thriller",
		"Director": "Måns Mårlind, Björn Stein",
		"Writer": "Michael Cooney",
		"Actors": "Julianne Moore, Jonathan Rhys Meyers, Jeffrey DeMunn",
		"Plot": "After the death of her husband, Dr. Cara Harding's faith in God has been shaken, but not her belief in science. In an attempt to get her more open to accepting unexplainable psychiatric theories, her father introduces her to Adam, a patient with multiple personalities who also takes on some of the physical characteristics of his other personalities. But Cara quickly discovers that his other personalities were murder victims and the more she finds out about Adam and his past, the closer she and her loved ones are to becoming murder victims themselves.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM3Njk3ODA2M15BMl5BanBnXkFtZTcwNzUzOTMxOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "7%"
			},
			{
				"Source": "Metacritic",
				"Value": "28/100"
			}
		],
		"Metascore": "28",
		"imdbRating": "6.0",
		"imdbVotes": "36,444",
		"imdbID": "tt1179069",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Most Violent Year",
		"Year": "2014",
		"Rated": "R",
		"Released": "30 Jan 2015",
		"Runtime": "125 min",
		"Genre": "Action, Crime, Drama",
		"Director": "J.C. Chandor",
		"Writer": "J.C. Chandor",
		"Actors": "Oscar Isaac, Jessica Chastain, David Oyelowo",
		"Plot": "A crime drama set in New York City during the winter of 1981, statistically one of the most violent years in the city's history, and centered on the lives of an immigrant and his family trying to expand their business and capitalize on opportunities as the rampant violence, decay, and corruption of the day drag them in and threaten to destroy all they have built.",
		"Language": "English, Spanish",
		"Country": "United States, United Arab Emirates",
		"Awards": "15 wins & 52 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE4OTY4ODg3Ml5BMl5BanBnXkFtZTgwMTI1MTg1MzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "7.0",
		"imdbVotes": "76,903",
		"imdbID": "tt2937898",
		"Type": "movie",
		"DVD": "10 Mar 2016",
		"BoxOffice": "$5,749,134",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "After the Sunset",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "12 Nov 2004",
		"Runtime": "97 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Brett Ratner",
		"Writer": "Paul Zbyszewski, Craig Rosenberg",
		"Actors": "Pierce Brosnan, Salma Hayek, Woody Harrelson",
		"Plot": "Having already in their possession two of the rare Napoleon Diamonds, the masterful jewel thief, Max Burdett, and his seductive partner-in-crime, Lola Cirillo, decide to retire in the sun-kissed Bahamas. However--bent on keeping the precious third and last Napoleon diamond out of Max's clutches--the maladroit FBI agent, Stan Lloyd, follows them to the tropical haven, convinced that the intrepid duo is planning the next heist: stealing the last fabulous gem being displayed on the island. But, is this truly Max and Lola's intention? Above all--after a successful and lucrative career in crime--how hard can it be to resist the temptation of one more job?",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmZkOGM5NjUtMDM1MC00NDNmLWI1NzItOWFjOTczYmIxOTIyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "18%"
			},
			{
				"Source": "Metacritic",
				"Value": "38/100"
			}
		],
		"Metascore": "38",
		"imdbRating": "6.2",
		"imdbVotes": "49,717",
		"imdbID": "tt0367479",
		"Type": "movie",
		"DVD": "01 Jul 2010",
		"BoxOffice": "$28,331,233",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Good Old Fashioned Orgy",
		"Year": "2011",
		"Rated": "R",
		"Released": "02 Sep 2011",
		"Runtime": "95 min",
		"Genre": "Comedy, Romance",
		"Director": "Alex Gregory, Peter Huyck",
		"Writer": "Alex Gregory, Peter Huyck",
		"Actors": "Jason Sudeikis, Leslie Bibb, Tyler Labine",
		"Plot": "A group of 30-year-olds who have been friends since high school attempt to throw an end-of-summer orgy.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2Y5ZGMxNWEtYTVmMi00YjNiLTk4ZTctNWQxZWU5NWJhYjU5XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "36%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "6.1",
		"imdbVotes": "23,595",
		"imdbID": "tt1231586",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$200,227",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "101 Dalmatians",
		"Year": "1996",
		"Rated": "G",
		"Released": "27 Nov 1996",
		"Runtime": "103 min",
		"Genre": "Adventure, Comedy, Crime",
		"Director": "Stephen Herek",
		"Writer": "Dodie Smith, John Hughes",
		"Actors": "Glenn Close, Jeff Daniels, Joely Richardson",
		"Plot": "After a wild chase in the bustling streets of London, struggling computer game author Roger (Jeff Daniels) and his male Dalmatian, Pongo - by a welcome twist of fate - are dragged into St. James Park and meet with charming fashion designer Anita (Joely Richardson) and her female Dalmatian, Perdita. Soon, one thing will lead to another, and before they know it, Roger and Anita will get married and the adorable Perdita, pregnant. However, their short-lived joy is disrupted when Anita's glamorous but horrible boss, Cruella DeVil (Glenn Close), dognaps the innocent puppies with the intention of making a luxurious coat with the dogs' fabulously spotted fur. Eventually, along with Perdita's fifteen puppies, Cruella will manage to bring the total to the staggering number of ninety-nine Dalmatians; nevertheless, are the cute little puppies as helpless as they look?",
		"Language": "English, Spanish",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 1 BAFTA Award3 wins & 10 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGI2NTQ2N2EtNDExMS00OWM2LTkzZWItZGUzY2M2MDFjODk0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "39%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "5.7",
		"imdbVotes": "117,131",
		"imdbID": "tt0115433",
		"Type": "movie",
		"DVD": "04 Jan 2016",
		"BoxOffice": "$136,189,294",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A History of Violence",
		"Year": "2005",
		"Rated": "R",
		"Released": "30 Sep 2005",
		"Runtime": "96 min",
		"Genre": "Action, Crime, Drama",
		"Director": "David Cronenberg",
		"Writer": "John Wagner, Vince Locke, Josh Olson",
		"Actors": "Viggo Mortensen, Maria Bello, Ed Harris",
		"Plot": "Leading a happy and quiet life with his lawyer wife and their two children in the small town of Millbrook, Indiana, mild-mannered Tom Stall cherishes his simple, uneventful existence. However, their idyllic lifestyle is shattered when, one night, Tom saves his customers and friends in self-defence, foiling a vicious attempted robbery in his diner by two violent wanted criminals. Now, heralded as a local hero, Tom's life is changed overnight, attracting unwanted attention, and a national media feeding frenzy. Uncomfortable with his newfound celebrity, Tom tries to return to normalcy, only to find himself confronted by a mysterious man who arrives in town believing Tom is the man who wronged him in the past. More and more, as Tom and his family struggle to cope with their new reality and this case of mistaken identity, they have no other choice but to fight back and protect all that they hold dear. But, is there more to Tom than meets the eye? Does he have, indeed, a history of violence?",
		"Language": "English",
		"Country": "United States, Canada, United Kingdom, Germany",
		"Awards": "Nominated for 2 Oscars. 37 wins & 84 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTczMzIzMTQ1OV5BMl5BanBnXkFtZTYwMDQwNjk2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.4",
		"imdbVotes": "250,832",
		"imdbID": "tt0399146",
		"Type": "movie",
		"DVD": "29 Apr 2010",
		"BoxOffice": "$31,504,633",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Walk in the Clouds",
		"Year": "1995",
		"Rated": "PG-13",
		"Released": "11 Aug 1995",
		"Runtime": "102 min",
		"Genre": "Drama, Romance",
		"Director": "Alfonso Arau",
		"Writer": "Robert Mark Kamen, Mark Miller, Harvey Weitzman",
		"Actors": "Keanu Reeves, Aitana Sánchez-Gijón, Anthony Quinn",
		"Plot": "A young married US military soldier, Paul, returns home after World War II and meets a girl, Victoria, along the way. Victoria is pregnant and terrified of returning home to her Mexican family where her strict over protective father will surely disapprove of her out of wedlock pregnancy. Wanting to help, Paul offers to pose as her husband to calm things over until such time he is free to leave again but as they spend time together, they start falling in love with each other. However, Paul is still married and they have to hold themselves back before fate would intervene and tragedy would ensue and they would finally be together.",
		"Language": "English",
		"Country": "United States, Mexico",
		"Awards": "1 win & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGQ5NzI2NWQtODVjZi00NDk1LTg1NmMtZDVlNWMwODZmNGI4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.7",
		"imdbVotes": "36,297",
		"imdbID": "tt0114887",
		"Type": "movie",
		"DVD": "29 Sep 2012",
		"BoxOffice": "$50,008,143",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Haunted House",
		"Year": "2013",
		"Rated": "R",
		"Released": "11 Jan 2013",
		"Runtime": "86 min",
		"Genre": "Comedy, Fantasy, Horror",
		"Director": "Michael Tiddes",
		"Writer": "Marlon Wayans, Rick Alvarez",
		"Actors": "Marlon Wayans, Essence Atkins, Marlene Forte",
		"Plot": "In October 2012 a video footage is found at the home of Malcolm Johnson and the recordings are still unexplained. Past this prologue a story in flashback form unfolds. During the summer of 2012, Malcolm and Kisha move in together and start a happy life. One night Kisha notices a few unexplained phenomena that convince her their house is haunted by ghosts. To allay her fears Malcom hires a camera crew to film inside the house day and night. A few nights later Malcom and Keisha have sex on camera, despite Keisha's protests at being filmed. Upon reviewing the sex tape the next day, Malcom and Keisha notice a few paranormal phenomena caught on tape. Malcom wants to sell the house but the housing market is slow. Therefore, Malcom decides to hire a psychic to come to the house and investigate. After Kisha confesses to making a deal with the devil for a pair of shoes things start to make sense but it doesn't solve the problems caused by the paranormal phenomena.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM1ODgyOTI0NF5BMl5BanBnXkFtZTcwODgyMDY3OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "10%"
			},
			{
				"Source": "Metacritic",
				"Value": "20/100"
			}
		],
		"Metascore": "20",
		"imdbRating": "5.0",
		"imdbVotes": "49,468",
		"imdbID": "tt2243537",
		"Type": "movie",
		"DVD": "12 Aug 2015",
		"BoxOffice": "$40,041,683",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Air",
		"Year": "2023",
		"Rated": "R",
		"Released": "05 Apr 2023",
		"Runtime": "111 min",
		"Genre": "Drama, Sport",
		"Director": "Ben Affleck",
		"Writer": "Alex Convery",
		"Actors": "Matt Damon, Jason Bateman, Ben Affleck",
		"Plot": "Follows the history of sports marketing executive Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball, Michael Jordan.",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 wins & 45 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmNlOTNlYjUtM2U3Yy00M2ZjLTkxZDQtN2NiNGZiZDI0ZjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Metacritic",
				"Value": "73/100"
			}
		],
		"Metascore": "73",
		"imdbRating": "7.4",
		"imdbVotes": "161,569",
		"imdbID": "tt16419074",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$52,460,106",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Haunting in Venice",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "15 Sep 2023",
		"Runtime": "103 min",
		"Genre": "Crime, Drama, Horror",
		"Director": "Kenneth Branagh",
		"Writer": "Michael Green, Agatha Christie",
		"Actors": "Kenneth Branagh, Michelle Yeoh, Jamie Dornan",
		"Plot": "In post-World War II Venice, Poirot, now retired and living in his own exile, reluctantly attends a seance. But when one of the guests is murdered, it is up to the former detective to once again uncover the killer.",
		"Language": "English, Italian, French, Latin",
		"Country": "United States",
		"Awards": "5 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmI4MzE2YjQtYWMxYi00MjBhLThhOTYtYjdiOGQ4NzE4MWViXkEyXkFqcGdeQXVyMzUwNDIxMjQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.5",
		"imdbVotes": "106,649",
		"imdbID": "tt22687790",
		"Type": "movie",
		"DVD": "31 Oct 2023",
		"BoxOffice": "$42,471,412",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "10 Cloverfield Lane",
		"Year": "2016",
		"Rated": "PG-13",
		"Released": "11 Mar 2016",
		"Runtime": "103 min",
		"Genre": "Drama, Horror, Mystery",
		"Director": "Dan Trachtenberg",
		"Writer": "Josh Campbell, Matt Stuecken, Damien Chazelle",
		"Actors": "John Goodman, Mary Elizabeth Winstead, John Gallagher Jr.",
		"Plot": "After getting in a car accident, Michelle awakens to find herself in a mysterious bunker with two men named Howard and Emmett. Howard offers her a pair of crutches to help her remain mobile with her leg injury sustained from the car crash and tells her to \"get good on those\" before leaving the bunker. She has been given the information that there has been an alien attack and the outside world is poisoned. However, Howard and Emmett's intentions soon become questionable and Michelle is faced with a question: Is it better in here or out there?",
		"Language": "English",
		"Country": "United States",
		"Awards": "16 wins & 48 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "7.2",
		"imdbVotes": "351,194",
		"imdbID": "tt1179933",
		"Type": "movie",
		"DVD": "31 May 2016",
		"BoxOffice": "$72,082,998",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "300",
		"Year": "2006",
		"Rated": "R",
		"Released": "09 Mar 2007",
		"Runtime": "117 min",
		"Genre": "Action, Drama",
		"Director": "Zack Snyder",
		"Writer": "Zack Snyder, Kurt Johnstad, Michael B. Gordon",
		"Actors": "Gerard Butler, Lena Headey, David Wenham",
		"Plot": "In the Battle of Thermopylae of 480 BC an alliance of Greek city-states fought the invading Persian army in the mountain pass of Thermopylae. Vastly outnumbered, the Greeks held back the enemy in one of the most famous last stands of history. Persian King Xerxes led a Army of well over 100,000 (Persian king Xerxes before war has about 170,000 army) men to Greece and was confronted by 300 Spartans, 700 Thespians, and 400 Thebans. Xerxes waited for 10 days for King Leonidas to surrender or withdraw but left with no options he pushed forward. After 3 days of battle all the Greeks were killed. The Spartan defeat was not the one expected, as a local shepherd, named Ephialtes, defected to the Persians and informed Xerxes that the separate path through Thermopylae, which the Persians could use to outflank the Greeks, was not as heavily guarded as they thought.",
		"Language": "English",
		"Country": "United States, Canada, Bulgaria",
		"Awards": "19 wins & 57 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "61%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "7.6",
		"imdbVotes": "861,017",
		"imdbID": "tt0416449",
		"Type": "movie",
		"DVD": "28 Apr 2009",
		"BoxOffice": "$210,629,101",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "A Walk to Remember",
		"Year": "2002",
		"Rated": "PG",
		"Released": "25 Jan 2002",
		"Runtime": "101 min",
		"Genre": "Drama, Romance",
		"Director": "Adam Shankman",
		"Writer": "Nicholas Sparks, Karen Janszen",
		"Actors": "Mandy Moore, Shane West, Peter Coyote",
		"Plot": "In North Carolina especially in Beaufort a prank on a guy goes wrong and puts the student in the clinic. Carter, a famous student with no plans for the future, is held responsible and forced to join in after-school community service activities as consequence, which include starring as the lead in the play. And participating in these activities is Jamie Sullivan, the reverend's daughter who has great ambitions and nothing in common with Landon. When Landon decides he wants to take his activities seriously, he asks Jamie for help and begins to spend most of his time with her. But he starts to like her, that he did not expect to do. They relationship, much to the chagrin of Landon's old popular friends and Jamie's strict reverend father. But when a heart-breaking secret becomes known that puts their relationship to the test, it is then that Landon and Jamie realize the true meaning of love and fate.",
		"Language": "English",
		"Country": "United States",
		"Awards": "4 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzU3NTYxM2MtNjViMS00YmNlLWEwM2MtYWI2MzgzNTkxODFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "29%"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "7.3",
		"imdbVotes": "220,422",
		"imdbID": "tt0281358",
		"Type": "movie",
		"DVD": "28 Sep 2010",
		"BoxOffice": "$41,281,092",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "2012",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "13 Nov 2009",
		"Runtime": "158 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Roland Emmerich",
		"Writer": "Roland Emmerich, Harald Kloser",
		"Actors": "John Cusack, Thandiwe Newton, Chiwetel Ejiofor",
		"Plot": "Dr. Adrian Helmsley, part of a worldwide geophysical team investigating the effect on the earth of radiation from unprecedented solar storms, learns that the earth's core is heating up. He warns U.S. President Thomas Wilson that the crust of the earth is becoming unstable and that without proper preparations for saving a fraction of the world's population, the entire race is doomed. Meanwhile, writer Jackson Curtis stumbles on the same information. While the world's leaders race to build \"arks\" to escape the impending cataclysm, Curtis struggles to find a way to save his family. Meanwhile, volcanic eruptions and earthquakes of unprecedented strength wreak havoc around the world.",
		"Language": "English, French, Tibetan, Mandarin, Russian, Hindi, Portuguese, Latin, Italian, Spanish",
		"Country": "United States",
		"Awards": "5 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "39%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "5.8",
		"imdbVotes": "396,305",
		"imdbID": "tt1190080",
		"Type": "movie",
		"DVD": "01 Apr 2010",
		"BoxOffice": "$166,112,167",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "100 Girls",
		"Year": "2000",
		"Rated": "R",
		"Released": "01 Sep 2000",
		"Runtime": "94 min",
		"Genre": "Comedy, Romance",
		"Director": "Michael Davis",
		"Writer": "Michael Davis",
		"Actors": "Jonathan Tucker, Emmanuelle Chriqui, James DeBello",
		"Plot": "This sexy, teen-comedy is about a freshman, Matthew, at college who meets his dream girl in a dorm elevator during a blackout. He never sees her face, but instantly falls in love. In the morning, the power is restored, but the \"dream girl\" has vanished. All Matthew knows is that she lives in an all-girls dorm. He sets out on a semester-long journey to find his mystery girl amongst a hundred female suspects. Could it be Wendy? Dora? Arlene? Patty? Cynthia? Or the 95 other girls, any of whom could have been in that elevator with Matthew.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTA0MjA5MjM3NDFeQTJeQWpwZ15BbWU4MDMxODU4ODkx._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "60%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.8",
		"imdbVotes": "23,523",
		"imdbID": "tt0214388",
		"Type": "movie",
		"DVD": "01 Oct 2006",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "300: Rise of an Empire",
		"Year": "2014",
		"Rated": "R",
		"Released": "07 Mar 2014",
		"Runtime": "102 min",
		"Genre": "Action, Drama, War",
		"Director": "Noam Murro",
		"Writer": "Zack Snyder, Kurt Johnstad, Frank Miller",
		"Actors": "Sullivan Stapleton, Eva Green, Lena Headey",
		"Plot": "After its victory over Leonidas' 300, the Persian Army under the command of Xerxes marches towards the major Greek city-states. The Democratic city of Athens, first on the path of Xerxes' army, bases its strength on its fleet, led by admiral Themistocles. Themistocles is forced to an unwilling alliance with the traditional rival of Athens, oligarchic Sparta whose might lies with its superior infantry troops. But Xerxes still reigns supreme in numbers over sea and land.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEwNTU2MjAwMDdeQTJeQWpwZ15BbWU3MDk2Njc2Njk@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.2",
		"imdbVotes": "314,044",
		"imdbID": "tt1253863",
		"Type": "movie",
		"DVD": "14 Dec 2015",
		"BoxOffice": "$106,580,051",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Alien",
		"Year": "1979",
		"Rated": "R",
		"Released": "22 Jun 1979",
		"Runtime": "117 min",
		"Genre": "Horror, Sci-Fi",
		"Director": "Ridley Scott",
		"Writer": "Dan O'Bannon, Ronald Shusett",
		"Actors": "Sigourney Weaver, Tom Skerritt, John Hurt",
		"Plot": "In the distant future, the crew of the commercial spaceship Nostromo are on their way home when they pick up a distress call from a distant moon. The crew are under obligation to investigate and the spaceship descends on the moon afterwards. After a rough landing, three crew members leave the spaceship to explore the area on the moon. At the same time as they discover a hive colony of some unknown creature, the ship's computer deciphers the message to be a warning, not a distress call. When one of the eggs is disturbed, the crew realizes that they are not alone on the spaceship and they must deal with the consequences.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "Won 1 Oscar. 19 wins & 22 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "89/100"
			}
		],
		"Metascore": "89",
		"imdbRating": "8.5",
		"imdbVotes": "944,526",
		"imdbID": "tt0078748",
		"Type": "movie",
		"DVD": "02 Nov 2014",
		"BoxOffice": "$81,900,459",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Alien: Resurrection",
		"Year": "1997",
		"Rated": "R",
		"Released": "26 Nov 1997",
		"Runtime": "109 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Jean-Pierre Jeunet",
		"Writer": "Dan O'Bannon, Ronald Shusett, Joss Whedon",
		"Actors": "Sigourney Weaver, Winona Ryder, Dominique Pinon",
		"Plot": "The saga continues 200 years after Ripley sacrificed herself for the sake of humanity. Her erstwhile employers long gone, this time it is the military that resurrects the one-woman killing machine through genetic cloning to extract the alien from within her, but during the process her DNA is fused with the queen and then the aliens escape. Now Ripley must decide where her allegiance lies.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "7 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDljNGZkNmItNDlmMi00YzJhLWJiYWUtNGY4OGEwNmY0ODg4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "53%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "6.2",
		"imdbVotes": "261,161",
		"imdbID": "tt0118583",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$47,795,658",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Alien vs. Predator",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "13 Aug 2004",
		"Runtime": "101 min",
		"Genre": "Action, Adventure, Horror",
		"Director": "Paul W.S. Anderson",
		"Writer": "Dan O'Bannon, Ronald Shusett, Jim Thomas",
		"Actors": "Sanaa Lathan, Lance Henriksen, Raoul Bova",
		"Plot": "When a private satellite encounters an unidentified source of heat in Antarctica and it is found to be a pyramid buried deep underground , a search team comprising of top-of-the-line archaeologists and engineers is sent to Antarctica to find out more . Once there , the team comes across signs which indicate that the place is inhabited by an unknown alien species . It is not long before the aliens begin to hunt the team members . At the same time , a trio of coming-of-age Predators have arrived to collect the skulls of the aliens as trophies , and the humans are caught between a deadly battle between the two warring species .",
		"Language": "English, Italian",
		"Country": "Czech Republic, United Kingdom, Germany, Canada, United States",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "22%"
			},
			{
				"Source": "Metacritic",
				"Value": "29/100"
			}
		],
		"Metascore": "29",
		"imdbRating": "5.7",
		"imdbVotes": "211,310",
		"imdbID": "tt0370263",
		"Type": "movie",
		"DVD": "11 May 2014",
		"BoxOffice": "$80,282,231",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Apocalypto",
		"Year": "2006",
		"Rated": "R",
		"Released": "08 Dec 2006",
		"Runtime": "139 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Mel Gibson",
		"Writer": "Mel Gibson, Farhad Safinia",
		"Actors": "Gerardo Taracena, Raoul Max Trujillo, Dalia Hernández",
		"Plot": "In the Maya civilization, a peaceful tribe is brutally attacked by warriors seeking slaves and human beings for sacrifice for their gods. Jaguar Paw hides his pregnant wife and his son in a deep hole nearby their tribe and is captured while fighting with his people. An eclipse spares his life from the sacrifice and later he has to fight to survive and save his beloved family.",
		"Language": "Maya, English",
		"Country": "United States, Mexico",
		"Awards": "Nominated for 3 Oscars. 9 wins & 23 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzhmNGMzMDMtZDM0Yi00MmVmLWExYjAtZDhjZjcxZDM0MzJhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "65%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.8",
		"imdbVotes": "328,817",
		"imdbID": "tt0472043",
		"Type": "movie",
		"DVD": "24 Apr 2020",
		"BoxOffice": "$50,866,635",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "American Fiction",
		"Year": "2023",
		"Rated": "R",
		"Released": "22 Dec 2023",
		"Runtime": "117 min",
		"Genre": "Comedy, Drama",
		"Director": "Cord Jefferson",
		"Writer": "Cord Jefferson, Percival Everett",
		"Actors": "Jeffrey Wright, Tracee Ellis Ross, John Ortiz",
		"Plot": "A novelist who's fed up with the establishment profiting from Black entertainment uses a pen name to write a book that propels him into the heart of the hypocrisy and madness he claims to disdain.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 5 Oscars. 56 wins & 166 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDlkZmRlYTctNGJmNy00MjVkLThjZDQtMWY5Zjg2NjlhZDZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.6",
		"imdbVotes": "32,385",
		"imdbID": "tt23561236",
		"Type": "movie",
		"DVD": "06 Feb 2024",
		"BoxOffice": "$20,068,369",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Aliens",
		"Year": "1986",
		"Rated": "R",
		"Released": "18 Jul 1986",
		"Runtime": "137 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "James Cameron",
		"Writer": "James Cameron, David Giler, Walter Hill",
		"Actors": "Sigourney Weaver, Michael Biehn, Carrie Henn",
		"Plot": "57 years after Ellen Ripley had a close encounter with the reptilian alien creature from the first movie, she is called back, this time, to help a group of highly trained colonial marines fight off against the sinister extraterrestrials. But this time, the aliens have taken over a space colony on the moon LV-426. When the colonial marines are called upon to search the deserted space colony, they later find out that they are up against more than what they bargained for. Using specially modified machine guns and enough firepower, it's either fight or die as the space marines battle against the aliens. As the Marines do their best to defend themselves, Ripley must attempt to protect a young girl who is the sole survivor of the nearly wiped out space colony.",
		"Language": "English, Spanish",
		"Country": "United Kingdom, United States",
		"Awards": "Won 2 Oscars. 20 wins & 25 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "98%"
			},
			{
				"Source": "Metacritic",
				"Value": "84/100"
			}
		],
		"Metascore": "84",
		"imdbRating": "8.4",
		"imdbVotes": "755,647",
		"imdbID": "tt0090605",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$85,160,248",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "American Ultra",
		"Year": "2015",
		"Rated": "R",
		"Released": "21 Aug 2015",
		"Runtime": "96 min",
		"Genre": "Action, Comedy",
		"Director": "Nima Nourizadeh",
		"Writer": "Max Landis",
		"Actors": "Jesse Eisenberg, Kristen Stewart, Connie Britton",
		"Plot": "Small-town stoner Mike Howell (Jesse Eisenberg) spends most of his time getting high and writing a graphic novel about a superhero monkey. What Mike doesn't know is that he was trained by the CIA to be a lethal killing machine. When the agency targets him for termination, his former handler activates his latent skills, turning the mild-mannered slacker into a deadly weapon. Now, the utterly surprised Mike must use his newfound abilities to save himself and his girlfriend from getting wasted by the failed test subjects that are sent after him by the CIA.",
		"Language": "English, Mandarin",
		"Country": "United States, Switzerland",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcwMTM1NDU1Ml5BMl5BanBnXkFtZTgwNDk5MTgzNjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "44%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.1",
		"imdbVotes": "95,680",
		"imdbID": "tt3316948",
		"Type": "movie",
		"DVD": "13 May 2016",
		"BoxOffice": "$14,440,985",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Avatar: The Way of Water",
		"Year": "2022",
		"Rated": "PG-13",
		"Released": "16 Dec 2022",
		"Runtime": "192 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "James Cameron",
		"Writer": "James Cameron, Rick Jaffa, Amanda Silver",
		"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver",
		"Plot": "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 75 wins & 150 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "7.6",
		"imdbVotes": "488,471",
		"imdbID": "tt1630029",
		"Type": "movie",
		"DVD": "28 Mar 2023",
		"BoxOffice": "$684,075,767",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "As Good as It Gets",
		"Year": "1997",
		"Rated": "PG-13",
		"Released": "25 Dec 1997",
		"Runtime": "139 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "James L. Brooks",
		"Writer": "Mark Andrus, James L. Brooks",
		"Actors": "Jack Nicholson, Helen Hunt, Greg Kinnear",
		"Plot": "New York City. Melvin Udall, a cranky, bigoted, obsessive-compulsive writer, finds his life turned upside down when neighboring gay artist Simon is hospitalized and his dog is entrusted to Melvin. In addition, Carol, the only waitress who will tolerate him, must leave work to care for her sick son, making it impossible for Melvin to eat breakfast.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 38 wins & 54 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWMxZTgzMWEtMTU0Zi00NDc5LWFkZjctMzUxNDIyNzZiMmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "7.7",
		"imdbVotes": "316,380",
		"imdbID": "tt0119822",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$148,478,011",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Bad Teacher",
		"Year": "2011",
		"Rated": "R",
		"Released": "24 Jun 2011",
		"Runtime": "92 min",
		"Genre": "Comedy, Romance",
		"Director": "Jake Kasdan",
		"Writer": "Gene Stupnitsky, Lee Eisenberg",
		"Actors": "Cameron Diaz, Jason Segel, Justin Timberlake",
		"Plot": "When her wealthy fiancé breaks it off, gold digger Elizabeth Halsey returns to middle school: she's an awful teacher but wants to save for breast-implant surgery. She brightens when Scott, a new teacher, turns out to be rich, and she stops showing films and sleeping in class when told there's a bonus for the teacher whose class scores highest on the state exam. Her competition for Scott and the bonus is cheery and tightly wound Amy. Amy digs for dirt on Elizabeth who cheats her way toward Scott's bed and the money. Honesty with students seems to be her only skill. She ignores Russell, a droll gym teacher, who looks on. Will she succeed with Scott and get those new breasts?",
		"Language": "English",
		"Country": "United States",
		"Awards": "6 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NDI4MDM0Nl5BMl5BanBnXkFtZTcwNDYwODU2NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "5.7",
		"imdbVotes": "211,557",
		"imdbID": "tt1284575",
		"Type": "movie",
		"DVD": "07 May 2013",
		"BoxOffice": "$100,292,856",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Blade Runner 2049",
		"Year": "2017",
		"Rated": "R",
		"Released": "06 Oct 2017",
		"Runtime": "164 min",
		"Genre": "Action, Drama, Mystery",
		"Director": "Denis Villeneuve",
		"Writer": "Hampton Fancher, Michael Green, Philip K. Dick",
		"Actors": "Harrison Ford, Ryan Gosling, Ana de Armas",
		"Plot": "Thirty years after the events of Blade Runner (1982), a new Blade Runner, L.A.P.D. Officer \"K\" (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former L.A.P.D. Blade Runner, who has been missing for thirty years.",
		"Language": "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
		"Country": "United States, United Kingdom, Canada, Spain",
		"Awards": "Won 2 Oscars. 100 wins & 163 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "8.0",
		"imdbVotes": "656,743",
		"imdbID": "tt1856101",
		"Type": "movie",
		"DVD": "26 Dec 2017",
		"BoxOffice": "$92,071,675",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Barbie",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "21 Jul 2023",
		"Runtime": "114 min",
		"Genre": "Adventure, Comedy, Fantasy",
		"Director": "Greta Gerwig",
		"Writer": "Greta Gerwig, Noah Baumbach",
		"Actors": "Margot Robbie, Ryan Gosling, Issa Rae",
		"Plot": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
		"Language": "English, Spanish",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 8 Oscars. 159 wins & 417 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "6.9",
		"imdbVotes": "495,309",
		"imdbID": "tt1517268",
		"Type": "movie",
		"DVD": "12 Sep 2023",
		"BoxOffice": "$636,238,421",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Basic",
		"Year": "2003",
		"Rated": "R",
		"Released": "28 Mar 2003",
		"Runtime": "98 min",
		"Genre": "Action, Crime, Drama",
		"Director": "John McTiernan",
		"Writer": "James Vanderbilt",
		"Actors": "John Travolta, Samuel L. Jackson, Connie Nielsen",
		"Plot": "Tom Hardy, an ex-Army Ranger turned DEA agent, is drawn into an ever-widening mystery surrounding the disappearance of the feared and often hated Sgt. Nathan West, as well as several of his elite Special Forces trainees on what appears, at first, to have been a routine training exercise during a hurricane in the jungles of Panama. Only two survivors are found, Dunbar, and a badly wounded Kendall, the son of a high-profile Joint Chiefs of Staff official. Neither is willing to cooperate with Capt. Julia Osborne's investigation. So base commander Col. Bill Styles calls in ex-Ranger Hardy, an old friend and a persuasive interrogator. Osborne disapproves of Hardy who is on leave from the D.E.A. after having come under suspicion of accepting bribes from local drug traffickers. She is also uneasy when she learns that Hardy once trained under West and hates him almost as passionately as his current recruits. With time running out, Hardy and Osborne call a temporary, if uneasy, truce. Hardy cajoles a confession out of Dunbar, who claims that Sgt. West and the missing Rangers have been murdered and their bodies blown away by the hurricane. When they later interview Kendall, he confirms that the other Rangers and West are dead. But, in almost every other way, his story contradicts Dunbar's. What happened to West and his Ranger team? And what were they really doing out there in the jungle? As each layer reveals more lies and greater deceptions, Hardy and Osborne inch towards the horrible truth about the fate of the missing Rangers.",
		"Language": "English",
		"Country": "Germany, United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNThiYzhlMzctZGY3Ni00YTk2LWIwMmEtMDcxMzNmMzU2MWJhXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "21%"
			},
			{
				"Source": "Metacritic",
				"Value": "34/100"
			}
		],
		"Metascore": "34",
		"imdbRating": "6.4",
		"imdbVotes": "66,095",
		"imdbID": "tt0264395",
		"Type": "movie",
		"DVD": "01 May 2012",
		"BoxOffice": "$26,793,311",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Borat",
		"Year": "2006",
		"Rated": "R",
		"Released": "03 Nov 2006",
		"Runtime": "84 min",
		"Genre": "Comedy",
		"Director": "Larry Charles",
		"Writer": "Sacha Baron Cohen, Anthony Hines, Peter Baynham",
		"Actors": "Sacha Baron Cohen, Ken Davitian, Luenell",
		"Plot": "Borat Sagdiyev is a TV reporter of a popular show in Kazakhstan as Kazakhstan's sixth most famous man and a leading journalist. He is sent from his home to America by his government to make a documentary about American society and culture. Borat takes a course in New York City to understand American humor. While watching Baywatch on TV, Borat discovers how beautiful their women are in the form of C. J. Parker, who was played by actress Pamela Anderson who hails from Malibu, California. He decides to go on a cross-country road trip to California in a quest to make her his wife and take her back to his country. On his journey Borat and his producer encounter a country full of strange and wonderful Americans, real people in real chaotic situations with hysterical consequences.",
		"Language": "English, Romanian, Hebrew, Polish, Armenian",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 1 Oscar. 20 wins & 34 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "89/100"
			}
		],
		"Metascore": "89",
		"imdbRating": "7.4",
		"imdbVotes": "437,537",
		"imdbID": "tt0443453",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$128,505,958",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Borat Subsequent Moviefilm",
		"Year": "2020",
		"Rated": "R",
		"Released": "23 Oct 2020",
		"Runtime": "95 min",
		"Genre": "Comedy",
		"Director": "Jason Woliner",
		"Writer": "Sacha Baron Cohen, Anthony Hines, Dan Swimer",
		"Actors": "Sacha Baron Cohen, Maria Bakalova, Tom Hanks",
		"Plot": "Fourteen long years after the culture shock he experienced in Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan (2006), Kazakh reporter, Borat Sagdiyev, has been called to Premier Nursultan Nazarbayev's office for a life-or-death task. To redeem himself and salvage the reputation of the glorious nation of Kazakhstan, Borat must now return to President Donald Trump's America to deliver an exceptional gift to Vice President Mike Pence. Instead, Borat's newfound fifteen-year-old daughter, Tutar, enters the picture, forcing a change of plans. As now-famous Borat takes a deep dive into U.S. politics, in the meantime, the father and daughter learn a thing or two about feminism, racism, and an insidious, lethal virus called COVID-19. Will Borat, Kazakhstan's fourth-best journalist, carry out his mission?",
		"Language": "English, Bulgarian, Hebrew, Romanian, Croatian",
		"Country": "United States, United Kingdom, Romania",
		"Awards": "Nominated for 2 Oscars. 38 wins & 66 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmY3OTdkOWEtNjc2ZC00OTZmLWI5OWItMjdjYjRkNTExNDNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "6.6",
		"imdbVotes": "151,657",
		"imdbID": "tt13143964",
		"Type": "movie",
		"DVD": "23 Oct 2020",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Casino Royale",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "17 Nov 2006",
		"Runtime": "144 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Martin Campbell",
		"Writer": "Neal Purvis, Robert Wade, Paul Haggis",
		"Actors": "Daniel Craig, Eva Green, Judi Dench",
		"Plot": "James Bond (Daniel Craig) goes on his first mission as a 00. Le Chiffre (Mads Mikkelsen) is a banker to the world's terrorists. He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe amongst the terrorist market. The boss of MI6, known simply as \"M\" (Dame Judi Dench) sends Bond, along with Vesper Lynd Eva Green) to attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter (Jeffrey Wright), Rene Mathis (Giancarlo Giannini), and having Vesper pose as his partner, enters the most important poker game in his already dangerous career. But if Bond defeats Le Chiffre, will he and Vesper Lynd remain safe?",
		"Language": "English, Serbian, German, Italian, French",
		"Country": "United States, United Kingdom, Czech Republic, Germany, Bahamas",
		"Awards": "Won 1 BAFTA Award28 wins & 44 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmI3MmMzMGMtNzc4Ni00YWQ4LWFkMDYtNjVlOWU3ZGZiNjY1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "8.0",
		"imdbVotes": "691,994",
		"imdbID": "tt0381061",
		"Type": "movie",
		"DVD": "30 Nov 2016",
		"BoxOffice": "$167,445,960",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Angels & Demons",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "15 May 2009",
		"Runtime": "138 min",
		"Genre": "Action, Mystery, Thriller",
		"Director": "Ron Howard",
		"Writer": "David Koepp, Akiva Goldsman, Dan Brown",
		"Actors": "Tom Hanks, Ewan McGregor, Ayelet Zurer",
		"Plot": "Following the murder of a physicist, Father Silvano Bentivoglio, a symbolist, Robert Langdon, and a scientist, Vittoria Vetra, are on an adventure involving a secret brotherhood, the Illuminati. Clues lead them all around the Vatican, including the four altars of science, Earth, Air, Fire and Water. An assassin, working for the Illuminati, has captured four cardinals, and murders each, painfully. Robert and Vittoria also are searching for a new very destructive weapon that could kill millions.",
		"Language": "English, Italian, Latin, French, Swiss German, German, Chinese, Spanish, Polish",
		"Country": "United States, Italy",
		"Awards": "1 win & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.7",
		"imdbVotes": "308,381",
		"imdbID": "tt0808151",
		"Type": "movie",
		"DVD": "24 Nov 2009",
		"BoxOffice": "$133,375,846",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Blade",
		"Year": "1998",
		"Rated": "R",
		"Released": "21 Aug 1998",
		"Runtime": "120 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Stephen Norrington",
		"Writer": "David S. Goyer",
		"Actors": "Wesley Snipes, Stephen Dorff, Kris Kristofferson",
		"Plot": "In a world where vampires walk the earth, Blade has a goal. His goal is to rid the world of all vampire evil. When Blade witnesses a vampire bite Dr. Karen Jenson, he fights away the beast and takes Jenson back to his hideout. Here, alongside Abraham Whistler, Blade attempts to help heal Jenson. The vampire Quinn who was attacked by Blade, reports back to his master Deacon Frost, who is planning a huge surprise for the human population.",
		"Language": "English, Russian, Serbian",
		"Country": "United States",
		"Awards": "5 wins & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTU1ZTI0YjUtZGRlMS00MDU1LWFmZmItZWRiYTg5NTExMmRjXkEyXkFqcGdeQXVyMTUzMDg3MTQw._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "7.1",
		"imdbVotes": "297,163",
		"imdbID": "tt0120611",
		"Type": "movie",
		"DVD": "11 Sep 2015",
		"BoxOffice": "$70,087,718",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Blended",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "23 May 2014",
		"Runtime": "117 min",
		"Genre": "Comedy, Romance",
		"Director": "Frank Coraci",
		"Writer": "Ivan Menchell, Clare Sera",
		"Actors": "Adam Sandler, Drew Barrymore, Wendi McLendon-Covey",
		"Plot": "After a blind date gone horribly wrong, Jim and Lauren agree they never, ever want to see each other again. Well, that's all about to change when the two find themselves and their respective families (including children) all stuck together in one suite at an African Safari vacation spot.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 10 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzc2ODI5NjAyMl5BMl5BanBnXkFtZTgwMzIyOTE4MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "15%"
			},
			{
				"Source": "Metacritic",
				"Value": "31/100"
			}
		],
		"Metascore": "31",
		"imdbRating": "6.5",
		"imdbVotes": "142,457",
		"imdbID": "tt1086772",
		"Type": "movie",
		"DVD": "20 Jan 2016",
		"BoxOffice": "$46,306,208",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Black Widow",
		"Year": "2021",
		"Rated": "PG-13",
		"Released": "09 Jul 2021",
		"Runtime": "134 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Cate Shortland",
		"Writer": "Eric Pearson, Jac Schaeffer, Ned Benson",
		"Actors": "Scarlett Johansson, Florence Pugh, David Harbour",
		"Plot": "In Marvel Studios' action-packed spy thriller \"Black Widow,\" Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
		"Language": "English, Russian, Norwegian, Hungarian, Macedonian, Finnish",
		"Country": "United States",
		"Awards": "14 wins & 34 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "6.7",
		"imdbVotes": "419,568",
		"imdbID": "tt3480822",
		"Type": "movie",
		"DVD": "06 Oct 2021",
		"BoxOffice": "$183,651,655",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Christmas with the Kranks",
		"Year": "2004",
		"Rated": "PG",
		"Released": "24 Nov 2004",
		"Runtime": "99 min",
		"Genre": "Comedy, Family",
		"Director": "Joe Roth",
		"Writer": "John Grisham, Chris Columbus",
		"Actors": "Tim Allen, Jamie Lee Curtis, Dan Aykroyd",
		"Plot": "Strange as it may sound, Luther and Nora Krank, the neighbourhood's award-winning couple for their cheerful Christmas spirit, have decided to skip this year's annual festivities when their daughter, Blair, departs for Peru after joining the Peace Corps. Now, instead of spending the staggering amount of $6,000 on the holiday season, just like the previous year, they are determined to invest the money on a sun-drenched, ten-day Caribbean cruise, much to the chagrin of their friends and neighbours. However, this is easier said than done, and before long, Luther and Nora, who have turned their backs on Christmas, will face the consequences. And then, as if that weren't enough, Blair and her new fiancé announce that they are coming home, utterly unaware that the empty family nest is far from ready for the event. Can the Kranks \"generate\" Christmas out of nothing in less than a few hours?",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "3 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQxMDMxODEwNF5BMl5BanBnXkFtZTYwNzM4OTc2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "5%"
			},
			{
				"Source": "Metacritic",
				"Value": "22/100"
			}
		],
		"Metascore": "22",
		"imdbRating": "5.5",
		"imdbVotes": "57,343",
		"imdbID": "tt0388419",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$73,780,539",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Boyhood",
		"Year": "2014",
		"Rated": "R",
		"Released": "15 Aug 2014",
		"Runtime": "165 min",
		"Genre": "Drama",
		"Director": "Richard Linklater",
		"Writer": "Richard Linklater",
		"Actors": "Ellar Coltrane, Patricia Arquette, Ethan Hawke",
		"Plot": "Filmed over 12 years with the same cast, Richard Linklater's BOYHOOD is a groundbreaking story of growing up as seen through the eyes of a child named Mason (a breakthrough performance by Ellar Coltrane), who literally grows up on screen before our eyes. Starring Ethan Hawke and Patricia Arquette as Mason's parents and newcomer Lorelei Linklater as his sister Samantha, BOYHOOD charts the rocky terrain of childhood like no other film has before. Snapshots of adolescence from road trips and family dinners to birthdays and graduations and all the moments in between become transcendent, set to a soundtrack spanning the years from Coldplay's Yellow to Arcade Fire's Deep Blue. BOYHOOD is both a nostalgic time capsule of the recent past and an ode to growing up and parenting.",
		"Language": "English, Spanish, Ukrainian, Arabic",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 175 wins & 218 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "100/100"
			}
		],
		"Metascore": "100",
		"imdbRating": "7.9",
		"imdbVotes": "366,326",
		"imdbID": "tt1065073",
		"Type": "movie",
		"DVD": "07 Jan 2016",
		"BoxOffice": "$25,352,281",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Cinderella Man",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "03 Jun 2005",
		"Runtime": "144 min",
		"Genre": "Biography, Drama, Romance",
		"Director": "Ron Howard",
		"Writer": "Cliff Hollingsworth, Akiva Goldsman",
		"Actors": "Russell Crowe, Renée Zellweger, Craig Bierko",
		"Plot": "During the Great Depression, common-man hero James J. Braddock (Russell Crowe), aka the Cinderella Man, was to become one of the most surprising sports legends in history. By the early 1930s, the impoverished ex-prizefighter was seemingly as broken-down, beaten-up, and out-of-luck as much of the rest of the American populace who had hit rock bottom. His career appeared to be finished, he was unable to pay the bills, his family--the only thing that mattered to him--was in danger, and he was even forced to go on Public Relief. But deep inside, James J. Braddock never relinquished his determination. Driven by love, honor, and an incredible dose of grit, he willed an impossible dream to come true. In a last-chance bid to help his family, Braddock returned to the ring. No one thought he had a shot. However Braddock, fueled by something beyond mere competition, kept winning. Suddenly, the ordinary working man became the mythic athlete. Carrying the hopes and dreams of the disenfranchised on his shoulders, Braddock rocketed through the ranks until this underdog chose to do the unthinkable: take on the heavyweight champ of the world, the unstoppable Max Baer (Craig Bierko), renowned for having killed two men in the ring.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 3 Oscars. 16 wins & 45 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTkyMmZmNTYtMTE3MS00NmZlLWIyOGQtZGU2Y2YyMjBlZmI0XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "8.0",
		"imdbVotes": "197,540",
		"imdbID": "tt0352248",
		"Type": "movie",
		"DVD": "20 Nov 2015",
		"BoxOffice": "$61,649,911",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Big Trouble",
		"Year": "2002",
		"Rated": "PG-13",
		"Released": "05 Apr 2002",
		"Runtime": "85 min",
		"Genre": "Comedy, Crime, Thriller",
		"Director": "Barry Sonnenfeld",
		"Writer": "Dave Barry, Robert Ramsey, Matthew Stone",
		"Actors": "Tim Allen, Rene Russo, Stanley Tucci",
		"Plot": "A chain of events starts with the arrival of a mysterious suitcase in Miami. Arthur Herk, a corrupt business owner, wants to get his hands on the case. At the same time, two hit men want him whacked. Tired of his constant fixation on drinking and television, Herk's wife Anna and daughter Jenny decide to find new love interests in divorced dad Eliot Arnold and his son Matt. To add more complication, two thieves decide to steal the case and lead a Miami police team and two FBI agents on a wild goose chase that ends inside the Miami airport terminal.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGExOThjYjMtYzA2MC00OTZhLWEzMDYtMTAwZmViMGU4OTE4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "48%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.4",
		"imdbVotes": "21,600",
		"imdbID": "tt0246464",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$7,267,307",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Aloha",
		"Year": "2015",
		"Rated": "PG-13",
		"Released": "29 May 2015",
		"Runtime": "105 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Cameron Crowe",
		"Writer": "Cameron Crowe",
		"Actors": "Bradley Cooper, Rachel McAdams, Emma Stone",
		"Plot": "A celebrated military contractor returns to the site of his greatest career triumphs - the US Space program in Honolulu, Hawaii - and reconnects with a long-ago love while unexpectedly falling for the hard-charging Air Force watchdog assigned to him.",
		"Language": "English, Hawaiian, Russian",
		"Country": "United States",
		"Awards": "2 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTg4Mjc0NTE1NV5BMl5BanBnXkFtZTgwNzcwNTQ3NTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "20%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "5.4",
		"imdbVotes": "70,542",
		"imdbID": "tt1243974",
		"Type": "movie",
		"DVD": "13 Sep 2016",
		"BoxOffice": "$21,067,116",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ant-Man and the Wasp: Quantumania",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "17 Feb 2023",
		"Runtime": "124 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Peyton Reed",
		"Writer": "Jeff Loveness, Stan Lee, Larry Lieber",
		"Actors": "Paul Rudd, Evangeline Lilly, Michael Douglas",
		"Plot": "The further adventures of Ant-Man and the Wasp.",
		"Language": "English",
		"Country": "United States, Australia, Canada",
		"Awards": "11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.1",
		"imdbVotes": "222,306",
		"imdbID": "tt10954600",
		"Type": "movie",
		"DVD": "18 Apr 2023",
		"BoxOffice": "$214,504,909",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Aliens vs. Predator: Requiem",
		"Year": "2007",
		"Rated": "R",
		"Released": "25 Dec 2007",
		"Runtime": "94 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Colin Strause, Greg Strause",
		"Writer": "Shane Salerno, Dan O'Bannon, Ronald Shusett",
		"Actors": "Reiko Aylesworth, Steven Pasquale, Shareeka Epps",
		"Plot": "No one can escape from the aggressive predatory Xenomorphs, and shortly after the Antarctic bloodshed in AVP: Alien vs. Predator (2004), a crippled Predator ship crash-lands on the dense forest of Gunnison, Colorado. As a result, a vicious Predalien hybrid, along with numerous Stage 1 Xenomorphs, or Face-huggers, scatter in all directions, infecting everyone unfortunate enough to cross their path. Once more, the Earth is a battlefield, as both extraterrestrial species are fighting for supremacy, and the humans become stuck in the middle. Now, the fate of the entire city rests in the hands of Sheriff Eddie Morales, and a handful of residents. Can they ensure the fate of humankind?",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI5NDY2NDUwM15BMl5BanBnXkFtZTYwNzQxMTA3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "12%"
			},
			{
				"Source": "Metacritic",
				"Value": "29/100"
			}
		],
		"Metascore": "29",
		"imdbRating": "4.6",
		"imdbVotes": "132,465",
		"imdbID": "tt0758730",
		"Type": "movie",
		"DVD": "18 Sep 2012",
		"BoxOffice": "$41,797,066",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Anger Management",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "11 Apr 2003",
		"Runtime": "106 min",
		"Genre": "Comedy",
		"Director": "Peter Segal",
		"Writer": "David Dorfman",
		"Actors": "Jack Nicholson, Adam Sandler, Marisa Tomei",
		"Plot": "Mild-mannered timid businessman Dave Buznik works for a pet clothing company out of New York City. He's got an abrasive boss named Mr. Frank Head who frequently takes credit for his work and steps on him in return. He's got a loving girlfriend, Linda, whose best friend is her condescending college ex, Andrew. But when a misunderstanding aboard an airplane goes haywire, Dave is ordered by the court to undergo anger management therapy at the hands of specialist Dr. Buddy Rydell, who is an unpredictable, psychopathic character. As the relationship between Dave and Buddy becomes more tense, when the unorthodox treatment wreaks havoc Dave's life, and Buddy might be the only one who can save him from a problem he recognizes right away in his patient, that could only get worse.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDg1YTNiODItZGYyOC00NGIwLWI3MjYtMTY3NDQ0ZDIwYjBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "6.2",
		"imdbVotes": "227,163",
		"imdbID": "tt0305224",
		"Type": "movie",
		"DVD": "13 May 2014",
		"BoxOffice": "$135,645,823",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "American Beauty",
		"Year": "1999",
		"Rated": "R",
		"Released": "01 Oct 1999",
		"Runtime": "122 min",
		"Genre": "Drama",
		"Director": "Sam Mendes",
		"Writer": "Alan Ball",
		"Actors": "Kevin Spacey, Annette Bening, Thora Birch",
		"Plot": "After his death sometime in his 43rd year, suburbanite Lester Burnham tells of the last few weeks of his life, during which he had no idea of his imminent passing. He is a husband to real estate agent Carolyn Burnham and father to high school student Jane Burnham. Although Lester and Carolyn once loved each other, they now merely tolerate each other. Typical wallflower Jane also hates both her parents; the three suffer individually in silence in their home life. Jane tries to steer clear of both her parents. Carolyn, relatively new to the real estate business, wants to create the persona of success to further her career, aspiring to the professional life of Buddy Kane, the king of the real estate business in their neighborhood. Lester merely walks mindlessly through life, including at his job in advertising. His company is downsizing, and he, like all the other employees, has to justify his position to the newly hired efficiency expert to keep his job. Things change for Lester when he falls in love at first sight with Jane's more experienced classmate, Angela Hayes. Both Janie and Angela can see Lester's sexual infatuation with Angela, who courts such attention from any man as a sign that she is model material, she having once appeared in Seventeen and is a career to which she aspires. Lester's infatuation with Angela gives him a reenergized view on life, where he openly doesn't care anymore what anyone thinks about what he does, anyone except Angela. This infatuation coincides with the Fittses moving in next door: homophobic disciplinarian US Marine Colonel Frank Fitts who rules the house with a military fist (that fist being both figurative and literal), his semi-comatose wife Barbara Fitts, and their bright and quietly subversive 18-year-old son Ricky Fitts, who openly abides by his father's rules while behind the scenes lives by his own quite different perspective. Much like Lester's infatuation, Ricky immediately becomes infatuated with Jane; he considers girls like Angela as ordinary. The entry of Angela and the Fittses into the Burnhams' lives ultimately leads to each of the players confronting what is truly in his or her heart.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 5 Oscars. 112 wins & 102 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "84/100"
			}
		],
		"Metascore": "84",
		"imdbRating": "8.3",
		"imdbVotes": "1,202,201",
		"imdbID": "tt0169547",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$130,096,601",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Alita: Battle Angel",
		"Year": "2019",
		"Rated": "PG-13",
		"Released": "14 Feb 2019",
		"Runtime": "122 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Robert Rodriguez",
		"Writer": "James Cameron, Laeta Kalogridis, Yukito Kishiro",
		"Actors": "Rosa Salazar, Christoph Waltz, Jennifer Connelly",
		"Plot": "Alita is a creation from an age of despair. Found by the mysterious Dr. Ido while trolling for cyborg parts, Alita becomes a lethal, dangerous being. She cannot remember who she is, or where she came from. But to Dr. Ido, the truth is all too clear. She is the one being who can break the cycle of death and destruction left behind from Tiphares. But to accomplish her true purpose, she must fight and kill. And that is where Alita's true significance comes to bear. She is an angel from heaven. She is an angel of death.",
		"Language": "English, Spanish",
		"Country": "Japan, Canada, United States",
		"Awards": "10 wins & 25 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "62%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "7.3",
		"imdbVotes": "290,601",
		"imdbID": "tt0437086",
		"Type": "movie",
		"DVD": "09 Jul 2019",
		"BoxOffice": "$85,838,210",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Balls of Fury",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "29 Aug 2007",
		"Runtime": "90 min",
		"Genre": "Comedy, Crime, Sport",
		"Director": "Robert Ben Garant",
		"Writer": "Thomas Lennon, Robert Ben Garant",
		"Actors": "Dan Fogler, Christopher Walken, George Lopez",
		"Plot": "In the unsanctioned, underground, and unhinged world of extreme Ping-Pong, the competition is brutal and the stakes are deadly. Down-and-out former professional Ping-Pong phenom Randy Daytona is sucked into this maelstrom when FBI Agent Rodriguez recruits him for a secret mission. Randy is determined to bounce back and recapture his former glory, and to smoke out his father's killer - one of the FBI's Most Wanted, arch-fiend Feng. But, after two decades out of the game, Randy can't turn his life around and avenge his father's murder without a team of his own. He calls upon the spiritual guidance of blind Ping-Pong sage and restaurateur Wong, and the training expertise of Master Wong's wildly sexy niece Maggie, both of whom also have a dark history with Feng. All roads lead to Feng's mysterious jungle compound and the most unique Ping-Pong tournaments ever staged. There, Randy faces such formidable players as his long-ago Olympics opponent, the still-vicious Karl Wolfschtagg. Can Randy keep his eye on the ball? Will he achieve the redemption he craves while wielding a paddle? Is his backhand strong enough to triumph over rampant wickedness?",
		"Language": "English, Mandarin",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA3MDQ1Mzc4N15BMl5BanBnXkFtZTcwODI0NTc0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "21%"
			},
			{
				"Source": "Metacritic",
				"Value": "38/100"
			}
		],
		"Metascore": "38",
		"imdbRating": "5.3",
		"imdbVotes": "44,629",
		"imdbID": "tt0424823",
		"Type": "movie",
		"DVD": "10 Sep 2015",
		"BoxOffice": "$32,886,940",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Armageddon",
		"Year": "1998",
		"Rated": "PG-13",
		"Released": "01 Jul 1998",
		"Runtime": "151 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Michael Bay",
		"Writer": "Jonathan Hensleigh, J.J. Abrams, Tony Gilroy",
		"Actors": "Bruce Willis, Billy Bob Thornton, Ben Affleck",
		"Plot": "Due to a shuttle's unfortunate demise in outer space, NASA becomes aware of a doomsday asteroid that is on a collision course with Earth. It seems that the only way to knock it off course is to drill into its surface and detonate a nuclear weapon. But as NASA's under-funded yet resourceful team train the world's best drillers for the job, the social order of the world begins to break down as the information reaches the public and hysteria results. As high-ranking officials play politics with the effort, the drilling team all faces deep personal issues which may jeopardize humanity's last chance...",
		"Language": "English, Russian, Indonesian",
		"Country": "United States",
		"Awards": "Nominated for 4 Oscars. 15 wins & 40 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "43%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "6.7",
		"imdbVotes": "447,608",
		"imdbID": "tt0120591",
		"Type": "movie",
		"DVD": "23 Nov 2015",
		"BoxOffice": "$201,578,182",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Bad Santa",
		"Year": "2003",
		"Rated": "R",
		"Released": "26 Nov 2003",
		"Runtime": "92 min",
		"Genre": "Comedy, Crime, Drama",
		"Director": "Terry Zwigoff",
		"Writer": "Glenn Ficarra, John Requa",
		"Actors": "Billy Bob Thornton, Bernie Mac, Lauren Graham",
		"Plot": "Willie T. Stokes is a convicted con man who's led a miserable life. He drinks heavily and constantly embarrasses himself publicly. He only works once a year dressed as Santa. But then come Christmas Eve, he and his pint-sized helper dwarf Marcus stage elaborate robberies and take their department stores for everything they got. This time around, Willie gets distracted by large women, a bartender who is attracted to Santas, and a kid who's convinced he's the real deal. However, Marcus must once again put up with Willie's heavy drinking and a series of incidents that constantly shoot themselves in the foot. Will Willie and Marcus make it to next Christmas? Or will this be the year the dynamic duo finally face justice?",
		"Language": "English",
		"Country": "Germany, United States",
		"Awards": "1 win & 12 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "7.1",
		"imdbVotes": "154,707",
		"imdbID": "tt0307987",
		"Type": "movie",
		"DVD": "21 Apr 2016",
		"BoxOffice": "$60,060,328",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Black Swan",
		"Year": "2010",
		"Rated": "R",
		"Released": "17 Dec 2010",
		"Runtime": "108 min",
		"Genre": "Drama, Thriller",
		"Director": "Darren Aronofsky",
		"Writer": "Mark Heyman, Andres Heinz, John J. McLaughlin",
		"Actors": "Natalie Portman, Mila Kunis, Vincent Cassel",
		"Plot": "Nina (Portman) is a ballerina in a New York City ballet company whose life, like all those in her profession, is completely consumed with dance. She lives with her obsessive former ballerina mother Erica (Hershey) who exerts a suffocating control over her. When artistic director Thomas Leroy (Cassel) decides to replace prima ballerina Beth MacIntyre (Ryder) for the opening production of their new season, Swan Lake, Nina is his first choice. But Nina has competition: a new dancer, Lily (Kunis), who impresses Leroy as well. Swan Lake requires a dancer who can play both the White Swan with innocence and grace, and the Black Swan, who represents guile and sensuality. Nina fits the White Swan role perfectly but Lily is the personification of the Black Swan. As the two young dancers expand their rivalry into a twisted friendship, Nina begins to get more in touch with her dark side - a recklessness that threatens to destroy her.",
		"Language": "English, French, Italian",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 97 wins & 279 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "8.0",
		"imdbVotes": "820,604",
		"imdbID": "tt0947798",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$106,954,678",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Babe",
		"Year": "1995",
		"Rated": "G",
		"Released": "04 Aug 1995",
		"Runtime": "91 min",
		"Genre": "Comedy, Drama, Family",
		"Director": "Chris Noonan",
		"Writer": "Dick King-Smith, George Miller, Chris Noonan",
		"Actors": "James Cromwell, Magda Szubanski, Christine Cavanaugh",
		"Plot": "Gentle farmer Arthur Hoggett wins a piglet named Babe at a county fair. Narrowly escaping his fate as Christmas dinner when Farmer Hoggett decides to show him at the next fair, Babe bonds with motherly border collie Fly and discovers that he can herd sheep too. But will the other farm animals, including Fly's jealous husband, Rex, accept a pig who doesn't conform to the farm's social hierarchy?",
		"Language": "English",
		"Country": "Australia, United States, United Kingdom",
		"Awards": "Won 1 Oscar. 20 wins & 26 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2FhNjFjNGUtM2UzMS00YTljLWJmYTctMzYyZjNmNTQyNDQ0XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "83/100"
			}
		],
		"Metascore": "83",
		"imdbRating": "6.9",
		"imdbVotes": "133,034",
		"imdbID": "tt0112431",
		"Type": "movie",
		"DVD": "01 Jan 2015",
		"BoxOffice": "$63,658,910",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Arthur Christmas",
		"Year": "2011",
		"Rated": "PG",
		"Released": "23 Nov 2011",
		"Runtime": "97 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Sarah Smith, Barry Cook",
		"Writer": "Peter Baynham, Sarah Smith",
		"Actors": "James McAvoy, Jim Broadbent, Bill Nighy",
		"Plot": "This movie reveals the incredible, never-before seen answer to every child's question: \"So how does Santa deliver all those presents in one night?\" The answer: Santa's (Jim Broadbent's) exhilarating, ultra-high-tech operation hidden beneath the North Pole. But at the center of this movie is a story about a family in a state of comic dysfunction and an unlikely hero, Arthur (James McAvoy), with an urgent mission that must be completed before Christmas morning dawns.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 BAFTA 3 wins & 23 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTczMjMwMTE2OV5BMl5BanBnXkFtZTcwNDU0NTAwNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.1",
		"imdbVotes": "66,763",
		"imdbID": "tt1430607",
		"Type": "movie",
		"DVD": "06 Nov 2012",
		"BoxOffice": "$46,462,469",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Around the World in 80 Days",
		"Year": "2004",
		"Rated": "PG",
		"Released": "16 Jun 2004",
		"Runtime": "120 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Frank Coraci",
		"Writer": "Jules Verne, David N. Titcher, David Benullo",
		"Actors": "Jackie Chan, Steve Coogan, Jim Broadbent",
		"Plot": "An adventurer, Passepartout, ends up accompanying time-obsessed English gentleman, Phileas Fogg, on a daring mission to journey around the world. Fogg has wagered with members of his London club that he can traverse the world in 80 days. Along the way, they encounter many interesting 19th Century figures and have many exciting and suspenseful situations in their voyage around the world.",
		"Language": "English, Cantonese, French, German, Hindi, Turkish",
		"Country": "Ireland, United Kingdom, Germany, United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGI2ODRiYzctMzA4YS00ZThhLWI5NzYtZDRhOGQyNDQyYmE3XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "32%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "5.9",
		"imdbVotes": "94,502",
		"imdbID": "tt0327437",
		"Type": "movie",
		"DVD": "10 Jun 2016",
		"BoxOffice": "$24,008,137",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Cliffhanger",
		"Year": "1993",
		"Rated": "R",
		"Released": "28 May 1993",
		"Runtime": "113 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Renny Harlin",
		"Writer": "John Long, Michael France, Sylvester Stallone",
		"Actors": "Sylvester Stallone, John Lithgow, Michael Rooker",
		"Plot": "Whilst crossing a ledge, 4000 feet above the earth, Gabe's friend's equipment fails to work and she slips out of his hand, falling to the ground. Almost a year later, Gabe is asked to go back to the same mountain range and rescue a group of 'stranded' people. The only catch is that these so called 'stranded' people are in fact looking for three boxes filled with $100,000,000 and they need a mountain ranger to lead them to them!!",
		"Language": "English",
		"Country": "United States, Italy, France, Japan",
		"Awards": "Nominated for 3 Oscars. 1 win & 12 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjU5YmFjMjctYThkOS00MTQyLThjZmMtOWIyYzk2ZjU0ODkxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "60/100"
			}
		],
		"Metascore": "60",
		"imdbRating": "6.5",
		"imdbVotes": "138,646",
		"imdbID": "tt0106582",
		"Type": "movie",
		"DVD": "08 May 2015",
		"BoxOffice": "$84,049,211",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Caravaggio's Shadow",
		"Year": "2022",
		"Rated": "N/A",
		"Released": "03 Nov 2022",
		"Runtime": "120 min",
		"Genre": "Biography, Drama, History",
		"Director": "Michele Placido",
		"Writer": "Sandro Petraglia, Michele Placido, Fidel Signorile",
		"Actors": "Riccardo Scamarcio, Louis Garrel, Isabelle Huppert",
		"Plot": "The Catholic Church secretly investigates Caravaggio as the Pope weighs whether to grant him clemency for killing a rival.",
		"Language": "Italian, French, English, Latin",
		"Country": "Italy, France",
		"Awards": "8 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTIwZTA5MzgtZDNiYi00ODU0LWI4MWYtYTMyYmJjODExYzc3XkEyXkFqcGdeQXVyNTY2MzkxMjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.6",
		"imdbVotes": "1,257",
		"imdbID": "tt11877386",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Amsterdam",
		"Year": "2022",
		"Rated": "R",
		"Released": "07 Oct 2022",
		"Runtime": "134 min",
		"Genre": "Comedy, Drama, History",
		"Director": "David O. Russell",
		"Writer": "David O. Russell",
		"Actors": "Christian Bale, Margot Robbie, John David Washington",
		"Plot": "In the 1930s, three friends witness a murder, are framed for it, and uncover one of the most outrageous plots in American history.",
		"Language": "English, French, German, Portuguese",
		"Country": "United States, Japan",
		"Awards": "Nominated for 1 BAFTA Award2 wins & 12 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDQwNzE0ZTItYmZjMC00NjI3LWFlNzctNTExZDY2NWE0Zjc0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "32%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.1",
		"imdbVotes": "90,821",
		"imdbID": "tt10304142",
		"Type": "movie",
		"DVD": "11 Nov 2022",
		"BoxOffice": "$14,947,969",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Bird on a Wire",
		"Year": "1990",
		"Rated": "PG-13",
		"Released": "18 May 1990",
		"Runtime": "110 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "John Badham",
		"Writer": "Louis Venosta, Eric Lerner, David Seltzer",
		"Actors": "Mel Gibson, Goldie Hawn, David Carradine",
		"Plot": "Rick has been given a new identity by the FBI for helping convict a drug dealing FBI agent. Fifteen years later his former fiance recognises him. Rick's FBI 'minder' has been replaced by a corrupt agent who helps the drug dealing FBI agent and his accomplice locate him. There are many subsequent chase scenes as Rick and girlfriend revisit his former haunts.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzU5MTQyNzEwNV5BMl5BanBnXkFtZTgwMTgwNTg4NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "25%"
			},
			{
				"Source": "Metacritic",
				"Value": "36/100"
			}
		],
		"Metascore": "36",
		"imdbRating": "6.0",
		"imdbVotes": "47,326",
		"imdbID": "tt0099141",
		"Type": "movie",
		"DVD": "02 Jun 2015",
		"BoxOffice": "$70,978,012",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Baby Boom",
		"Year": "1987",
		"Rated": "PG",
		"Released": "30 Oct 1987",
		"Runtime": "110 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Charles Shyer",
		"Writer": "Nancy Meyers, Charles Shyer",
		"Actors": "Diane Keaton, Sam Shepard, Harold Ramis",
		"Plot": "J.C. Wiatt is a successful New York business woman known around town as the \"tiger lady.\" She gets news of an inheritance from a relative from another country and off the bat she suspects it's money. Well it's not money, it's a baby girl. At first she doesn't accept until the lady that gives the baby to her has to catch her flight. J.C. is now stuck with an annoying baby girl. Her boyfriend doesn't like the idea of a baby living with them and he leaves her. J.C. has enough of it and takes her to meet a family ready to adopt her. She leaves but hears the baby cry while walking away and has to go back. The baby is too attached to her now and won't let her go. Later, her baby gets into mischief which causes her to get fired. Now, she sets her eyes on an old two story cottage in Vermont to get out of the New York life. When she arrives, the house needs more help than originally thought. She gets bored one snowy day and decides to make apple sauce. Her baby loves it and she decides to sell it. Pretty soon everyone wants some of the baby apple sauce. J.C. hits it big and falls in love with a local veterinarian. Was this fate or destiny?",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NDY2ODMzOV5BMl5BanBnXkFtZTcwMjQ0MTcyNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "6.3",
		"imdbVotes": "18,904",
		"imdbID": "tt0092605",
		"Type": "movie",
		"DVD": "16 Sep 2008",
		"BoxOffice": "$26,712,476",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Chef",
		"Year": "2014",
		"Rated": "R",
		"Released": "30 May 2014",
		"Runtime": "114 min",
		"Genre": "Adventure, Comedy, Drama",
		"Director": "Jon Favreau",
		"Writer": "Jon Favreau",
		"Actors": "Jon Favreau, Robert Downey Jr., Scarlett Johansson",
		"Plot": "Carl Casper is an acclaimed chef with a family life that seems as decaying as his artistic freedom. Those frustrations boil over into a raucous viral-videoed public confrontation against a restaurant critic who panned his cooking of food that his boss ordered him to make against his instincts. Now with his career ruined, Carl's ex-wife offers an unorthodox solution in Miami: refit an old food truck to offer quality cooking on his own terms. Now with his young son, Percy, and old colleague, Martin, helping, Carl takes a working trip across America with that truck to rediscover his gastronomic passion. With Percy's tech savvy and Martin's enthusiasm, Carl finds that he is creating a traveling sensation on the way home. In doing so, Carl discovers he is serving up more than simply food, but also a deeper connection with his life and his family that is truly delicious in its own way.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTQyNDQwMjYtZTY5YS00MGU2LWE5NzctMjM4Y2IyYjkwMjNkXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.3",
		"imdbVotes": "229,931",
		"imdbID": "tt2883512",
		"Type": "movie",
		"DVD": "16 Sep 2014",
		"BoxOffice": "$31,424,003",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Burn All My Letters",
		"Year": "2022",
		"Rated": "N/A",
		"Released": "23 Sep 2022",
		"Runtime": "120 min",
		"Genre": "Drama, History",
		"Director": "Björn Runge",
		"Writer": "Alex Schulman, Veronica Zacco",
		"Actors": "Asta Kamma August, Bill Skarsgård, Gustav Lindh",
		"Plot": "It is based on the impact of passion, jealousy and anger across 70 years in a relationship, involving different generations.",
		"Language": "Swedish",
		"Country": "Sweden",
		"Awards": "7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWFkZWZkMDUtYjBkOC00MzUzLWJkMjItYjYxZTBiZjI2NTc0XkEyXkFqcGdeQXVyMTUyMDIzNjI2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.2",
		"imdbVotes": "1,420",
		"imdbID": "tt14909314",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Back to the Future Part III",
		"Year": "1990",
		"Rated": "PG",
		"Released": "25 May 1990",
		"Runtime": "118 min",
		"Genre": "Adventure, Comedy, Sci-Fi",
		"Director": "Robert Zemeckis",
		"Writer": "Robert Zemeckis, Bob Gale",
		"Actors": "Michael J. Fox, Christopher Lloyd, Mary Steenburgen",
		"Plot": "Stranded in 1955, Marty McFly receives written word from his friend, Doctor Emmett Brown, as to where can be found the DeLorean time machine. However, an unfortunate discovery prompts Marty to go to his friend's aid. Using the time machine, Marty travels to the old west where his friend has run afoul of a gang of thugs and has fallen in love with a local schoolteacher. Using the technology from the time, Marty and Emmett devise one last chance to send the two of them back to the future.",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 wins & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjhlMGYxNmMtOWFmMi00Y2M2LWE5NWYtZTdlMDRlMGEzMDA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "7.4",
		"imdbVotes": "477,946",
		"imdbID": "tt0099088",
		"Type": "movie",
		"DVD": "02 Jul 2015",
		"BoxOffice": "$88,277,583",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Blue Beetle",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "18 Aug 2023",
		"Runtime": "127 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Angel Manuel Soto",
		"Writer": "Gareth Dunnet-Alcocer",
		"Actors": "Xolo Maridueña, Bruna Marquezine, Becky G",
		"Plot": "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blu...",
		"Language": "English, Spanish",
		"Country": "United States, Mexico",
		"Awards": "3 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.0",
		"imdbVotes": "91,915",
		"imdbID": "tt9362930",
		"Type": "movie",
		"DVD": "26 Sep 2023",
		"BoxOffice": "$72,488,072",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Brotherhood of the Wolf",
		"Year": "2001",
		"Rated": "R",
		"Released": "25 Jan 2002",
		"Runtime": "142 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Christophe Gans",
		"Writer": "Stéphane Cabel, Christophe Gans",
		"Actors": "Samuel Le Bihan, Mark Dacascos, Jérémie Renier",
		"Plot": "In 1764 something was stalking the mountains of central France. A 'beast' that pounced on humans and animals with terrible ferocity. Indeed they beast became so notorious that the King of France dispatched envoys to find out what was happening and to kill the creature. By the end, the Beast of Gevaudan had killed over 100 people.To this day, no one is entirely sure what it was, a wolf? a hyena? or something supernatural? The Beast is a popular myth in France, albeit one rooted firmly in reality; somewhat surprisingly it is little known to the outside world, and perhaps incredibly it has never been made into a movie. Until now. Based on the true story of the Beast of the Gevaudan that terrorized France in the eighteenth century, the movie aims to tell first and explain afterwards. In the first part, a special envoy of the King of France, altogether biologist, explorer and philosopher, arrives in the Gevaudan region, in the mountainous central part of France. The Beast has been attacking women and children for months and nobody has been able to harm it or even take a good look at it. In the second part, our hero Chevalier de Fronsac will not only have to fight the Beast, but also ignorance, bigotry and conspiracy and will rely on two women, one an aristocrat, the other a prostitute, as well as the enigmatic Mani, an Iroquois he met in New-France (Canada).",
		"Language": "French, German, Italian",
		"Country": "France",
		"Awards": "4 wins & 22 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjRiNjU5OTYtZDAyNi00ZTI3LTlkNjAtYWM2YjIzNzdkM2NiXkEyXkFqcGdeQXVyNTI2ODA2NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "73%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "7.0",
		"imdbVotes": "71,004",
		"imdbID": "tt0237534",
		"Type": "movie",
		"DVD": "27 Jul 2021",
		"BoxOffice": "$11,274,610",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Back to the Future Part II",
		"Year": "1989",
		"Rated": "PG",
		"Released": "22 Nov 1989",
		"Runtime": "108 min",
		"Genre": "Adventure, Comedy, Sci-Fi",
		"Director": "Robert Zemeckis",
		"Writer": "Robert Zemeckis, Bob Gale",
		"Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
		"Plot": "Marty McFly has only just gotten back from the past, when he is once again picked up by Dr. Emmett Brown and sent through time to the future. Marty's job in the future is to pose as his own son to prevent him from being thrown in prison. Unfortunately, things get worse when the future changes the present.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 9 wins & 11 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "62%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "7.8",
		"imdbVotes": "568,958",
		"imdbID": "tt0096874",
		"Type": "movie",
		"DVD": "01 Oct 2014",
		"BoxOffice": "$119,000,002",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Broken City",
		"Year": "2013",
		"Rated": "R",
		"Released": "18 Jan 2013",
		"Runtime": "109 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Allen Hughes",
		"Writer": "Brian Tucker",
		"Actors": "Mark Wahlberg, Russell Crowe, Catherine Zeta-Jones",
		"Plot": "In New York City, detective Billy Taggart goes to court for the murder of the suspected rapist Mikey Tavarez, but the Mayor Nicholas Hostetler and the Chief of Police Carl Fairbanks make the important evidence vanish and the case against Billy is dismissed by the judge; however, he is forced to leave the police department. Seven years later, Billy is a private detective and lives with his girlfriend Natalie Barrow, who is an aspiring actress and the sister of Mikey's suspected victim.Billy's secretary Katy Bradshaw (Alona Tal) is trying to collect part of the debts to save their business. In the week of the elections, Hostetler summons Billy and offers $25,000 to investigate his wife, Cathleen Hostetler, whom he believes is having a love affair. Billy discovers that Cathleen is meeting Paul Andrews, who is the coordinator of the campaign for Jack Valliant, the opponent of Hostetler and favorite in the election. When Paul is found dead on the street, Billy thinks that he has been double-crossed by Hostetler and he decides to investigate the truth behind Paul's murder.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4OTIwODg4Ml5BMl5BanBnXkFtZTcwNjg0MDY1OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "27%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "6.1",
		"imdbVotes": "83,195",
		"imdbID": "tt1235522",
		"Type": "movie",
		"DVD": "30 Apr 2013",
		"BoxOffice": "$19,701,164",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Back to the Future",
		"Year": "1985",
		"Rated": "PG",
		"Released": "03 Jul 1985",
		"Runtime": "116 min",
		"Genre": "Adventure, Comedy, Sci-Fi",
		"Director": "Robert Zemeckis",
		"Writer": "Robert Zemeckis, Bob Gale",
		"Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson",
		"Plot": "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean \"time machine\" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 25 wins & 25 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "87/100"
			}
		],
		"Metascore": "87",
		"imdbRating": "8.5",
		"imdbVotes": "1,299,618",
		"imdbID": "tt0088763",
		"Type": "movie",
		"DVD": "08 Aug 2013",
		"BoxOffice": "$214,077,472",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Body of Lies",
		"Year": "2008",
		"Rated": "R",
		"Released": "10 Oct 2008",
		"Runtime": "128 min",
		"Genre": "Action, Drama, Thriller",
		"Director": "Ridley Scott",
		"Writer": "William Monahan, David Ignatius",
		"Actors": "Leonardo DiCaprio, Russell Crowe, Mark Strong",
		"Plot": "Roger Ferris is a CIA operative in the Middle East; Ed Hoffman is his control at Langley. Cynicism is everywhere. In Amman, Roger works with Hani Salaam, Jordan's head of security, whose only dictum is \"Don't lie to me.\" The Americans are in pursuit of a cleric who leads a group placing bombs all over Europe. When Hani rebukes Ed's demand that Jordan allow the Americans to use one of Jordan's double agents, Roger and Ed hatch a plan to bring the cleric to them. The plan is complicated by its being a secret from Hani and by Roger's attraction to a local nurse. Satellites and cell phones, bodies and lies: modern warfare.",
		"Language": "English, Arabic",
		"Country": "United States, United Kingdom",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTgzOTY3MTM0OV5BMl5BanBnXkFtZTcwNjc5MTI5MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "55%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "7.0",
		"imdbVotes": "238,381",
		"imdbID": "tt0758774",
		"Type": "movie",
		"DVD": "01 Sep 2010",
		"BoxOffice": "$39,394,666",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "BlackBerry",
		"Year": "2023",
		"Rated": "R",
		"Released": "13 Nov 2023",
		"Runtime": "120 min",
		"Genre": "Biography, Comedy, Drama",
		"Director": "Matt Johnson",
		"Writer": "Jacquie McNish, Sean Silcoff, Matt Johnson",
		"Actors": "Jay Baruchel, Glenn Howerton, Matt Johnson",
		"Plot": "The story of the meteoric rise and catastrophic demise of the world's first smartphone.",
		"Language": "English",
		"Country": "Canada",
		"Awards": "12 wins & 27 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDNhZWU4NTQtYjk1NS00MTM1LTg3ODYtMzE0MjQ2YTI5MGM4XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "98%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "7.4",
		"imdbVotes": "37,612",
		"imdbID": "tt21867434",
		"Type": "movie",
		"DVD": "02 Jun 2023",
		"BoxOffice": "$1,476,597",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Charlie Bartlett",
		"Year": "2007",
		"Rated": "R",
		"Released": "22 Feb 2008",
		"Runtime": "97 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Jon Poll",
		"Writer": "Gustin Nash",
		"Actors": "Anton Yelchin, Robert Downey Jr., Hope Davis",
		"Plot": "Although cheerful, friendly, intelligent, well-dressed, authentic and wealthy, Charlie Bartlett has problems. With his father gone and his mother loopy and clueless, he's been expelled from every private school for his victimless crimes. Now he's in a public school getting punched out daily by the school thug. He ever longs to be popular - the go-to guy - and the true crux of his troubles is that he invariably finds the means to this end, whatever that might be. At Western Summit High, he makes peace with his tormentor by going into business with him - listening to kids' problems and selling them prescription drugs. Charlie's a hit, but attraction to Susan (daughter of the school's laissez-faire principal), new security cameras on campus, a student's overdose, and Charlie's open world view all converge to get him in serious trouble. Can this self-made physician possibly heal himself and just be a kid?",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNTgyNDI2NF5BMl5BanBnXkFtZTcwOTA2NTg1MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.9",
		"imdbVotes": "66,491",
		"imdbID": "tt0423977",
		"Type": "movie",
		"DVD": "19 Aug 2016",
		"BoxOffice": "$3,951,699",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Bullet Train",
		"Year": "2022",
		"Rated": "R",
		"Released": "05 Aug 2022",
		"Runtime": "127 min",
		"Genre": "Action, Comedy, Thriller",
		"Director": "David Leitch",
		"Writer": "Zak Olkewicz, Kôtarô Isaka",
		"Actors": "Brad Pitt, Joey King, Aaron Taylor-Johnson",
		"Plot": "Trained killer Ladybug wants to give up the life but is pulled back in by his handler Maria Beetle in order to collect a briefcase on a bullet train heading from Tokyo to Morioka. On board are fellow assasins Kimura, the Prince, Tangerine, and Lemon. Once on board the five assasins discover that their objectives are all connected.",
		"Language": "English, Japanese, Spanish, Russian",
		"Country": "Japan, United States",
		"Awards": "2 wins & 18 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "7.3",
		"imdbVotes": "415,217",
		"imdbID": "tt12593682",
		"Type": "movie",
		"DVD": "03 Dec 2022",
		"BoxOffice": "$103,368,602",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Brightburn",
		"Year": "2019",
		"Rated": "R",
		"Released": "24 May 2019",
		"Runtime": "90 min",
		"Genre": "Drama, Horror, Mystery",
		"Director": "David Yarovesky",
		"Writer": "Brian Gunn, Mark Gunn",
		"Actors": "Elizabeth Banks, David Denman, Jackson A. Dunn",
		"Plot": "After a difficult struggle with fertility, Tori Breyer's dreams of motherhood come true with the arrival of a mysterious baby boy. Brandon appears to be everything Tori and her husband, Kyle, ever wanted -- bright, talented and curious about the world. But as Brandon nears puberty, powerful darkness manifests within him, and Tori becomes consumed by terrible doubts about her son. Once Brandon begins to act on his twisted urges, those closest to him find themselves in grave danger.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjc0YzM2ZjItNzE3OS00NTRhLTkyNTUtMjY5Y2Y5NTU3OWI0XkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "57%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "6.1",
		"imdbVotes": "106,623",
		"imdbID": "tt7752126",
		"Type": "movie",
		"DVD": "06 Aug 2019",
		"BoxOffice": "$17,300,439",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Bad Words",
		"Year": "2013",
		"Rated": "R",
		"Released": "28 Mar 2014",
		"Runtime": "89 min",
		"Genre": "Comedy, Drama",
		"Director": "Jason Bateman",
		"Writer": "Andrew Dodge",
		"Actors": "Jason Bateman, Kathryn Hahn, Allison Janney",
		"Plot": "An adult, who has been a school dropout, finds a loophole in the regulations and participates in the largest spelling bee in the USA, The Golden Quill. His aim is to take revenge for something done to him in the past.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2M1MDljMmItMDE0ZS00OTQxLTkxNmQtMTgwZjk3NmM3MDc4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "65%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "6.6",
		"imdbVotes": "55,025",
		"imdbID": "tt2170299",
		"Type": "movie",
		"DVD": "21 Jul 2015",
		"BoxOffice": "$7,779,614",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Biutiful",
		"Year": "2010",
		"Rated": "R",
		"Released": "04 Feb 2011",
		"Runtime": "148 min",
		"Genre": "Drama, Romance",
		"Director": "Alejandro G. Iñárritu",
		"Writer": "Alejandro G. Iñárritu, Armando Bo, Nicolás Giacobone",
		"Actors": "Javier Bardem, Maricel Álvarez, Hanaa Bouchaib",
		"Plot": "Uxbal, single father of two children, finds his life in chaos as he is forced to deal with his life in order to escape the heat of crime in underground Barcelona, to break with the love for the divorced, manic depressive, abusive mother of his children and to regain spiritual insight in his life as he is diagnosed with terminal cancer.",
		"Language": "Spanish, Chinese, Wolof",
		"Country": "Mexico, Spain",
		"Awards": "Nominated for 2 Oscars. 21 wins & 65 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzI4OTQ0MDQyNl5BMl5BanBnXkFtZTcwODY5MjQwNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "66%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "7.4",
		"imdbVotes": "94,396",
		"imdbID": "tt1164999",
		"Type": "movie",
		"DVD": "31 May 2012",
		"BoxOffice": "$5,101,237",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Choke",
		"Year": "2008",
		"Rated": "R",
		"Released": "30 Oct 2008",
		"Runtime": "92 min",
		"Genre": "Comedy, Drama",
		"Director": "Clark Gregg",
		"Writer": "Clark Gregg, Chuck Palahniuk",
		"Actors": "Sam Rockwell, Anjelica Huston, Kelly Macdonald",
		"Plot": "Sex addict and colonial theme park worker, Victor Mancini, has devised a complicated scam to pay for his mom's hospital bills while she suffers from an Alzheimer's disease that hides the truth about his childhood. He pretends to choke on food in a restaurant and the person who \"saves\" him will feel responsible for Victor for the rest of their lives.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTMxMDI4MTE0Ml5BMl5BanBnXkFtZTcwNTg0NDI3MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "56%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.4",
		"imdbVotes": "33,535",
		"imdbID": "tt1024715",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$2,926,565",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Cobweb",
		"Year": "2023",
		"Rated": "R",
		"Released": "20 Oct 2023",
		"Runtime": "88 min",
		"Genre": "Horror, Mystery, Thriller",
		"Director": "Samuel Bodin",
		"Writer": "Chris Thomas Devlin",
		"Actors": "Lizzy Caplan, Antony Starr, Cleopatra Coleman",
		"Plot": "An eight-year-old boy tries to investigate the mysterious knocking sounds that are coming from inside the walls of his house, unveiling a dark secret that his sinister parents have kept hidden from him.",
		"Language": "English",
		"Country": "United States, Bulgaria",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWI2NjQ2NGYtNDMwYS00YzNlLWFjZTctNzQ5MTRiYzQyZjMzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.0",
		"imdbVotes": "29,754",
		"imdbID": "tt9100018",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Braveheart",
		"Year": "1995",
		"Rated": "R",
		"Released": "24 May 1995",
		"Runtime": "178 min",
		"Genre": "Biography, Drama, History",
		"Director": "Mel Gibson",
		"Writer": "Randall Wallace",
		"Actors": "Mel Gibson, Sophie Marceau, Patrick McGoohan",
		"Plot": "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce.",
		"Language": "English, French, Latin, Gaelic, Italian",
		"Country": "United States",
		"Awards": "Won 5 Oscars. 34 wins & 34 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "8.3",
		"imdbVotes": "1,086,400",
		"imdbID": "tt0112573",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$75,609,945",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Charlie and the Chocolate Factory",
		"Year": "2005",
		"Rated": "PG",
		"Released": "15 Jul 2005",
		"Runtime": "115 min",
		"Genre": "Adventure, Comedy, Family",
		"Director": "Tim Burton",
		"Writer": "Roald Dahl, John August",
		"Actors": "Johnny Depp, Freddie Highmore, David Kelly",
		"Plot": "When Willy Wonka decides to let five children into his chocolate factory, he decides to release five golden tickets in five separate chocolate bars, causing complete mayhem. The tickets start to be found, with the fifth going to a very special boy, called Charlie Bucket. With his Grandpa, Charlie joins the rest of the children to experience the most amazing factory ever. But not everything goes to plan within the factory.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 1 Oscar. 15 wins & 52 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "6.7",
		"imdbVotes": "524,937",
		"imdbID": "tt0367594",
		"Type": "movie",
		"DVD": "15 Jan 2008",
		"BoxOffice": "$206,459,076",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Champions",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "10 Mar 2023",
		"Runtime": "124 min",
		"Genre": "Comedy, Drama, Sport",
		"Director": "Bobby Farrelly",
		"Writer": "Mark Rizzo, Javier Fesser, David Marqués",
		"Actors": "Woody Harrelson, Kaitlin Olson, Matt Cook",
		"Plot": "A former minor-league basketball coach is ordered by the court to manage a team of players with intellectual disabilities. He soon realizes that despite his doubts, together, this team can go further than they ever imagined.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTYwMWJjZTgtMzJiNS00OGIzLWE1NDYtNjgwMDUwYjZiOTc5XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "59%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.8",
		"imdbVotes": "24,794",
		"imdbID": "tt15339570",
		"Type": "movie",
		"DVD": "28 Mar 2023",
		"BoxOffice": "$16,397,335",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Breakwater",
		"Year": "2023",
		"Rated": "R",
		"Released": "22 Dec 2023",
		"Runtime": "97 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "James Rowe",
		"Writer": "James Rowe",
		"Actors": "Dermot Mulroney, Darren Mann, Alyssa Goss",
		"Plot": "A young ex-con risks his newfound freedom to track down the estranged daughter of a fellow inmate, and unknowingly brings a devil from her past straight to her doorstep.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTBjMjc4YjAtYTQ3Zi00ZWVhLWE2NTYtMTVkZjBkYmYxMmY3XkEyXkFqcGdeQXVyMTAwOTE4NTc4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.1/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.1",
		"imdbVotes": "662",
		"imdbID": "tt13924484",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Capernaum",
		"Year": "2018",
		"Rated": "R",
		"Released": "20 Sep 2018",
		"Runtime": "126 min",
		"Genre": "Drama",
		"Director": "Nadine Labaki",
		"Writer": "Nadine Labaki, Jihad Hojeily, Michelle Keserwany",
		"Actors": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole",
		"Plot": "Capernaüm (\"Chaos\") tells the story of Zain (Zain al-Rafeea), a Lebanese boy who sues his parents for the \"crime\" of giving him life. The film follows Zain as he journeys from gutsy, streetwise child to hardened 12-year-old \"adult\" fleeing his negligent parents, surviving through his wits on the streets, where he meets Ethiopian migrant worker Rahil, who provides him with shelter and food, as Zain takes care of her baby son Yonas in return. Zain later gets jailed for committing a violent crime, and finally seeks justice in a courtroom.",
		"Language": "Arabic, Amharic",
		"Country": "Lebanon, United States, France, Cyprus, Qatar, United Kingdom",
		"Awards": "Nominated for 1 Oscar. 39 wins & 55 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "8.4",
		"imdbVotes": "104,095",
		"imdbID": "tt8267604",
		"Type": "movie",
		"DVD": "26 Mar 2019",
		"BoxOffice": "$1,661,096",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "American History X",
		"Year": "1998",
		"Rated": "R",
		"Released": "20 Nov 1998",
		"Runtime": "119 min",
		"Genre": "Crime, Drama",
		"Director": "Tony Kaye",
		"Writer": "David McKenna",
		"Actors": "Edward Norton, Edward Furlong, Beverly D'Angelo",
		"Plot": "Derek Vineyard is paroled after serving 3 years in prison for brutally killing two black men who tried to break into/steal his truck. Through his brother's, Danny Vineyard, narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 4 wins & 15 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "62/100"
			}
		],
		"Metascore": "62",
		"imdbRating": "8.5",
		"imdbVotes": "1,180,283",
		"imdbID": "tt0120586",
		"Type": "movie",
		"DVD": "01 Jul 2008",
		"BoxOffice": "$6,719,864",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Contact",
		"Year": "1997",
		"Rated": "PG",
		"Released": "11 Jul 1997",
		"Runtime": "150 min",
		"Genre": "Drama, Mystery, Sci-Fi",
		"Director": "Robert Zemeckis",
		"Writer": "James V. Hart, Michael Goldenberg, Carl Sagan",
		"Actors": "Jodie Foster, Matthew McConaughey, Tom Skerritt",
		"Plot": "Astronomer Dr. Ellie Arroway has long been interested in contact to faraway lands, a love fostered in her childhood by her father, Ted Arroway (David Morse), who died when she was nine-years-old, leaving her orphaned. Her current work in monitoring for extraterrestrial life is based on that love and is in part an homage to her father. Ever since funding from the National Science Foundation (N.S.F.) was pulled on her work, which is referred to some, including her N.S.F. superior David Drumlin (Tom Skerritt), as more science fiction than science, Ellie, with a few of her rogue scientist colleagues, have looked for funding from where ever they could get it to continue their work. When Ellie and her colleagues hear chatter originating from the vicinity of the star Vega, Ellie feels vindicated. But that vindication is short lived when others, including politicians, the military, religious leaders, and other scientists, such as Drumlin, try to take over her work. When the messages received from space are decoded, the project takes on a whole new dimension, which strengthens for Ellie the quest for the truth. Thrown into the mix are the unknown person who has up until now funded most of Ellie's work and what his motivations are, and Palmer Joss (Matthew McConaughey), a renowned author and theologian, who despite their fundamental differences in outlook, is mutually attracted to Ellie, that attraction based in part on intellect and their common goal of wanting to know the truth.",
		"Language": "English, Spanish, German, Russian",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 14 wins & 32 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "62/100"
			}
		],
		"Metascore": "62",
		"imdbRating": "7.5",
		"imdbVotes": "290,799",
		"imdbID": "tt0118884",
		"Type": "movie",
		"DVD": "01 May 2008",
		"BoxOffice": "$100,920,329",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Crazy Rich Asians",
		"Year": "2018",
		"Rated": "PG-13",
		"Released": "15 Aug 2018",
		"Runtime": "120 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Jon M. Chu",
		"Writer": "Peter Chiarelli, Adele Lim, Kevin Kwan",
		"Actors": "Constance Wu, Henry Golding, Michelle Yeoh",
		"Plot": "Rachel Chu, an American-born Chinese NYU professor, travels with her boyfriend, Nick to his hometown of Singapore for his best friend's wedding. Before long, his secret is out: Nick's family is wealthy, and he's considered the most eligible bachelor in Asia. Every single woman is incredibly jealous of Rachel and wants to bring her down.",
		"Language": "English, Mandarin, Cantonese, Hokkien, French, Malay",
		"Country": "United States",
		"Awards": "14 wins & 72 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "6.9",
		"imdbVotes": "187,826",
		"imdbID": "tt3104988",
		"Type": "movie",
		"DVD": "06 Nov 2018",
		"BoxOffice": "$174,837,452",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ford v Ferrari",
		"Year": "2019",
		"Rated": "PG-13",
		"Released": "15 Nov 2019",
		"Runtime": "152 min",
		"Genre": "Action, Biography, Drama",
		"Director": "James Mangold",
		"Writer": "Jez Butterworth, John-Henry Butterworth, Jason Keller",
		"Actors": "Matt Damon, Christian Bale, Jon Bernthal",
		"Plot": "As Enzo Ferrari's fast Rosso-Corsa racing cars dominate the mid-1960s motorsport world, the American car designer, Carroll Shelby, is forced to retire after winning the demanding 1959 '24 Hours of Le Mans' endurance race. But, before long, an unexpected proposition by the Vice President of Henry Ford's motor company, Lee Iacocca, will offer an opportunity to beat the Italians at their own game. Now, under those pressing circumstances, the British sports car driver and racing engineer, Ken Miles, reluctantly agrees to lend a hand and improve the firm's image, as Ford's race team has less than ninety days to rewrite history. As a result, the non-conformist duo comes up with the mighty Ford GT40 Mk I high-performance racing car. Can Shelby and Miles break Ferrari's streak?",
		"Language": "English, Italian, French, Japanese",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 26 wins & 88 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "8.1",
		"imdbVotes": "456,136",
		"imdbID": "tt1950186",
		"Type": "movie",
		"DVD": "15 Nov 2019",
		"BoxOffice": "$117,624,357",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dogville",
		"Year": "2003",
		"Rated": "R",
		"Released": "23 Apr 2004",
		"Runtime": "178 min",
		"Genre": "Crime, Drama",
		"Director": "Lars von Trier",
		"Writer": "Lars von Trier",
		"Actors": "Nicole Kidman, Paul Bettany, Lauren Bacall",
		"Plot": "Late one night, a beautiful and well-dressed young woman, Grace (Nicole Kidman), arrives in the mountainous old mining town of Dogville as a fugitive; following the sound of gunshots in the distance which have been heard by Tom (Paul Bettany), the self-appointed moral spokesman for the town. Persuaded by Tom, the town agree to hide Grace, and in return she freely helps the locals. However, when the Sheriff from a neighbouring town posts a Missing notice, advertising a reward for revealing her whereabouts, the townsfolk require a better deal from Grace, in return for their silence; and when the Sheriff returns some weeks later with a Wanted poster, even though the citizens know her to be innocent of the false charges against her, the town's sense of goodness takes a sinister turn and the price of Grace's freedom becomes a workload and treatment akin to that of a slave. But Grace has a deadly secret that the townsfolk will eventually encounter.",
		"Language": "English, French",
		"Country": "Denmark, Netherlands, Sweden, Germany, United Kingdom, France, Finland, Norway, Italy",
		"Awards": "21 wins & 33 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkwNTg2MTI1NF5BMl5BanBnXkFtZTcwMDM1MzUyMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "8.0",
		"imdbVotes": "157,760",
		"imdbID": "tt0276919",
		"Type": "movie",
		"DVD": "01 Jun 2007",
		"BoxOffice": "$1,535,286",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ferrari",
		"Year": "2023",
		"Rated": "R",
		"Released": "25 Dec 2023",
		"Runtime": "130 min",
		"Genre": "Biography, Drama, History",
		"Director": "Michael Mann",
		"Writer": "Troy Kennedy Martin, Brock Yates",
		"Actors": "Adam Driver, Shailene Woodley, Giuseppe Festinese",
		"Plot": "Set in the summer of 1957, with Enzo Ferrari's auto empire in crisis, the ex-racer turned entrepreneur pushes himself and his drivers to the edge as they launch into the Mille Miglia, a treacherous 1,000-mile race across Italy.",
		"Language": "English",
		"Country": "United States, United Kingdom, Italy, China",
		"Awards": "Nominated for 1 BAFTA Award4 wins & 38 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTM0YTBlMjctZjJjZS00MDU4LTg5YmQtMDY5Y2FhMWZiMjQ2XkEyXkFqcGdeQXVyNzU0NzQxNTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "72%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.5",
		"imdbVotes": "30,204",
		"imdbID": "tt3758542",
		"Type": "movie",
		"DVD": "23 Jan 2024",
		"BoxOffice": "$18,550,028",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Godzilla: King of the Monsters",
		"Year": "2019",
		"Rated": "PG-13",
		"Released": "31 May 2019",
		"Runtime": "132 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Michael Dougherty",
		"Writer": "Michael Dougherty, Zach Shields, Max Borenstein",
		"Actors": "Kyle Chandler, Vera Farmiga, Millie Bobby Brown",
		"Plot": "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three headed King Ghidorah. When these ancient superspecies, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
		"Language": "English, Japanese, Chinese, Spanish",
		"Country": "United States, Japan, Mexico, China",
		"Awards": "5 wins & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.0",
		"imdbVotes": "201,971",
		"imdbID": "tt3741700",
		"Type": "movie",
		"DVD": "13 Aug 2019",
		"BoxOffice": "$110,500,138",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Fracture",
		"Year": "2007",
		"Rated": "R",
		"Released": "20 Apr 2007",
		"Runtime": "113 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "Gregory Hoblit",
		"Writer": "Daniel Pyne, Glenn Gers",
		"Actors": "Anthony Hopkins, Ryan Gosling, David Strathairn",
		"Plot": "Wealthy, brilliant, and meticulous Ted Crawford, a structural engineer in Los Angeles, shoots his wife Jennifer and entraps her lover, Lieutenant Robert \"Rob\" Nunally. He signs a confession. At the arraignment, he asserts his rights to represent himself and asks the court to move immediately to trial. The prosecutor is Willy Beachum, a hotshot who's soon to join a fancy civil-law firm, told by everyone it's an open and shut case. Crawford sees Beachum's weakness, the hairline fracture of his character: Willy's a winner. The engineer sets in motion a clockwork crime with all of the objects moving in ways he predicts.",
		"Language": "English",
		"Country": "Germany, United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzIzNjQyMzkwM15BMl5BanBnXkFtZTcwOTg5ODQ0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "72%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.2",
		"imdbVotes": "217,971",
		"imdbID": "tt0488120",
		"Type": "movie",
		"DVD": "19 Dec 2008",
		"BoxOffice": "$39,015,018",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Devil",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "17 Sep 2010",
		"Runtime": "80 min",
		"Genre": "Horror, Mystery, Thriller",
		"Director": "John Erick Dowdle",
		"Writer": "Brian Nelson, M. Night Shyamalan",
		"Actors": "Chris Messina, Caroline Dhavernas, Bokeem Woodbine",
		"Plot": "In Philadelphia, Detective Bowden is still grieving for his wife and son, killed in a hit-and-run five years ago. When someone jumps from a skyscraper onto a truck, Bowden is sent to investigate. Meanwhile, five strangers are trapped in an elevator in the building where the jumper committed suicide. The communication radio in the elevator is broken but the guards, Lustig and Ramirez, observe the individuals via CCTV as events unfold. Tensions run high among those trapped, so Lustig calls the police and Detective Bowden assumes the case. Without being able to contact the individuals, he tries to work out who they are, but he can only account for four of them. Time is running out for the occupants of the elevator, as Bowden realizes he has to get them out quickly.",
		"Language": "English, Spanish, Ukrainian",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDVmZGExMTEtNjk5OS00MTFkLWI0ZDMtNzg4YWFmNGY3NjRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "50%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "6.3",
		"imdbVotes": "156,418",
		"imdbID": "tt1314655",
		"Type": "movie",
		"DVD": "01 Nov 2015",
		"BoxOffice": "$33,601,190",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Half-Blood Prince",
		"Year": "2009",
		"Rated": "PG",
		"Released": "15 Jul 2009",
		"Runtime": "153 min",
		"Genre": "Action, Adventure, Family",
		"Director": "David Yates",
		"Writer": "Steve Kloves, J.K. Rowling",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "During Harry Potter's sixth year at Hogwarts, he finds a book that once belonged to the mysterious Half-Blood Prince that earns him the respect of his new Potions professor Horace Slughorn. In addition, Dumbledore must prepare Harry for the ultimate final confrontation by finding out the secret behind Voldemort's power. Meanwhile, a hidden enemy waits in the shadows to carry out a mission given to him by the Dark Lord.",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 1 Oscar. 9 wins & 39 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "78/100"
			}
		],
		"Metascore": "78",
		"imdbRating": "7.6",
		"imdbVotes": "589,996",
		"imdbID": "tt0417741",
		"Type": "movie",
		"DVD": "01 Jun 2011",
		"BoxOffice": "$302,334,374",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Doctor Strange in the Multiverse of Madness",
		"Year": "2022",
		"Rated": "PG-13",
		"Released": "06 May 2022",
		"Runtime": "126 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Sam Raimi",
		"Writer": "Michael Waldron, Stan Lee, Steve Ditko",
		"Actors": "Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor",
		"Plot": "After the events of Avengers: Endgame, Dr. Stephen Strange continues his research on the Time Stone. But an old friend turned enemy seeks to destroy every sorcerer on Earth, messing with Strange's plan, causing him to unleash an unspeakable evil",
		"Language": "English, Spanish, Chinese",
		"Country": "United States",
		"Awards": "10 wins & 28 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "73%"
			},
			{
				"Source": "Metacritic",
				"Value": "60/100"
			}
		],
		"Metascore": "60",
		"imdbRating": "6.9",
		"imdbVotes": "472,712",
		"imdbID": "tt9419884",
		"Type": "movie",
		"DVD": "22 Jun 2022",
		"BoxOffice": "$411,331,607",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Drunken Master",
		"Year": "1978",
		"Rated": "PG-13",
		"Released": "05 Oct 1978",
		"Runtime": "111 min",
		"Genre": "Action, Comedy",
		"Director": "Woo-Ping Yuen",
		"Writer": "Lung Hsiao, See-Yuen Ng",
		"Actors": "Jackie Chan, Siu-Tin Yuen, Jeong-lee Hwang",
		"Plot": "The father of Wong Fei-hong, who has been attempting to teach his son kung-fu, but has found him too disobedient to teach and decides to send him off to his uncle, a cruel and torturous master of the 8-Drunken Genii kung-fu. After much suffering the son comes back to rescue the father from an assassin.",
		"Language": "Cantonese, English, Mandarin",
		"Country": "Hong Kong",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzY1ZjM2MzgtODUwZi00NWM3LThlYjAtNWJjZGM2ZDY1ODg1XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.4",
		"imdbVotes": "43,487",
		"imdbID": "tt0080179",
		"Type": "movie",
		"DVD": "01 May 2012",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Day Shift",
		"Year": "2022",
		"Rated": "R",
		"Released": "12 Aug 2022",
		"Runtime": "113 min",
		"Genre": "Action, Comedy, Fantasy",
		"Director": "J.J. Perry",
		"Writer": "Tyler Tice, Shay Hatten",
		"Actors": "Jamie Foxx, Dave Franco, Natasha Liu Bordizzo",
		"Plot": "A hard-working, blue-collar dad just wants to provide a good life for his quick-witted 10-year-old daughter. His mundane San Fernando Valley pool cleaning job is a front for his real source of income: hunting and killing vampires.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWI2ZDRjYjEtOWJiOS00NWVjLWI1MjAtNWNiMzAwNGFmNjljXkEyXkFqcGdeQXVyODEwMTc2ODQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "56%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.1",
		"imdbVotes": "89,094",
		"imdbID": "tt13314558",
		"Type": "movie",
		"DVD": "12 Aug 2022",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hall Pass",
		"Year": "2011",
		"Rated": "R",
		"Released": "25 Feb 2011",
		"Runtime": "105 min",
		"Genre": "Comedy, Romance",
		"Director": "Bobby Farrelly, Peter Farrelly",
		"Writer": "Pete Jones, Peter Farrelly, Kevin Barnett",
		"Actors": "Owen Wilson, Jason Sudeikis, Christina Applegate",
		"Plot": "A couple of married men are always looking at other women. Their wives are fed up with their behavior, and grant them a 'hall pass': a week off their marriage allowing them to do anything. But the guys take their time and their week is almost up. What they don't realize is that at the same time their wives make connections of their own.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc4MzIxNTYwNl5BMl5BanBnXkFtZTcwNzE4MjE0NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "5.9",
		"imdbVotes": "130,473",
		"imdbID": "tt0480687",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$45,060,734",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hidalgo",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "05 Mar 2004",
		"Runtime": "136 min",
		"Genre": "Action, Adventure, Biography",
		"Director": "Joe Johnston",
		"Writer": "John Fusco",
		"Actors": "Viggo Mortensen, Omar Sharif, Zuleikha Robinson",
		"Plot": "Cowboy Frank T. Hopkins, who has an Indian mother, was wounded and traumatized for life as US Cavalry scout at the Wounded Knee Massacre and joint Buffalo Bill's world travelling (Ringling Circus) Wild West show as horse stuntman as well as reputed horse racer. An Arabian sheikh comes dare him to defend the show billing as the world's greatest endurance rider, by entering -as first Westerner- the millennial great 'ocean of fire' race across the unforgiving Arab deserts, which always eliminates most riders, often fatally. Hopkins enters with the first-ever non-thoroughbred, his trusted mustang Hidalgo. As if learning the harsh country in the act weren't hard enough, he must contend with contempt for infidels and impure horses, as well as competitors stopping at nothing, including the Enlish lady davenport who employs one, having wagered against the obvious favorite, the champions from the stable of Sheikh Riyadh, whose tomcat daughter sides with Hopkins, which proves both helpful and as a mortal a danger as a sand storm.",
		"Language": "English, Arabic, Sioux",
		"Country": "United States, Morocco",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTgyNjg5MjcxMl5BMl5BanBnXkFtZTcwNDQxMzQyMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.7",
		"imdbVotes": "85,324",
		"imdbID": "tt0317648",
		"Type": "movie",
		"DVD": "01 Mar 2016",
		"BoxOffice": "$67,303,450",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hercules",
		"Year": "1997",
		"Rated": "G",
		"Released": "27 Jun 1997",
		"Runtime": "93 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Ron Clements, John Musker",
		"Writer": "Ron Clements, John Musker, Don McEnery",
		"Actors": "Tate Donovan, Susan Egan, James Woods",
		"Plot": "Hercules, son of the Greek God, Zeus, is turned into a half-god, half-mortal by evil Hades, God of the Underworld, who plans to overthrow Zeus. Hercules is raised on Earth and retains his god-like strength, but when he discovers his immortal heritage Zeus tells him that to return to Mount Olympus he must become a true hero. Hercules becomes a famous hero with the help of his friend Pegasus and his personal trainer, Phil the satyr. Hercules battles monsters, Hades and the Titans, but it is his self-sacrifice to rescue his love Meg which makes him a true hero.",
		"Language": "English, Spanish, Greek",
		"Country": "United States, Japan",
		"Awards": "Nominated for 1 Oscar. 9 wins & 16 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDcwYjEyNWItMGI1Mi00MjI1LWIyMDEtMTQ4YjhkNjM4NDU3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "7.3",
		"imdbVotes": "253,544",
		"imdbID": "tt0119282",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$99,112,101",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dracula Untold",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "10 Oct 2014",
		"Runtime": "92 min",
		"Genre": "Action, Drama, Fantasy",
		"Director": "Gary Shore",
		"Writer": "Matt Sazama, Burk Sharpless, Bram Stoker",
		"Actors": "Luke Evans, Dominic Cooper, Sarah Gadon",
		"Plot": "At the turn of the century, the young lord Vlad and his family live a peaceful life ruling over their small kingdom, but when a Turk warlord demands from Vlad a thousand boys and his son to create an army Vlad seeks a terrible power that will allow him to protect his kingdom and family from the Turks at a terrible cost.",
		"Language": "English, Turkish",
		"Country": "United States, Japan",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNzI1OTI4N15BMl5BanBnXkFtZTgwNTQ2NzEwMjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "25%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "6.2",
		"imdbVotes": "206,706",
		"imdbID": "tt0829150",
		"Type": "movie",
		"DVD": "16 Aug 2016",
		"BoxOffice": "$56,280,355",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Holidays",
		"Year": "2016",
		"Rated": "Not Rated",
		"Released": "15 Apr 2016",
		"Runtime": "105 min",
		"Genre": "Fantasy, Horror, Mystery",
		"Director": "Anthony Scott Burns, Kevin Kölsch, Nicholas McCarthy",
		"Writer": "Anthony Scott Burns, Kevin Kölsch, Nicholas McCarthy",
		"Actors": "Madeleine Coghlan, Savannah Kennick, Rick Peters",
		"Plot": "HOLIDAYS is an anthology feature film that puts a uniquely dark and original spin on some of the most iconic and beloved holidays of all time. The film challenges our folklore, traditions and assumptions, making HOLIDAYS a celebration of the horror on those same special days' year after year. A collaboration of some of Hollywood's most distinct voices, the directors include Kevin Smith (Tusk), Gary Shore (Dracula Untold), Scott Stewart (Dark Skies), Kevin Kolsch and Dennis Widmyer (Starry Eyes), Sarah Adina Smith (The Midnight Swim), Nicholas McCarthy (The Pact), Adam Egypt Mortimer (Some Kind of Hate), and Anthony Scott Burns (Darknet).",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTIyY2QwZTEtOGNlNC00ZjViLTk3YzAtZDc4MmRkZjY1YzFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "50%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "5.1",
		"imdbVotes": "11,805",
		"imdbID": "tt4419364",
		"Type": "movie",
		"DVD": "18 Nov 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Fight Club",
		"Year": "1999",
		"Rated": "R",
		"Released": "15 Oct 1999",
		"Runtime": "139 min",
		"Genre": "Drama",
		"Director": "David Fincher",
		"Writer": "Chuck Palahniuk, Jim Uhls",
		"Actors": "Brad Pitt, Edward Norton, Meat Loaf",
		"Plot": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
		"Language": "English",
		"Country": "Germany, United States",
		"Awards": "Nominated for 1 Oscar. 12 wins & 38 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "8.8",
		"imdbVotes": "2,300,999",
		"imdbID": "tt0137523",
		"Type": "movie",
		"DVD": "19 Nov 2014",
		"BoxOffice": "$37,030,102",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Deathly Hallows: Part 1",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "19 Nov 2010",
		"Runtime": "146 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "David Yates",
		"Writer": "Steve Kloves, J.K. Rowling",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "Voldemort's (Ralph Fiennes') power is growing stronger. He now has control over the Ministry of Magic and Hogwarts. Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) decide to finish Dumbledore's (Sir Michael Gambon's) work and find the rest of the Horcruxes to defeat the Dark Lord. But little hope remains for the trio and the rest of the Wizarding World, so everything they do must go as planned.",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 Oscars. 15 wins & 55 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "77%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.7",
		"imdbVotes": "595,870",
		"imdbID": "tt0926084",
		"Type": "movie",
		"DVD": "19 Jul 2013",
		"BoxOffice": "$296,374,621",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dungeons & Dragons: Honor Among Thieves",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "31 Mar 2023",
		"Runtime": "134 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "John Francis Daley, Jonathan Goldstein",
		"Writer": "Jonathan Goldstein, John Francis Daley, Michael Gilio",
		"Actors": "Chris Pine, Michelle Rodriguez, Regé-Jean Page",
		"Plot": "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
		"Language": "English",
		"Country": "United States, Canada, United Kingdom, Iceland, Ireland, Australia",
		"Awards": "1 win & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.3",
		"imdbVotes": "220,291",
		"imdbID": "tt2906216",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$93,277,026",
		"Production": "Paramount Pictures",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Heat",
		"Year": "1995",
		"Rated": "R",
		"Released": "15 Dec 1995",
		"Runtime": "170 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Michael Mann",
		"Writer": "Michael Mann",
		"Actors": "Al Pacino, Robert De Niro, Val Kilmer",
		"Plot": "Hunters and their prey--Neil and his professional criminal crew hunt to score big money targets (banks, vaults, armored cars) and are, in turn, hunted by Lt. Vincent Hanna and his team of cops in the Robbery/Homicide police division. A botched job puts Hanna onto their trail while they regroup and try to put together one last big 'retirement' score. Neil and Vincent are similar in many ways, including their troubled personal lives. At a crucial moment in his life, Neil disobeys the dictum taught to him long ago by his criminal mentor--'Never have anything in your life that you can't walk out on in thirty seconds flat, if you spot the heat coming around the corner'--as he falls in love. Thus the stage is set for the suspenseful ending....",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "15 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "8.3",
		"imdbVotes": "715,349",
		"imdbID": "tt0113277",
		"Type": "movie",
		"DVD": "19 Nov 2015",
		"BoxOffice": "$67,436,818",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Enemy at the Gates",
		"Year": "2001",
		"Rated": "R",
		"Released": "16 Mar 2001",
		"Runtime": "131 min",
		"Genre": "Action, Drama, War",
		"Director": "Jean-Jacques Annaud",
		"Writer": "Jean-Jacques Annaud, Alain Godard",
		"Actors": "Jude Law, Ed Harris, Joseph Fiennes",
		"Plot": "In World War II, the fall of Stalingrad will mean the collapse of the whole country. The Germans and Russians are fighting over every block, leaving only ruins behind. The Russian sniper Vassili Zaitsev stalks the Germans, taking them out one by one, thus hurting the morale of the German troops. The political officer Danilov leads him on, publishing his efforts to give his countrymen some hope. But Vassili eventually starts to feel that he can not live up to the expectations on him. He and Danilov fall in love with the same girl, Tanya, a female soldier. From Germany comes the master sniper König to put an end to the extraordinary skilled Russian sniper.",
		"Language": "English, German, Russian",
		"Country": "Ireland, United Kingdom, France, Germany, United States",
		"Awards": "7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWFlY2E3ODQtZWNiNi00ZGU4LTkzNWEtZTQ2ZTViMWRhYjIzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "7.5",
		"imdbVotes": "276,654",
		"imdbID": "tt0215750",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$51,401,758",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Enough Said",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "11 Oct 2013",
		"Runtime": "93 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Nicole Holofcener",
		"Writer": "Nicole Holofcener",
		"Actors": "Julia Louis-Dreyfus, James Gandolfini, Catherine Keener",
		"Plot": "A divorced and single parent, Eva (Julia Louis-Dreyfus) spends her days enjoying work as a masseuse but dreading her daughter's impending departure for college. She meets Albert (James Gandolfini) - a sweet, funny and like-minded man also facing an empty nest. As their romance quickly blossoms, Eva befriends Marianne (Catherine Keener), her new massage client. Marianne is a beautiful poet who seems \"almost perfect\" except for one prominent quality: she rags on her ex-husband way too much. Suddenly, Eva finds herself doubting her own relationship with Albert as she learns the truth about Marianne's ex.",
		"Language": "English",
		"Country": "United States",
		"Awards": "8 wins & 38 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjI2MjIwMDk2Ml5BMl5BanBnXkFtZTcwNTQ1MzQ5OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "78/100"
			}
		],
		"Metascore": "78",
		"imdbRating": "7.0",
		"imdbVotes": "65,946",
		"imdbID": "tt2390361",
		"Type": "movie",
		"DVD": "01 Jun 2015",
		"BoxOffice": "$17,550,872",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harakiri",
		"Year": "1962",
		"Rated": "Not Rated",
		"Released": "04 Aug 1964",
		"Runtime": "133 min",
		"Genre": "Action, Drama, Mystery",
		"Director": "Masaki Kobayashi",
		"Writer": "Yasuhiko Takiguchi, Shinobu Hashimoto",
		"Actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita",
		"Plot": "Peace in 17th-century Japan causes the Shogunate's breakup of warrior clans, throwing thousands of samurai out of work and into poverty. An honorable end to such fate under the samurai code is ritual suicide, or hara-kiri (self-inflicted disembowelment). An elder warrior, Hanshiro Tsugumo (Tatsuya Nakadai) seeks admittance to the house of a feudal lord to commit the act. There, he learns of the fate of his son-in-law, a young samurai who sought work at the house but was instead barbarically forced to commit traditional hara-kiri in an excruciating manner with a dull bamboo blade. In flashbacks the samurai tells the tragic story of his son-in-law, and how he was forced to sell his real sword to support his sick wife and child. Tsugumo thus sets in motion a tense showdown of revenge against the house.",
		"Language": "Japanese",
		"Country": "Japan",
		"Awards": "9 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2FiMzJiMTYtY2RiNS00Y2ExLWJkMTYtNzJhMmZmMDlhMDQzXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "100%"
			},
			{
				"Source": "Metacritic",
				"Value": "85/100"
			}
		],
		"Metascore": "85",
		"imdbRating": "8.6",
		"imdbVotes": "67,509",
		"imdbID": "tt0056058",
		"Type": "movie",
		"DVD": "11 Mar 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Godzilla vs. Kong",
		"Year": "2021",
		"Rated": "PG-13",
		"Released": "31 Mar 2021",
		"Runtime": "113 min",
		"Genre": "Action, Sci-Fi, Thriller",
		"Director": "Adam Wingard",
		"Writer": "Terry Rossio, Michael Dougherty, Zach Shields",
		"Actors": "Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall",
		"Plot": "Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans' very origins and mankind's survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever.",
		"Language": "English, American Sign ",
		"Country": "United States",
		"Awards": "3 wins & 20 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "6.3",
		"imdbVotes": "235,841",
		"imdbID": "tt5034838",
		"Type": "movie",
		"DVD": "31 Mar 2021",
		"BoxOffice": "$100,916,094",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Sorcerer's Stone",
		"Year": "2001",
		"Rated": "PG",
		"Released": "16 Nov 2001",
		"Runtime": "152 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "Chris Columbus",
		"Writer": "J.K. Rowling, Steve Kloves",
		"Actors": "Daniel Radcliffe, Rupert Grint, Emma Watson",
		"Plot": "This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 3 Oscars. 20 wins & 74 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "81%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.6",
		"imdbVotes": "851,853",
		"imdbID": "tt0241527",
		"Type": "movie",
		"DVD": "16 Dec 2012",
		"BoxOffice": "$318,886,962",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Deepwater Horizon",
		"Year": "2016",
		"Rated": "PG-13",
		"Released": "30 Sep 2016",
		"Runtime": "107 min",
		"Genre": "Action, Drama, History",
		"Director": "Peter Berg",
		"Writer": "Matthew Michael Carnahan, Matthew Sand, David Barstow",
		"Actors": "Mark Wahlberg, Kurt Russell, Douglas M. Griffin",
		"Plot": "In April 2010, there is no oil exploration operation in the Gulf of Mexico to compare with the Deepwater Horizon oil rig with its size or sheer depth of its drilling. However, the project for the BP oil company is beset with technical difficulties to the point where the general operational supervisor, Jimmy Harrell, and his Chief Electrical Engineer, Mike Williams, are concerned potentially dangerous trouble is brewing. Unfortunately, visiting BP executives, frustrated by the project's long delays, order curtailed site inspections and slanted system tests to make up for lost time even as Harrell, Williams and his team helplessly protest for the sake of proper safety. On April 20, the workers' fears are realized in the worst possible way when the rig's various structural and system flaws spark a catastrophic cascade of failures that would create a massive blowout and explosion that threatens them all, even as it also begins the worst environmental disaster in US history.",
		"Language": "English",
		"Country": "United States, Hong Kong, China",
		"Awards": "Nominated for 2 Oscars. 4 wins & 15 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTEzNDU0OTgxM15BMl5BanBnXkFtZTgwNjA0ODM2OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.1",
		"imdbVotes": "180,324",
		"imdbID": "tt1860357",
		"Type": "movie",
		"DVD": "22 Mar 2017",
		"BoxOffice": "$61,433,527",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Contagion",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "09 Sep 2011",
		"Runtime": "106 min",
		"Genre": "Drama, Thriller",
		"Director": "Steven Soderbergh",
		"Writer": "Scott Z. Burns",
		"Actors": "Matt Damon, Kate Winslet, Jude Law",
		"Plot": "Soon after her return from a business trip to Hong Kong, Beth Emhoff dies from what is a flu or some other type of infection. Her young son dies later the same day. Her husband Mitch however seems immune. Thus begins the spread of a deadly infection. For doctors and administrators at the U.S. Centers for Disease Control, several days pass before anyone realizes the extent or gravity of this new infection. They must first identify the type of virus in question and then find a means of combating it, a process that will likely take several months. As the contagion spreads to millions of people worldwide, societal order begins to break down as people panic.",
		"Language": "English, Mandarin, Cantonese",
		"Country": "United Arab Emirates, United States",
		"Awards": "2 wins & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MDk5MDc3OV5BMl5BanBnXkFtZTcwNzAyNTg0Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "6.8",
		"imdbVotes": "315,033",
		"imdbID": "tt1598778",
		"Type": "movie",
		"DVD": "06 Aug 2013",
		"BoxOffice": "$75,658,097",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Good Will Hunting",
		"Year": "1997",
		"Rated": "R",
		"Released": "09 Jan 1998",
		"Runtime": "126 min",
		"Genre": "Drama, Romance",
		"Director": "Gus Van Sant",
		"Writer": "Matt Damon, Ben Affleck",
		"Actors": "Robin Williams, Matt Damon, Ben Affleck",
		"Plot": "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 24 wins & 61 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "8.3",
		"imdbVotes": "1,057,474",
		"imdbID": "tt0119217",
		"Type": "movie",
		"DVD": "14 Apr 2016",
		"BoxOffice": "$138,433,435",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hudson Hawk",
		"Year": "1991",
		"Rated": "R",
		"Released": "24 May 1991",
		"Runtime": "100 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Michael Lehmann",
		"Writer": "Bruce Willis, Robert Kraft, Steven E. de Souza",
		"Actors": "Bruce Willis, Danny Aiello, Andie MacDowell",
		"Plot": "Eddie Hawkins, called Hudson Hawk has just been released from ten years of prison and is planning to spend the rest of his life honestly. But then the crazy Mayflower couple blackmail him to steal some of the works of Leonardo da Vinci. If he refuses, they threaten to kill his friend Tommy.",
		"Language": "English, Italian",
		"Country": "United States",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWU4N2E2NWQtZGY5Mi00MTcwLThlZTctYmIyYmJmMTkxMjRhXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "31%"
			},
			{
				"Source": "Metacritic",
				"Value": "17/100"
			}
		],
		"Metascore": "17",
		"imdbRating": "5.7",
		"imdbVotes": "59,825",
		"imdbID": "tt0102070",
		"Type": "movie",
		"DVD": "01 Apr 2010",
		"BoxOffice": "$17,218,080",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Crazy, Stupid, Love.",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "29 Jul 2011",
		"Runtime": "118 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Glenn Ficarra, John Requa",
		"Writer": "Dan Fogelman",
		"Actors": "Steve Carell, Ryan Gosling, Julianne Moore",
		"Plot": "Cal (Steve Carell) and Emily (Julianne Moore) have the perfect life together living the American dream... until Emily asks for a divorce. Now Cal, Mr Husband, has to navigate the single scene with a little help from his professional bachelor friend Jacob Palmer (Ryan Gosling). Make that a lot of help...",
		"Language": "English",
		"Country": "United States",
		"Awards": "4 wins & 23 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.4",
		"imdbVotes": "560,300",
		"imdbID": "tt1570728",
		"Type": "movie",
		"DVD": "13 Apr 2016",
		"BoxOffice": "$84,379,584",
		"Production": "Carousel, DiNovi Pictures",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Daddy's Home",
		"Year": "2015",
		"Rated": "PG-13",
		"Released": "25 Dec 2015",
		"Runtime": "96 min",
		"Genre": "Comedy, Family",
		"Director": "Sean Anders",
		"Writer": "Brian Burns, Sean Anders, John Morris",
		"Actors": "Will Ferrell, Mark Wahlberg, Linda Cardellini",
		"Plot": "Stepfather Brad Whitaker is hoping for his stepchildren to love him and treat him like a dad. All is going well until the biological father, Dusty Mayron, shows up, then everything takes a toll. His stepchildren start putting him second and their father first, and now Dusty will have to learn that being a good dad is about pains and struggles. Brad will also experience once again what it's like to be a stepdad.",
		"Language": "English, Ukrainian",
		"Country": "United States",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0OTE1MTk4N15BMl5BanBnXkFtZTgwMDM5OTk5NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "30%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "6.2",
		"imdbVotes": "128,263",
		"imdbID": "tt1528854",
		"Type": "movie",
		"DVD": "13 Sep 2016",
		"BoxOffice": "$150,357,137",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Constantine",
		"Year": "2005",
		"Rated": "R",
		"Released": "18 Feb 2005",
		"Runtime": "121 min",
		"Genre": "Action, Fantasy, Horror",
		"Director": "Francis Lawrence",
		"Writer": "Jamie Delano, Garth Ennis, Kevin Brodbin",
		"Actors": "Keanu Reeves, Rachel Weisz, Djimon Hounsou",
		"Plot": "John Constantine is approached by Det. Angela Dodson who needs his help to prove that her twin sister Isabel's death was not a suicide. The dead woman was a devout Catholic and Angela refuses to accept she would have taken her own life. She's asked Constantine for help because he has a reputation for dealing with the mystical. In fact, he is a demon hunter whose sole purpose on Earth is to send demons back to the nether regions. John himself has been to Hell and knows that he is destined to return there on his death - but hopes his good deeds may find him a place in Heaven. As he looks into Isabel's death, he realizes demons are trying to break through to the human world, and his battles lead him into a direct conflict with Satan.",
		"Language": "English, Filipino, Tagalog",
		"Country": "United States, Germany",
		"Awards": "2 wins & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODZiMzAxNTctZjdiZC00OGY5LTg2NDAtNWJhNmQwZTcyMWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "7.0",
		"imdbVotes": "372,398",
		"imdbID": "tt0360486",
		"Type": "movie",
		"DVD": "15 Aug 2008",
		"BoxOffice": "$75,976,178",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hamilton",
		"Year": "2020",
		"Rated": "PG-13",
		"Released": "03 Jul 2020",
		"Runtime": "160 min",
		"Genre": "Biography, Drama, History",
		"Director": "Thomas Kail",
		"Writer": "Lin-Manuel Miranda, Ron Chernow",
		"Actors": "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr.",
		"Plot": "\"Hamilton\" is the story of America then, told by America now. Featuring a score that blends hip-hop, jazz, R&amp;B, and show tunes, \"Hamilton\" has taken the story of American founding father Alexander Hamilton and created a revolutionary moment in theater--a musical that has had a profound impact on culture, politics, and education. Captured at the Richard Rodgers Theater on Broadway in June 2016, the film transports its audience into the world of the Broadway show in a uniquely intimate way.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Primetime Emmys. 19 wins & 46 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "98%"
			},
			{
				"Source": "Metacritic",
				"Value": "89/100"
			}
		],
		"Metascore": "89",
		"imdbRating": "8.3",
		"imdbVotes": "111,078",
		"imdbID": "tt8503618",
		"Type": "movie",
		"DVD": "03 Jul 2020",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Daylight",
		"Year": "1996",
		"Rated": "PG-13",
		"Released": "06 Dec 1996",
		"Runtime": "114 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Rob Cohen",
		"Writer": "Leslie Bohem",
		"Actors": "Sylvester Stallone, Amy Brenneman, Viggo Mortensen",
		"Plot": "Trouble strikes when runaway robbers in a getaway car hit truck full of explosives in the tunnel connecting Manhattan and New Jersey. Survivors are left in a weakened tunnel blocked at both exits. As Kit Latura approaches the tunnel, he sees the impact and knows he gotta take action. With time running out, he enters the tunnel through a system of maintenance walkways. Can he get the survivors out before the tunnel fills up?",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 1 win & 4 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjQ2NGVkMWYtY2U0Yy00ZDg3LTgwZGItMzhjOTBjOWQ4MGYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "26%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "5.9",
		"imdbVotes": "76,499",
		"imdbID": "tt0116040",
		"Type": "movie",
		"DVD": "19 Apr 2016",
		"BoxOffice": "$33,023,469",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Doctor Sleep",
		"Year": "2019",
		"Rated": "R",
		"Released": "08 Nov 2019",
		"Runtime": "152 min",
		"Genre": "Drama, Fantasy, Horror",
		"Director": "Mike Flanagan",
		"Writer": "Mike Flanagan, Stephen King",
		"Actors": "Ewan McGregor, Rebecca Ferguson, Kyliegh Curran",
		"Plot": "On highways across America, a tribe of people called The True Knot travel in search of sustenance. They look harmless-mostly old, lots of polyester, and married to their RVs. But as Dan Torrance knows, and tween Abra Stone learns, The True Knot are quasi-immortal, living off the \"steam\" that children with the \"shining\" produce when they are slowly tortured to death. Haunted by the inhabitants of the Overlook Hotel where he spent one horrific childhood year, Dan has been drifting for decades, desperate to shed his father's legacy of despair, alcoholism, and violence. Finally, he settles in a New Hampshire town, an AA community that sustains him, and a job at a nursing home where his remnant \"shining\" power provides the crucial final comfort to the dying. Aided by a prescient cat, he becomes \"Doctor Sleep.\" Then Dan meets the evanescent Abra Stone, and it is her spectacular gift, the brightest shining ever seen, that reignites Dan's own demons and summons him to a battle for Abra's soul and survival.",
		"Language": "English, Persian",
		"Country": "Canada, United States",
		"Awards": "9 wins & 37 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmY3NGJlYTItYmQ4OS00ZTEwLWIzODItMjMzNWU2MDE0NjZhXkEyXkFqcGdeQXVyMzQzMDA3MTI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.3",
		"imdbVotes": "215,625",
		"imdbID": "tt5606664",
		"Type": "movie",
		"DVD": "07 Nov 2019",
		"BoxOffice": "$31,581,712",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "God Is a Bullet",
		"Year": "2023",
		"Rated": "18+",
		"Released": "23 Jun 2023",
		"Runtime": "156 min",
		"Genre": "Action, Crime, Horror",
		"Director": "Nick Cassavetes",
		"Writer": "Boston Teran, Nick Cassavetes",
		"Actors": "Maika Monroe, Nikolaj Coster-Waldau, Karl Glusman",
		"Plot": "Taking matters into his own hands, Detective Bob Hightower tries to infiltrate an evil cult to save his kidnapped daughter and avenge the murder of his wife.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzhlYTg4ZmItMDBmYi00NTMzLTg3M2MtMGU2NDM0ODY1NDVkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Metacritic",
				"Value": "31/100"
			}
		],
		"Metascore": "31",
		"imdbRating": "5.7",
		"imdbVotes": "5,256",
		"imdbID": "tt14270702",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Coup de Chance",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "27 Sep 2023",
		"Runtime": "93 min",
		"Genre": "Comedy, Crime, Drama",
		"Director": "Woody Allen",
		"Writer": "Woody Allen",
		"Actors": "Lou de Laâge, Niels Schneider, Anna Laik",
		"Plot": "Two young people's bond leads to marital infidelity and ultimately crime.",
		"Language": "French",
		"Country": "United States, France, United Kingdom",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTk3MTVlNjAtYWRlNC00ZDQ2LTlhNjUtNWI1YzM2Nzg0Nzk0XkEyXkFqcGdeQXVyMTk5MTE5MTg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.5",
		"imdbVotes": "3,707",
		"imdbID": "tt15140278",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Easy A",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "17 Sep 2010",
		"Runtime": "92 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Will Gluck",
		"Writer": "Bert V. Royal",
		"Actors": "Emma Stone, Amanda Bynes, Penn Badgley",
		"Plot": "After a little white lie about losing her virginity gets out, a clean cut high school girl sees her life paralleling Hester Prynne's in \"The Scarlet Letter,\" which she is currently studying in school - until she decides to use the rumor mill to advance her social and financial standing.",
		"Language": "English",
		"Country": "United States",
		"Awards": "9 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MzU1Mjg1OF5BMl5BanBnXkFtZTcwNDc3NDQ2Mw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.0",
		"imdbVotes": "415,847",
		"imdbID": "tt1282140",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$58,401,464",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Commando",
		"Year": "1985",
		"Rated": "R",
		"Released": "04 Oct 1985",
		"Runtime": "90 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Mark L. Lester",
		"Writer": "Jeph Loeb, Matthew Weisman, Steven E. de Souza",
		"Actors": "Arnold Schwarzenegger, Rae Dawn Chong, Dan Hedaya",
		"Plot": "A retired special agent named John Matrix led an elite unit and has left the armed forces to live in a secluded mountain home with his daughter Jenny. But now he is forced out of retirement when his daughter is kidnapped by a band of thugs intent on revenge! Unbeknownst to Matrix, the members of his former unit are being killed one by one. Even though Matrix' friend General Franklin Kirby gives Matrix armed guards, attackers manage to kidnap Matrix and Jenny. Matrix learns that Bennett, a former member of his Matrix' unit who was presumed dead has kidnapped him to try to force Matrix to do a political assassination for a man called Arius (who calls himself El Presidente), a warlord formerly bested by Matrix who wishes to lead a military coup in his home country. Since Arius will have Jenny killed if Matrix refuses, Matrix reluctantly accepts the demand.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWE0ZjFhYjItMzI5MC00MDllLWE4OGMtMzlhNGQzN2RjN2MwXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.7",
		"imdbVotes": "173,136",
		"imdbID": "tt0088944",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$35,100,000",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Coriolanus",
		"Year": "2011",
		"Rated": "R",
		"Released": "20 Jan 2012",
		"Runtime": "123 min",
		"Genre": "Drama, Thriller, War",
		"Director": "Ralph Fiennes",
		"Writer": "John Logan, William Shakespeare",
		"Actors": "Ralph Fiennes, Gerard Butler, Brian Cox",
		"Plot": "The citizens of Rome are hungry. Coriolanus, the hero of Rome, a great soldier and a man of inflexible self-belief despises the people. His extreme views ignite a mass riot. Rome is bloody. Manipulated and out-maneuvered by politicians and even his own mother Volumnia, Coriolanus is banished from Rome. He offers his life or his services to his sworn enemy Tullus Aufidius.",
		"Language": "English",
		"Country": "United Kingdom",
		"Awards": "Nominated for 1 BAFTA Award10 wins & 18 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcyMjAwMjA2N15BMl5BanBnXkFtZTcwOTI0MjA0Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "6.1",
		"imdbVotes": "33,428",
		"imdbID": "tt1372686",
		"Type": "movie",
		"DVD": "30 May 2013",
		"BoxOffice": "$757,195",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Eastern Promises",
		"Year": "2007",
		"Rated": "R",
		"Released": "21 Sep 2007",
		"Runtime": "100 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "David Cronenberg",
		"Writer": "Steven Knight",
		"Actors": "Naomi Watts, Viggo Mortensen, Armin Mueller-Stahl",
		"Plot": "THIS SUMMARY CONTAINS SPOILERS. - In London, the Russian pregnant teenager Tatiana arrives bleeding in a hospital, and the doctors save her baby only. The Russian descendant midwife Anna Khitrova finds Tatiana's diary written in Russian language in her belongings and decided to find her family to deliver the baby, she brings the diary home and ask her uncle Stepan to translate the document. Stepan refuses, but Anna finds a card of a restaurant owned by the Russian Semyon inside the diary and she visits the old man trying to find a lead to contact Tatiana's family. When she mentions the existence of the diary, Semyon immediately offers to translate the document. However, Stepan translates part of the diary and Anna discovers that Semyon and his sick son Kirill had raped Tatiana when she was fourteen years old and forced her to work as prostitute in a brothel of their own. Further, Semyon is the dangerous boss of the Russian mafia \"Vory v Zakone\", jeopardizing the safety of Anna and her family. Meanwhile, Semyon's driver Nikolai Luzhin gets close to Kirill and Semyon, climbing positions in the criminal organization, but he helps Anna, her family and the baby.",
		"Language": "English, Russian, Turkish, Urdu",
		"Country": "United Kingdom, Canada, United States",
		"Awards": "Nominated for 1 Oscar. 28 wins & 74 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcwMzU0OTY3NF5BMl5BanBnXkFtZTYwNzkwNjg2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "83/100"
			}
		],
		"Metascore": "83",
		"imdbRating": "7.6",
		"imdbVotes": "259,693",
		"imdbID": "tt0765443",
		"Type": "movie",
		"DVD": "19 Apr 2016",
		"BoxOffice": "$17,266,000",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Finch",
		"Year": "2021",
		"Rated": "PG-13",
		"Released": "05 Nov 2021",
		"Runtime": "115 min",
		"Genre": "Adventure, Drama, Sci-Fi",
		"Director": "Miguel Sapochnik",
		"Writer": "Craig Luck, Ivor Powell",
		"Actors": "Tom Hanks, Caleb Landry Jones, Marie Wagenman",
		"Plot": "On a post-apocalyptic Earth, a robot, built to protect the life of his creator's beloved dog learns about life, love, friendship and what it means to be human.",
		"Language": "English",
		"Country": "United States, India",
		"Awards": "2 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTMxYjk3MmItMzk1OC00NmRhLThlMjYtNmQyNzA0MzgxMWI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "6.9",
		"imdbVotes": "95,155",
		"imdbID": "tt3420504",
		"Type": "movie",
		"DVD": "05 Nov 2021",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Deathly Hallows: Part 2",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "15 Jul 2011",
		"Runtime": "130 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "David Yates",
		"Writer": "Steve Kloves, J.K. Rowling",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) continue their quest of finding and destroying Voldemort's (Ralph Fiennes') three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins, and life as they know it will never be the same again.",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 3 Oscars. 48 wins & 95 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "96%"
			},
			{
				"Source": "Metacritic",
				"Value": "85/100"
			}
		],
		"Metascore": "85",
		"imdbRating": "8.1",
		"imdbVotes": "941,773",
		"imdbID": "tt1201607",
		"Type": "movie",
		"DVD": "20 Jul 2013",
		"BoxOffice": "$381,447,587",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Daddy's Home 2",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "10 Nov 2017",
		"Runtime": "100 min",
		"Genre": "Comedy",
		"Director": "Sean Anders",
		"Writer": "Sean Anders, John Morris, Brian Burns",
		"Actors": "Will Ferrell, Mark Wahlberg, Mel Gibson",
		"Plot": "After burying the hatchet in Daddy's Home (2015), the stepfather with a heart of gold, Brad, and the kids' biological dad with the perfect six-pack, Dusty, are now proud co-dads, working in unison to care for Megan and Dylan. This year, with Christmas just around the corner, the once-incompatible parents and their families decide to spend the holidays together; however, things will take a turn for the unexpected when Dusty's alpha-dad, Kurt, and Brad's touchy-feely father, Don, decide to pay a visit. Now--as the merry holidaymakers end up in a snow-capped cabin for a week--it seems that there's no escape from an impending Yuletide disaster unless the two pairs of fathers learn how to coexist and work together for the sake of the kids. Will things work out in the end? Can the four daddies save Christmas?",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "1 win & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDA4Nzc1OTg2OV5BMl5BanBnXkFtZTgwODE3ODgwNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "21%"
			},
			{
				"Source": "Metacritic",
				"Value": "30/100"
			}
		],
		"Metascore": "30",
		"imdbRating": "6.0",
		"imdbVotes": "81,768",
		"imdbID": "tt5657846",
		"Type": "movie",
		"DVD": "06 Feb 2018",
		"BoxOffice": "$104,029,443",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Here Comes the Boom",
		"Year": "2012",
		"Rated": "PG",
		"Released": "12 Oct 2012",
		"Runtime": "105 min",
		"Genre": "Action, Comedy, Sport",
		"Director": "Frank Coraci",
		"Writer": "Allan Loeb, Kevin James, Rock Reuben",
		"Actors": "Kevin James, Salma Hayek, Henry Winkler",
		"Plot": "Back in his prime, Scott Voss (Kevin James) was a collegiate wrestler with some fairly impressive moves. Now, at 42, he teaches biology at troubled Wilkinson High School. Mr. Voss has begun to grow deeply indifferent in his role as an educator when a troubling announcement stirs him to action. Effective immediately, Wilkinson High will be eliminating all extracurricular activities. Suddenly, the most apathetic teacher on the staff has a reason to get involved. But how is a typical high-school teacher like Mr. Voss supposed to raise the $48,000 needed to save the music program from going belly up? Upon learning that some MMA fighters earn $10,000 just for stepping into the ring, Mr. Voss vows to get back in shape, and subject himself to a series of brutal beatings so his students won't have to go without.",
		"Language": "English, Dutch",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzEzNDQ0Nl5BMl5BanBnXkFtZTcwMDI2NTY1OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "6.4",
		"imdbVotes": "95,259",
		"imdbID": "tt1648179",
		"Type": "movie",
		"DVD": "07 Sep 2014",
		"BoxOffice": "$45,290,318",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Haunted Mansion",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "28 Jul 2023",
		"Runtime": "123 min",
		"Genre": "Comedy, Drama, Family",
		"Director": "Justin Simien",
		"Writer": "Katie Dippold",
		"Actors": "LaKeith Stanfield, Rosario Dawson, Owen Wilson",
		"Plot": "A single mom named Gabbie hires a tour guide, a psychic, a priest and a historian to help exorcise her newly bought mansion after discovering it is inhabited by ghosts.",
		"Language": "English, French, Spanish",
		"Country": "United States, Canada, Australia, United Kingdom, Thailand",
		"Awards": "7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTlmZmFkYTEtMDM4NS00NTgzLWFhODEtZjMxOTlmN2QxZTdiXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.0",
		"imdbVotes": "41,472",
		"imdbID": "tt1695843",
		"Type": "movie",
		"DVD": "04 Oct 2023",
		"BoxOffice": "$67,653,287",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "How to Lose a Guy in 10 Days",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "07 Feb 2003",
		"Runtime": "116 min",
		"Genre": "Comedy, Romance",
		"Director": "Donald Petrie",
		"Writer": "Michele Alexander, Jeannie Long, Kristen Buckley",
		"Actors": "Kate Hudson, Matthew McConaughey, Adam Goldberg",
		"Plot": "Benjamin Barry is an advertising executive competing with two female co-workers for a major campaign for a diamond merchant. He cuts a deal with his competitors that the account is his if he can make a woman of their choice fall in love with him in 10 days. In comes Andie Anderson who, in turn, is writing a story on how to lose a guy in 10 days as a bet with her boss to be allowed to write more substantial stories. With a hidden agenda in each camp, will either party be able to complete their mission?",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "1 win & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.5",
		"imdbVotes": "268,029",
		"imdbID": "tt0251127",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$105,813,373",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Flight",
		"Year": "2012",
		"Rated": "R",
		"Released": "02 Nov 2012",
		"Runtime": "138 min",
		"Genre": "Drama, Thriller",
		"Director": "Robert Zemeckis",
		"Writer": "John Gatins",
		"Actors": "Denzel Washington, Nadine Velazquez, Don Cheadle",
		"Plot": "Whip Whitaker is a commuter airline pilot. While on a flight from Orlando to Atlanta something goes wrong and the plane starts to fly erratically. With little choice Whip crashes the plane and saves almost all on board. When he wakes up in the hospital, his friend from the airline union introduces him to a lawyer who tells him there's a chance he could face criminal charges because his blood test reveals that he was intoxicated with alcohol and cocaine. He denies being impaired, so while an investigation is underway, he is told to keep his act together. However, letting go of his addiction is not as easy as it seems...",
		"Language": "English",
		"Country": "United States, United Arab Emirates",
		"Awards": "Nominated for 2 Oscars. 15 wins & 45 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "77%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "7.3",
		"imdbVotes": "374,314",
		"imdbID": "tt1907668",
		"Type": "movie",
		"DVD": "02 Nov 2014",
		"BoxOffice": "$93,772,375",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Date Night",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "09 Apr 2010",
		"Runtime": "88 min",
		"Genre": "Comedy, Crime, Romance",
		"Director": "Shawn Levy",
		"Writer": "Josh Klausner",
		"Actors": "Steve Carell, Tina Fey, Mark Wahlberg",
		"Plot": "Phil and Claire Foster are a couple who have been married for several years. Their days consists of them taking care of their children and going to work and coming home and going to bed. But they find time to have a date night wherein they go out and spend some time together. When another couple they know announce that they're separating because they're in a rut, Phil feels that he and Claire could be too. So when date night comes Phil decides to do something different. So they go into the city and try to get into a new popular restaurant. But when it's full and still wanting to do this, Phil decides to take the reservation of a couple who doesn't show up. While they're having dinner two men approach them and instructs them to stand up and go with them. They think the men are with the restaurant and want to talk to them about taking someone else's reservation. But it appears the couple whose reservation they took crossed someone and the two men work for this person. The men are after something, but whatever it is they don't have it.",
		"Language": "English, Hebrew",
		"Country": "United States",
		"Awards": "4 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzI1Yzc1OTAtNDE2Zi00MTM1LTkwOTctNzU5Mjg2ZWJmMDE4XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "56/100"
			}
		],
		"Metascore": "56",
		"imdbRating": "6.3",
		"imdbVotes": "171,039",
		"imdbID": "tt1279935",
		"Type": "movie",
		"DVD": "18 Sep 2012",
		"BoxOffice": "$98,711,404",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Evan Almighty",
		"Year": "2007",
		"Rated": "PG",
		"Released": "22 Jun 2007",
		"Runtime": "96 min",
		"Genre": "Comedy, Family, Fantasy",
		"Director": "Tom Shadyac",
		"Writer": "Steve Koren, Mark O'Keefe, Steve Oedekerk",
		"Actors": "Steve Carell, Morgan Freeman, Lauren Graham",
		"Plot": "Buffalo newsman Evan Baxter is elected to Congress with the slogan, \"Change the world.\" He lucks into a huge house in a new Virginia suburb. His Capitol office is also fantastic, but there's a catch: he's tapped by the powerful Congressman Long to co-sponsor a bill to allow development in national parks. In steps God, who appears to a disbelieving Evan and gently commands him to build an ark. Tools and wood arrive in Evan's yard, animal pairs follow, his beard and hair grow wildly, nomad's clothes and a staff appear. Long grows impatient, Evan starts building, his family leaves him, reporters gather, and drought grips D.C. Still, Evan believes. But will he change the world?",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMTEzODYxMV5BMl5BanBnXkFtZTcwNzQ4ODU0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "24%"
			},
			{
				"Source": "Metacritic",
				"Value": "37/100"
			}
		],
		"Metascore": "37",
		"imdbRating": "5.4",
		"imdbVotes": "154,314",
		"imdbID": "tt0413099",
		"Type": "movie",
		"DVD": "09 Jan 2016",
		"BoxOffice": "$100,462,298",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hugo",
		"Year": "2011",
		"Rated": "PG",
		"Released": "23 Nov 2011",
		"Runtime": "126 min",
		"Genre": "Adventure, Drama, Family",
		"Director": "Martin Scorsese",
		"Writer": "John Logan, Brian Selznick",
		"Actors": "Asa Butterfield, Chloë Grace Moretz, Christopher Lee",
		"Plot": "Hugo is an orphan boy living in the walls of a train station in 1930s Paris. He learned to fix clocks and other gadgets from his father and uncle which he puts to use keeping the train station clocks running. The only thing that he has left that connects him to his dead father is an automaton (mechanical man) that doesn't work without a special key. Hugo needs to find the key to unlock the secret he believes it contains. On his adventures, he meets George Melies, a shopkeeper, who works in the train station, and his adventure-seeking god-daughter. Hugo finds that they have a surprising connection to his father and the automaton, and he discovers it unlocks some memories the old man has buried inside regarding his past.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "Won 5 Oscars. 61 wins & 192 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAzNzk5MzgyNF5BMl5BanBnXkFtZTcwOTE4NDU5Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "83/100"
			}
		],
		"Metascore": "83",
		"imdbRating": "7.5",
		"imdbVotes": "335,777",
		"imdbID": "tt0970179",
		"Type": "movie",
		"DVD": "06 Jun 2014",
		"BoxOffice": "$73,864,507",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Prisoner of Azkaban",
		"Year": "2004",
		"Rated": "PG",
		"Released": "04 Jun 2004",
		"Runtime": "142 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "Alfonso Cuarón",
		"Writer": "J.K. Rowling, Steve Kloves",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "Harry Potter (Daniel Radcliffe) is having a tough time with his relatives (yet again). He runs away after using magic to inflate Uncle Vernon's (Richard Griffiths') sister Marge (Pam Ferris), who was being offensive towards Harry's parents. Initially scared for using magic outside the school, he is pleasantly surprised that he won't be penalized after all. However, he soon learns that a dangerous criminal and Voldemort's trusted aide Sirius Black (Gary Oldman) has escaped from Azkaban Prison and wants to kill Harry to avenge the Dark Lord. To worsen the conditions for Harry, vile creatures called Dementors are appointed to guard the school gates and inexplicably happen to have the most horrible effect on him. Little does Harry know that by the end of this year, many holes in his past (whatever he knows of it) will be filled up and he will have a clearer vision of what the future has in store.",
		"Language": "English, Latin, Old English",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 Oscars. 17 wins & 56 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.9",
		"imdbVotes": "686,813",
		"imdbID": "tt0304141",
		"Type": "movie",
		"DVD": "01 Jan 2009",
		"BoxOffice": "$250,105,651",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dark Waters",
		"Year": "2019",
		"Rated": "PG-13",
		"Released": "06 Dec 2019",
		"Runtime": "126 min",
		"Genre": "Biography, Drama, History",
		"Director": "Todd Haynes",
		"Writer": "Nathaniel Rich, Mario Correa, Matthew Michael Carnahan",
		"Actors": "Mark Ruffalo, Anne Hathaway, Tim Robbins",
		"Plot": "A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.",
		"Language": "English, Korean",
		"Country": "United States",
		"Awards": "10 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODQ0M2Y5M2QtZGIwMC00MzJjLThlMzYtNmE3ZTMzZTYzOGEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "73/100"
			}
		],
		"Metascore": "73",
		"imdbRating": "7.6",
		"imdbVotes": "100,573",
		"imdbID": "tt9071322",
		"Type": "movie",
		"DVD": "22 Nov 2019",
		"BoxOffice": "$11,136,084",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ghost Rider: Spirit of Vengeance",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "17 Feb 2012",
		"Runtime": "96 min",
		"Genre": "Action, Fantasy, Thriller",
		"Director": "Mark Neveldine, Brian Taylor",
		"Writer": "Scott M. Gimple, Seth Hoffman, David S. Goyer",
		"Actors": "Nicolas Cage, Ciarán Hinds, Idris Elba",
		"Plot": "Johnny Blaze, a man who made a deal with the Devil who called himself Mephistopheles at the time (now Roarke), is on the run trying to make sure no-one is harmed by his alter ego, The Ghost Rider. He is approached by a Monk named Moreau who tells him that he can help be him free of the Rider, but first, he needs Johnny's help to protect a boy, whom Roarke has plans for, to help him take human form.",
		"Language": "English, Romanian",
		"Country": "United States, United Arab Emirates",
		"Awards": "4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDEwMGRmY2YtZTFmNy00YmFkLWFlZGItZGE0ZjNiMjRmZjZlXkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "19%"
			},
			{
				"Source": "Metacritic",
				"Value": "34/100"
			}
		],
		"Metascore": "34",
		"imdbRating": "4.3",
		"imdbVotes": "125,459",
		"imdbID": "tt1071875",
		"Type": "movie",
		"DVD": "12 Jun 2012",
		"BoxOffice": "$51,774,002",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Gran Torino",
		"Year": "2008",
		"Rated": "R",
		"Released": "09 Jan 2009",
		"Runtime": "116 min",
		"Genre": "Drama",
		"Director": "Clint Eastwood",
		"Writer": "Nick Schenk, Dave Johannson",
		"Actors": "Clint Eastwood, Bee Vang, Christopher Carley",
		"Plot": "Walt Kowalski (Clint Eastwood) is a widower who holds onto his prejudices despite the changes in his Michigan neighborhood and the world around him. Kowalski is a grumpy, tough-minded, unhappy old man who can't get along with either his kids or his neighbors. He is a Korean War veteran whose prize possession is a 1972 Gran Torino he keeps in mint condition. When his neighbor Thao Lor (Bee Vang), a young Hmong teenager under pressure from his gang member cousin, tries to steal his Gran Torino, Kowalski sets out to reform the youth. Drawn against his will into the life of Thao's family, Kowalski is soon taking steps to protect them from the gangs that infest their neighborhood.",
		"Language": "English, Hmong",
		"Country": "Germany, United States",
		"Awards": "21 wins & 22 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "81%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "8.1",
		"imdbVotes": "812,129",
		"imdbID": "tt1205489",
		"Type": "movie",
		"DVD": "30 Nov 2010",
		"BoxOffice": "$148,095,302",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ghost Rider",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "16 Feb 2007",
		"Runtime": "110 min",
		"Genre": "Action, Fantasy, Thriller",
		"Director": "Mark Steven Johnson",
		"Writer": "Mark Steven Johnson",
		"Actors": "Nicolas Cage, Eva Mendes, Sam Elliott",
		"Plot": "When the motorcyclist Johnny Blaze finds that his father Barton Blaze has terminal cancer, he accepts a pact with Mephistopheles, giving his soul for the health of his beloved father. But the devil deceives him, and Barton dies in a motorcycle accident during an exhibition. Johnny leaves the carnival, his town, his friends, and his girlfriend Roxanne. Many years later, Johnny Blaze becomes a famous motorcyclist, who risks his life in his shows, and he meets Roxanne again, now a television reporter. However, Mephistopheles proposes Johnny to release his contract if he become the \"Ghost Rider\" and defeat his evil son Blackheart, who wants to possess one thousand evil souls and transform hell on Earth.",
		"Language": "English",
		"Country": "United States, Australia",
		"Awards": "1 win & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzIyNDE5ODI1OV5BMl5BanBnXkFtZTcwNTIyNDE0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "27%"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "5.3",
		"imdbVotes": "250,787",
		"imdbID": "tt0259324",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$115,802,596",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Heartbreakers",
		"Year": "2001",
		"Rated": "PG-13",
		"Released": "23 Mar 2001",
		"Runtime": "123 min",
		"Genre": "Comedy, Crime, Romance",
		"Director": "David Mirkin",
		"Writer": "Robert Dunn, Paul Guay, Stephen Mazur",
		"Actors": "Sigourney Weaver, Jennifer Love Hewitt, Gene Hackman",
		"Plot": "Max and Page are a mother and daughter con team. Max seduces wealthy men into marrying her, then Page seduces them into infidelity so Max can rake them over the divorce court coals. And then it's on to the next victim.",
		"Language": "English, Russian",
		"Country": "United States",
		"Awards": "4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE3NjQzOF5BMl5BanBnXkFtZTcwMDIwOTA0NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.2",
		"imdbVotes": "57,689",
		"imdbID": "tt0125022",
		"Type": "movie",
		"DVD": "01 Nov 2016",
		"BoxOffice": "$40,336,607",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Ghost in the Shell",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "31 Mar 2017",
		"Runtime": "107 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Rupert Sanders",
		"Writer": "Shirow Masamune, Jamie Moss, William Wheeler",
		"Actors": "Scarlett Johansson, Pilou Asbæk, Takeshi Kitano",
		"Plot": "In the near future, human organs are enhanced by the cybernetics technology developed by the powerful Hanka Robotics Corporation owned by Cutter. Dr. Ouelet is responsible for the development of the secret project 2571 of a full mechanical body to be connected to a human brain. She uses the brain of a young woman that lost her parents in a cyber attack as subject of a prototype. One year later, the woman is ranked Major and has joined Section 9, an anti-terrorist division commanded by Chief Daisuke Aramaki, working with agents Batou and Togusa. She needs to use a medicine to help the integration of her brain with the mechanical body and has no recollections of her previous life. When Section 9 hunts down the terrorist Kuze, Major learns the secrets about Hanka Robotics and the experiment she was subjected. Now she faces her ultimate enemy: Kuze, a criminal who has managed to hack into the brains of androids and control them.",
		"Language": "English, Japanese",
		"Country": "United States, India, Hong Kong, China, Canada",
		"Awards": "3 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzJiNTI3MjItMGJiMy00YzA1LTg2MTItZmE1ZmRhOWQ0NGY1XkEyXkFqcGdeQXVyOTk4MTM0NQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "6.3",
		"imdbVotes": "226,098",
		"imdbID": "tt1219827",
		"Type": "movie",
		"DVD": "07 Jul 2018",
		"BoxOffice": "$40,563,557",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "How to Be Single",
		"Year": "2016",
		"Rated": "R",
		"Released": "12 Feb 2016",
		"Runtime": "110 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Christian Ditter",
		"Writer": "Abby Kohn, Marc Silverstein, Dana Fox",
		"Actors": "Dakota Johnson, Rebel Wilson, Leslie Mann",
		"Plot": "There's a right way to be single, a wrong way to be single, and then...there's Alice. And Robin. Lucy. Meg. Tom. David. New York City is full of lonely hearts seeking the right match, be it a love connection, a hook-up, or something in the middle. And somewhere between the teasing texts and one-night stands, what these unmarrieds all have in common is the need to learn how to be single in a world filled with ever-evolving definitions of love. Sleeping around in the city that never sleeps was never so much fun.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzI4MDMwMzUwNF5BMl5BanBnXkFtZTgwMDgyNzkyNzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.1",
		"imdbVotes": "93,253",
		"imdbID": "tt1292566",
		"Type": "movie",
		"DVD": "03 May 2016",
		"BoxOffice": "$46,843,513",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dreamcatcher",
		"Year": "2003",
		"Rated": "R",
		"Released": "21 Mar 2003",
		"Runtime": "134 min",
		"Genre": "Drama, Horror, Sci-Fi",
		"Director": "Lawrence Kasdan",
		"Writer": "Stephen King, William Goldman, Lawrence Kasdan",
		"Actors": "Morgan Freeman, Thomas Jane, Jason Lee",
		"Plot": "Four childhood friends, Jonesy, Beaver, Pete and Henry all share a special secret. Each year, they take a trip into Maine woods. This year is different. A blizzard occurs, and they recover a man found wandering around. Unbeknownst to them, this wandering individual isn't the only being to be found. Now they must act fast to stop the outbreak developing and to prevent the world from its doom.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTRkYzMwMDctNmU4Ni00NGMyLTliMDEtM2U2ZmY1ZjMyY2Y1XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "28%"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "5.5",
		"imdbVotes": "96,019",
		"imdbID": "tt0285531",
		"Type": "movie",
		"DVD": "30 Jun 2010",
		"BoxOffice": "$33,715,436",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Chamber of Secrets",
		"Year": "2002",
		"Rated": "PG",
		"Released": "15 Nov 2002",
		"Runtime": "161 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "Chris Columbus",
		"Writer": "J.K. Rowling, Steve Kloves",
		"Actors": "Daniel Radcliffe, Rupert Grint, Emma Watson",
		"Plot": "Forced to spend his summer holidays with his muggle relations, Harry Potter (Daniel Radcliffe) gets a real shock when he gets a surprise visitor: Dobby (Toby Jones) the house-elf, who warns Harry against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobby's warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening. Harry is suddenly hearing mysterious voices from inside the walls, muggle-born students are being attacked, and a message scrawled on the wall in blood puts everyone on his or her guard, \"The Chamber Of Secrets Has Been Opened. Enemies Of The Heir, Beware\".",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Won 1 BAFTA Award14 wins & 50 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.4",
		"imdbVotes": "687,867",
		"imdbID": "tt0295297",
		"Type": "movie",
		"DVD": "15 Jan 2008",
		"BoxOffice": "$262,641,637",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Golda",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "25 Aug 2023",
		"Runtime": "100 min",
		"Genre": "Biography, Drama, History",
		"Director": "Guy Nattiv",
		"Writer": "Nicholas Martin",
		"Actors": "Helen Mirren, Zed Josef, Henry Goodman",
		"Plot": "Focuses on the intensely dramatic and high-stakes responsibilities and decisions that Golda Meir, also known as the 'Iron Lady of Israel,' faced during the Yom Kippur War.",
		"Language": "English, Hebrew, Arabic",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 1 Oscar. 1 win & 10 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODI4NTc5NWItNjA0Yi00MjMyLWEyMGItMTMwYTdhOTNmNjlmXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "5.9",
		"imdbVotes": "11,137",
		"imdbID": "tt14454876",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$4,801,781",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Don't Look Up",
		"Year": "2021",
		"Rated": "R",
		"Released": "24 Dec 2021",
		"Runtime": "138 min",
		"Genre": "Comedy, Drama, Sci-Fi",
		"Director": "Adam McKay",
		"Writer": "Adam McKay, David Sirota",
		"Actors": "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
		"Plot": "Kate Dibiasky (Jennifer Lawrence), an astronomy grad student, and her professor Dr. Randall Mindy (Leonardo DiCaprio) make an astounding discovery of a comet orbiting within the solar system. The problem - it's on a direct collision course with Earth. The other problem? No one really seems to care. Turns out warning mankind about a planet-killer the size of Mount Everest is an inconvenient fact to navigate. With the help of Dr. Oglethorpe (Rob Morgan), Kate and Randall embark on a media tour that takes them from the office of an indifferent President Orlean (Meryl Streep) and her sycophantic son and Chief of Staff, Jason (Jonah Hill), to the airwaves of The Daily Rip, an upbeat morning show hosted by Brie (Cate Blanchett) and Jack (Tyler Perry). With only six months until the comet makes impact, managing the 24-hour news cycle and gaining the attention of the social media obsessed public before it's too late proves shockingly comical - what will it take to get the world to just look up?.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 4 Oscars. 24 wins & 95 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "7.2",
		"imdbVotes": "590,701",
		"imdbID": "tt11286314",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Creation",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "25 Sep 2009",
		"Runtime": "108 min",
		"Genre": "Biography, Drama, Romance",
		"Director": "Jon Amiel",
		"Writer": "John Collee, Jon Amiel, Randal Keynes",
		"Actors": "Paul Bettany, Jennifer Connelly, Ian Kelly",
		"Plot": "What happens when a world-renowned scientist, crushed by the loss of his eldest daughter, formulates a theory in conflict with religious dogma? This is the story of Charles Darwin and his master-work \"The Origin of Species\". It tells of a global revolution played out within the confines of a small English village; a passionate marriage torn apart by the most dangerous idea in history; and a theory saved from extinction by the logic of a child.",
		"Language": "English",
		"Country": "United Kingdom",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMjgxMDUwNl5BMl5BanBnXkFtZTcwMjM3ODAxMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "47%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.6",
		"imdbVotes": "15,038",
		"imdbID": "tt0974014",
		"Type": "movie",
		"DVD": "08 Oct 2016",
		"BoxOffice": "$341,323",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Goblet of Fire",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "18 Nov 2005",
		"Runtime": "157 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "Mike Newell",
		"Writer": "Steve Kloves, J.K. Rowling",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "Harry's (Daniel Radcliffe's) fourth year at Hogwarts is about to start and he is enjoying the summer vacation with his friends. They get the tickets to The Quidditch World Cup Final, but after the match is over, people dressed like Lord Voldemort's (Ralph Fiennes') \"Death Eaters\" set a fire to all of the visitors' tents, coupled with the appearance of Voldemort's symbol, the \"Dark Mark\" in the sky, which causes a frenzy across the magical community. That same year, Hogwarts is hosting \"The Triwizard Tournament\", a magical tournament between three well-known schools of magic : Hogwarts, Beauxbatons, and Durmstrang. The contestants have to be above the age of seventeen, and are chosen by a magical object called \"The Goblet of Fire\". On the night of selection, however, the Goblet spews out four names instead of the usual three, with Harry unwittingly being selected as the Fourth Champion. Since the magic cannot be reversed, Harry is forced to go with it and brave three exceedingly difficult tasks.",
		"Language": "English, French, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 1 Oscar. 13 wins & 48 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "7.7",
		"imdbVotes": "677,173",
		"imdbID": "tt0330373",
		"Type": "movie",
		"DVD": "01 Jan 2008",
		"BoxOffice": "$290,469,928",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Harry Potter and the Order of the Phoenix",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "11 Jul 2007",
		"Runtime": "138 min",
		"Genre": "Action, Adventure, Family",
		"Director": "David Yates",
		"Writer": "Michael Goldenberg, J.K. Rowling",
		"Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
		"Plot": "After a lonely summer on Privet Drive, Harry (Daniel Radcliffe) returns to a Hogwarts full of ill-fortune. Few of students and parents believe him or Dumbledore (Sir Michael Gambon) that Voldemort (Ralph Fiennes) is really back. The ministry had decided to step in by appointing a new Defense Against the Dark Arts teacher, Professor Dolores Umbridge (Imelda Staunton), who proves to be the nastiest person Harry has ever encountered. Harry also can't help stealing glances with the beautiful Cho Chang (Katie Leung). To top it off are dreams that Harry can't explain, and a mystery behind something for which Voldemort is searching. With these many things, Harry begins one of his toughest years at Hogwarts School of Witchcraft and Wizardry.",
		"Language": "English, Latin",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 BAFTA 17 wins & 47 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.5",
		"imdbVotes": "627,421",
		"imdbID": "tt0373889",
		"Type": "movie",
		"DVD": "15 Dec 2009",
		"BoxOffice": "$292,382,727",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hail, Caesar!",
		"Year": "2016",
		"Rated": "PG-13",
		"Released": "05 Feb 2016",
		"Runtime": "106 min",
		"Genre": "Comedy, Drama, Mystery",
		"Director": "Ethan Coen, Joel Coen",
		"Writer": "Joel Coen, Ethan Coen",
		"Actors": "Josh Brolin, George Clooney, Alden Ehrenreich",
		"Plot": "This movie follows a day in the life of Eddie Mannix (Josh Brolin), a Hollywood fixer for Capitol Pictures in the 1950s, who cleans up and solves problems for big names and stars in the industry. But when studio star Baird Whitlock (George Clooney) disappears, Mannix has to deal with more than just the fix.",
		"Language": "English",
		"Country": "United States, United Kingdom, Japan",
		"Awards": "Nominated for 1 Oscar. 14 wins & 44 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTI1M2FlMzItY2VjYS00Y2VkLWI5OTQtMzA0MWMyNmQzZmQ0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "6.3",
		"imdbVotes": "142,193",
		"imdbID": "tt0475290",
		"Type": "movie",
		"DVD": "04 Oct 2016",
		"BoxOffice": "$30,498,085",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dawn of the Dead",
		"Year": "2004",
		"Rated": "R",
		"Released": "19 Mar 2004",
		"Runtime": "101 min",
		"Genre": "Action, Horror",
		"Director": "Zack Snyder",
		"Writer": "George A. Romero, James Gunn",
		"Actors": "Sarah Polley, Ving Rhames, Mekhi Phifer",
		"Plot": "Ana goes home to her peaceful suburban residence, but she is unpleasantly surprised the morning that follows when her husband is brutally attacked by her zombified neighbor. In the chaos of her once picturesque neighborhood, Ana flees and stumbles upon a police officer named Kenneth, along with more survivors who decide that their best chances of survival would be found in the deserted Crossroads Shopping Mall. When supplies begin running low and other trapped survivors need help, the group comes to the realization that they cannot stay put forever at the Shopping Mall and devise a plan to escape.",
		"Language": "English",
		"Country": "United States, Canada, Japan, France",
		"Awards": "1 win & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2M2ZmU2OGQtNmU5Yi00MTIyLTgwNWMtYjljMzZlYTdiNjBhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.3",
		"imdbVotes": "270,081",
		"imdbID": "tt0363547",
		"Type": "movie",
		"DVD": "12 Feb 2014",
		"BoxOffice": "$59,020,957",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Home Again",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "08 Sep 2017",
		"Runtime": "97 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Hallie Meyers-Shyer",
		"Writer": "Hallie Meyers-Shyer",
		"Actors": "Reese Witherspoon, Michael Sheen, Candice Bergen",
		"Plot": "Alice (Reese Witherspoon), a recently separated mother of two, finds her life upended when three young, charismatic filmmakers move into her guest house. But her unlikely new family and a budding romance come to a crashing halt when her ex-husband shows up, suitcase in hand. A story of love, friendship, and the families we create, \"Home Again\" is a modern romantic comedy with one very big life lesson: starting over is not for beginners.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDMxNTQ0NjIwOV5BMl5BanBnXkFtZTgwODE5NjA5MjI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "32%"
			},
			{
				"Source": "Metacritic",
				"Value": "41/100"
			}
		],
		"Metascore": "41",
		"imdbRating": "5.8",
		"imdbVotes": "34,956",
		"imdbID": "tt5719700",
		"Type": "movie",
		"DVD": "12 Apr 2018",
		"BoxOffice": "$27,020,284",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hostage",
		"Year": "2005",
		"Rated": "R",
		"Released": "11 Mar 2005",
		"Runtime": "113 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Florent-Emilio Siri",
		"Writer": "Robert Crais, Doug Richardson",
		"Actors": "Bruce Willis, Kevin Pollak, Serena Scott Thomas",
		"Plot": "Jeff Talley, a former LAPD hostage negotiator, has moved himself away from his failed career outside of Los Angeles, and away from his wife and daughter when three perpetrators move in on an unsuspecting family. But the family's father has a secret which might compromise his kin, and one of the criminals is about to jump over the edge. Jeff Talley has to get everybody to survive the night......if he can.",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzczYTgyYmItZTJkNy00ZmEyLWE5NTgtOGQ5ZmFhNzNhMWE2XkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "35%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "6.5",
		"imdbVotes": "113,331",
		"imdbID": "tt0340163",
		"Type": "movie",
		"DVD": "01 Oct 2016",
		"BoxOffice": "$34,639,939",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "I Don't Feel at Home in This World Anymore",
		"Year": "2017",
		"Rated": "TV-MA",
		"Released": "24 Feb 2017",
		"Runtime": "93 min",
		"Genre": "Comedy, Crime, Drama",
		"Director": "Macon Blair",
		"Writer": "Macon Blair",
		"Actors": "Melanie Lynskey, Chris Doubek, Marilyn Faith Hickey",
		"Plot": "When a depressed woman is burgled, she finds a new sense of purpose by tracking down the thieves along with her obnoxious neighbor. But they soon find themselves dangerously out of their depth against a pack of degenerate criminals.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmM5Zjg5ZWEtYmQwOS00NmFmLTgxYzktYTJkZmY3OGM4NDQyXkEyXkFqcGdeQXVyNjk4NjM5Nzc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "6.9",
		"imdbVotes": "63,826",
		"imdbID": "tt5710514",
		"Type": "movie",
		"DVD": "23 May 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Haunting of the Queen Mary",
		"Year": "2023",
		"Rated": "Not Rated",
		"Released": "18 Aug 2023",
		"Runtime": "114 min",
		"Genre": "Drama, Horror, Mystery",
		"Director": "Gary Shore",
		"Writer": "Stephen Oliver, Tom Vaughan, Gary Shore",
		"Actors": "Wesley Alfvin, Elena Angelova, Tiffany Ashton",
		"Plot": "Haunting of the Queen Mary explores the mysterious and violent events surrounding one family's voyage on Halloween night in 1938, and their interwoven destiny with another family onboard the infamous ocean liner present day.",
		"Language": "English, German",
		"Country": "United States, United Kingdom",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDIwZWU0Y2ItYjAwOS00NmRmLWE4NWEtMmYyZDA0NzkzOTZlXkEyXkFqcGdeQXVyMTM3NDE3MzQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.1/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "4.1",
		"imdbVotes": "3,090",
		"imdbID": "tt3463938",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hostiles",
		"Year": "2017",
		"Rated": "R",
		"Released": "26 Jan 2018",
		"Runtime": "134 min",
		"Genre": "Drama, Western",
		"Director": "Scott Cooper",
		"Writer": "Scott Cooper, Donald E. Stewart",
		"Actors": "Scott Shepherd, Rosamund Pike, Ava Cooper",
		"Plot": "In 1892 after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero Joseph Blocker is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment is further complicated when widowed settler Rosalie Quaid is taken in by his band of soldiers. Aggressive packs of marauding Comanches are still on the warpath and thirsty for blood, so can the seasoned Captain do his duty one last time?",
		"Language": "English, Cheyenne, French",
		"Country": "United States",
		"Awards": "4 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjFhZjM4ZDYtMGRjYi00Yzc2LWExYmEtMDQ3NzA4ODU4YTljXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.2",
		"imdbVotes": "94,732",
		"imdbID": "tt5478478",
		"Type": "movie",
		"DVD": "18 Apr 2018",
		"BoxOffice": "$29,819,114",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Hitch",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "11 Feb 2005",
		"Runtime": "118 min",
		"Genre": "Comedy, Romance",
		"Director": "Andy Tennant",
		"Writer": "Kevin Bisch",
		"Actors": "Will Smith, Eva Mendes, Kevin James",
		"Plot": "Pivoting around the eternal game of love, the suave matchmaker and New York City's finest date-doctor, Alex \"Hitch\" Hitchens, can guarantee that any man can get the girl of his dreams if he overcomes his fears and follows his infallible advice. However, when the timid accountant, Albert Brennaman, enlists his help to catch the attention of the rich and beautiful heiress, Allegra Cole, Hitch will unexpectedly discover his perfect match: the inquisitive gossip columnist, Sara Melas. Now, the self-assured charmer finds himself in need of his services to save his relationship. But, can the silver-tongued expert of romance survive the delicate complications of love?",
		"Language": "English",
		"Country": "United States",
		"Awards": "4 wins & 24 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzYyNzM2NzM2NF5BMl5BanBnXkFtZTcwNjg5NTQzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "69%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.6",
		"imdbVotes": "334,214",
		"imdbID": "tt0386588",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$179,495,555",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Edge of Tomorrow",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "06 Jun 2014",
		"Runtime": "113 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Doug Liman",
		"Writer": "Christopher McQuarrie, Jez Butterworth, John-Henry Butterworth",
		"Actors": "Tom Cruise, Emily Blunt, Bill Paxton",
		"Plot": "An alien race has hit the Earth in an unrelenting assault, unbeatable by any military unit in the world. Major William Cage (Cruise) is an officer who has never seen a day of combat when he is unceremoniously dropped into what amounts to a suicide mission. Killed within minutes, Cage now finds himself inexplicably thrown into a time loop-forcing him to live out the same brutal combat over and over, fighting and dying again...and again. But with each battle, Cage becomes able to engage the adversaries with increasing skill, alongside Special Forces warrior Rita Vrataski (Blunt). And, as Cage and Vrataski take the fight to the aliens, each repeated encounter gets them one step closer to defeating the enemy!",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "11 wins & 38 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.9",
		"imdbVotes": "728,259",
		"imdbID": "tt1631867",
		"Type": "movie",
		"DVD": "10 Nov 2015",
		"BoxOffice": "$100,206,256",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Forrest Gump",
		"Year": "1994",
		"Rated": "PG-13",
		"Released": "06 Jul 1994",
		"Runtime": "142 min",
		"Genre": "Drama, Romance",
		"Director": "Robert Zemeckis",
		"Writer": "Winston Groom, Eric Roth",
		"Actors": "Tom Hanks, Robin Wright, Gary Sinise",
		"Plot": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 6 Oscars. 50 wins & 74 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "8.8",
		"imdbVotes": "2,228,850",
		"imdbID": "tt0109830",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$330,455,270",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Dumb Money",
		"Year": "2023",
		"Rated": "R",
		"Released": "29 Sep 2023",
		"Runtime": "105 min",
		"Genre": "Biography, Comedy, Drama",
		"Director": "Craig Gillespie",
		"Writer": "Lauren Schuker Blum, Rebecca Angelo, Ben Mezrich",
		"Actors": "Paul Dano, Pete Davidson, Vincent D'Onofrio",
		"Plot": "David vs. Goliath tale about everyday people who flipped the script on Wall Street and got rich by turning GameStop (the video-game store) into the world's hottest company.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGFmZGY4MGMtNzIzZi00ODg1LWJhOWUtOTA3NzlhMDZmOWI5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.9",
		"imdbVotes": "37,797",
		"imdbID": "tt13957560",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$13,925,356",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Honey, I Shrunk the Kids",
		"Year": "1989",
		"Rated": "PG",
		"Released": "23 Jun 1989",
		"Runtime": "93 min",
		"Genre": "Adventure, Comedy, Family",
		"Director": "Joe Johnston",
		"Writer": "Stuart Gordon, Brian Yuzna, Ed Naha",
		"Actors": "Rick Moranis, Matt Frewer, Marcia Strassman",
		"Plot": "On the brink of perfecting his state-of-the-art matter-shrinking machine, the suburban paterfamilias and indefatigable inventor, Professor Wayne Szalinski, realises that his device truly works, when it zaps both his kids and their friends. Now, to return to the relative safety of their home while being reduced to a mere quarter-inch size, the minuscule humans must venture out into the dense and perilous landscapes of their now-immense backyard--a hostile environment where nearly everything spells trouble. Can the kids exit the green maze of grass in one piece?",
		"Language": "English",
		"Country": "United States, Mexico",
		"Awards": "Won 1 BAFTA Award2 wins & 10 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTQ1NTg4MDAtOGU0OS00ZGQwLTliZjQtNDEzZjAzZGI5MjFjXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "6.4",
		"imdbVotes": "164,909",
		"imdbID": "tt0097523",
		"Type": "movie",
		"DVD": "27 May 2016",
		"BoxOffice": "$130,724,172",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Guardians of the Galaxy",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "01 Aug 2014",
		"Runtime": "121 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "James Gunn",
		"Writer": "James Gunn, Nicole Perlman, Dan Abnett",
		"Actors": "Chris Pratt, Vin Diesel, Bradley Cooper",
		"Plot": "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the \"Guardians of the Galaxy\" to save the galaxy.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 52 wins & 103 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "8.0",
		"imdbVotes": "1,266,525",
		"imdbID": "tt2015381",
		"Type": "movie",
		"DVD": "15 Nov 2015",
		"BoxOffice": "$333,718,600",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Greyhound",
		"Year": "2020",
		"Rated": "PG-13",
		"Released": "10 Jul 2020",
		"Runtime": "91 min",
		"Genre": "Action, Drama, History",
		"Director": "Aaron Schneider",
		"Writer": "Tom Hanks, C.S. Forester",
		"Actors": "Tom Hanks, Elisabeth Shue, Stephen Graham",
		"Plot": "Based upon the novel \"The Good Shepherd\" by C S Forester, this is the thrilling story of an Allied convoy crossing the North Atlantic in 1942 as it faces relentless attack by a German submarine wolf pack. The leader of the convoy's destroyer screen is a US Navy commander making his first Atlantic crossing. The story focuses on his command responsibility as he fights the cold, the relentless night, the brutal sea, and his deep fatigue as he chases down the attacking submarines in the deadly game of cat and mouse. The exciting story, a thrilling ride-along with the beleaguered captain, so deeply portrays the elements of battle command that for a long period of time the book was used as a text at the US Naval Academy.",
		"Language": "English",
		"Country": "United States, Canada, China",
		"Awards": "Nominated for 1 Oscar. 1 win & 23 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "7.0",
		"imdbVotes": "113,743",
		"imdbID": "tt6048922",
		"Type": "movie",
		"DVD": "10 Jul 2020",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Gladiator",
		"Year": "2000",
		"Rated": "R",
		"Released": "05 May 2000",
		"Runtime": "155 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Ridley Scott",
		"Writer": "David Franzoni, John Logan, William Nicholson",
		"Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
		"Plot": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.",
		"Language": "English",
		"Country": "United States, United Kingdom, Malta, Morocco",
		"Awards": "Won 5 Oscars. 60 wins & 104 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "8.5",
		"imdbVotes": "1,609,914",
		"imdbID": "tt0172495",
		"Type": "movie",
		"DVD": "15 Jun 2011",
		"BoxOffice": "$187,705,427",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Django Unchained",
		"Year": "2012",
		"Rated": "R",
		"Released": "25 Dec 2012",
		"Runtime": "165 min",
		"Genre": "Drama, Western",
		"Director": "Quentin Tarantino",
		"Writer": "Quentin Tarantino",
		"Actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
		"Plot": "In 1858, a bounty-hunter named King Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Broomhilda, who along with him were sold separately by his former owner for trying to escape. Schultz offers to help him if he chooses to stay with him and be his partner. Eventually they learn that she was sold to a plantation in Mississippi. Knowing they can't just go in and say they want her, they come up with a plan so that the owner will welcome them into his home and they can find a way.",
		"Language": "English, German, French, Italian",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 58 wins & 158 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "8.5",
		"imdbVotes": "1,684,006",
		"imdbID": "tt1853728",
		"Type": "movie",
		"DVD": "24 Mar 2017",
		"BoxOffice": "$162,805,434",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Goon",
		"Year": "2011",
		"Rated": "R",
		"Released": "24 Feb 2012",
		"Runtime": "92 min",
		"Genre": "Comedy, Drama, Sport",
		"Director": "Michael Dowse",
		"Writer": "Jay Baruchel, Evan Goldberg, Adam Frattasio",
		"Actors": "Seann William Scott, Jay Baruchel, Alison Pill",
		"Plot": "Doug Glatt of Orange, Massachusetts is floundering in life, having no real sense of where he fits. He doesn't have the book-smarts to become a doctor like his adoptive father or his gay adoptive brother Ira. And he doesn't have the passion that his best friend Pat has for his self-appointed work, hosting a hockey-based cable call-in show, Hot Ice. Because his fists and skull are like steel, Doug is good at the enforcement part of his job as a bouncer despite his innocent, naturally-friendly approach to dealing with people and situations. An incident involving Doug in the stands of an Orangetown Assassins minor-league hockey game leads to the coach, Rollie Hortense, offering Doug a tryout with the team as its enforcer, although Rollie has no idea if Doug even knows how to play ice hockey (he doesn't). Learning just enough hockey skills, Doug makes the team, but Rollie believes that he'd be a bigger asset on his brother Ronnie Hortense's team, the Halifax Highlanders. Ronnie has one player, Xavier LaFlamme, who was once well on his way to a successful NHL career, until he was blown a vicious hit three years ago by aged enforcer Ross \"the Boss\" Rhea, after which Xavier lost his hockey mojo. Doug's role would be to protect Xavier while somehow giving him the confidence to feel safe playing hockey freely again. Doug relishes this new role, first with the Assassins then with the Highlanders, as he likes hockey and he stands up for what and who he believes in. But Doug might have obstacles in proving himself to those that matter: the coaches, his family, his fellow players--especially Xavier--and a girl named Eva, who's already in a relationship, but Doug is falling for her. He must also prove himself to Ross the Boss, whom Xavier has not met on the ice since that hit.",
		"Language": "English, French",
		"Country": "United States, Canada",
		"Awards": "1 win & 13 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcxOTQwMTQ3MF5BMl5BanBnXkFtZTcwMDcyOTQwNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "81%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "6.8",
		"imdbVotes": "90,578",
		"imdbID": "tt1456635",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$4,168,528",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Imperium",
		"Year": "2016",
		"Rated": "R",
		"Released": "19 Aug 2016",
		"Runtime": "109 min",
		"Genre": "Biography, Crime, Drama",
		"Director": "Daniel Ragussis",
		"Writer": "Michael German, Joe Turner Lin, Daniel Ragussis",
		"Actors": "Daniel Radcliffe, Toni Collette, Tracy Letts",
		"Plot": "Idealistic FBI agent Nate Foster goes undercover to take down a radical white supremacy terrorist group. The up-and-coming analyst must confront the challenge of sticking to a new identity while maintaining his real principles as he navigates the dangerous underworld of white supremacy.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MzY4MDkwOV5BMl5BanBnXkFtZTgwMzY4MzczOTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "6.5",
		"imdbVotes": "49,406",
		"imdbID": "tt4781612",
		"Type": "movie",
		"DVD": "06 Nov 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "In the Loop",
		"Year": "2009",
		"Rated": "Not Rated",
		"Released": "04 Sep 2009",
		"Runtime": "106 min",
		"Genre": "Comedy",
		"Director": "Armando Iannucci",
		"Writer": "Jesse Armstrong, Simon Blackwell, Armando Iannucci",
		"Actors": "Tom Hollander, Peter Capaldi, James Gandolfini",
		"Plot": "The US President and UK Prime Minister fancy a war. But not everyone agrees that war is a good thing. The US General Miller doesn't think so and neither does the British Secretary of State for International Development, Simon Foster. But, after Simon accidentally backs military action on TV, he suddenly has a lot of friends in Washington, DC. If Simon can get in with the right DC people, if his entourage of one can sleep with the right intern, and if they can both stop the Prime Minister's chief spin-doctor Malcolm Tucker rigging the vote at the UN, they can halt the war. If they don't... well, they can always sack their Director of Communications Judy, who they never liked anyway and who's back home dealing with voters with blocked drains and a man who's angry about a collapsing wall.",
		"Language": "English",
		"Country": "United Kingdom",
		"Awards": "Nominated for 1 Oscar. 16 wins & 43 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NzQxNzA1OF5BMl5BanBnXkFtZTcwNzQ0NDk0Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "83/100"
			}
		],
		"Metascore": "83",
		"imdbRating": "7.4",
		"imdbVotes": "61,089",
		"imdbID": "tt1226774",
		"Type": "movie",
		"DVD": "27 Sep 2016",
		"BoxOffice": "$2,388,804",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Incredibles 2",
		"Year": "2018",
		"Rated": "PG",
		"Released": "15 Jun 2018",
		"Runtime": "118 min",
		"Genre": "Animation, Action, Adventure",
		"Director": "Brad Bird",
		"Writer": "Brad Bird",
		"Actors": "Craig T. Nelson, Holly Hunter, Sarah Vowell",
		"Plot": "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil.",
		"Language": "English, Russian",
		"Country": "United States, Japan",
		"Awards": "Nominated for 1 Oscar. 14 wins & 81 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "7.6",
		"imdbVotes": "326,645",
		"imdbID": "tt3606756",
		"Type": "movie",
		"DVD": "23 Oct 2018",
		"BoxOffice": "$608,581,744",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Jack Reacher",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "21 Dec 2012",
		"Runtime": "130 min",
		"Genre": "Action, Mystery, Thriller",
		"Director": "Christopher McQuarrie",
		"Writer": "Lee Child, Christopher McQuarrie",
		"Actors": "Tom Cruise, Rosamund Pike, Richard Jenkins",
		"Plot": "In an innocent heartland city, five are shot dead by an expert sniper. The police quickly identify and arrest the culprit, and build a slam-dunk case. But instead of confessing, the accused man writes the words, \"Get Jack Reacher.\" Reacher himself sees the news report and turns up in the city. The defense is immensely relieved, but Reacher has come to bury the guy. Shocked at the accused's request, Reacher sets out to confirm for himself the absolute certainty of the man's guilt, but comes up with more than he bargained for.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM1NjUxMDI3OV5BMl5BanBnXkFtZTcwNjg1ODM3OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "63%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "7.0",
		"imdbVotes": "363,747",
		"imdbID": "tt0790724",
		"Type": "movie",
		"DVD": "31 Dec 2014",
		"BoxOffice": "$80,070,736",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "In the Heart of the Sea",
		"Year": "2015",
		"Rated": "PG-13",
		"Released": "11 Dec 2015",
		"Runtime": "122 min",
		"Genre": "Action, Adventure, Biography",
		"Director": "Ron Howard",
		"Writer": "Charles Leavitt, Rick Jaffa, Amanda Silver",
		"Actors": "Chris Hemsworth, Cillian Murphy, Brendan Gleeson",
		"Plot": "In the winter of 1820, the New England whaling ship Essex was assaulted by something no one could believe: a whale of mammoth size and will, and an almost human sense of vengeance. The real-life maritime disaster would inspire Herman Melville's Moby-Dick. But that told only half the story. \"In the Heart of the Sea\" reveals the encounter's harrowing aftermath, as the ship's surviving crew is pushed to their limits and forced to do the unthinkable to stay alive. Braving storms, starvation, panic and despair, the men will call into question their deepest beliefs, from the value of their lives to the morality of their trade, as their captain searches for direction on the open sea and his first mate still seeks to bring the great whale down.",
		"Language": "English",
		"Country": "United States, Australia, Spain",
		"Awards": "1 win & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzUwODExM15BMl5BanBnXkFtZTgwNjM0MzE4NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "43%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.9",
		"imdbVotes": "148,230",
		"imdbID": "tt1390411",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$25,020,758",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "John Carter",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "09 Mar 2012",
		"Runtime": "132 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Andrew Stanton",
		"Writer": "Andrew Stanton, Mark Andrews, Michael Chabon",
		"Actors": "Taylor Kitsch, Lynn Collins, Willem Dafoe",
		"Plot": "John Carter, a Civil War veteran, who in 1868 was trying to live a normal life, is \"asked\" by the Army to join, but he refuses so he is locked up. He escapes, and is pursued. Eventually they run into some Indians, and there's a gunfight. Carter seeks refuge in a cave. While there, he encounters someone who is holding some kind of medallion. When Carter touches it, he finds himself in a place where he can leap incredible heights, among other things. He later encounters beings he has never seen before. He meets a woman who helps him to discover that he is on Mars, and he learns there's some kind of unrest going on.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDEwZmIzNjYtNjUwNS00MzgzLWJiOGYtZWMxZGQ5NDcxZjUwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.6",
		"imdbVotes": "285,349",
		"imdbID": "tt0401729",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$73,078,100",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Jersey Girl",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "26 Mar 2004",
		"Runtime": "102 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Kevin Smith",
		"Writer": "Kevin Smith",
		"Actors": "Ben Affleck, Liv Tyler, Raquel Castro",
		"Plot": "Oliver Trinke has always tried to put his Highlands, New Jersey past behind him, but it's been difficult for the past six years. He was a successful New York City music publicist, but after his wife Gertrude died immediately after delivering their daughter Gertie. unprepared Ollie became persona non grata in the entertainment publicity industry through a single incident largely putting his desire for professional success over his responsibilities as a father, and he returned to Highlands and he and Gertie moved in with his own father, Bart, until he could get back on his feet. That meant working side-by-side with Bart in the Borough of Highlands works crew, a job he still has. He also still has the desire to get back to a New York City life and a high-powered job as an entertainment publicist, despite learning to be a responsible, loving father to Gertie, who has only known Highlands life and likes everything about it, including her daddy and Bart, her \"Pop.\" As Ollie tries to realize his dream, he might get a clearer picture of his priorities with help from Maya, a video store clerk/graduate student that he and Gertie befriend.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTYxMTZlNTEtMjlmZS00ODFiLTg5ODUtYzJkMzc1MGNhYjVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "43%"
			},
			{
				"Source": "Metacritic",
				"Value": "43/100"
			}
		],
		"Metascore": "43",
		"imdbRating": "6.2",
		"imdbVotes": "69,797",
		"imdbID": "tt0300051",
		"Type": "movie",
		"DVD": "08 Oct 2016",
		"BoxOffice": "$25,268,157",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Independence Day",
		"Year": "1996",
		"Rated": "PG-13",
		"Released": "03 Jul 1996",
		"Runtime": "145 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Roland Emmerich",
		"Writer": "Dean Devlin, Roland Emmerich",
		"Actors": "Will Smith, Bill Pullman, Jeff Goldblum",
		"Plot": "On July 2nd, communications systems worldwide are sent into chaos by a strange atmospheric interference. It is soon learned by the military that a number of enormous objects are on a collision course with Earth. At first thought to be meteors, they are later revealed to be gigantic spacecraft, piloted by a mysterious alien species. After attempts to communicate with the aliens go nowhere, David Levinson, an ex-scientist turned cable technician, discovers that the aliens are going to attack major points around the globe in less than a day. On July 3rd, the aliens all but obliterate New York, Los Angeles and Washington, as well as Paris, London, Houston and Moscow. The survivors set out in convoys towards Area 51, a strange government testing ground where it is rumored the military has a captured alien spacecraft of their own. The survivors devise a plan to fight back against the enslaving aliens, and July 4th becomes the day humanity will fight for its freedom. July 4th is their Independence Day...",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 35 wins & 35 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.0",
		"imdbVotes": "603,390",
		"imdbID": "tt0116629",
		"Type": "movie",
		"DVD": "18 Sep 2012",
		"BoxOffice": "$306,169,268",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Jack and Jill",
		"Year": "2011",
		"Rated": "PG",
		"Released": "11 Nov 2011",
		"Runtime": "91 min",
		"Genre": "Comedy",
		"Director": "Dennis Dugan",
		"Writer": "Ben Zook, Steve Koren, Adam Sandler",
		"Actors": "Adam Sandler, Katie Holmes, Al Pacino",
		"Plot": "Jack Sadelstein is a successful advertising executive in Los Angeles, with a beautiful wife and kids, who dreads one event each year--the Thanksgiving visit of his fraternal twin sister, Jill. Jill's neediness and passive-aggressiveness is maddening to Jack, turning his normally tranquil life upside down.",
		"Language": "English",
		"Country": "United States",
		"Awards": "14 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjczMTU5OTUyMl5BMl5BanBnXkFtZTcwODEzNjc3Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "3.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "3%"
			},
			{
				"Source": "Metacritic",
				"Value": "23/100"
			}
		],
		"Metascore": "23",
		"imdbRating": "3.3",
		"imdbVotes": "90,064",
		"imdbID": "tt0810913",
		"Type": "movie",
		"DVD": "06 Mar 2012",
		"BoxOffice": "$74,158,157",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "John Wick",
		"Year": "2014",
		"Rated": "R",
		"Released": "24 Oct 2014",
		"Runtime": "101 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Chad Stahelski, David Leitch",
		"Writer": "Derek Kolstad",
		"Actors": "Keanu Reeves, Michael Nyqvist, Alfie Allen",
		"Plot": "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution.",
		"Language": "English, Russian, Hungarian",
		"Country": "United States",
		"Awards": "5 wins & 10 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.4",
		"imdbVotes": "734,188",
		"imdbID": "tt2911666",
		"Type": "movie",
		"DVD": "07 Jun 2016",
		"BoxOffice": "$43,037,835",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kindergarten Cop",
		"Year": "1990",
		"Rated": "PG-13",
		"Released": "21 Dec 1990",
		"Runtime": "111 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Ivan Reitman",
		"Writer": "Murray Salem, Herschel Weingrod, Timothy Harris",
		"Actors": "Arnold Schwarzenegger, Penelope Ann Miller, Pamela Reed",
		"Plot": "After numerous fruitless attempts, the veteran LAPD Detective, John Kimble, has one last chance to put behind bars once and for all the elusive drug kingpin, Cullen Crisp, who is trying to find the whereabouts of his son and his ex-wife who run away with millions of dollars. In high hopes of picking up clues, the massive officer finds himself at a bustling elementary school in Astoria, Oregon, posing as a substitute kindergarten teacher; however, to keep up the ruse without blowing his cover, John must keep under control a noisy classroom full of intimidating five-year-old adversaries. Can Kimble show them who's boss?",
		"Language": "English, Spanish, German",
		"Country": "United States",
		"Awards": "4 wins & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjMyMTIyOTc0N15BMl5BanBnXkFtZTgwODY1NTk4NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "6.2",
		"imdbVotes": "160,673",
		"imdbID": "tt0099938",
		"Type": "movie",
		"DVD": "15 Jun 2012",
		"BoxOffice": "$91,457,688",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Just Go with It",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "11 Feb 2011",
		"Runtime": "117 min",
		"Genre": "Comedy, Romance",
		"Director": "Dennis Dugan",
		"Writer": "Allan Loeb, Timothy Dowling, I.A.L. Diamond",
		"Actors": "Adam Sandler, Jennifer Aniston, Brooklyn Decker",
		"Plot": "Danny (Adam Sandler) must engage Katherine (Jennifer Aniston), his faithful assistant, to pretend to be his soon to be ex-wife. Danny must pretend that he is married, because he lied to his dream girl, Palmer (Brooklyn Decker) the most gorgeous woman in the world. To keep the woman he loves, covering up one lie soon turns into many lies.",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 wins & 13 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "19%"
			},
			{
				"Source": "Metacritic",
				"Value": "33/100"
			}
		],
		"Metascore": "33",
		"imdbRating": "6.4",
		"imdbVotes": "264,131",
		"imdbID": "tt1564367",
		"Type": "movie",
		"DVD": "04 Sep 2012",
		"BoxOffice": "$103,028,109",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Knives Out",
		"Year": "2019",
		"Rated": "PG-13",
		"Released": "27 Nov 2019",
		"Runtime": "130 min",
		"Genre": "Comedy, Crime, Drama",
		"Director": "Rian Johnson",
		"Writer": "Rian Johnson",
		"Actors": "Daniel Craig, Chris Evans, Ana de Armas",
		"Plot": "When renowned crime novelist Harlan Thrombey (Christopher Plummer) is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc (Daniel Craig) is mysteriously enlisted to investigate. From Harlan's disfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
		"Language": "English, Spanish, Hindi",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 52 wins & 113 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.9",
		"imdbVotes": "767,166",
		"imdbID": "tt8946378",
		"Type": "movie",
		"DVD": "12 Jun 2020",
		"BoxOffice": "$165,363,234",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Joker",
		"Year": "2019",
		"Rated": "R",
		"Released": "04 Oct 2019",
		"Runtime": "122 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "Todd Phillips",
		"Writer": "Todd Phillips, Scott Silver, Bob Kane",
		"Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
		"Plot": "Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.",
		"Language": "English, German",
		"Country": "United States, Canada, Australia",
		"Awards": "Won 2 Oscars. 121 wins & 245 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "69%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "8.4",
		"imdbVotes": "1,463,264",
		"imdbID": "tt7286456",
		"Type": "movie",
		"DVD": "03 Oct 2019",
		"BoxOffice": "$335,477,657",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kate",
		"Year": "2021",
		"Rated": "R",
		"Released": "10 Sep 2021",
		"Runtime": "106 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Cedric Nicolas-Troyan",
		"Writer": "Umair Aleem",
		"Actors": "Mary Elizabeth Winstead, Woody Harrelson, Miku Martineau",
		"Plot": "Meticulous and preternaturally skilled, Kate is the perfect specimen of a finely tuned assassin at the height of her game. But when she uncharacteristically blows an assignment targeting a member of the yakuza in Tokyo, she quickly discovers she's been poisoned, a brutally slow execution that gives her less than 24 hours to exact revenge on her killers. As her body swiftly deteriorates, Kate forms an unlikely bond with the teenage daughter of one of her past victims.",
		"Language": "English, Japanese",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2IyYzI4YmQtNzBmMi00Mjg3LWI4NTMtNmZjNjk3YjIwZmJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.2",
		"imdbVotes": "69,679",
		"imdbID": "tt7737528",
		"Type": "movie",
		"DVD": "10 Sep 2021",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Little Big Soldier",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "14 Feb 2010",
		"Runtime": "96 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Sheng Ding",
		"Writer": "Jackie Chan",
		"Actors": "Jackie Chan, Leehom Wang, Yoo Seung-jun",
		"Plot": "Two armies clash in ancient war-torn China; none survive but a young general from a royal house and a farmer foot soldier who binds the fallen leader to take him home and claim a reward. Many stand in their way: an abandoned songstress, the noble's own murderous younger brother, desperate beggars, rough slavers, and the pair's own differing agendas. Through it all, a bond forms between the two, and what will happen at journey's end becomes anyone's guess.",
		"Language": "Mandarin",
		"Country": "China, Hong Kong",
		"Awards": "2 wins",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2E0OTI0NmYtMzQwMS00ZDJlLWIwMDQtMGU0YjhmMDE0MmRmXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.9",
		"imdbVotes": "15,937",
		"imdbID": "tt1319718",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Man on a Ledge",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "27 Jan 2012",
		"Runtime": "102 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Asger Leth",
		"Writer": "Pablo F. Fenjves",
		"Actors": "Sam Worthington, Elizabeth Banks, Jamie Bell",
		"Plot": "An ex-cop-turned-con threatens to jump to his death from a Manhattan hotel. The nearest New York Police Officer immediately responds to a screaming woman and calls dispatch. More officers arrive with SWAT and tactical command along with firefighters. The police then dispatch a police psychologist personally requested to talk him down from the ledge. However, things aren't as they seem.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MTE4MzY2N15BMl5BanBnXkFtZTcwNjMwNDc3Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "31%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "6.6",
		"imdbVotes": "157,788",
		"imdbID": "tt1568338",
		"Type": "movie",
		"DVD": "19 Dec 2015",
		"BoxOffice": "$18,620,000",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Leap Year",
		"Year": "2010",
		"Rated": "PG",
		"Released": "08 Jan 2010",
		"Runtime": "100 min",
		"Genre": "Comedy, Romance",
		"Director": "Anand Tucker",
		"Writer": "Deborah Kaplan, Harry Elfont",
		"Actors": "Amy Adams, Matthew Goode, Adam Scott",
		"Plot": "A woman who has an elaborate scheme to propose to her boyfriend on Leap Day, an Irish tradition which occurs every time the date February 29 rolls around, faces a major setback when bad weather threatens to derail her planned trip to Dublin. With the help of an innkeeper, however, her cross-country odyssey just might result in her getting engaged.",
		"Language": "English, Ukrainian",
		"Country": "United States, Ireland",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTgzMTQ2MDQxMF5BMl5BanBnXkFtZTcwODEzOTg5Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "24%"
			},
			{
				"Source": "Metacritic",
				"Value": "33/100"
			}
		],
		"Metascore": "33",
		"imdbRating": "6.4",
		"imdbVotes": "109,681",
		"imdbID": "tt1216492",
		"Type": "movie",
		"DVD": "12 Feb 2014",
		"BoxOffice": "$25,918,920",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Lara Croft: Tomb Raider - The Cradle of Life",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "25 Jul 2003",
		"Runtime": "117 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Jan de Bont",
		"Writer": "Dean Georgaris, Steven E. de Souza, James V. Hart",
		"Actors": "Angelina Jolie, Gerard Butler, Chris Barrie",
		"Plot": "Off the coast of the volcanic island of Santorini, the intrepid archaeologist, Lara Croft, makes the unexpected discovery of a throbbing golden orb able to guide its holder to the mythical Pandora's Box. As the legendary artefact contains ancient mysteries of unfathomable power, Lara needs to make sure it doesn't fall into the wrong hands, especially the unscrupulous former Nobel Prize winner and now a bio-weapons dealer, Jonathan Reiss. With the aid of the former agent, Terry Sheridan, the fearless adventurer travels the world in pursuit of the precious item; however, can she retrieve it in time to save the day?",
		"Language": "English, Mandarin, Swahili, Greek, Russian",
		"Country": "United States, Germany, Japan, United Kingdom, Hong Kong",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzYxOTgxYjAtNGI3MS00NDJkLTkyZWItZGM5MzRhOGYwYjlmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "24%"
			},
			{
				"Source": "Metacritic",
				"Value": "43/100"
			}
		],
		"Metascore": "43",
		"imdbRating": "5.5",
		"imdbVotes": "144,137",
		"imdbID": "tt0325703",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$65,660,196",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Moneyball",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "23 Sep 2011",
		"Runtime": "133 min",
		"Genre": "Biography, Drama, Sport",
		"Director": "Bennett Miller",
		"Writer": "Steven Zaillian, Aaron Sorkin, Stan Chervin",
		"Actors": "Brad Pitt, Robin Wright, Jonah Hill",
		"Plot": "Oakland A's GM Billy Beane is handicapped with the lowest salary constraint in baseball. If he ever wants to win the World Series, Billy must find a competitive advantage. Billy is about to turn baseball on its ear when he uses statistical data to analyze and place value on the players he picks for the team.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 6 Oscars. 29 wins & 82 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "87/100"
			}
		],
		"Metascore": "87",
		"imdbRating": "7.6",
		"imdbVotes": "461,994",
		"imdbID": "tt1210166",
		"Type": "movie",
		"DVD": "03 Sep 2013",
		"BoxOffice": "$75,605,492",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Michael Clayton",
		"Year": "2007",
		"Rated": "R",
		"Released": "12 Oct 2007",
		"Runtime": "119 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Tony Gilroy",
		"Writer": "Tony Gilroy",
		"Actors": "George Clooney, Tilda Swinton, Tom Wilkinson",
		"Plot": "Michael Clayton, a high-priced law firm's fixer, leaves a late night poker game, gets a call to drive to Westchester, and watches his car blow up as he's taking an impromptu dawn walk through a field. Flash back four days. He owes a loan shark to cover his brother's debts (Michael's own gambling habits have left him virtually broke). His law firm is negotiating a high-stakes merger, and his firm's six year defense of a conglomerate's pesticide use is at risk when one of the firm's top litigators goes off his meds and puts the case in jeopardy. While Michael is trying to fix things someone decides to kill him. Who? Meanwhile his son summarizes the plot of a dark fantasy novel.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 28 wins & 114 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc0NTU5MjI2MV5BMl5BanBnXkFtZTcwMTg5NTQzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.2",
		"imdbVotes": "173,612",
		"imdbID": "tt0465538",
		"Type": "movie",
		"DVD": "02 Nov 2009",
		"BoxOffice": "$49,033,882",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Live Free or Die Hard",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "27 Jun 2007",
		"Runtime": "128 min",
		"Genre": "Action, Thriller",
		"Director": "Len Wiseman",
		"Writer": "John Carlin, Roderick Thorp, Mark Bomback",
		"Actors": "Bruce Willis, Justin Long, Timothy Olyphant",
		"Plot": "When someone hacks into the computers at the FBI's Cyber Crime Division; the Director decides to round up all the hackers who could have done this. When he's told that because it's the 4th of July most of their agents are not around so they might have trouble getting people to get the hackers. So he instructs them to get local PD'S to take care of it. And one of the cops they ask is John McClane who is tasked with bringing a hacker named Farrell to the FBI. But as soon as he gets there someone starts shooting at them. McClane manages to get them out but they're still being pursued. And it's just when McClane arrives in Washington that the whole system breaks down and chaos ensues.",
		"Language": "English, Italian, French",
		"Country": "United States, United Kingdom",
		"Awards": "3 wins & 16 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.1",
		"imdbVotes": "419,540",
		"imdbID": "tt0337978",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$134,529,403",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Laws of Attraction",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "30 Apr 2004",
		"Runtime": "90 min",
		"Genre": "Comedy, Romance",
		"Director": "Peter Howitt",
		"Writer": "Aline Brosh McKenna, Robert Harling",
		"Actors": "Pierce Brosnan, Julianne Moore, Parker Posey",
		"Plot": "This is the story of two New York divorce attorneys who are often competing against each other, but end up in a relationship nonetheless. When they get married, can they avoid the same issues at home that lead people to provide them business at work? One of the central cases in the story is the heavily-publicized divorce of a rock star from his wife...",
		"Language": "English",
		"Country": "Ireland, United Kingdom, Germany, United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjEzODg4MjM1NF5BMl5BanBnXkFtZTYwNzQzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "18%"
			},
			{
				"Source": "Metacritic",
				"Value": "38/100"
			}
		],
		"Metascore": "38",
		"imdbRating": "5.8",
		"imdbVotes": "24,466",
		"imdbID": "tt0323033",
		"Type": "movie",
		"DVD": "24 Dec 2012",
		"BoxOffice": "$17,871,255",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "National Lampoon's Christmas Vacation",
		"Year": "1989",
		"Rated": "PG-13",
		"Released": "01 Dec 1989",
		"Runtime": "97 min",
		"Genre": "Comedy",
		"Director": "Jeremiah S. Chechik",
		"Writer": "John Hughes",
		"Actors": "Chevy Chase, Beverly D'Angelo, Juliette Lewis",
		"Plot": "It's Christmas time and the Griswolds are preparing for a family seasonal celebration, but things never run smoothly for Clark, his wife Ellen and their two kids. Clark's continual bad luck is worsened by his obnoxious family guests, but he manages to keep going knowing that his Christmas bonus is due soon.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWM5NDNiMmItOWJiZC00NDVmLWE5MGEtMGE5NzcxMTY3ODYwXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "7.5",
		"imdbVotes": "219,483",
		"imdbID": "tt0097958",
		"Type": "movie",
		"DVD": "22 Dec 2010",
		"BoxOffice": "$74,515,899",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "L.A. Confidential",
		"Year": "1997",
		"Rated": "R",
		"Released": "19 Sep 1997",
		"Runtime": "138 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Curtis Hanson",
		"Writer": "James Ellroy, Brian Helgeland, Curtis Hanson",
		"Actors": "Kevin Spacey, Russell Crowe, Guy Pearce",
		"Plot": "1950's Los Angeles is the seedy backdrop for this intricate noir-ish tale of police corruption and Hollywood sleaze. Three very different cops are all after the truth, each in their own style: Ed Exley, the golden boy of the police force, willing to do almost anything to get ahead, except sell out; Bud White, ready to break the rules to seek justice, but barely able to keep his raging violence under control; and Jack Vincennes, always looking for celebrity and a quick buck until his conscience drives him to join Exley and White down the one-way path to find the truth behind the dark world of L.A. crime.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 91 wins & 86 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDQ2YzEyZGItYWRhOS00MjBmLTkzMDUtMTdjYzkyMmQxZTJlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "99%"
			},
			{
				"Source": "Metacritic",
				"Value": "91/100"
			}
		],
		"Metascore": "91",
		"imdbRating": "8.2",
		"imdbVotes": "613,159",
		"imdbID": "tt0119488",
		"Type": "movie",
		"DVD": "12 Dec 2015",
		"BoxOffice": "$64,616,940",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Must Love Dogs",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "29 Jul 2005",
		"Runtime": "98 min",
		"Genre": "Comedy, Romance",
		"Director": "Gary David Goldberg",
		"Writer": "Claire Cook, Gary David Goldberg",
		"Actors": "Diane Lane, John Cusack, Elizabeth Perkins",
		"Plot": "Preschool teacher Sarah Nolan (Diane Lane), divorced for eight months, is still grieving the end of her marriage. Although she didn't see it as being perfect, she probably would have stuck it out as what she saw as the \"for better or worse\" obligation of the wedding vows, that is if her ex-husband, Kevin, didn't end it for what ended up being leaving her for a younger woman. She is urged by her over-supportive family, comprised of her many siblings, their partners, and her widowed father, to get back into the dating scene, something she has been reluctant to do in not feeling ready. As such, her most proactive sister in the matter, Carol (Elizabeth Perkins), sets her up on an Internet dating site. Within her less than prepared state, Sarah does go along with meeting men by the means offered to her. Beyond especially her female siblings, Sarah is given unique perspectives on the whole issue of dating and commitment by her father, Bill (Christopher Plummer), who is exploring dating after losing who was the love of his life in Sarah's mother, thrice divorced Dolly (Stockard Channing), one of Bill's conquests, who he meets on-line, and Sarah's gay teaching colleague, Leo (Brad William Henke), who she sees as being in the most committed loving relationship with his partner Eric (Victor Webster) of anyone she knows. Of the men she meets, Sarah makes what she believes is a connection with two, albeit awkward in both cases. One is Bob Connor (Dermot Mulroney), the divorced father of one of her students, her hesitance in dating him only because of crossing the professional/personal line. The other is custom wooden boat builder Jake Anderson (John Cusack), who too was pushed into trying on-line dating by his best friend/divorce lawyer Charlie (Ben Shenkman), who wants Jake solely to get some action despite Jake wanting his love life to be more like Lara and Yuri in Doctor Zhivago (1965). Much of what happens between Sarah and the two men is based on what stage they are in post-divorce dating life, but is also dependent on how much Sarah is willing to take a chance on each, which may also include her and the respective man just not meshing at a given point in time, and her making a wrong decision in the process based on what she sees as the prospects.",
		"Language": "English, Armenian",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGU5MmVlYTQtZTllZS00ZTgwLTk2NWEtNjI1OTRkOTQ1MTE0XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "5.9",
		"imdbVotes": "32,909",
		"imdbID": "tt0417001",
		"Type": "movie",
		"DVD": "07 Nov 2008",
		"BoxOffice": "$43,894,863",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mission: Impossible - Rogue Nation",
		"Year": "2015",
		"Rated": "PG-13",
		"Released": "31 Jul 2015",
		"Runtime": "131 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Christopher McQuarrie",
		"Writer": "Bruce Geller, Christopher McQuarrie, Drew Pearce",
		"Actors": "Tom Cruise, Rebecca Ferguson, Jeremy Renner",
		"Plot": "CIA chief Hunley (Baldwin) convinces a Senate committee to disband the IMF (Impossible Mission Force), of which Ethan Hunt (Cruise) is a key member. Hunley argues that the IMF is too reckless. Now on his own, Hunt goes after a shadowy and deadly rogue organization called the Syndicate.",
		"Language": "English, Swedish, German, Russian",
		"Country": "United States, China",
		"Awards": "6 wins & 26 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "7.4",
		"imdbVotes": "407,624",
		"imdbID": "tt2381249",
		"Type": "movie",
		"DVD": "01 Jun 2016",
		"BoxOffice": "$195,042,377",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Miss Sloane",
		"Year": "2016",
		"Rated": "R",
		"Released": "09 Dec 2016",
		"Runtime": "132 min",
		"Genre": "Drama",
		"Director": "John Madden",
		"Writer": "Jonathan Perera",
		"Actors": "Jessica Chastain, Mark Strong, Gugu Mbatha-Raw",
		"Plot": "In the high-stakes world of political power-brokers, Elizabeth Sloane (Jessica Chastain) is the most sought after and formidable lobbyist in D.C. Known equally for her cunning and her track record of success, she has always done whatever is required to win. But when she takes on the most powerful opponent of her career, she finds that winning may come at too high a price.",
		"Language": "English",
		"Country": "United Kingdom, France, Canada, United States",
		"Awards": "1 win & 12 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTAyODY4Njc4MjBeQTJeQWpwZ15BbWU4MDI0NTIzMDAy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "7.5",
		"imdbVotes": "82,088",
		"imdbID": "tt4540710",
		"Type": "movie",
		"DVD": "14 Mar 2017",
		"BoxOffice": "$3,500,605",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Monsters University",
		"Year": "2013",
		"Rated": "G",
		"Released": "21 Jun 2013",
		"Runtime": "104 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Dan Scanlon",
		"Writer": "Dan Scanlon, Daniel Gerson, Robert L. Baird",
		"Actors": "Billy Crystal, John Goodman, Steve Buscemi",
		"Plot": "Mike Wazowski (Billy Crystal) and James P. \"Sully\" Sullivan (John Goodman) are an inseparable pair, but that wasn't always the case. From the moment these two mismatched monsters met, they couldn't stand each other. This movie unlocks the door to how Mike and Sully overcame their differences and became the best of friends.",
		"Language": "English",
		"Country": "United States, Japan",
		"Awards": "Nominated for 2 BAFTA 9 wins & 58 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.2",
		"imdbVotes": "387,942",
		"imdbID": "tt1453405",
		"Type": "movie",
		"DVD": "13 May 2015",
		"BoxOffice": "$268,492,764",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Miss Congeniality",
		"Year": "2000",
		"Rated": "PG-13",
		"Released": "22 Dec 2000",
		"Runtime": "109 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Donald Petrie",
		"Writer": "Marc Lawrence, Katie Ford, Caryn Lucas",
		"Actors": "Sandra Bullock, Michael Caine, Benjamin Bratt",
		"Plot": "Undercover F.B.I. Agent Gracie Hart shows no signs of having any femininity in her demeanor or appearance. Generally a bright and capable Agent, she is in trouble at work when she makes an error in judgment in a case which results in a near disaster. As such, one of her by-the-books colleagues, Eric Matthews, who has never shown any inclination of thinking outside the box, is assigned to lead the high profile case of a terrorist coined The Citizen instead of her, while she is facing possible disciplinary action. Gracie pieces together the evidence to determine that The Citizen's next target will be the Miss United States beauty pageant. The pageant represents everything that Gracie abhors. Despite Gracie's mannish demeanor, Eric, with no other undercover female Agent remotely fitting the demographic, assigns her to go undercover as a pageant contestant to see if she can flush out The Citizen, who is perhaps one of the other contestants. Although the pageant administration, led by former winner Cathy Morningside and long time host Stan Fields, provide the F.B.I. with access to the pageant, Cathy in particular is less than thrilled to have a non-credible Gracie posing as a contestant, which she feels will ruin the pageant. The F.B.I. enlist the assistance of former pageant contestant coach Victor Melling, who is facing his own disgrace associated with the pageant, to do the nearly impossible task of transforming Gracie, not only into a woman, but a credible beauty pageant contestant. As Gracie proceeds in the transformation, she gets to know the other contestants, not only as potential criminals, but also as real people. She also discovers that another sinister element is present at the pageant. She will do whatever it takes to quash that element and protect her new friends, namely the other innocent contestants. But now displaying some femininity, Gracie begins to have more womanly feelings, and in turn, attracts the attention of men, one in particular about whom she is happy.",
		"Language": "English, Russian, Hawaiian",
		"Country": "United States",
		"Awards": "7 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTNkZjU0YzgtODhlNC00YmMxLWI5NTktODQ2ZjJlYWQ0YTZmXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "41%"
			},
			{
				"Source": "Metacritic",
				"Value": "43/100"
			}
		],
		"Metascore": "43",
		"imdbRating": "6.3",
		"imdbVotes": "227,708",
		"imdbID": "tt0212346",
		"Type": "movie",
		"DVD": "01 May 2011",
		"BoxOffice": "$106,807,667",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Meet Joe Black",
		"Year": "1998",
		"Rated": "PG-13",
		"Released": "13 Nov 1998",
		"Runtime": "178 min",
		"Genre": "Drama, Fantasy, Romance",
		"Director": "Martin Brest",
		"Writer": "Ron Osborn, Jeff Reno, Kevin Wade",
		"Actors": "Brad Pitt, Anthony Hopkins, Claire Forlani",
		"Plot": "William Parrish (Sir Anthony Hopkins), media tycoon, loving father, and still a human being, is about to celebrate his 65th birthday. One morning, he is contacted by the inevitable, by hallucination, as he thinks. Later, Death enters his home and his life, personified in a man's body: Joe Black (Brad Pitt) has arrived. His intention was to take William with him, but accidentally, Joe's former host and William's beautiful daughter Susan (Claire Forlani) have already met. Joe begins to develop certain interest in life on Earth, as well as in Susan, who has no clue with whom she's flirting.",
		"Language": "English, Dutch",
		"Country": "United States",
		"Awards": "3 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmVlN2NiZWItY2JlMy00NzRmLTg0Y2ItZmM0ZjVjZjMyM2Q4XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			},
			{
				"Source": "Metacritic",
				"Value": "43/100"
			}
		],
		"Metascore": "43",
		"imdbRating": "7.2",
		"imdbVotes": "261,897",
		"imdbID": "tt0119643",
		"Type": "movie",
		"DVD": "18 Mar 2014",
		"BoxOffice": "$44,619,100",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Nope",
		"Year": "2022",
		"Rated": "R",
		"Released": "22 Jul 2022",
		"Runtime": "130 min",
		"Genre": "Horror, Mystery, Sci-Fi",
		"Director": "Jordan Peele",
		"Writer": "Jordan Peele",
		"Actors": "Daniel Kaluuya, Keke Palmer, Brandon Perea",
		"Plot": "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
		"Language": "English, Spanish",
		"Country": "Canada, Japan, United States",
		"Awards": "43 wins & 172 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "77/100"
			}
		],
		"Metascore": "77",
		"imdbRating": "6.8",
		"imdbVotes": "260,274",
		"imdbID": "tt10954984",
		"Type": "movie",
		"DVD": "18 Nov 2022",
		"BoxOffice": "$123,277,080",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mortdecai",
		"Year": "2015",
		"Rated": "R",
		"Released": "23 Jan 2015",
		"Runtime": "107 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "David Koepp",
		"Writer": "Eric Aronson, Kyril Bonfiglioli",
		"Actors": "Johnny Depp, Gwyneth Paltrow, Ewan McGregor",
		"Plot": "Juggling some angry Russians, the British Mi5, his impossibly leggy wife and an international terrorist, debonair art dealer and part-time rogue Charlie Mortdecai must traverse the globe armed only with his good looks and special charm in a race to recover a stolen painting rumored to contain the code to a lost bank account filled with Nazi gold.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "1 win & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjM3NDcxOTM5Ml5BMl5BanBnXkFtZTgwNTEwNzE0MzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "12%"
			},
			{
				"Source": "Metacritic",
				"Value": "27/100"
			}
		],
		"Metascore": "27",
		"imdbRating": "5.5",
		"imdbVotes": "76,359",
		"imdbID": "tt3045616",
		"Type": "movie",
		"DVD": "28 Jun 2016",
		"BoxOffice": "$7,696,134",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "National Treasure",
		"Year": "2004",
		"Rated": "PG",
		"Released": "19 Nov 2004",
		"Runtime": "131 min",
		"Genre": "Action, Adventure, Mystery",
		"Director": "Jon Turteltaub",
		"Writer": "Jim Kouf, Cormac Wibberley, Marianne Wibberley",
		"Actors": "Nicolas Cage, Diane Kruger, Justin Bartha",
		"Plot": "Benjamin Franklin Gates, a pedigree of the treasure hunter family who learns about a national treasure from his grandfather. The treasure is stashed somewhere in the country and the clue leading to the treasure chest is cyphered and scattered all over the country. Benjamin's father abhors treasure hunting, as he himself lost 20 years in chasing the treasure without success. Plot takes a twist when Ben's accomplice Ian decides to steal 'Declaration of Independence' for the next clue. Ben refuses to Ian's plan and they become hostile. When Ben tips FBI about the possible theft, they refused to believe him. Ben determines to steal the 'Declaration of Independence' in order to protect it from Ian. Ben meets 'Abigail Chase' the curator of the archives when he steals the document. Rest of the story is about how Ben, his partner Riley and Abigail decrypts the clues and rescues the national treasure without getting to the hands of Ian.",
		"Language": "English, Spanish, German",
		"Country": "United States",
		"Awards": "1 win & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "6.9",
		"imdbVotes": "353,078",
		"imdbID": "tt0368891",
		"Type": "movie",
		"DVD": "30 Nov 2016",
		"BoxOffice": "$173,008,894",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Minority Report",
		"Year": "2002",
		"Rated": "PG-13",
		"Released": "21 Jun 2002",
		"Runtime": "145 min",
		"Genre": "Action, Crime, Mystery",
		"Director": "Steven Spielberg",
		"Writer": "Scott Frank, Jon Cohen, Philip K. Dick",
		"Actors": "Tom Cruise, Colin Farrell, Samantha Morton",
		"Plot": "In the year 2054 A.D. crime is virtually eliminated from Washington D.C. thanks to an elite law enforcing squad \"Precrime\". They use three gifted humans (called \"Pre-Cogs\") with special powers to see into the future and predict crimes beforehand. John Anderton heads Precrime and believes the system's flawlessness steadfastly. However one day the Pre-Cogs predict that Anderton will commit a murder himself in the next 36 hours. Worse, Anderton doesn't even know the victim. He decides to get to the mystery's core by finding out the 'minority report' which means the prediction of the female Pre-Cog Agatha that \"might\" tell a different story and prove Anderton innocent.",
		"Language": "English, Swedish",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 20 wins & 91 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "7.6",
		"imdbVotes": "579,881",
		"imdbID": "tt0181689",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$132,072,926",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Land of the Lost",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "05 Jun 2009",
		"Runtime": "102 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Brad Silberling",
		"Writer": "Chris Henchy, Dennis McNicholas, Sid Krofft",
		"Actors": "Will Ferrell, Danny McBride, Anna Friel",
		"Plot": "Palaeontologist Rick Marshall takes Will and Holly into a new world of danger, dinosaurs, and big bug-eyed lizard people while trying to find their way back home, save the universe, and save his reputation by doing so. The dinosaur with brains, brawn, and personality, and the adventure of scientific advancement and exotic beasts in a faraway land, all add up to time-traveling fun and frolics.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTkzNDg2OTc1NF5BMl5BanBnXkFtZTcwNDcxODE2Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "26%"
			},
			{
				"Source": "Metacritic",
				"Value": "32/100"
			}
		],
		"Metascore": "32",
		"imdbRating": "5.3",
		"imdbVotes": "74,988",
		"imdbID": "tt0457400",
		"Type": "movie",
		"DVD": "10 Dec 2015",
		"BoxOffice": "$49,438,370",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Norbit",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "09 Feb 2007",
		"Runtime": "102 min",
		"Genre": "Comedy, Romance",
		"Director": "Brian Robbins",
		"Writer": "Eddie Murphy, Charlie Murphy, Jay Scherick",
		"Actors": "Eddie Murphy, Thandiwe Newton, Terry Crews",
		"Plot": "Norbit is a normal person, who after being adopted by Mr. Wong, ends up being married to the very large, Rasputia. Norbit's childhood love, Kate Thomas arrives back in town to buy the orphanage. Norbit sees this as his chance to get back together with Kate, until he discovers that she is in fact engaged to Deion Hughes. Norbit isn't going to lay this to rest, whilst he tries to survive life with Rasputia, and it looks like Deion also has something he would like to keep secret.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 8 wins & 9 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI4NDE4MjgyNV5BMl5BanBnXkFtZTcwMTQwODc0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "9%"
			},
			{
				"Source": "Metacritic",
				"Value": "27/100"
			}
		],
		"Metascore": "27",
		"imdbRating": "4.2",
		"imdbVotes": "79,258",
		"imdbID": "tt0477051",
		"Type": "movie",
		"DVD": "06 Jun 2014",
		"BoxOffice": "$95,673,607",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "No Country for Old Men",
		"Year": "2007",
		"Rated": "R",
		"Released": "21 Nov 2007",
		"Runtime": "122 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "Ethan Coen, Joel Coen",
		"Writer": "Joel Coen, Ethan Coen, Cormac McCarthy",
		"Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin",
		"Plot": "In rural Texas, welder and hunter Llewelyn Moss (Josh Brolin) discovers the remains of several drug runners who have all killed each other in an exchange gone violently wrong. Rather than report the discovery to the police, Moss decides to simply take the two million dollars present for himself. This puts the psychopathic killer, Anton Chigurh (Javier Bardem), on his trail as he dispassionately murders nearly every rival, bystander and even employer in his pursuit of his quarry and the money. As Moss desperately attempts to keep one step ahead, the blood from this hunt begins to flow behind him with relentlessly growing intensity as Chigurh closes in. Meanwhile, the laconic Sheriff Ed Tom Bell (Tommy Lee Jones) blithely oversees the investigation even as he struggles to face the sheer enormity of the crimes he is attempting to thwart.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Won 4 Oscars. 164 wins & 139 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "92/100"
			}
		],
		"Metascore": "92",
		"imdbRating": "8.2",
		"imdbVotes": "1,051,288",
		"imdbID": "tt0477348",
		"Type": "movie",
		"DVD": "21 Apr 2016",
		"BoxOffice": "$74,283,625",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Metal Lords",
		"Year": "2022",
		"Rated": "R",
		"Released": "08 Apr 2022",
		"Runtime": "97 min",
		"Genre": "Comedy, Music",
		"Director": "Peter Sollett",
		"Writer": "D.B. Weiss",
		"Actors": "Jaeden Martell, Adrian Greensmith, Isis Hainsworth",
		"Plot": "Two kids want to start a heavy metal band in a high school where exactly two kids care about heavy metal. They try to find a bass player, and fail but they do find a girl who is very good at cello. If the three of them can't settle their differences and work together, they're never going to win the Battle of the Bands.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjJjMzI1ZDctMDhmMy00Nzk2LTg5ZjgtNGIyN2QyNDQwMDU5XkEyXkFqcGdeQXVyMTMyNzMxNTcw._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "63%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "6.7",
		"imdbVotes": "32,498",
		"imdbID": "tt12141112",
		"Type": "movie",
		"DVD": "08 Apr 2022",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mulan",
		"Year": "1998",
		"Rated": "G",
		"Released": "19 Jun 1998",
		"Runtime": "87 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Tony Bancroft, Barry Cook",
		"Writer": "Robert D. San Souci, Rita Hsiao, Chris Sanders",
		"Actors": "Ming-Na Wen, Eddie Murphy, BD Wong",
		"Plot": "This retelling of the old Chinese folktale is about the story of a young Chinese maiden who learns that her weakened and lame father is to be called up into the army in order to fight the invading Huns. Knowing that he would never survive the rigours of war in his state, she decides to disguise herself and join in his place. Unknown to her, her ancestors are aware of this and to prevent it, they order a tiny disgraced dragon, Mushu to join her in order to force her to abandon her plan. He agrees, but when he meets Mulan, he learns that she cannot be dissuaded and so decides to help her in the perilous times ahead.",
		"Language": "English, Russian, Mandarin",
		"Country": "United States, Japan",
		"Awards": "Nominated for 1 Oscar. 17 wins & 21 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODkxNGQ1NWYtNzg0Ny00Yjg3LThmZTItMjE2YjhmZTQ0ODY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.7",
		"imdbVotes": "314,501",
		"imdbID": "tt0120762",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$120,620,254",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Non-Stop",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "28 Feb 2014",
		"Runtime": "106 min",
		"Genre": "Action, Mystery, Thriller",
		"Director": "Jaume Collet-Serra",
		"Writer": "John W. Richardson, Christopher Roach, Ryan Engle",
		"Actors": "Liam Neeson, Julianne Moore, Scoot McNairy",
		"Plot": "Bill Marks, a former cop dealing with his daughter's death by drinking, is now a federal air marshal. While on a flight from New York to London, Marks gets a text telling him that unless 150 million dollars is transferred to an offshore account, someone will die every 20 minutes. Can he find the terrorist in time and save everyone?",
		"Language": "English, German",
		"Country": "United Kingdom, France, United States, Canada",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTI3NzcxMjkzMl5BMl5BanBnXkFtZTgwMDY0NTQ0MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "62%"
			},
			{
				"Source": "Metacritic",
				"Value": "56/100"
			}
		],
		"Metascore": "56",
		"imdbRating": "6.9",
		"imdbVotes": "276,046",
		"imdbID": "tt2024469",
		"Type": "movie",
		"DVD": "27 May 2014",
		"BoxOffice": "$92,168,600",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mission: Impossible - Dead Reckoning Part One",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "12 Jul 2023",
		"Runtime": "163 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Christopher McQuarrie",
		"Writer": "Bruce Geller, Christopher McQuarrie, Erik Jendresen",
		"Actors": "Tom Cruise, Hayley Atwell, Ving Rhames",
		"Plot": "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
		"Language": "English, French, Italian, Russian",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 11 wins & 59 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "96%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "7.7",
		"imdbVotes": "233,540",
		"imdbID": "tt9603212",
		"Type": "movie",
		"DVD": "10 Oct 2023",
		"BoxOffice": "$172,135,383",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Lara Croft: Tomb Raider",
		"Year": "2001",
		"Rated": "PG-13",
		"Released": "15 Jun 2001",
		"Runtime": "100 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Simon West",
		"Writer": "Sara B. Cooper, Mike Werb, Michael Colleary",
		"Actors": "Angelina Jolie, Jon Voight, Iain Glen",
		"Plot": "The orphaned heiress and intrepid archaeologist, Lara Croft, embarks on a dangerous quest to retrieve the two halves of an ancient artefact which controls time before it falls into the wrong hands. As an extremely rare planetary alignment is about to occur for the first time in 5,000 years, the fearless tomb raider will have to team up with rival adventurers and sworn enemies to collect the pieces, while time is running out. But, in the end, who can harness the archaic talisman's unlimited power?",
		"Language": "English, Central Khmer, Russian, Italian",
		"Country": "United States, United Kingdom, Japan, Germany",
		"Awards": "4 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzMzODVjMWUtYmIxZS00NDlkLTlmNTktNjI5NTdhZjUzYzY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "20%"
			},
			{
				"Source": "Metacritic",
				"Value": "33/100"
			}
		],
		"Metascore": "33",
		"imdbRating": "5.8",
		"imdbVotes": "218,372",
		"imdbID": "tt0146316",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$131,168,070",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Oppenheimer",
		"Year": "2023",
		"Rated": "R",
		"Released": "21 Jul 2023",
		"Runtime": "180 min",
		"Genre": "Biography, Drama, History",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
		"Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
		"Plot": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
		"Language": "English, German, Italian",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 13 Oscars. 326 wins & 362 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "88/100"
			}
		],
		"Metascore": "88",
		"imdbRating": "8.4",
		"imdbVotes": "665,737",
		"imdbID": "tt15398776",
		"Type": "movie",
		"DVD": "21 Nov 2023",
		"BoxOffice": "$329,153,395",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Operation Fortune: Ruse de Guerre",
		"Year": "2023",
		"Rated": "R",
		"Released": "03 Mar 2023",
		"Runtime": "114 min",
		"Genre": "Action, Comedy, Thriller",
		"Director": "Guy Ritchie",
		"Writer": "Guy Ritchie, Ivan Atkinson, Marn Davies",
		"Actors": "Jason Statham, Aubrey Plaza, Cary Elwes",
		"Plot": "An agent is recruited by a global intelligence alliance to track down and stop the sale of a deadly weapons technology that threatens to disrupt the world order.",
		"Language": "English, Turkish, Russian, Spanish, Japanese",
		"Country": "United Kingdom, United States, China, Indonesia, Turkey",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjcxOTJhZTEtMWFiYi00NTkwLTlkMzktZDQwMGQ0ZjM3YWU2XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "51%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.3",
		"imdbVotes": "82,527",
		"imdbID": "tt7985704",
		"Type": "movie",
		"DVD": "21 Mar 2023",
		"BoxOffice": "$6,496,125",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Inglourious Basterds",
		"Year": "2009",
		"Rated": "R",
		"Released": "21 Aug 2009",
		"Runtime": "153 min",
		"Genre": "Adventure, Drama, War",
		"Director": "Quentin Tarantino",
		"Writer": "Quentin Tarantino",
		"Actors": "Brad Pitt, Diane Kruger, Eli Roth",
		"Plot": "In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the \"Basterds\", a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl's plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history.",
		"Language": "English, German, French, Italian",
		"Country": "Germany, United States",
		"Awards": "Won 1 Oscar. 134 wins & 172 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "8.4",
		"imdbVotes": "1,573,429",
		"imdbID": "tt0361748",
		"Type": "movie",
		"DVD": "10 Dec 2015",
		"BoxOffice": "$120,540,719",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pain Hustlers",
		"Year": "2023",
		"Rated": "R",
		"Released": "27 Oct 2023",
		"Runtime": "123 min",
		"Genre": "Crime, Drama",
		"Director": "David Yates",
		"Writer": "Wells Tower, Evan Hughes",
		"Actors": "Emily Blunt, Chris Evans, Catherine O'Hara",
		"Plot": "Liza dreams of a better life for herself and her daughter. Hired to work for a bankrupt pharmaceutical company, Liza skyrockets with sales and into the high life, putting her in the middle of a federal criminal conspiracy.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWMxYjNhZmEtNDBjZi00ZjFmLWJlZDMtYTVlYjljMmNkZWFhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "23%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.5",
		"imdbVotes": "40,641",
		"imdbID": "tt15257160",
		"Type": "movie",
		"DVD": "27 Oct 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "In the Valley of Elah",
		"Year": "2007",
		"Rated": "R",
		"Released": "28 Sep 2007",
		"Runtime": "121 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Paul Haggis",
		"Writer": "Paul Haggis, Mark Boal",
		"Actors": "Tommy Lee Jones, Charlize Theron, Jonathan Tucker",
		"Plot": "A retired military investigator works with a police detective to uncover the truth behind his son's disappearance following his return from a tour of duty in Iraq.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 3 wins & 21 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2QzODMwOGQtMjZiNS00YjYwLTlhZDUtYWU1OGI0ZTk3ZjUxXkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.2",
		"imdbVotes": "74,820",
		"imdbID": "tt0478134",
		"Type": "movie",
		"DVD": "18 Mar 2013",
		"BoxOffice": "$6,777,741",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Men in Black",
		"Year": "1997",
		"Rated": "PG-13",
		"Released": "02 Jul 1997",
		"Runtime": "98 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Barry Sonnenfeld",
		"Writer": "Lowell Cunningham, Ed Solomon",
		"Actors": "Tommy Lee Jones, Will Smith, Linda Fiorentino",
		"Plot": "Based off of the comic book. Unbeknownst to other people, there is a private agency code named MiB. This agency is some kind of extra terrestrial surveillance corporation. Then, one of the agency's finest men only going by the name \"K\" (Tommy Lee Jones) , is recruiting for a new addition to the agency. He has chosen James Edwards (Will Smith) of the N.Y.P.D. Then, one day, a flying saucer crashes into Earth. This was an alien a part of the \"Bug\" race. He takes the body of a farmer (Vincent D'Onofrio) and heads to New York. He is searching for a super energy source called \"The Galaxy\". Now, Agents J and K must stop the bug before it can escape with the galaxy.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 22 wins & 39 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.3",
		"imdbVotes": "606,695",
		"imdbID": "tt0119654",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$250,690,539",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "I Got the Hook Up",
		"Year": "1998",
		"Rated": "R",
		"Released": "27 May 1998",
		"Runtime": "93 min",
		"Genre": "Comedy, Crime",
		"Director": "Michael Martin",
		"Writer": "Master P, Leroy Douglas, Carrie Mungo",
		"Actors": "Master P, Anthony Johnson, Gretchen Palmer",
		"Plot": "Two broke buddies feel lucky when they come upon a truckload of cellular phones and begin selling them from the back of their van. Trouble arises when the phones develop faults. The two friends must not only deal with unsatisfied customers but also gangsters and the FBI.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGEyZTdjZGYtZWQxZC00NDlhLWFmZTItYWY3NDI1M2JkYTUwXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "17%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "4.1",
		"imdbVotes": "2,400",
		"imdbID": "tt0131436",
		"Type": "movie",
		"DVD": "14 Feb 2016",
		"BoxOffice": "$10,317,779",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Oblivion",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "19 Apr 2013",
		"Runtime": "124 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Joseph Kosinski",
		"Writer": "Karl Gajdusek, Michael Arndt, Joseph Kosinski",
		"Actors": "Tom Cruise, Morgan Freeman, Andrea Riseborough",
		"Plot": "One of the few remaining drone repairmen assigned to Earth, its surface devastated after decades of war with the alien Scavs, discovers a crashed spacecraft with contents that bring into question everything he believed about the war, and may even put the fate of mankind in his hands.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "7.0",
		"imdbVotes": "549,656",
		"imdbID": "tt1483013",
		"Type": "movie",
		"DVD": "01 Jan 2015",
		"BoxOffice": "$89,107,235",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Just Like Heaven",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "16 Sep 2005",
		"Runtime": "95 min",
		"Genre": "Comedy, Drama, Fantasy",
		"Director": "Mark Waters",
		"Writer": "Peter Tolan, Leslie Dixon, Marc Lévy",
		"Actors": "Reese Witherspoon, Mark Ruffalo, Donal Logue",
		"Plot": "Elizabeth Masterson, a dedicated doctor in San Francisco, had almost no time for anything. When she gets into a tragic car crash and goes into a coma, a landscape architect moves into Elizabeth's apartment for rent - where he meets her amnesiac ethereal form.",
		"Language": "English, Spanish, Mandarin",
		"Country": "United States",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODAzYmYxYzgtMDk5Ny00OGFkLTgxMzAtYzIyNjVhNjA2MWUzXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.7",
		"imdbVotes": "117,052",
		"imdbID": "tt0425123",
		"Type": "movie",
		"DVD": "01 Jul 2014",
		"BoxOffice": "$48,318,130",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Lockout",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "13 Apr 2012",
		"Runtime": "95 min",
		"Genre": "Action, Sci-Fi, Thriller",
		"Director": "James Mather, Steve Saint Leger",
		"Writer": "James Mather, Steve Saint Leger, Luc Besson",
		"Actors": "Guy Pearce, Maggie Grace, Peter Stormare",
		"Plot": "In 2079, in Washington, the ex-CIA Operative Snow is brutally interrogated, accused of treason against the United States. The chief of the secret service Scott Langral believes that he shot the agent Frank in a hotel room. Meanwhile, the idealistic daughter of the president of the USA, Emilie Warnock, is visiting MS One, a maximum security prison in outer space expecting to find evidence that the prisoners are actually guinea pigs of a huge corporation. When one of her bodyguards loses a hidden pistol to the dangerous prisoner Hydell, he subdues the staff in the central control room and releases the prisoners, including his brother Alex who becomes the leader of the riot. Now the veteran agent Harry Shaw offers freedom to Snow if he succeeds in rescuing the president's daughter. But the idealistic Emilie does not want to leave MS-One without the hostages.",
		"Language": "English",
		"Country": "France, United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTg1OTQ3MzM0NV5BMl5BanBnXkFtZTcwNDU1MDI0Nw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "38%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.0",
		"imdbVotes": "100,679",
		"imdbID": "tt1592525",
		"Type": "movie",
		"DVD": "17 Jul 2012",
		"BoxOffice": "$14,326,864",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Indiana Jones and the Dial of Destiny",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "30 Jun 2023",
		"Runtime": "154 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "James Mangold",
		"Writer": "Jez Butterworth, John-Henry Butterworth, David Koepp",
		"Actors": "Harrison Ford, Phoebe Waller-Bridge, Antonio Banderas",
		"Plot": "The plot is unknown at this time.",
		"Language": "English, German, Greek, Ancient (to 1453), Spanish, Italian",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 6 wins & 31 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2M0ZGEwMGQtNzMxOC00OTU2LWExZmUtMTA5N2RhMDZlY2JiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.6",
		"imdbVotes": "191,045",
		"imdbID": "tt1462764",
		"Type": "movie",
		"DVD": "29 Aug 2023",
		"BoxOffice": "$174,480,468",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Past Lives",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "23 Jun 2023",
		"Runtime": "105 min",
		"Genre": "Drama, Romance",
		"Director": "Celine Song",
		"Writer": "Celine Song",
		"Actors": "Greta Lee, Teo Yoo, John Magaro",
		"Plot": "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
		"Language": "Korean, English, Mandarin, French",
		"Country": "United States, South Korea",
		"Awards": "Nominated for 2 Oscars. 77 wins & 219 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "94/100"
			}
		],
		"Metascore": "94",
		"imdbRating": "7.9",
		"imdbVotes": "98,216",
		"imdbID": "tt13238346",
		"Type": "movie",
		"DVD": "22 Aug 2023",
		"BoxOffice": "$11,331,983",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Killers of the Flower Moon",
		"Year": "2023",
		"Rated": "R",
		"Released": "20 Oct 2023",
		"Runtime": "206 min",
		"Genre": "Crime, Drama, History",
		"Director": "Martin Scorsese",
		"Writer": "Eric Roth, Martin Scorsese, David Grann",
		"Actors": "Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
		"Plot": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
		"Language": "English, Osage, Latin, French",
		"Country": "United States",
		"Awards": "Nominated for 10 Oscars. 115 wins & 397 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTdiOTg2YmQtZTdjNi00NGJjLWI2ZTQtYWNkNDUwMDEzOTQxXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "89/100"
			}
		],
		"Metascore": "89",
		"imdbRating": "7.7",
		"imdbVotes": "216,844",
		"imdbID": "tt5537002",
		"Type": "movie",
		"DVD": "05 Dec 2023",
		"BoxOffice": "$67,955,813",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Jack the Giant Slayer",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "01 Mar 2013",
		"Runtime": "114 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Bryan Singer",
		"Writer": "Darren Lemke, Christopher McQuarrie, Dan Studney",
		"Actors": "Nicholas Hoult, Stanley Tucci, Ewan McGregor",
		"Plot": "Sent to the market by his uncle to sell their horse and buy thatch for their roof, Jack meets the beautiful Princess Isabelle, whom he rescues from ruffians. He returns home with only a handful of beans given to him by a monk who claimed they were sacred, but that does little to impress his uncle, who tosses them away. In the night, the Princess arrives, having run off to keep herself from marrying Roderick, who is clearly only interested in becoming king. Soon, the beans take root with a giant stalk carrying away the princess and Jack's house. He soon sets off on an adventure with the king's guards to rescue the princess, only to find that a mythical land filled with giants really exists.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.3",
		"imdbVotes": "146,118",
		"imdbID": "tt1351685",
		"Type": "movie",
		"DVD": "12 Sep 2013",
		"BoxOffice": "$65,187,603",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kick-Ass 2",
		"Year": "2013",
		"Rated": "R",
		"Released": "16 Aug 2013",
		"Runtime": "103 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Jeff Wadlow",
		"Writer": "Jeff Wadlow, Mark Millar, John Romita Jr.",
		"Actors": "Aaron Taylor-Johnson, Chloë Grace Moretz, Christopher Mintz-Plasse",
		"Plot": "After Kick-Ass' insane bravery inspires a new wave of self-made masked crusaders, led by the badass Colonel Stars and Stripes, our hero joins them on patrol. When these amateur superheroes are hunted down by Red Mist -- reborn as The Mother F%&amp;*^r -- only the blade-wielding Hit Girl can prevent their annihilation. When we last saw junior assassin Hit Girl and young vigilante Kick-Ass, they were trying to live as normal teenagers Mindy and Dave. With graduation looming and uncertain what to do, Dave decides to start the world's first superhero team with Mindy. Unfortunately, when Mindy is busted for sneaking out as Hit Girl, she's forced to retire-leaving her to navigate the terrifying world of high-school mean girls on her own. With no one left to turn to, Dave joins forces with Justice Forever, run by a born-again ex-mobster named Colonel Stars and Stripes. Just as they start to make a real difference on the streets, the world's first super villain, The Mother F%&amp;*^r, assembles his own evil league and puts a plan in motion to make Kick-Ass and Hit Girl pay for what they did to his dad. But there's only one problem with his scheme: If you mess with one member of Justice Forever, you mess with them all.",
		"Language": "English",
		"Country": "United Kingdom, United States, Japan",
		"Awards": "1 win & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4OTQxNzc0N15BMl5BanBnXkFtZTcwOTQxOTU5OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "32%"
			},
			{
				"Source": "Metacritic",
				"Value": "41/100"
			}
		],
		"Metascore": "41",
		"imdbRating": "6.5",
		"imdbVotes": "287,285",
		"imdbID": "tt1650554",
		"Type": "movie",
		"DVD": "03 Dec 2013",
		"BoxOffice": "$28,795,985",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "I, Robot",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "16 Jul 2004",
		"Runtime": "115 min",
		"Genre": "Action, Mystery, Sci-Fi",
		"Director": "Alex Proyas",
		"Writer": "Jeff Vintar, Akiva Goldsman, Isaac Asimov",
		"Actors": "Will Smith, Bridget Moynahan, Bruce Greenwood",
		"Plot": "In 2035, techno-phobic homicide detective Del Spooner of the Chicago PD heads the investigation of the apparent suicide of leading robotics scientist, Dr. Alfred Lanning. Unconvinced of the motive, Spooner's investigation into Lanning's death reveals a trail of secrets and agendas within the USR (United States Robotics) corporation and suspicions of murder. Little does he know that his investigation would lead to uncovering a larger threat to humanity.",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "Nominated for 1 Oscar. 1 win & 15 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.1",
		"imdbVotes": "571,077",
		"imdbID": "tt0343818",
		"Type": "movie",
		"DVD": "08 Jun 2004",
		"BoxOffice": "$144,801,023",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "I Love You, Man",
		"Year": "2009",
		"Rated": "R",
		"Released": "20 Mar 2009",
		"Runtime": "105 min",
		"Genre": "Comedy, Romance",
		"Director": "John Hamburg",
		"Writer": "John Hamburg, Larry Levin",
		"Actors": "Paul Rudd, Jason Segel, Rashida Jones",
		"Plot": "Peter Klaven's world revolves around his real estate work and Zooey, his soon-to-be fiancée. After he pops the question, she calls her best friends and they go into wedding planning mode. Peter has no male friends and that poses problems: will he turn out to be a clingy guy, and who will be his best man? Zooey, her friends, and Peter's brother Robbie offer help that results in awkward moments. Then, at an open house Peter's hosting, he meets Sydney, an amiable, low-key guy. They trade business cards, and Peter calls him to meet for drinks. A friendship develops that's great at first but then threatens Peter's engagement and career. Can guys be friends and couples be in love?",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "7.0",
		"imdbVotes": "215,945",
		"imdbID": "tt1155056",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$71,440,011",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "In the Electric Mist",
		"Year": "2009",
		"Rated": "R",
		"Released": "15 Apr 2009",
		"Runtime": "117 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Bertrand Tavernier",
		"Writer": "Jerzy Kromolowski, Mary Olson-Kromolowski, James Lee Burke",
		"Actors": "Tommy Lee Jones, John Goodman, Peter Sarsgaard",
		"Plot": "A detective in post-Katrina New Orleans has a series of surreal encounters with a troop of ghostly Confederate soldiers while investigating serial killings of local prostitutes, a 1965 lynching, and corrupt local businessmen.",
		"Language": "English",
		"Country": "France, United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MTEwMTI4MV5BMl5BanBnXkFtZTcwNDEyNzMzMg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.1",
		"imdbVotes": "19,798",
		"imdbID": "tt0910905",
		"Type": "movie",
		"DVD": "03 Mar 2009",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Maggie Moore(s)",
		"Year": "2023",
		"Rated": "R",
		"Released": "15 Jun 2023",
		"Runtime": "99 min",
		"Genre": "Comedy, Crime, Mystery",
		"Director": "John Slattery",
		"Writer": "Paul Bernbaum",
		"Actors": "Jon Hamm, Tina Fey, Micah Stock",
		"Plot": "Police Chief Sanders (Jon Hamm) investigates the bizarre murders of two women with the same name and unravels a web of small-town lies. He meets and quickly falls for Rita (Tina Fey), a nosy neighbor who is eager to help solve the...",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGNjY2Y0NTMtZWYwZS00YmU3LTgzNDgtMjBlMGZjZDExYTY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "51%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "6.2",
		"imdbVotes": "5,928",
		"imdbID": "tt14181816",
		"Type": "movie",
		"DVD": "16 Jun 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mad Max: Fury Road",
		"Year": "2015",
		"Rated": "R",
		"Released": "15 May 2015",
		"Runtime": "120 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "George Miller",
		"Writer": "George Miller, Brendan McCarthy, Nick Lathouris",
		"Actors": "Tom Hardy, Charlize Theron, Nicholas Hoult",
		"Plot": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
		"Language": "English, Russian",
		"Country": "Australia",
		"Awards": "Won 6 Oscars. 245 wins & 233 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "90/100"
			}
		],
		"Metascore": "90",
		"imdbRating": "8.1",
		"imdbVotes": "1,078,789",
		"imdbID": "tt1392190",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$154,280,290",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pathfinder",
		"Year": "2007",
		"Rated": "R",
		"Released": "13 Apr 2007",
		"Runtime": "99 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Marcus Nispel",
		"Writer": "Laeta Kalogridis, Nils Gaup",
		"Actors": "Karl Urban, Clancy Brown, Moon Bloodgood",
		"Plot": "A young Viking boy is left behind at a hostile tribe of American Indians, whom eventually accept him into the tribe and raise him. A personal war begins for the young Viking when the Vikings return 15 years later and initiate a barbaric attack on the tribe and the woman he loves.",
		"Language": "English, Icelandic",
		"Country": "United States, Canada",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MDY0NTA1OV5BMl5BanBnXkFtZTcwNjE0MDM0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "9%"
			},
			{
				"Source": "Metacritic",
				"Value": "29/100"
			}
		],
		"Metascore": "29",
		"imdbRating": "5.4",
		"imdbVotes": "46,172",
		"imdbID": "tt0446013",
		"Type": "movie",
		"DVD": "12 Dec 2015",
		"BoxOffice": "$10,232,081",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kung Fu Hustle",
		"Year": "2004",
		"Rated": "R",
		"Released": "22 Apr 2005",
		"Runtime": "99 min",
		"Genre": "Action, Comedy, Fantasy",
		"Director": "Stephen Chow",
		"Writer": "Stephen Chow, Kan-Cheung Tsang, Xin Huo",
		"Actors": "Stephen Chow, Wah Yuen, Qiu Yuen",
		"Plot": "Set in Canton, China in the 1940s, the story revolves in a town ruled by the Axe Gang, Sing who desperately wants to become a member. He stumbles into a slum ruled by eccentric landlords who turns out to be the greatest kung-fu masters in disguise. Sing's actions eventually cause the Axe Gang and the slumlords to engage in an explosive kung-fu battle. Only one side will win and only one hero will emerge as the greatest kung-fu master of all.",
		"Language": "Cantonese, Mandarin",
		"Country": "Hong Kong, China, United States",
		"Awards": "Nominated for 1 BAFTA Award25 wins & 47 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "78/100"
			}
		],
		"Metascore": "78",
		"imdbRating": "7.7",
		"imdbVotes": "150,146",
		"imdbID": "tt0373074",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$17,108,591",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Knowing",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "20 Mar 2009",
		"Runtime": "121 min",
		"Genre": "Action, Mystery, Sci-Fi",
		"Director": "Alex Proyas",
		"Writer": "Ryne Douglas Pearson, Juliet Snowden, Stiles White",
		"Actors": "Nicolas Cage, Chandler Canterbury, Rose Byrne",
		"Plot": "In the fall of 1959, for a time capsule, students draw pictures of life as they imagine it will be in 50 years. Lucinda, an odd child who hears voices, swiftly writes a long string of numbers. In 2009, the capsule is opened; student Caleb Koestler gets Lucinda's \"drawing\" and his father John, an astrophysicist and grieving widower, takes a look. He discovers dates of disasters over the past 50 years with the number who died. Three dates remain, all coming soon. He investigates, learns of Lucinda, and looks for her family. He fears for his son, who's started to hear voices and who is visited by a silent stranger who shows him a vision of fire and destruction. What's going on?",
		"Language": "English",
		"Country": "United States, United Kingdom, Australia",
		"Awards": "1 win & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTMyMjgyMDIyM15BMl5BanBnXkFtZTcwNjg3MjAyMg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "35%"
			},
			{
				"Source": "Metacritic",
				"Value": "41/100"
			}
		],
		"Metascore": "41",
		"imdbRating": "6.2",
		"imdbVotes": "245,940",
		"imdbID": "tt0448011",
		"Type": "movie",
		"DVD": "31 Aug 2016",
		"BoxOffice": "$79,957,634",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Megamind",
		"Year": "2010",
		"Rated": "PG",
		"Released": "05 Nov 2010",
		"Runtime": "95 min",
		"Genre": "Animation, Action, Comedy",
		"Director": "Tom McGrath",
		"Writer": "Alan Schoolcraft, Brent Simons",
		"Actors": "Will Ferrell, Jonah Hill, Brad Pitt",
		"Plot": "After super-villain Megamind (Ferrell) kills his good-guy nemesis, Metro Man (Pitt), he becomes bored since there is no one left to fight. He creates a new foe, Titan (Hill), who, instead of using his powers for good, sets out to destroy the world, positioning Megamind to save the day for the first time in his life.",
		"Language": "English",
		"Country": "United States, Australia",
		"Awards": "2 wins & 16 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "73%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.3",
		"imdbVotes": "291,430",
		"imdbID": "tt1001526",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$148,415,853",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pirates of the Caribbean: At World's End",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "25 May 2007",
		"Runtime": "169 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Gore Verbinski",
		"Writer": "Ted Elliott, Terry Rossio, Stuart Beattie",
		"Actors": "Johnny Depp, Orlando Bloom, Keira Knightley",
		"Plot": "After Elizabeth, Will, and Captain Barbossa rescue Captain Jack Sparrow from the land of the dead, they must face their foes, Davy Jones and Lord Cutler Beckett. Beckett, now with control of Jones' heart, forms a dark alliance with him in order to rule the seas and wipe out the last of the Pirates. Now, Jack, Barbossa, Will, Elizabeth, Tia Dalma, and crew must call the Pirate Lords from the four corners of the globe, including the infamous Sao Feng, to gathering. The Pirate Lords want to release the goddess Calypso, Davy Jones's damned lover, from the trap they sent her to out of fear, in which the Pirate Lords must combine the 9 pieces that bound her by ritual to undo it and release her in hopes that she will help them fight. With this, all pirates will stand together and will make their final stand for freedom against Beckett, Jones, Norrington, the Flying Dutchman, and the entire East India Trading Company.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 23 wins & 51 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "44%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "7.1",
		"imdbVotes": "688,803",
		"imdbID": "tt0449088",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$309,420,425",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Limitless",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "18 Mar 2011",
		"Runtime": "105 min",
		"Genre": "Sci-Fi, Thriller",
		"Director": "Neil Burger",
		"Writer": "Leslie Dixon, Alan Glynn",
		"Actors": "Bradley Cooper, Anna Friel, Abbie Cornish",
		"Plot": "An action-thriller about a writer who takes an experimental drug that allows him to use 100% of his mind. As one man evolves into the perfect version of himself, forces more corrupt than he can imagine mark him for assassination. Out-of-work writer Eddie Morra's (Cooper) rejection by girlfriend Lindy (Abbie Cornish) confirms his belief that he has zero future. That all vanishes the day an old friend introduces Eddie to NZT, a designer pharmaceutical that makes him laser-focused and more confident than any man alive. Now on an NZT-fueled odyssey, everything Eddie's read, heard or seen is instantly organized and available to him. As the former nobody rises to the top of the financial world, he draws the attention of business mogul Carl Van Loon (De Niro), who sees this enhanced version of Eddie as the tool to make billions, but brutal side effects jeopardize his meteoric ascent. With a dwindling stash and hit men who will eliminate him to get the NZT, Eddie must stay wired long enough to elude capture and fulfill his destiny. If he can't, he will become just another victim who thought he'd found invincibility in a bottle.",
		"Language": "English, Russian, Italian, Mandarin, French",
		"Country": "United States",
		"Awards": "2 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.4",
		"imdbVotes": "609,321",
		"imdbID": "tt1219289",
		"Type": "movie",
		"DVD": "18 Jul 2011",
		"BoxOffice": "$79,249,455",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "My Big Fat Greek Wedding",
		"Year": "2002",
		"Rated": "PG",
		"Released": "02 Aug 2002",
		"Runtime": "95 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Joel Zwick",
		"Writer": "Nia Vardalos",
		"Actors": "Nia Vardalos, John Corbett, Michael Constantine",
		"Plot": "Toula Portokalos is 30, Greek, and works in her family's restaurant, Dancing Zorba's, in Chicago. All her father Gus wants is for her to get married to a nice Greek boy. But Toula is looking for more in life. Her mother convinces Gus to let her take some computer classes at college (making him think it's his idea). With those classes under her belt, she then takes over her aunt's travel agency (again making her father think it's his idea). She meets Ian Miller, a high school English teacher, WASP, and dreamboat she had made a fool of herself over at the restaurant; they date secretly for a while before her family finds out. Her father is livid over her dating a non-Greek. He has to learn to accept Ian; Ian has to learn to accept Toula's huge family, and Toula has to learn to accept herself.",
		"Language": "English, Greek",
		"Country": "Canada, United States",
		"Awards": "Nominated for 1 Oscar. 20 wins & 29 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzcwOWU4NGEtYjUyMy00MDNlLThiN2MtYzFlMjk4Y2FhNjlmXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "62/100"
			}
		],
		"Metascore": "62",
		"imdbRating": "6.6",
		"imdbVotes": "143,598",
		"imdbID": "tt0259446",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$241,438,208",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kandahar",
		"Year": "2023",
		"Rated": "R",
		"Released": "26 May 2023",
		"Runtime": "119 min",
		"Genre": "Action, Thriller",
		"Director": "Ric Roman Waugh",
		"Writer": "Mitchell LaFortune",
		"Actors": "Tom Rhys Harries, Farhad Bagheri, Gerard Butler",
		"Plot": "A CIA operative and his translator flee from special forces in Afghanistan after exposing a covert mission.",
		"Language": "English, Persian, Arabic",
		"Country": "United States, Saudi Arabia",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjNiNDg2OWYtOGEzNy00M2E5LTgxZjItNzVmN2VmNTg3MzBhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "6.1",
		"imdbVotes": "32,330",
		"imdbID": "tt5761544",
		"Type": "movie",
		"DVD": "15 Aug 2023",
		"BoxOffice": "$4,813,132",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pineapple Express",
		"Year": "2008",
		"Rated": "R",
		"Released": "06 Aug 2008",
		"Runtime": "111 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "David Gordon Green",
		"Writer": "Seth Rogen, Evan Goldberg, Judd Apatow",
		"Actors": "Seth Rogen, James Franco, Gary Cole",
		"Plot": "Lazy court-process clerk and stoner Dale Denton has only one reason to visit his equally lazy dealer Saul Silver: to purchase weed, specifically, a rare new strain called Pineapple Express. But when Dale becomes the only witness to a murder by a crooked cop and the city's most dangerous drug lord, he panics and dumps his roach of Pineapple Express at the scene. Dale now has another reason to visit Saul: to find out if the weed is so rare that it can be traced back to him--and it is. As Dale and Saul run for their lives, they quickly discover that they're not suffering from weed-fueled paranoia: incredibly, the bad guys really are hot on their trail and trying to figure out the fastest way to kill them both. All aboard the Pineapple Express.",
		"Language": "English, Cantonese, Korean",
		"Country": "United States, Russia, North Korea",
		"Awards": "2 wins & 15 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "6.9",
		"imdbVotes": "356,267",
		"imdbID": "tt0910936",
		"Type": "movie",
		"DVD": "22 May 2017",
		"BoxOffice": "$87,341,380",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Larry Crowne",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "01 Jul 2011",
		"Runtime": "98 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Tom Hanks",
		"Writer": "Tom Hanks, Nia Vardalos",
		"Actors": "Tom Hanks, Julia Roberts, Sarah Mahoney",
		"Plot": "Until he was downsized, affable, amiable Larry Crowne (Hanks) was a superstar team leader at the big-box company where he's worked since his time in the Navy. Underwater on his mortgage and unclear on what to do with his suddenly free days, Larry heads to his local college to start over. There he becomes part of a colorful community of outcasts, also-rans and the overlooked all trying to find a better future for themselves...often moving around town in a herd of scooters. In his public-speaking class, Larry develops an unexpected crush on his teacher Mercedes Tainot (Roberts), who has lost as much passion for teaching as she has for her husband. The simple guy who has every reason to think his life has stalled will come to learn an unexpected lesson: when you think everything worth having has passed you by, you just might discover your reason to live.",
		"Language": "English, Spanish",
		"Country": "United States, France",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjQ4MzlmZDUtN2ViMi00ZTAwLWFkMmItNGRlZmM1NjQ1ZmJjXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			},
			{
				"Source": "Metacritic",
				"Value": "41/100"
			}
		],
		"Metascore": "41",
		"imdbRating": "6.1",
		"imdbVotes": "70,478",
		"imdbID": "tt1583420",
		"Type": "movie",
		"DVD": "12 Feb 2014",
		"BoxOffice": "$35,608,245",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "In the Land of Women",
		"Year": "2007",
		"Rated": "PG-13",
		"Released": "20 Apr 2007",
		"Runtime": "97 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Jonathan Kasdan",
		"Writer": "Jonathan Kasdan",
		"Actors": "Adam Brody, Kristen Stewart, Meg Ryan",
		"Plot": "L.A. soft-porn writer Carter Webb is frustrated enough, after his actress girlfriend dumps him, to need a serious break. He decides to spend it with his grandmother, who can't really take care of herself and her Detroit suburb house anyway. Helpful Carter soon overcomes mishaps to bond with the foxy neighbor across the street and her daughters. Helping them actually helps him regain perspective and self-confidence.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWI2ZmRlZTQtOTllMS00ZDc3LTllNTAtNWNiOTgyNTNmZjhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "44%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.4",
		"imdbVotes": "32,572",
		"imdbID": "tt0419843",
		"Type": "movie",
		"DVD": "01 Oct 2009",
		"BoxOffice": "$11,052,958",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Movie 43",
		"Year": "2013",
		"Rated": "R",
		"Released": "25 Jan 2013",
		"Runtime": "94 min",
		"Genre": "Comedy",
		"Director": "Elizabeth Banks, Steven Brill, Steve Carr",
		"Writer": "Rocky Russo, Jeremy Sosenko, Ricky Blitt",
		"Actors": "Emma Stone, Stephen Merchant, Richard Gere",
		"Plot": "Ineffectual, 'has-been' film-maker (Dennis Quaid) swindles his way into an interview with a film executive (Greg Kinnear) in order to pitch an outrageous and controversial comedy manuscript. After pitching the first of his thirteen offbeat fables, the dejected artist forces the rest of his disjointed allegory on the executive at gunpoint. He tells stories of a woman on a blind date with a man who has testicles growing from his neck, in another a smitten woman offers her neck to her boyfriend to 'poop' on -as a sign of commitment and love. In yet another two parents take home-schooling to a whole new level of indecency, striving to give their isolated teenage son all the 'regular' torment and humiliation of puberty by bullying, peer-pressuring and even seducing him themselves. An off-beat, elephant-in-the-room type film.",
		"Language": "English",
		"Country": "United States",
		"Awards": "4 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTg4NzQ3NDM1Nl5BMl5BanBnXkFtZTcwNjEzMjM3OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "4%"
			},
			{
				"Source": "Metacritic",
				"Value": "18/100"
			}
		],
		"Metascore": "18",
		"imdbRating": "4.3",
		"imdbVotes": "111,635",
		"imdbID": "tt1333125",
		"Type": "movie",
		"DVD": "14 May 2013",
		"BoxOffice": "$8,840,453",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Inception",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "16 Jul 2010",
		"Runtime": "148 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan",
		"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
		"Plot": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
		"Language": "English, Japanese, French",
		"Country": "United States, United Kingdom",
		"Awards": "Won 4 Oscars. 159 wins & 220 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "8.8",
		"imdbVotes": "2,530,924",
		"imdbID": "tt1375666",
		"Type": "movie",
		"DVD": "20 Jun 2013",
		"BoxOffice": "$292,587,330",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Moonrise Kingdom",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "29 Jun 2012",
		"Runtime": "94 min",
		"Genre": "Adventure, Comedy, Drama",
		"Director": "Wes Anderson",
		"Writer": "Wes Anderson, Roman Coppola",
		"Actors": "Jared Gilman, Kara Hayward, Bruce Willis",
		"Plot": "Set on an island off the coast of New England in the 1960s, as a young boy and girl fall in love they are moved to run away together. Various factions of the town mobilize to search for them and the town is turned upside down - which might not be such a bad thing.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 36 wins & 122 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTEwMTc3NDkzOTJeQTJeQWpwZ15BbWU3MDI4NTAwNzc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "93%"
			},
			{
				"Source": "Metacritic",
				"Value": "84/100"
			}
		],
		"Metascore": "84",
		"imdbRating": "7.8",
		"imdbVotes": "365,064",
		"imdbID": "tt1748122",
		"Type": "movie",
		"DVD": "10 Dec 2015",
		"BoxOffice": "$45,512,466",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Nine Months",
		"Year": "1995",
		"Rated": "PG-13",
		"Released": "12 Jul 1995",
		"Runtime": "103 min",
		"Genre": "Comedy, Romance",
		"Director": "Chris Columbus",
		"Writer": "Patrick Braoudé, Chris Columbus",
		"Actors": "Hugh Grant, Julianne Moore, Tom Arnold",
		"Plot": "Samuels life is perfect. That is, until he finds out his girlfriend is pregnant. Now he must face the issues that come with being an expecting father, in a most entertaining way.",
		"Language": "English, Russian",
		"Country": "United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2U3YTQzYWYtZTBlYi00ZmJjLTkzMjAtOTljYmE5MThhNzk5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "27%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "5.5",
		"imdbVotes": "38,393",
		"imdbID": "tt0113986",
		"Type": "movie",
		"DVD": "06 Jan 2017",
		"BoxOffice": "$69,684,532",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Measuring the World",
		"Year": "2012",
		"Rated": "N/A",
		"Released": "25 Oct 2012",
		"Runtime": "119 min",
		"Genre": "Biography, Drama, History",
		"Director": "Detlev Buck",
		"Writer": "Daniel Kehlmann, Detlev Buck, Daniel Nocke",
		"Actors": "Albrecht Schuch, Baldanpurev Sambuu, Agi Ariunsaichan Dawaachu",
		"Plot": "\"Die Vermessung der Welt\" follows two brilliant and eccentric scientists, Alexander von Humboldt and Carl Friedrich Gauss, on their life paths in early-19th-century Germany.",
		"Language": "German",
		"Country": "Germany, Austria",
		"Awards": "3 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTkwOTI2NjYyM15BMl5BanBnXkFtZTgwNjYwNjAzMTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.7",
		"imdbVotes": "3,137",
		"imdbID": "tt1571401",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Prisoner's Daughter",
		"Year": "2022",
		"Rated": "R",
		"Released": "04 Jul 2023",
		"Runtime": "100 min",
		"Genre": "Drama",
		"Director": "Catherine Hardwicke",
		"Writer": "Mark Bacci",
		"Actors": "Sarah Anderson, Brian Cox, Steven Littles",
		"Plot": "A father fights for the love of his daughter and grandson, after serving twelve years in prison.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmIwNTYzN2UtZTQ5YS00NmM2LWE1ZDQtNmY3YzExM2U5MDE4XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "43%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.3",
		"imdbVotes": "2,078",
		"imdbID": "tt4671326",
		"Type": "movie",
		"DVD": "18 Jul 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Neighbors 2: Sorority Rising",
		"Year": "2016",
		"Rated": "R",
		"Released": "20 May 2016",
		"Runtime": "92 min",
		"Genre": "Comedy",
		"Director": "Nicholas Stoller",
		"Writer": "Andrew Jay Cohen, Brendan O'Brien, Nicholas Stoller",
		"Actors": "Seth Rogen, Rose Byrne, Zac Efron",
		"Plot": "Mac (Seth Rogen) and Kelly (Rose Byrne) are ready to make the final move into adulthood. But just as they thought they have reclaimed the neighborhood, they learn that their new neighbors are even more out of control than the last. To evict them, they will need help from their ex neighbor (Zac Efron).",
		"Language": "English",
		"Country": "United States, China",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "5.7",
		"imdbVotes": "129,701",
		"imdbID": "tt4438848",
		"Type": "movie",
		"DVD": "06 Sep 2016",
		"BoxOffice": "$55,455,765",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Napoleon",
		"Year": "2023",
		"Rated": "R",
		"Released": "22 Nov 2023",
		"Runtime": "158 min",
		"Genre": "Action, Adventure, Biography",
		"Director": "Ridley Scott",
		"Writer": "David Scarpa",
		"Actors": "Joaquin Phoenix, Vanessa Kirby, Tahar Rahim",
		"Plot": "An epic that details the chequered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
		"Language": "English, French, Russian, German, Italian",
		"Country": "United States, United Kingdom",
		"Awards": "Nominated for 3 Oscars. 4 wins & 38 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWIzNDAxMTktMDMzZS00ZjJmLTlhNjYtOGUxYmZlYzVmOGE4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.4",
		"imdbVotes": "127,028",
		"imdbID": "tt13287846",
		"Type": "movie",
		"DVD": "09 Jan 2024",
		"BoxOffice": "$61,524,375",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Kingdom of Heaven",
		"Year": "2005",
		"Rated": "R",
		"Released": "06 May 2005",
		"Runtime": "144 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Ridley Scott",
		"Writer": "William Monahan",
		"Actors": "Orlando Bloom, Eva Green, Liam Neeson",
		"Plot": "It is the time of the Crusades during the Middle Ages -- the world-shaping 200-year collision between Europe and the East. A blacksmith named Balian has lost his family and nearly his faith. The religious wars raging in the far-off Holy Land seem remote to him, yet he is pulled into that immense drama. Amid the pageantry and intrigues of medieval Jerusalem, he falls in love, grows into a leader, and ultimately uses all his courage and skill to defend the city against staggering odds. Destiny comes seeking Balian in the form of a great knight, Godfrey of Ibelin, a Crusader briefly home to France from fighting in the East. Revealing himself as Balian's father, Godfrey shows him the true meaning of knighthood and takes him on a journey across continents to the fabled Holy City. In Jerusalem at that moment--between the Second and Third Crusades--a fragile peace prevails, through the efforts of its enlightened Christian king, Baldwin IV, aided by his advisor Tiberias, and the military restraint of the legendary Muslim leader Saladin Ayubi. But Baldwin's days are numbered, and strains of fanaticism, greed, and jealousy among the Crusaders threaten to shatter the truce. King Baldwin's vision of peace--a kingdom of heaven--is shared by a handful of knights, including Godfrey of Ibelin, who swear to uphold it with their lives and honor. As Godfrey passes his sword to his son, he also passes on that sacred oath: to protect the helpless, safeguard the peace, and work toward harmony between religions and cultures, so that a kingdom of heaven can flourish on earth. Balian takes the sword and steps into history.",
		"Language": "English, Arabic, Latin, Italian, German",
		"Country": "United Kingdom, Germany, Spain, Morocco, United States, Italy, France",
		"Awards": "5 wins & 15 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI2ODhkMjMtYWU2Yy00MjI1LThlNDctZTJmNDE2MDE4ZDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "40%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.3",
		"imdbVotes": "310,795",
		"imdbID": "tt0320661",
		"Type": "movie",
		"DVD": "18 Sep 2012",
		"BoxOffice": "$47,398,413",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Red Lights",
		"Year": "2012",
		"Rated": "R",
		"Released": "02 Mar 2012",
		"Runtime": "114 min",
		"Genre": "Drama, Fantasy, Mystery",
		"Director": "Rodrigo Cortés",
		"Writer": "Rodrigo Cortés",
		"Actors": "Sigourney Weaver, Robert De Niro, Cillian Murphy",
		"Plot": "The skeptical psychologist Dr. Margaret Matheson and her assistant, physicist Tom Buckley, are specialists in disclosing fraudulent paranormal phenomena. When the famous psychic Simon Silver reappears to his public after many years of absence, Tom becomes singularly obsessed in determining whether Silver is a fraud or not.",
		"Language": "English",
		"Country": "Spain, Canada, United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQzMjYwNTc2M15BMl5BanBnXkFtZTcwMTY0Mjc4Nw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "31%"
			},
			{
				"Source": "Metacritic",
				"Value": "36/100"
			}
		],
		"Metascore": "36",
		"imdbRating": "6.2",
		"imdbVotes": "65,461",
		"imdbID": "tt1748179",
		"Type": "movie",
		"DVD": "22 May 2017",
		"BoxOffice": "$52,624",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Red State",
		"Year": "2011",
		"Rated": "R",
		"Released": "30 Sep 2011",
		"Runtime": "88 min",
		"Genre": "Action, Crime, Horror",
		"Director": "Kevin Smith",
		"Writer": "Kevin Smith",
		"Actors": "Michael Parks, Melissa Leo, John Goodman",
		"Plot": "The teenager Jarod invites his best friends Travis and Billy-Ray to have a foursome with a thirty-eight year-old woman. While driving to meet the woman, Travis hit a car parked on the road. When they meet the woman, she gives spiked beer to them and they pass out. When the three friends wake up, they find that they are trapped in the fundamentalist Five Points Trinity Church of the infamous Pastor Abin Cooper and that they will be killed. Meanwhile the church is under siege by ATF agents led by Agent Joseph Keenan that have been ordered to destroy the terrorist cell. Will the teenagers be saved by the agents of the law enforcement agency?",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNjMwMzA1MV5BMl5BanBnXkFtZTcwMzQyNDAxNg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "61%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.1",
		"imdbVotes": "66,631",
		"imdbID": "tt0873886",
		"Type": "movie",
		"DVD": "01 Apr 2012",
		"BoxOffice": "$1,104,682",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Men in Black 3",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "25 May 2012",
		"Runtime": "106 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Barry Sonnenfeld",
		"Writer": "Etan Cohen, Lowell Cunningham",
		"Actors": "Will Smith, Tommy Lee Jones, Josh Brolin",
		"Plot": "After breaking out of LunarMax, a moon-based maximum security prison, Boris the Animal (Jemaine Clement) decides to go back in time and eliminate the person who arrested him - Agent K (Josh Brolin). When he does so, Agent J (Will Smith) realizes that the timeline has been changed and he too travels back to July 15, 1969, the day before Agent K is killed. After overcoming some disbelief, J manages to convince young K and others of just who he is and why he's there. With the help of Griffin (Michael Stuhlbarg), a being who can see all timelines, they track Boris down. J also learns a secret, something old Agent K (Tommy Lee Jones) had never told him.",
		"Language": "English, Ukrainian",
		"Country": "United States, United Arab Emirates",
		"Awards": "1 win & 13 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.8",
		"imdbVotes": "385,337",
		"imdbID": "tt1409024",
		"Type": "movie",
		"DVD": "07 Sep 2014",
		"BoxOffice": "$179,020,854",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Mad God",
		"Year": "2021",
		"Rated": "Unrated",
		"Released": "16 Jun 2022",
		"Runtime": "83 min",
		"Genre": "Animation, Fantasy, Horror",
		"Director": "Phil Tippett",
		"Writer": "Phil Tippett",
		"Actors": "Alex Cox, Niketa Roman, Satish Ratakonda",
		"Plot": "The Assassin travels through a nightmare underworld of tortured souls, ruined cities and wretched monstrosities forged from the primordial horrors of the unconscious mind of Phil Tippett, the world's preeminent stop-motion animator.",
		"Language": "None",
		"Country": "United States",
		"Awards": "6 wins & 16 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjljZGI5ZTAtMmIwMC00N2ZiLWEzNmYtMDQ1MzFiNDI4ZDllXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "6.8",
		"imdbVotes": "14,131",
		"imdbID": "tt15090124",
		"Type": "movie",
		"DVD": "16 Jun 2022",
		"BoxOffice": "$325,042",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "National Treasure: Book of Secrets",
		"Year": "2007",
		"Rated": "PG",
		"Released": "21 Dec 2007",
		"Runtime": "124 min",
		"Genre": "Action, Adventure, Mystery",
		"Director": "Jon Turteltaub",
		"Writer": "Marianne Wibberley, Cormac Wibberley, Gregory Poirier",
		"Actors": "Nicolas Cage, Diane Kruger, Justin Bartha",
		"Plot": "Several years since Benjamin Franklin Gates (Nicolas Cage) found the Knight's Templar and became rich and famous. Now, another treasure hunter named Mitch Wilkinson (Ed Harris) has found what is a missing page of the diary of John Wilkes Booth, which contains clues to the location of a lost city of gold, Ben must compete against Mitch to find the lost city, he goes to France and Great Britain to find other clues and even peak inside the President's secret book to put the pieces of the puzzle together, his parents and his friends also help Ben find the lost city and to stay one step ahead of Mitch.",
		"Language": "English, French",
		"Country": "United States",
		"Awards": "1 win & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMjUyOTQ0MF5BMl5BanBnXkFtZTYwODA2Njk3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "36%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.5",
		"imdbVotes": "251,907",
		"imdbID": "tt0465234",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$219,964,115",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Office Christmas Party",
		"Year": "2016",
		"Rated": "R",
		"Released": "09 Dec 2016",
		"Runtime": "105 min",
		"Genre": "Comedy",
		"Director": "Josh Gordon, Will Speck",
		"Writer": "Jon Lucas, Scott Moore, Timothy Dowling",
		"Actors": "Jason Bateman, Olivia Munn, T.J. Miller",
		"Plot": "When the CEO (Jennifer Aniston) tries to close her hard-partying brother's branch, he (T.J. Miller) and his Chief Technical Officer (Jason Bateman) must rally their co-workers and host an epic office Christmas party in an effort to impress a potential client and close a sale that will save their jobs.",
		"Language": "English, Russian",
		"Country": "United States, India",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzgyZjE1MjUtYjFjZS00NzMzLWFmNWMtMDJjNGY0ZTgwYjc3XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "40%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "5.9",
		"imdbVotes": "87,878",
		"imdbID": "tt1711525",
		"Type": "movie",
		"DVD": "21 Mar 2017",
		"BoxOffice": "$54,767,494",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Master and Commander: The Far Side of the World",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "14 Nov 2003",
		"Runtime": "138 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Peter Weir",
		"Writer": "Patrick O'Brian, Peter Weir, John Collee",
		"Actors": "Russell Crowe, Paul Bettany, Billy Boyd",
		"Plot": "In April 1805 during the Napoleonic Wars, H.M.S. Surprise, a British frigate, is under the command of Captain Jack Aubrey. Aubrey and the Surprise's current orders are to track and capture or destroy a French privateer named Acheron. The Acheron is currently in the Atlantic off South America headed toward the Pacific in order to extend Napoleon's reach of the wars. This task will be a difficult one as Aubrey quickly learns in an initial battle with the Acheron that it is a bigger and faster ship than the Surprise, which puts the Surprise at a disadvantage. Aubrey's single-mindedness in this seemingly impossible pursuit puts him at odds with the Surprise's doctor and naturalist, Stephen Maturin, who is also Aubrey's most trusted advisor on board and closest friend. Facing other internal obstacles which have resulted in what they consider a string of bad luck, Aubrey ultimately uses Maturin's scientific exploits to figure out a way to achieve his and the ship's seemingly impossible goal.",
		"Language": "English, French, Portuguese",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 23 wins & 90 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGRjM2IyM2EtZDAxYi00NTdjLTliMGYtMmRhZGUyNjRjNWYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "7.5",
		"imdbVotes": "236,607",
		"imdbID": "tt0311113",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$93,927,920",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Never Rarely Sometimes Always",
		"Year": "2020",
		"Rated": "PG-13",
		"Released": "03 Apr 2020",
		"Runtime": "101 min",
		"Genre": "Drama",
		"Director": "Eliza Hittman",
		"Writer": "Eliza Hittman",
		"Actors": "Sidney Flanigan, Talia Ryder, Théodore Pellerin",
		"Plot": "Inseparable best friends and cousins Autumn and Skylar precariously navigate the vulnerability of female adolescence in rural Pennsylvania. When Autumn mysteriously falls pregnant, she's confronted by conservative legislation without mercy for blue-collar women seeking abortions. With Skylar's unfailing support and bold resourcefulness, money to fund the procedure is secured and the duo board a bus bound for New York state to find the help Autumn needs.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "30 wins & 119 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGUzZjZhMmUtZDE4Yi00NTI0LWJlMDUtNTU1OWI2ZWM1MzBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "99%"
			},
			{
				"Source": "Metacritic",
				"Value": "92/100"
			}
		],
		"Metascore": "92",
		"imdbRating": "7.4",
		"imdbVotes": "30,866",
		"imdbID": "tt7772582",
		"Type": "movie",
		"DVD": "03 Apr 2020",
		"BoxOffice": "$16,565",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Resident Evil",
		"Year": "2002",
		"Rated": "R",
		"Released": "15 Mar 2002",
		"Runtime": "100 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Paul W.S. Anderson",
		"Writer": "Paul W.S. Anderson",
		"Actors": "Milla Jovovich, Michelle Rodriguez, Ryan McCluskey",
		"Plot": "A virus has escaped in a secret facility called \"The Hive,\" turning the staff into hungry zombies and releasing the mutated Lab \"Animals\" that they were studying. The complex computer shuts down the base to prevent infection. The parent corporation sends in an elite military unit, where they meet Alice, who is suffering from amnesia due to exposure to nerve gas. The military team must shut down the computer and get out, fighting their way past zombies, mutants, and the computer itself, before the virus escapes and infects the rest of the world. Alice must also come to terms with her slowly-returning memories.",
		"Language": "English",
		"Country": "Germany, United Kingdom, Japan, France",
		"Awards": "7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "35%"
			},
			{
				"Source": "Metacritic",
				"Value": "33/100"
			}
		],
		"Metascore": "33",
		"imdbRating": "6.6",
		"imdbVotes": "287,092",
		"imdbID": "tt0120804",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$40,119,709",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Million Dollar Baby",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "28 Jan 2005",
		"Runtime": "132 min",
		"Genre": "Drama, Sport",
		"Director": "Clint Eastwood",
		"Writer": "Paul Haggis, F.X. Toole",
		"Actors": "Hilary Swank, Clint Eastwood, Morgan Freeman",
		"Plot": "Wanting to learn from the best, aspiring boxer Maggie Fitzgerald (Hilary Swank) wants Frankie Dunn (Clint Eastwood) to train her. At the outset, he flatly refuses saying he has no interest in training a girl. Frankie leads a lonely existence, alienated from his only daughter and having few friends. Maggie's rough around the edges, but shows a lot of grit in the ring and he eventually relents. Maggie not only proves to be the boxer he always dreamed of having under his wing, but a friend who fills the great void he's had in his life. Maggie's career skyrockets, but an accident in the ring leads her to ask Frankie for one last favor.",
		"Language": "English, Irish Gaelic",
		"Country": "United States",
		"Awards": "Won 4 Oscars. 68 wins & 86 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "86/100"
			}
		],
		"Metascore": "86",
		"imdbRating": "8.1",
		"imdbVotes": "718,281",
		"imdbID": "tt0405159",
		"Type": "movie",
		"DVD": "14 Jan 2016",
		"BoxOffice": "$100,492,203",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Land of the Dead",
		"Year": "2005",
		"Rated": "R",
		"Released": "24 Jun 2005",
		"Runtime": "93 min",
		"Genre": "Horror, Sci-Fi, Thriller",
		"Director": "George A. Romero",
		"Writer": "George A. Romero",
		"Actors": "John Leguizamo, Asia Argento, Simon Baker",
		"Plot": "Now that zombies have taken over the world, the living have built a walled-in city to keep the dead out. But all's not well where it's most safe, as a revolution plans to overthrow the city leadership, and the zombies are turning into more advanced creatures.",
		"Language": "English, Spanish, Italian, Polish, French",
		"Country": "United States, Canada, France",
		"Awards": "2 wins & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzU1MDI1NDM1NF5BMl5BanBnXkFtZTcwMzU5OTkyMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "6.2",
		"imdbVotes": "100,289",
		"imdbID": "tt0418819",
		"Type": "movie",
		"DVD": "29 Nov 2016",
		"BoxOffice": "$20,700,082",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Robin Hood",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "14 May 2010",
		"Runtime": "140 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Ridley Scott",
		"Writer": "Brian Helgeland, Ethan Reiff, Cyrus Voris",
		"Actors": "Russell Crowe, Cate Blanchett, Matthew Macfadyen",
		"Plot": "Birth of a legend. Following King Richard's (Danny Huston's) death in France, archer Robin Longstride (Russell Crowe), along with Will Scarlet (Scott Grimes), Allan A'Dayle (Alan Doyle), and Little John (Kevin Durand), returns to England. They encounter the dying Sir Robert Loxley (Douglas Hodge), whose party was ambushed by treacherous Godfrey (Mark Strong), who hopes to facilitate a French invasion of England. Robin promises the dying knight he will return his sword to his father Sir Walter Loxley (Max von Sydow) in Nottingham. Here, Sir Walter encourages him to impersonate the dead man to prevent his land being confiscated by the crown, and he finds himself with Marion (Cate Blanchett), a ready-made wife. Hoping to stir baronial opposition to weak Prince John (Oscar Isaac) and allow an easy French take-over, Godfrey worms his way into the Prince's service as Earl Marshal of England and brutally invades towns under the pretext of collecting Royal taxes. Can Robin navigate the politics of barons, royals, traitors, and the French?",
		"Language": "English, French, Ukrainian",
		"Country": "United States, United Kingdom",
		"Awards": "1 win & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "44%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "6.6",
		"imdbVotes": "281,548",
		"imdbID": "tt0955308",
		"Type": "movie",
		"DVD": "18 Dec 2015",
		"BoxOffice": "$105,269,730",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Renfield",
		"Year": "2023",
		"Rated": "R",
		"Released": "14 Apr 2023",
		"Runtime": "93 min",
		"Genre": "Comedy, Fantasy, Horror",
		"Director": "Chris McKay",
		"Writer": "Ryan Ridley, Robert Kirkman, Ava Tramer",
		"Actors": "Nicholas Hoult, Nicolas Cage, Awkwafina",
		"Plot": "Renfield, Dracula's henchman and inmate at the lunatic asylum for decades, longs for a life away from the Count, his various demands, and all of the bloodshed that comes with them.",
		"Language": "English, French",
		"Country": "United States",
		"Awards": "2 wins & 10 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDIwYjVjMDMtOGYxMy00ZTRiLWE0YzktMjIwYmNhOGE4NGQ4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "6.4",
		"imdbVotes": "93,053",
		"imdbID": "tt11358390",
		"Type": "movie",
		"DVD": "02 May 2023",
		"BoxOffice": "$17,297,895",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Planet Terror",
		"Year": "2007",
		"Rated": "R",
		"Released": "06 Apr 2007",
		"Runtime": "105 min",
		"Genre": "Action, Comedy, Horror",
		"Director": "Robert Rodriguez",
		"Writer": "Robert Rodriguez",
		"Actors": "Rose McGowan, Freddy Rodríguez, Josh Brolin",
		"Plot": "After an experimental bio-nerve gas is accidentally released at a remote U.S. military base in Texas, those exposed to the gas turn into flesh-eating, mutating zombies out to kill. An assortment of various people who include stripper Cherry, her shady mechanic ex-boyfriend Wray, a strong-willed doctor, the local sheriff, and an assortment of various people must join forces to survive the night as the so-called \"sickos\" threaten to take over the whole town and the world.",
		"Language": "English",
		"Country": "United States, Mexico",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODdmNmM2ZTgtODM1MS00ZGMxLTk3MTMtMGQ1ODZhMTQ1NWEwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "77%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.0",
		"imdbVotes": "222,146",
		"imdbID": "tt1077258",
		"Type": "movie",
		"DVD": "18 Nov 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Manchester by the Sea",
		"Year": "2016",
		"Rated": "R",
		"Released": "16 Dec 2016",
		"Runtime": "137 min",
		"Genre": "Drama",
		"Director": "Kenneth Lonergan",
		"Writer": "Kenneth Lonergan",
		"Actors": "Casey Affleck, Michelle Williams, Kyle Chandler",
		"Plot": "Lee Chandler is a brooding, irritable loner who works as a handyman for a Boston apartment block. One damp winter day he gets a call summoning him to his hometown, north of the city. His brother's heart has given out suddenly, and he's been named guardian to his 16-year-old nephew. As if losing his only sibling and doubts about raising a teenager weren't enough, his return to the past re-opens an unspeakable tragedy.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 128 wins & 268 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "96%"
			},
			{
				"Source": "Metacritic",
				"Value": "96/100"
			}
		],
		"Metascore": "96",
		"imdbRating": "7.8",
		"imdbVotes": "311,249",
		"imdbID": "tt4034228",
		"Type": "movie",
		"DVD": "07 Feb 2017",
		"BoxOffice": "$47,695,371",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scary Movie 2",
		"Year": "2001",
		"Rated": "R",
		"Released": "04 Jul 2001",
		"Runtime": "83 min",
		"Genre": "Comedy, Horror",
		"Director": "Keenen Ivory Wayans",
		"Writer": "Shawn Wayans, Marlon Wayans, Buddy Johnson",
		"Actors": "Anna Faris, Marlon Wayans, Antony Acker",
		"Plot": "A group of teens including Cindy Campbell (Anna Faris) and Brenda Meeks (Regina Hall) are invited to spend a night in Hell House. Professor Oldman (Tim Curry) has convinced them it is for a school project, but the night won't go past quietly. Master Kane (Richard Moll) is long dead, but still plans on enjoying himself, especially with Alex Monday (Tori Spelling). When things really start getting bad, the gang must work together to find a way to capture this ghostly menace.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "14%"
			},
			{
				"Source": "Metacritic",
				"Value": "29/100"
			}
		],
		"Metascore": "29",
		"imdbRating": "5.3",
		"imdbVotes": "173,837",
		"imdbID": "tt0257106",
		"Type": "movie",
		"DVD": "02 Aug 2016",
		"BoxOffice": "$71,308,997",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Senseless",
		"Year": "1998",
		"Rated": "R",
		"Released": "20 Feb 1998",
		"Runtime": "93 min",
		"Genre": "Comedy, Romance",
		"Director": "Penelope Spheeris",
		"Writer": "Greg Erb, Craig Mazin",
		"Actors": "Marlon Wayans, David Spade, Brad Dourif",
		"Plot": "Darryl Witherspoon is a young black college student who wants to win annual junior analyst competition, which can land him a job in a big brokerage company. He becomes a guinea pig for the drug developed at the college which is promised to heighten all senses by ten times.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDFmM2Y0ZmUtMzg2NC00MTUxLTg2MWQtMzBmYWIxYjM5YjQ1XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "6%"
			},
			{
				"Source": "Metacritic",
				"Value": "36/100"
			}
		],
		"Metascore": "36",
		"imdbRating": "6.0",
		"imdbVotes": "17,622",
		"imdbID": "tt0120820",
		"Type": "movie",
		"DVD": "08 Nov 2016",
		"BoxOffice": "$12,874,899",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Nebraska",
		"Year": "2013",
		"Rated": "R",
		"Released": "24 Jan 2014",
		"Runtime": "115 min",
		"Genre": "Drama",
		"Director": "Alexander Payne",
		"Writer": "Bob Nelson",
		"Actors": "Bruce Dern, Will Forte, June Squibb",
		"Plot": "\"NEBRASKA\" is a father-and-son road trip, from Billings, Montana to Lincoln, Nebraska that gets waylaid at a small town in central Nebraska, where the father grew up and has scores to settle. Told with deadpan humor and a unique visual style, it's ultimately the story of a son trying to get through to a father he doesn't understand.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Nominated for 6 Oscars. 29 wins & 169 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWY3ZDcwNjctMTRmMS00ZWVlLTk4NGItODgxYjU3MjcwNGUxXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "86/100"
			}
		],
		"Metascore": "86",
		"imdbRating": "7.7",
		"imdbVotes": "122,765",
		"imdbID": "tt1821549",
		"Type": "movie",
		"DVD": "08 Nov 2015",
		"BoxOffice": "$17,654,912",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sex After Kids",
		"Year": "2013",
		"Rated": "Not Rated",
		"Released": "07 Feb 2014",
		"Runtime": "105 min",
		"Genre": "Comedy",
		"Director": "Jeremy LaLonde",
		"Writer": "Jeremy LaLonde",
		"Actors": "Paul Amos, Shannon Beckner, Katie Boland",
		"Plot": "A disparate variety of couples from all walks of life strive to maintain active sex lives despite the notable distraction of having kids.",
		"Language": "English",
		"Country": "Canada",
		"Awards": "4 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzA3Njg2N15BMl5BanBnXkFtZTgwNTQwNDM1MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.5",
		"imdbVotes": "1,262",
		"imdbID": "tt2301147",
		"Type": "movie",
		"DVD": "22 Mar 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Rush",
		"Year": "2013",
		"Rated": "R",
		"Released": "27 Sep 2013",
		"Runtime": "123 min",
		"Genre": "Action, Biography, Drama",
		"Director": "Ron Howard",
		"Writer": "Peter Morgan",
		"Actors": "Daniel Brühl, Chris Hemsworth, Olivia Wilde",
		"Plot": "Set against the sexy, glamorous golden age of Formula 1 racing in the 1970s, the film is based on the true story of a great sporting rivalry between handsome English playboy James Hunt (Hemsworth), and his methodical, brilliant opponent, Austrian driver Niki Lauda (Bruhl). The story follows their distinctly-different personal styles on and off the track, their loves, and the astonishing 1976 season in which both drivers were willing to risk everything to become world champion in a sport with no margin for error: if you make a mistake, you die.",
		"Language": "English, German, Italian, French, Spanish",
		"Country": "United Kingdom, United States",
		"Awards": "Won 1 BAFTA Award6 wins & 65 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "8.1",
		"imdbVotes": "508,716",
		"imdbID": "tt1979320",
		"Type": "movie",
		"DVD": "14 Jan 2014",
		"BoxOffice": "$26,947,624",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pay It Forward",
		"Year": "2000",
		"Rated": "PG-13",
		"Released": "20 Oct 2000",
		"Runtime": "123 min",
		"Genre": "Drama",
		"Director": "Mimi Leder",
		"Writer": "Catherine Ryan Hyde, Leslie Dixon",
		"Actors": "Kevin Spacey, Haley Joel Osment, Helen Hunt",
		"Plot": "Young Trevor McKinney, troubled by his mother's alcoholism and fears of his abusive but absent father, is caught up by an intriguing assignment from his new social studies teacher, Mr. Simonet. The assignment: think of something to change the world and put it into action. Trevor conjures the notion of paying a favor not back, but forward--repaying good deeds not with payback, but with new good deeds done to three new people. Trevor's efforts to make good on his idea bring a revolution not only in the lives of himself, his mother and his physically and emotionally scarred teacher, but in those of an ever-widening circle of people completely unknown to him.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjI3ODI5NDEwMl5BMl5BanBnXkFtZTYwNDYyMjU3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "39%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "7.2",
		"imdbVotes": "123,407",
		"imdbID": "tt0223897",
		"Type": "movie",
		"DVD": "01 Dec 2010",
		"BoxOffice": "$33,519,628",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Palmer",
		"Year": "2021",
		"Rated": "R",
		"Released": "29 Jan 2021",
		"Runtime": "110 min",
		"Genre": "Drama",
		"Director": "Fisher Stevens",
		"Writer": "Cheryl Guerriero",
		"Actors": "Justin Timberlake, Juno Temple, Alisha Wainwright",
		"Plot": "A bullied young non binary child lives with a drug addicted Mother and an abusive boyfriend . Palmer (Justin Timberlake) recently released from prison after serving 12 years for attempted murder, moves in with his Grandmother and rediscovers his heart in the process of learning to accept his past and a new way of being in the world.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTZhNzM4MDktYWUwMC00NTE1LTlkN2UtM2Y5ODIwYjZmNTA2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "72%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "7.3",
		"imdbVotes": "43,165",
		"imdbID": "tt6857376",
		"Type": "movie",
		"DVD": "29 Jan 2021",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scary Movie",
		"Year": "2000",
		"Rated": "R",
		"Released": "07 Jul 2000",
		"Runtime": "88 min",
		"Genre": "Comedy",
		"Director": "Keenen Ivory Wayans",
		"Writer": "Shawn Wayans, Marlon Wayans, Buddy Johnson",
		"Actors": "Anna Faris, Jon Abrahams, Marlon Wayans",
		"Plot": "A group of teenagers including Cindy Campbell and Bobby Prinze, accidentally hit a man when driving, and dispose of the body, but now they are being stalked by a very recognisable masked killer. The victim count increases, whilst Cindy must survive the carnage that has she has seen in so many films before.",
		"Language": "English",
		"Country": "United States",
		"Awards": "7 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "51%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.3",
		"imdbVotes": "284,666",
		"imdbID": "tt0175142",
		"Type": "movie",
		"DVD": "20 Jan 2016",
		"BoxOffice": "$157,019,771",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scary Movie 4",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "14 Apr 2006",
		"Runtime": "83 min",
		"Genre": "Comedy",
		"Director": "David Zucker",
		"Writer": "Craig Mazin, Jim Abrahams, Pat Proft",
		"Actors": "Anna Faris, Regina Hall, Craig Bierko",
		"Plot": "The unemployed Cindy Campbell is hired to work in a cursed house as caretaker of an old lady and meets the ghost of a boy. Meanwhile, the teenager son Robbie and the young daughter Rachel of his next door neighbor and crane operator Tom Ryan are spending the weekend with their loser father. Cindy and Tom meet and fall in love for each other, but when Giant Tripods invade Earth, Tom escapes with Robbie and Rachel; Cindy travels to a village, trying to find the answer to a riddle to save the world; and the president of USA organizes the defense of the planet in UN under his intelligence and leadership.",
		"Language": "English, Japanese",
		"Country": "United States",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "34%"
			},
			{
				"Source": "Metacritic",
				"Value": "40/100"
			}
		],
		"Metascore": "40",
		"imdbRating": "5.1",
		"imdbVotes": "128,566",
		"imdbID": "tt0362120",
		"Type": "movie",
		"DVD": "18 Nov 2016",
		"BoxOffice": "$90,710,620",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sharper",
		"Year": "2023",
		"Rated": "R",
		"Released": "17 Feb 2023",
		"Runtime": "116 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "Benjamin Caron",
		"Writer": "Brian Gatewood, Alessandro Tanaka",
		"Actors": "Julianne Moore, Sebastian Stan, Justice Smith",
		"Plot": "Motivations are suspect, and expectations are turned chaos, as a con artist takes on Manhattan billionaires.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2JlN2Q2ZmYtYmU4OS00ZjNlLWE2OTEtOTc2ZDY5NjEwMTM4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "69%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "6.7",
		"imdbVotes": "29,388",
		"imdbID": "tt12573454",
		"Type": "movie",
		"DVD": "17 Feb 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Predator 2",
		"Year": "1990",
		"Rated": "R",
		"Released": "21 Nov 1990",
		"Runtime": "108 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Stephen Hopkins",
		"Writer": "Jim Thomas, John Thomas",
		"Actors": "Danny Glover, Gary Busey, Kevin Peter Hall",
		"Plot": "LAPD lieutenant Mike Harrigan (Danny Glover) and his cocky detective partner Jerry Lambert (Bill Paxton) soon realize that what seemed a bloody feud between voodoo high priest King Willie's (Calvin Lockhart) Jamaican gangs and Ramon Vega's (Corey Rand) Colombian drug gang is actually the work of a scary third party. Peter Keyes's (Gary Busey) federal team shields the crime scene even for the LAPD, but after forensics proves it must be an alien, who keeps making victims, the chase brings them all together.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNThjZjI4NTgtZDk4Mi00ZjI1LWExZGUtNTRkOWY1ZTY3M2FlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "30%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "6.3",
		"imdbVotes": "180,626",
		"imdbID": "tt0100403",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$30,669,413",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pan's Labyrinth",
		"Year": "2006",
		"Rated": "R",
		"Released": "19 Jan 2007",
		"Runtime": "118 min",
		"Genre": "Drama, Fantasy, War",
		"Director": "Guillermo del Toro",
		"Writer": "Guillermo del Toro",
		"Actors": "Ivana Baquero, Ariadna Gil, Sergi López",
		"Plot": "In 1944 Falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the true princess and will never see her real father, the king, again.",
		"Language": "Spanish",
		"Country": "Mexico, Spain",
		"Awards": "Won 3 Oscars. 109 wins & 115 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "98/100"
			}
		],
		"Metascore": "98",
		"imdbRating": "8.2",
		"imdbVotes": "699,649",
		"imdbID": "tt0457430",
		"Type": "movie",
		"DVD": "01 Aug 2010",
		"BoxOffice": "$37,646,380",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Showdown in Little Tokyo",
		"Year": "1991",
		"Rated": "R",
		"Released": "23 Aug 1991",
		"Runtime": "79 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Mark L. Lester",
		"Writer": "Stephen Glantz, Caliope Brattlestreet",
		"Actors": "Dolph Lundgren, Brandon Lee, Cary-Hiroyuki Tagawa",
		"Plot": "Detective Chris Kenner was orphaned as a child as his father was in the service and was killed and lived in Japan. Now he is on the trail of ruthless Yakuza leader named Yoshido, who helped establish a small Japanese area in Los Angeles and is now running a drug ring disguised as a brewery. However, Kenner must team up with a Japanese-American detective named Johnny Murata, and he also must protect a witness named Minako who would testify against Yoshido. But what Kenner will soon discover that he will be in a lot more than what he bargained for.",
		"Language": "English, Japanese",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDdmOTg2ZjktMmM4MC00MTYyLWEyN2ItNjAyMjM0NDU4Yjg5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.1",
		"imdbVotes": "20,589",
		"imdbID": "tt0102915",
		"Type": "movie",
		"DVD": "01 Jan 2009",
		"BoxOffice": "$2,275,557",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sense and Sensibility",
		"Year": "1995",
		"Rated": "PG",
		"Released": "26 Jan 1996",
		"Runtime": "136 min",
		"Genre": "Drama, Romance",
		"Director": "Ang Lee",
		"Writer": "Jane Austen, Emma Thompson",
		"Actors": "Emma Thompson, Kate Winslet, James Fleet",
		"Plot": "When Mr. Dashwood (Tom Wilkinson) dies, he must leave the bulk of his estate to the son by his first marriage, which leaves his second wife and their three daughters Elinor (Dame Emma Thompson), Marianne (Kate Winslet), and Margaret (Emilie François), in straitened circumstances. They are taken in by a kindly cousin, but their lack of fortune affects the marriageability of practical Elinor and romantic Marianne. When Elinor forms an attachment for the wealthy Edward Ferrars (Hugh Grant), his family disapproves and separates them. And though Mrs. Jennings (Elizabeth Spriggs) tries to match the worthy (and rich) Colonel Brandon (Alan Rickman) to her, Marianne finds the dashing and fiery John Willoughby (Greg Wise) more to her taste. Both relationships are sorely tried.",
		"Language": "English, French",
		"Country": "United States, United Kingdom",
		"Awards": "Won 1 Oscar. 33 wins & 50 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzk1MjU3MDQyMl5BMl5BanBnXkFtZTcwNjc1OTM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "84/100"
			}
		],
		"Metascore": "84",
		"imdbRating": "7.7",
		"imdbVotes": "124,221",
		"imdbID": "tt0114388",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$43,182,776",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sideways",
		"Year": "2004",
		"Rated": "R",
		"Released": "22 Oct 2004",
		"Runtime": "127 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Alexander Payne",
		"Writer": "Rex Pickett, Alexander Payne, Jim Taylor",
		"Actors": "Paul Giamatti, Thomas Haden Church, Virginia Madsen",
		"Plot": "A week before his friend Jack is to be married, best man Miles and the prospective groom head off to wine country for a week of fun, relaxation and - of course - wine drinking. Miles is the oenophile and does his best to teach Jack a bit about the art of appreciating great wine. All Jack cares about is drinking and carousing, something he accomplishes when he meets the attractive Stephanie at one of the vineyards. Miles is something of a sad sack, a high school English teacher who is a failed writer at heart. He has yet to get over the fact that his wife has divorced him and that she has remarried and he now faces that nerve racking wait for word from a prospective publisher. Miles has an opportunity to start anew when he meets Stephanie's friend Maya but when he let's slip that Jack is about to be married any hope of a relationship seems to be lost.",
		"Language": "English, Armenian, French",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 123 wins & 91 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU0Mjg3MzkxOV5BMl5BanBnXkFtZTYwNDU1OTY3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "94/100"
			}
		],
		"Metascore": "94",
		"imdbRating": "7.5",
		"imdbVotes": "202,882",
		"imdbID": "tt0375063",
		"Type": "movie",
		"DVD": "02 Sep 2014",
		"BoxOffice": "$71,503,593",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sleepy Hollow",
		"Year": "1999",
		"Rated": "R",
		"Released": "19 Nov 1999",
		"Runtime": "105 min",
		"Genre": "Fantasy, Horror, Mystery",
		"Director": "Tim Burton",
		"Writer": "Washington Irving, Kevin Yagher, Andrew Kevin Walker",
		"Actors": "Johnny Depp, Christina Ricci, Miranda Richardson",
		"Plot": "The curse of The Headless Horseman (Christopher Walken) is the legacy of the small town of Sleepy Hollow. Spearheaded by the eager Constable Ichabod Crane (Johnny Depp) and his new world ways into the quagmire of secrets and murder, secrets once laid to rest, best forgotten and now reawakened, and he too, holding a dark secret of a past once gone.",
		"Language": "English, Latin",
		"Country": "United States, Germany, United Kingdom",
		"Awards": "Won 1 Oscar. 28 wins & 44 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.3",
		"imdbVotes": "382,020",
		"imdbID": "tt0162661",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$101,071,502",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Saw X",
		"Year": "2023",
		"Rated": "R",
		"Released": "29 Sep 2023",
		"Runtime": "118 min",
		"Genre": "Horror, Mystery, Thriller",
		"Director": "Kevin Greutert",
		"Writer": "Pete Goldfinger, Josh Stolberg",
		"Actors": "Tobin Bell, Shawnee Smith, Synnøve Macody Lund",
		"Plot": "A sick and desperate John travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer only to discover the entire operation is a scam to defraud the most vulnerable.",
		"Language": "English, Spanish",
		"Country": "United States, Mexico, Canada",
		"Awards": "14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.6",
		"imdbVotes": "70,538",
		"imdbID": "tt21807222",
		"Type": "movie",
		"DVD": "20 Oct 2023",
		"BoxOffice": "$53,607,898",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Penelope",
		"Year": "2006",
		"Rated": "PG",
		"Released": "29 Feb 2008",
		"Runtime": "104 min",
		"Genre": "Comedy, Fantasy, Romance",
		"Director": "Mark Palansky",
		"Writer": "Leslie Caveny",
		"Actors": "Christina Ricci, James McAvoy, Reese Witherspoon",
		"Plot": "In this modern-day romantic tale, Penelope is about a young girl's inspiring journey, a mysterious family secret, and the power of love. With all odds against her, in order for Penelope to break the family curse, she must find true love with \"one of her own kind\". Penelope Wilhern, born to wealthy socialites, is afflicted by the Wilhern spell that can only be broken when she finds love. Hidden away in her family's estate, the lonely girl meets a string of suitors in her parents' futile attempt to break the curse. Each eligible bachelor is enamored with Penelope and her sizable dowry; until her curse is revealed. Lemon, a mischievous and eager tabloid reporter, wants a photograph of the mysterious Penelope and hires Max to pose as a prospective suitor to get the shot. The handsome down-on-his luck gambler finds himself falling for Penelope, but cannot bring himself to give her what she wants. Fed up by this latest betrayal and determined to live life on her own terms, Penelope breaks free from her family and ventures into the world alone. She finds adventure and Annie, her first friend, and goes on a journey to discover the world and who she wants to be.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjM1M2Y3NWUtOWM1MS00YjUzLThiNmEtNjdiMTZmMzg3NTY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "53%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.7",
		"imdbVotes": "66,022",
		"imdbID": "tt0472160",
		"Type": "movie",
		"DVD": "30 Jul 2010",
		"BoxOffice": "$10,011,996",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Screamers",
		"Year": "1995",
		"Rated": "R",
		"Released": "26 Jan 1996",
		"Runtime": "108 min",
		"Genre": "Horror, Sci-Fi, Thriller",
		"Director": "Christian Duguay",
		"Writer": "Philip K. Dick, Dan O'Bannon, Miguel Tejada-Flores",
		"Actors": "Peter Weller, Roy Dupuis, Jennifer Rubin",
		"Plot": "On the distant mining planet Sirius 6B ravaged by a decade of war in the year 2078, scientists have created the perfect weapon. The blade-wielding, self-replicating race of killing devices known as Screamers is designed for one purpose - to hunt down and destroy all enemy life forms. This so dubbed man's greatest weapon has continued to evolve without human guidance, and devised a new mission: to obliterate all life. Colonel Hendricksson (Peter Weller) commands a handful of Alliance soldiers still alive on Sirius. Betrayed by his own political leaders and disgusted by the atrocities of a never-ending war, Hendricksson decides to negotiate a separate peace with the New Economic Bloc's decimated forces. But to do so, he will have to cross a treacherous wasteland where the deadliest threat comes from the very weapons he helped to create.",
		"Language": "English",
		"Country": "Canada, Japan",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2M2ZGM0NDUtODRhNS00MjcxLTg3ZWYtYjkyZDJkYmVjOWYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "29%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.3",
		"imdbVotes": "29,169",
		"imdbID": "tt0114367",
		"Type": "movie",
		"DVD": "01 Mar 2011",
		"BoxOffice": "$5,711,695",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Some Like It Hot",
		"Year": "1959",
		"Rated": "Passed",
		"Released": "19 Mar 1959",
		"Runtime": "121 min",
		"Genre": "Comedy, Music, Romance",
		"Director": "Billy Wilder",
		"Writer": "Billy Wilder, I.A.L. Diamond, Robert Thoeren",
		"Actors": "Marilyn Monroe, Tony Curtis, Jack Lemmon",
		"Plot": "After two Chicago musicians, Joe and Jerry, witness the the St. Valentine's Day massacre, they want to get out of town and get away from the gangster responsible, Spats Colombo. They're desperate to get a gig out of town but the only job they know of is in an all-girl band heading to Florida. They show up at the train station as Josephine and Daphne, the replacement saxophone and bass players. They certainly enjoy being around the girls, especially Sugar Kane Kowalczyk who sings and plays the ukulele. Joe in particular sets out to woo her while Jerry/Daphne is wooed by a millionaire, Osgood Fielding III. Mayhem ensues as the two men try to keep their true identities hidden and Spats Colombo and his crew show up for a meeting with several other crime lords.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 11 wins & 13 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "98/100"
			}
		],
		"Metascore": "98",
		"imdbRating": "8.2",
		"imdbVotes": "281,336",
		"imdbID": "tt0053291",
		"Type": "movie",
		"DVD": "26 Sep 2016",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Outbreak",
		"Year": "1995",
		"Rated": "R",
		"Released": "10 Mar 1995",
		"Runtime": "127 min",
		"Genre": "Action, Drama, Thriller",
		"Director": "Wolfgang Petersen",
		"Writer": "Laurence Dworet, Robert Roy Pool",
		"Actors": "Dustin Hoffman, Rene Russo, Morgan Freeman",
		"Plot": "Colonel Dr. Sam Daniels has just divorced his wife Robby Keough, who works at the CDC. Out of the blue, he is assigned by his superior General Billy Ford to investigate a lethal disease in an African village with his crew formed by the scientist Casey Schuler and Major Dr. Salt. They are impressed by the disease and Colonel Daniels reports to General Ford his findings afraid of contamination in the USA. However General Ford tells that the disease kills so fast that would never reach their country. However, an African smuggled monkey carrier of the disease is brought to USA and the customs employee Jimbo Scott unsuccessfully tries to sell the animal. He releases the monkey in the woods and spreads the disease in the beginning of an outbreak in a small town in California. Now Colonel Daniels, his ex-wife and their teams must fight the invisible enemy while Colonel Daniels discovers dark secrets from his superior General Donald McClintock.",
		"Language": "English, Korean, French",
		"Country": "United States",
		"Awards": "5 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZjMyYWI3M2UtMzkyMy00ZjU2LTlkZTMtZDY3ZmViY2M2NTFiXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "59%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "6.6",
		"imdbVotes": "137,288",
		"imdbID": "tt0114069",
		"Type": "movie",
		"DVD": "01 Jan 2008",
		"BoxOffice": "$67,659,560",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Shot Caller",
		"Year": "2017",
		"Rated": "R",
		"Released": "18 Aug 2017",
		"Runtime": "121 min",
		"Genre": "Crime, Drama, Thriller",
		"Director": "Ric Roman Waugh",
		"Writer": "Ric Roman Waugh",
		"Actors": "Nikolaj Coster-Waldau, Omari Hardwick, Lake Bell",
		"Plot": "White-collar business professional, happily married accidentally commits a crime. Sentenced to prison time, he must adjust and learn the ways of prison life. Throughout this, he struggles to do what's best for his family on the outside. The choices he makes in prison will have major repercussions, both to himself and his family, if he makes the wrong one.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGY0YTM3MjItZmExMy00NDgyLThjNzUtZWQ1MzY2NGRmMjZhXkEyXkFqcGdeQXVyMzYyMzE1NjA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.3",
		"imdbVotes": "96,841",
		"imdbID": "tt4633690",
		"Type": "movie",
		"DVD": "18 Aug 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Star Trek",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "08 May 2009",
		"Runtime": "127 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "J.J. Abrams",
		"Writer": "Roberto Orci, Alex Kurtzman, Gene Roddenberry",
		"Actors": "Chris Pine, Zachary Quinto, Simon Pegg",
		"Plot": "On the day of James T. Kirk's birth, his father dies on his damaged starship in a last stand against a Romulan mining vessel looking for Ambassador Spock, who in this time, has grown on Vulcan disdained by his neighbors for his half-human heritage. 25 years later, James T. Kirk has grown into a young rebellious troublemaker. Challenged by Captain Christopher Pike to realize his potential in Starfleet, he comes to annoy academy instructors like Commander Spock. Suddenly, there is an emergency on Vulcan and the newly-commissioned USS Enterprise is crewed with promising cadets like Nyota Uhura, Hikaru Sulu, Pavel Chekov and even Kirk himself, thanks to Leonard McCoy's medical trickery. Together, this crew will have an adventure in the final frontier where the old legend is altered forever as a new version of the legend begins.",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "Won 1 Oscar. 27 wins & 95 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.9",
		"imdbVotes": "618,684",
		"imdbID": "tt0796366",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$257,730,019",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Shanghai Noon",
		"Year": "2000",
		"Rated": "PG-13",
		"Released": "26 May 2000",
		"Runtime": "110 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Tom Dey",
		"Writer": "Miles Millar, Alfred Gough",
		"Actors": "Jackie Chan, Owen Wilson, Lucy Liu",
		"Plot": "A 19th century Western. Chon Wang is a clumsy Imperial Guard to the Emperor of China. When Princess Pei Pei is kidnapped from the Forbidden City, Wang feels personally responsible and insists on joining the guards sent to rescue the Princess, who has been whisked away to the United States. In Nevada and hot on the trail of the kidnappers, Wang is separated from the group and soon finds himself an unlikely partner with Roy O'Bannon, a small time robber with delusions of grandeur. Together, the two forge onto one misadventure after another.",
		"Language": "English, Mandarin, Sioux, Spanish",
		"Country": "United States, Hong Kong",
		"Awards": "1 win & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI0MjE2MzUwOV5BMl5BanBnXkFtZTYwMTk5NjU3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "77/100"
			}
		],
		"Metascore": "77",
		"imdbRating": "6.6",
		"imdbVotes": "134,564",
		"imdbID": "tt0184894",
		"Type": "movie",
		"DVD": "10 Dec 2015",
		"BoxOffice": "$56,937,502",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pirates of the Caribbean: The Curse of the Black Pearl",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "09 Jul 2003",
		"Runtime": "143 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Gore Verbinski",
		"Writer": "Ted Elliott, Terry Rossio, Stuart Beattie",
		"Actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom",
		"Plot": "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 5 Oscars. 38 wins & 104 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "8.1",
		"imdbVotes": "1,199,036",
		"imdbID": "tt0325980",
		"Type": "movie",
		"DVD": "23 Nov 2015",
		"BoxOffice": "$305,413,918",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Shame",
		"Year": "2011",
		"Rated": "NC-17",
		"Released": "13 Jan 2012",
		"Runtime": "101 min",
		"Genre": "Drama",
		"Director": "Steve McQueen",
		"Writer": "Steve McQueen, Abi Morgan",
		"Actors": "Michael Fassbender, Carey Mulligan, James Badge Dale",
		"Plot": "Brandon is a 30-something man living in New York who is unable to manage his sex life. After his wayward younger sister moves into his apartment, Brandon's world spirals out of control. Shame examines the nature of need, how we live our lives and the experiences that shape us.",
		"Language": "English",
		"Country": "United Kingdom, Canada, United States",
		"Awards": "Nominated for 2 BAFTA 50 wins & 94 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGU4Mjc0ZWMtNGQ0OS00ZWQ4LThkNDUtOTE1Y2EzYjgzMDU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.2",
		"imdbVotes": "205,669",
		"imdbID": "tt1723811",
		"Type": "movie",
		"DVD": "01 Nov 2014",
		"BoxOffice": "$3,909,002",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Predator",
		"Year": "1987",
		"Rated": "R",
		"Released": "12 Jun 1987",
		"Runtime": "107 min",
		"Genre": "Action, Adventure, Horror",
		"Director": "John McTiernan",
		"Writer": "Jim Thomas, John Thomas",
		"Actors": "Arnold Schwarzenegger, Carl Weathers, Kevin Peter Hall",
		"Plot": "A team of special force ops, led by a tough but fair soldier, Major \"Dutch\" Schaefer, are ordered to assist CIA man, Colonel Al Dillon, on a rescue mission for potential survivors of a Helicopter downed over remote South American jungle. Not long after they land, Dutch and his team discover that they have been sent in under false pretenses. This deception turns out to be the least of their worries though, when they find themselves being methodically hunted by something not of this world.",
		"Language": "English, Spanish, Russian",
		"Country": "United States, Mexico",
		"Awards": "Nominated for 1 Oscar. 3 wins & 6 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2QwYmFmZTEtNzY2Mi00ZWMyLWEwY2YtMGIyNGZjMWExOWEyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "7.8",
		"imdbVotes": "452,232",
		"imdbID": "tt0093773",
		"Type": "movie",
		"DVD": "11 Mar 2014",
		"BoxOffice": "$59,735,548",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Resident Evil: Welcome to Raccoon City",
		"Year": "2021",
		"Rated": "R",
		"Released": "24 Nov 2021",
		"Runtime": "107 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "Johannes Roberts",
		"Writer": "Johannes Roberts",
		"Actors": "Kaya Scodelario, Robbie Amell, Hannah John-Kamen",
		"Plot": "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company's exodus left the city a wasteland with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever changed and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
		"Language": "English",
		"Country": "Canada, Germany",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjA5NmZkMTYtM2I2Mi00NzJkLWJhZGItOGZhMzE0YTViZDMxXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "30%"
			},
			{
				"Source": "Metacritic",
				"Value": "44/100"
			}
		],
		"Metascore": "44",
		"imdbRating": "5.2",
		"imdbVotes": "63,169",
		"imdbID": "tt6920084",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$17,000,612",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Smoking Causes Coughing",
		"Year": "2022",
		"Rated": "Not Rated",
		"Released": "31 Mar 2023",
		"Runtime": "77 min",
		"Genre": "Comedy, Horror, Sci-Fi",
		"Director": "Quentin Dupieux",
		"Writer": "Quentin Dupieux",
		"Actors": "Gilles Lellouche, Vincent Lacoste, Anaïs Demoustier",
		"Plot": "A group of vigilantes called the \"tobacco-forces\" is falling apart. To rebuild team spirit, their leader suggests that they meet for a week-long retreat, before returning to save the world.",
		"Language": "French",
		"Country": "France, Monaco",
		"Awards": "2 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODM4NGRjMWItZmI4YS00ZTZjLTk3MDctMTE4NDQ0N2QzMTgzXkEyXkFqcGdeQXVyNzYxMDQ2MTg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "6.5",
		"imdbVotes": "4,474",
		"imdbID": "tt15471560",
		"Type": "movie",
		"DVD": "31 Mar 2023",
		"BoxOffice": "$64,484",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pirates of the Caribbean: Dead Man's Chest",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "07 Jul 2006",
		"Runtime": "151 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Gore Verbinski",
		"Writer": "Ted Elliott, Terry Rossio, Stuart Beattie",
		"Actors": "Johnny Depp, Orlando Bloom, Keira Knightley",
		"Plot": "Once again we're plunged into the world of sword fights and \"savvy\" pirates. Captain Jack Sparrow is reminded he owes a debt to Davy Jones, who captains the flying Dutchman, a ghostly ship, with a crew from hell. Facing the \"locker\" Jack must find the heart of Davy Jones but to save himself he must get the help of quick-witted Will Turner and Elizabeth Swan. If that's not complicated enough, Will and Elizabeth are sentenced to hang, unless Will can get Lord Cutler Beckett Jack's compass. Will is forced to join another crazy adventure with Jack.",
		"Language": "English, Turkish, Greek, Mandarin, French",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 45 wins & 54 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "53%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "7.4",
		"imdbVotes": "762,876",
		"imdbID": "tt0383574",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$423,315,812",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Prey",
		"Year": "2022",
		"Rated": "R",
		"Released": "05 Aug 2022",
		"Runtime": "100 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Dan Trachtenberg",
		"Writer": "Patrick Aison, Dan Trachtenberg, Jim Thomas",
		"Actors": "Amber Midthunder, Dakota Beavers, Dane DiLiegro",
		"Plot": "Naru, a skilled warrior of the Comanche Nation, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.",
		"Language": "English, North American Indian, French",
		"Country": "United States",
		"Awards": "Won 1 Primetime Emmy. 11 wins & 42 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.1",
		"imdbVotes": "222,435",
		"imdbID": "tt11866324",
		"Type": "movie",
		"DVD": "05 Aug 2022",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Reign of Fire",
		"Year": "2002",
		"Rated": "PG-13",
		"Released": "12 Jul 2002",
		"Runtime": "101 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Rob Bowman",
		"Writer": "Gregg Chabot, Kevin Peterka, Matt Greenberg",
		"Actors": "Matthew McConaughey, Christian Bale, Izabella Scorupco",
		"Plot": "In present-day London, 12-year-old Quinn Abercromby witnesses the awakening of a hibernating dragon from a centuries-long slumber, the result of a construction dig supervised by his mother and an incident for which Quinn feels partially responsible. Twenty years later, the adult Quinn (Christian Bale) is the fire chief of a refortified castle community, responsible for dousing the blazes lit by the dragon's prodigious number of flame-spewing offspring, airborne juggernauts that have wreaked havoc across the globe, torching civilization and turning humans into an endangered species. Hope arrives in the form of Denton \"Dragon Slayer\" Van Zan (Matthew McConaughey), an American known to be the only man to ever kill one of the dragons, and Alex (Izabella Scorupco), a scientist/pilot who's a member of Van Zan's army, a zealous fighting force that includes a secret weapon: the Archangels, paratroopers using themselves as bait to attract and then dispatch the deadly beasts.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGE0NmUtZWZjYS00YTI2LTkyMDItNGJlNDM3NjhkMDEwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "39/100"
			}
		],
		"Metascore": "39",
		"imdbRating": "6.2",
		"imdbVotes": "144,504",
		"imdbID": "tt0253556",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$43,061,982",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pirates of the Caribbean: Dead Men Tell No Tales",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "26 May 2017",
		"Runtime": "129 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Joachim Rønning, Espen Sandberg",
		"Writer": "Jeff Nathanson, Terry Rossio, Ted Elliott",
		"Actors": "Johnny Depp, Geoffrey Rush, Javier Bardem",
		"Plot": "Captain Jack Sparrow (Johnny Depp) finds the winds of ill-fortune blowing even more strongly when deadly ghost pirates led by his old nemesis, the terrifying Captain Salazar (Javier Bardem), escape from the Devil's Triangle, determined to kill every pirate at sea...including him. Captain Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, a powerful artifact that bestows upon its possessor total control over the seas.",
		"Language": "English, Spanish",
		"Country": "United States, Australia, United Kingdom, Canada",
		"Awards": "1 win & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "30%"
			},
			{
				"Source": "Metacritic",
				"Value": "39/100"
			}
		],
		"Metascore": "39",
		"imdbRating": "6.5",
		"imdbVotes": "343,186",
		"imdbID": "tt1790809",
		"Type": "movie",
		"DVD": "10 Jul 2017",
		"BoxOffice": "$172,558,876",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Something Borrowed",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "06 May 2011",
		"Runtime": "112 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Luke Greenfield",
		"Writer": "Jennie Snyder Urman, Emily Giffin",
		"Actors": "Ginnifer Goodwin, Kate Hudson, Colin Egglesfield",
		"Plot": "Rachel is a lawyer. When she was in law school she fell for another student, Dex, who comes from an affluent family, but she was too shy to say anything. When Dex meets her best friend Darcy, who sometimes treats her like dirt, Darcy makes a move on Dex and gets him. Eventually, they get engaged and Darcy asks Rachel to be her Maid of Honor. However, Rachel still has feelings for Dex and still can't say anything. Darcy throws her a birthday party and Dex is there. When she and Dex are alone she blurts out that she had a thing for him in college which surprised him, and after drinking a little they spend the night together. They try to forget the whole thing and agree that it means nothing. Ethan, Rachel's close friend, tells her that she'll spend her entire life regretting that if she does nothing.",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzczNzMzODk0Nl5BMl5BanBnXkFtZTcwMjgwMjI0NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "15%"
			},
			{
				"Source": "Metacritic",
				"Value": "36/100"
			}
		],
		"Metascore": "36",
		"imdbRating": "5.8",
		"imdbVotes": "64,900",
		"imdbID": "tt0491152",
		"Type": "movie",
		"DVD": "01 Feb 2013",
		"BoxOffice": "$39,046,489",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Poor Things",
		"Year": "2023",
		"Rated": "R",
		"Released": "27 Feb 2024",
		"Runtime": "141 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Yorgos Lanthimos",
		"Writer": "Tony McNamara, Alasdair Gray",
		"Actors": "Emma Stone, Mark Ruffalo, Willem Dafoe",
		"Plot": "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
		"Language": "English, French, Portuguese",
		"Country": "Ireland, United Kingdom, United States, Hungary",
		"Awards": "Nominated for 11 Oscars. 93 wins & 408 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "8.3",
		"imdbVotes": "114,478",
		"imdbID": "tt14230458",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$32,970,641",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Quantum of Solace",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "14 Nov 2008",
		"Runtime": "106 min",
		"Genre": "Action, Adventure, Mystery",
		"Director": "Marc Forster",
		"Writer": "Paul Haggis, Neal Purvis, Robert Wade",
		"Actors": "Daniel Craig, Olga Kurylenko, Mathieu Amalric",
		"Plot": "Is there solace in revenge? James Bond (Daniel Craig) and M (Dame Judi Dench) sniff a shadowy international network of power and corruption reaping billions. As Bond pursues the agents of an assassination attempt on M, all roads lead to Dominic Greene (Mathieu Amalric), a world-renowned developer of green technology. Greene, a nasty piece of work, is intent on securing a barren area of Bolivia in exchange for helping a strongman stage a coup there. The C.I.A. looks the other way, and only Bond, with help from a retired spy and a mysterious beauty, stands in Greene's way. M wonders if she can trust Bond, or if vengeance possesses him. Can anyone drawn to Bond live to tell the tale?",
		"Language": "English, Spanish, Italian, French, Swiss German, German",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 BAFTA 4 wins & 32 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzhjYzlmYjQtYmU0Yy00NjNkLWFmOTQtZjQxZWU4NjY1Y2M4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.6",
		"imdbVotes": "468,161",
		"imdbID": "tt0830515",
		"Type": "movie",
		"DVD": "15 Jan 2017",
		"BoxOffice": "$168,368,427",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Reptile",
		"Year": "2023",
		"Rated": "R",
		"Released": "29 Sep 2023",
		"Runtime": "134 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Grant Singer",
		"Writer": "Grant Singer, Benjamin Brewer, Benicio Del Toro",
		"Actors": "Benicio Del Toro, Justin Timberlake, Eric Bogosian",
		"Plot": "Tom Nichols is a hardened New England detective, unflinching in his pursuit of a case where nothing is as it seems and it begins to dismantle the illusions in his own life.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTA0MmNhNzUtZjVhNC00MmM5LWExYzYtZmQ0ZWEwZTIxMGExXkEyXkFqcGdeQXVyODMyNDEyNjM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.8",
		"imdbVotes": "84,092",
		"imdbID": "tt13274016",
		"Type": "movie",
		"DVD": "29 Sep 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Skyfall",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "09 Nov 2012",
		"Runtime": "143 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Sam Mendes",
		"Writer": "Neal Purvis, Robert Wade, John Logan",
		"Actors": "Daniel Craig, Javier Bardem, Naomie Harris",
		"Plot": "When James Bond's (Daniel Craig's) latest assignment goes gravely wrong and Agents around the world are exposed, MI6 is attacked, forcing (M Dame Judi Dench) to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory (Ralph Fiennes), the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows, aided only by field agent, Miss Eve Moneypenny (Naomie Harris), following a trail to the mysterious Tiago Rodriguez, a.k.a. Raoul Silva (Javier Bardem), whose lethal and hidden motives have yet to reveal themselves.",
		"Language": "English, Turkish, Shanghainese, Portuguese, Japanese",
		"Country": "United Kingdom, United States, Turkey",
		"Awards": "Won 2 Oscars. 69 wins & 125 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "7.8",
		"imdbVotes": "727,045",
		"imdbID": "tt1074638",
		"Type": "movie",
		"DVD": "04 Feb 2017",
		"BoxOffice": "$304,360,277",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pirates of the Caribbean: On Stranger Tides",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "20 May 2011",
		"Runtime": "136 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Rob Marshall",
		"Writer": "Ted Elliott, Terry Rossio, Stuart Beattie",
		"Actors": "Johnny Depp, Penélope Cruz, Ian McShane",
		"Plot": "Captain Jack Sparrow (Johnny Depp) crosses paths with a woman from his past, Angelica (Penélope Cruz), and he's not sure if it's love, or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard (Ian McShane), Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
		"Language": "English, Spanish",
		"Country": "United States, United Kingdom",
		"Awards": "3 wins & 31 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.6",
		"imdbVotes": "560,613",
		"imdbID": "tt1298650",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$241,071,802",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Society of the Snow",
		"Year": "2023",
		"Rated": "R",
		"Released": "04 Jan 2024",
		"Runtime": "144 min",
		"Genre": "Adventure, Biography, Drama",
		"Director": "J.A. Bayona",
		"Writer": "Jaime Marques, Nicolás Casariego, Pablo Vierci",
		"Actors": "Enzo Vogrincic, Agustín Pardella, Matías Recalt",
		"Plot": "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.",
		"Language": "Spanish",
		"Country": "Spain, Chile, Uruguay, United States",
		"Awards": "Nominated for 2 Oscars. 39 wins & 65 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmI4MTllYTItMjllYi00ZTY2LWE0NmQtNjBmZWQ2ZmE4NjQ2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.8",
		"imdbVotes": "119,514",
		"imdbID": "tt16277242",
		"Type": "movie",
		"DVD": "04 Jan 2024",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Revolver",
		"Year": "2005",
		"Rated": "R",
		"Released": "22 Sep 2005",
		"Runtime": "111 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Guy Ritchie",
		"Writer": "Luc Besson, Guy Ritchie",
		"Actors": "Jason Statham, Ray Liotta, André 3000",
		"Plot": "After seven years in solitary, Jake Green is released from prison. In the next two years, he amasses a lot of money by gambling. He's ready to seek his revenge on Dorothy (Mr. D) Macha, a violence-prone casino owner who sent Jake to prison. He humiliates Macha in front of Macha's lieutenants, leaves, and keels over. Doctors tell him he has a rare disease and will die in three days; Macha also puts a hit out on him. Loan sharks, Zack and Avi, demand Jake's cash and complete fealty in return for protection. Jake complies, and through narration and flashbacks, we watch him through at least three days of schemes, danger, and redemption. Who is his greatest enemy?",
		"Language": "English, Cantonese",
		"Country": "United Kingdom, France",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1OTA3MjM4MF5BMl5BanBnXkFtZTYwMTMxODc4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "15%"
			},
			{
				"Source": "Metacritic",
				"Value": "25/100"
			}
		],
		"Metascore": "25",
		"imdbRating": "6.3",
		"imdbVotes": "101,489",
		"imdbID": "tt0365686",
		"Type": "movie",
		"DVD": "01 Apr 2009",
		"BoxOffice": "$84,738",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Saltburn",
		"Year": "2023",
		"Rated": "R",
		"Released": "22 Dec 2023",
		"Runtime": "131 min",
		"Genre": "Comedy, Drama, Thriller",
		"Director": "Emerald Fennell",
		"Writer": "Emerald Fennell",
		"Actors": "Barry Keoghan, Jacob Elordi, Rosamund Pike",
		"Plot": "A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 5 BAFTA 13 wins & 96 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2NmMDQ1ZWEtNDU4OS00MGIxLWEyMGMtMTM2YmFkYzNhYmMxXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "71%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.0",
		"imdbVotes": "191,224",
		"imdbID": "tt17351924",
		"Type": "movie",
		"DVD": "22 Dec 2023",
		"BoxOffice": "$11,425,829",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scott Pilgrim vs. the World",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "13 Aug 2010",
		"Runtime": "112 min",
		"Genre": "Action, Comedy, Fantasy",
		"Director": "Edgar Wright",
		"Writer": "Michael Bacall, Edgar Wright, Bryan Lee O'Malley",
		"Actors": "Michael Cera, Mary Elizabeth Winstead, Kieran Culkin",
		"Plot": "Scott Pilgrim plays in a band which aspires to success. He dates Knives Chau, a high-school girl five years younger, and he hasn't recovered from being dumped by his former girlfriend, now a success with her own band. When Scott falls for Ramona Flowers, he has trouble breaking up with Knives and tries to romance Ramona. As if juggling two women wasn't enough, Ramona comes with baggage: seven ex-lovers, with each of whom Scott must do battle to the death in order to win Ramona.",
		"Language": "English",
		"Country": "United States, United Kingdom, Canada, Japan",
		"Awards": "18 wins & 65 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWI5ODc4MTAtN2U2NC00ZDk3LWE3NjAtNjIyODE2YTlhYjYwXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.6",
		"imdbVotes": "463,450",
		"imdbID": "tt0446029",
		"Type": "movie",
		"DVD": "15 Jun 2012",
		"BoxOffice": "$33,391,900",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Retribution",
		"Year": "2023",
		"Rated": "R",
		"Released": "25 Aug 2023",
		"Runtime": "91 min",
		"Genre": "Action, Thriller",
		"Director": "Nimród Antal",
		"Writer": "Alberto Marini, Christopher Salmanpour",
		"Actors": "Liam Neeson, Noma Dumezweni, Lilly Aspell",
		"Plot": "A bank executive receives a bomb threat while driving his children to school that his car will explode if they stop and get out.",
		"Language": "English, German",
		"Country": "France, Germany, Spain, United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTEwYTMyNmUtNmU5OS00NTg2LTk4ZjEtOGJlZWViMWFlMjY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "29%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.3",
		"imdbVotes": "17,939",
		"imdbID": "tt6906292",
		"Type": "movie",
		"DVD": "15 Sep 2023",
		"BoxOffice": "$6,937,696",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sisu",
		"Year": "2022",
		"Rated": "R",
		"Released": "28 Apr 2023",
		"Runtime": "91 min",
		"Genre": "Action, War",
		"Director": "Jalmari Helander",
		"Writer": "Jalmari Helander",
		"Actors": "Jorma Tommila, Aksel Hennie, Jack Doolan",
		"Plot": "When an ex-soldier who discovers gold in the Lapland wilderness tries to take the loot into the city, Nazi soldiers led by a brutal SS officer battle him.",
		"Language": "English, Finnish",
		"Country": "Finland, United Kingdom, United States",
		"Awards": "6 wins & 13 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWYwMzNkOWEtNjA3YS00YjE5LTlkMjYtMmRjMjExNjA1NDM0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "6.9",
		"imdbVotes": "71,982",
		"imdbID": "tt14846026",
		"Type": "movie",
		"DVD": "16 May 2023",
		"BoxOffice": "$7,265,622",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Romancing the Stone",
		"Year": "1984",
		"Rated": "PG",
		"Released": "30 Mar 1984",
		"Runtime": "106 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Robert Zemeckis",
		"Writer": "Diane Thomas, Lem Dobbs, Howard Franklin",
		"Actors": "Michael Douglas, Kathleen Turner, Danny DeVito",
		"Plot": "Joan Wilder, a mousy romance novelist, receives a treasure map in the mail from her recently murdered brother-in-law. Meanwhile, her sister Elaine is kidnapped in Colombia and the two criminals responsible demand that she travel to Colombia to exchange the map for her sister. Joan does, and quickly becomes lost in the jungle after being waylayed by Zolo, a vicious and corrupt Colombian cop who will stop at nothing to obtain the map. There, she meets an irreverent soldier-of-fortune named Jack Colton who agrees to bring her back to civilization. Together, they embark upon an adventure that could be straight out of Joan's novels.",
		"Language": "English, Spanish, French",
		"Country": "United States, Mexico",
		"Awards": "Nominated for 1 Oscar. 8 wins & 7 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWIwNWNmMWMtYzc4MC00ZTRhLTk1MDUtYTk3OGY0YTQ1NTUxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "6.9",
		"imdbVotes": "102,405",
		"imdbID": "tt0088011",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$76,572,238",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pulp Fiction",
		"Year": "1994",
		"Rated": "R",
		"Released": "14 Oct 1994",
		"Runtime": "154 min",
		"Genre": "Crime, Drama",
		"Director": "Quentin Tarantino",
		"Writer": "Quentin Tarantino, Roger Avary",
		"Actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
		"Plot": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
		"Language": "English, Spanish, French",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 69 wins & 72 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "95/100"
			}
		],
		"Metascore": "95",
		"imdbRating": "8.9",
		"imdbVotes": "2,202,387",
		"imdbID": "tt0110912",
		"Type": "movie",
		"DVD": "21 Apr 2016",
		"BoxOffice": "$107,928,762",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scouts Guide to the Zombie Apocalypse",
		"Year": "2015",
		"Rated": "R",
		"Released": "30 Oct 2015",
		"Runtime": "93 min",
		"Genre": "Action, Comedy, Horror",
		"Director": "Christopher Landon",
		"Writer": "Carrie Lee Wilson, Emi Mochizuki, Christopher Landon",
		"Actors": "Tye Sheridan, Logan Miller, Joey Morgan",
		"Plot": "A reckless janitor accidentally releases a zombie from a laboratory of research. Meanwhile, the teenagers scouts Ben Goudy and Carter Grant decide to camp for the last time since they are too old to be scouts. The problem is that they do not want to harm the feelings of their friend Augie Foster and the Scout Leader Rogers. They have a flat tire after hitting a deer on the road and Carter's sister Kendall Grant, her boyfriend and her friend Chloe stop their Jeep to see whether they need a ride. They invite Ben and Carter to go to a party in the night. The two scouts leave the camping during the night to go to the party. When they drive through the town, they do not see a living soul and they decide to visit a night-club since the bouncer is not at the door. They discover that people have turned into zombies and they team-up with Ben's recent acquaintance Denise Russo, who is bartender in the nightclub, and Augie that was left alone at the camp and came to the town. Soon they discover that the non-infected inhabitants have been evacuated and the town will be bombed by the government. They decide to rescue Kendall but they find that the address her boyfriend gave to them is wrong. What can they do to save Kendall?",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NjczNjE4OV5BMl5BanBnXkFtZTgwODk0MjQ5NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "44%"
			},
			{
				"Source": "Metacritic",
				"Value": "32/100"
			}
		],
		"Metascore": "32",
		"imdbRating": "6.3",
		"imdbVotes": "54,233",
		"imdbID": "tt1727776",
		"Type": "movie",
		"DVD": "04 Jun 2016",
		"BoxOffice": "$3,703,046",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Shanghai Knights",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "07 Feb 2003",
		"Runtime": "114 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "David Dobkin",
		"Writer": "Alfred Gough, Miles Millar",
		"Actors": "Jackie Chan, Owen Wilson, Fann Wong",
		"Plot": "When a Chinese rebel murders Chon's estranged father and escapes to England, Chon and Roy make their way to London with revenge on their minds. Chon's sister, Lin, has the same idea, and uncovers a worldwide conspiracy to murder the royal family but almost no one will believe her.",
		"Language": "English, Mandarin",
		"Country": "Hong Kong, United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTg3N2IwNWMtODkwNi00NTE1LWI4MzMtYzI5ZDU4MGE4NjBkXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "66%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.2",
		"imdbVotes": "111,782",
		"imdbID": "tt0300471",
		"Type": "movie",
		"DVD": "22 Mar 2016",
		"BoxOffice": "$60,476,872",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Safe",
		"Year": "2012",
		"Rated": "R",
		"Released": "27 Apr 2012",
		"Runtime": "94 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Boaz Yakin",
		"Writer": "Boaz Yakin",
		"Actors": "Jason Statham, Catherine Chan, Chris Sarandon",
		"Plot": "In China, the girl Mei is a genius that looks like a computer in numbers. She is abducted by the Chinese Triads and the boss Han Jiao takes Mei to New York's Chinatown in order to help him in his criminal activities. Meanwhile, the fighter Luke Wright has his life destroyed when he wins a fight against the will of the Russian Mafia and accidentally kills his opponent. The Russian mobsters kill his wife and the alcoholic Luke wanders aimlessly on the streets and homeless shelters. One day, Han Jiao asks Mei to memorize a long number and soon the Russian Mafia abducts the girl from the Chinese mobs. She escapes from the mobsters and is chased by the Russians; by the corrupt detectives from the NYPD; and by the Triads. When Luke sees the girl fleeing from the Russian mobs in the subway, he protects the girl and discovers that the number she had memorized is the combination of a safe where the Triads keep 30 million dollars. Luke is an elite agent and uses his skills to protect the girl.",
		"Language": "English, Mandarin, Russian",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcxNDI0NzUxMF5BMl5BanBnXkFtZTcwOTIzMjkyNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "60%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "6.5",
		"imdbVotes": "116,780",
		"imdbID": "tt1656190",
		"Type": "movie",
		"DVD": "19 Apr 2014",
		"BoxOffice": "$17,142,080",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Pride and Prejudice",
		"Year": "1995",
		"Rated": "TV-PG",
		"Released": "14 Jan 1996",
		"Runtime": "327 min",
		"Genre": "Drama, Romance",
		"Director": "N/A",
		"Writer": "N/A",
		"Actors": "Colin Firth, Jennifer Ehle, Susannah Harker",
		"Plot": "Jane Austen's classic novel about the prejudice that occurred between the 19th century classes and the pride which would keep lovers apart.",
		"Language": "English",
		"Country": "United Kingdom",
		"Awards": "Won 1 Primetime Emmy. 9 wins & 13 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.8/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "8.8",
		"imdbVotes": "91,396",
		"imdbID": "tt0112130",
		"Type": "series",
		"totalSeasons": "1",
		"Response": "True"
	},
	{
		"Title": "Poseidon",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "12 May 2006",
		"Runtime": "98 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Wolfgang Petersen",
		"Writer": "Mark Protosevich, Paul Gallico",
		"Actors": "Richard Dreyfuss, Kurt Russell, Emmy Rossum",
		"Plot": "It is New Year's Eve, and over 2,000 passengers &amp; crew are ringing in the New Year aboard the huge cruise ship 'Poseidon' when it capsizes on the open sea in the middle of the North Atlantic Ocean! A small group of survivors find themselves unlikely allies in a battle for their lives. Preferring to test the odds alone, career gambler Dylan Johns ignores captain's orders to wait below for possible rescue and sets out to find his own way to safety. What begins as a solo mission soon draws others, as Dylan is followed by a desperate father searching for his daughter and her fiancée--a young couple who hours before couldn't summon the courage to tell him they were engaged and now face much graver challenges. Along the way they are joined by a single mother and her wise-beyond-his-years son, an anxious stowaway and a despondent fellow passenger who boarded the ship not sure he wanted to live but now knows he doesn't want to die. Determined to fight their way to the surface, the group sets off through the disorienting maze of twisted steel in the upside-down wreckage. As the unstable vessel rapidly fills with water each must draw on skills and strengths they didn't even know they possessed, fighting against time for their own survival and for each other.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 7 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTIwOTMwODM2Nl5BMl5BanBnXkFtZTYwMDY5NjU3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "5.7",
		"imdbVotes": "109,950",
		"imdbID": "tt0409182",
		"Type": "movie",
		"DVD": "24 Jul 2014",
		"BoxOffice": "$60,674,817",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Savages",
		"Year": "2012",
		"Rated": "R",
		"Released": "06 Jul 2012",
		"Runtime": "131 min",
		"Genre": "Action, Crime, Drama",
		"Director": "Oliver Stone",
		"Writer": "Shane Salerno, Don Winslow, Oliver Stone",
		"Actors": "Aaron Taylor-Johnson, Taylor Kitsch, Blake Lively",
		"Plot": "In California, the former Navy SEAL Chon and his best friend, the peaceful botanist Ben, are successful entrepreneurs producing and dealing high-quality weed. Chon brought seeds from Afghanistan and Ben used his knowledge to develop the best marijuana in the country. Chon and Ben share the pothead lover Ophelia and she loves both of them since they complete each other - Chon is a powerful and strong lover and Ben is a sensible and loving lover. Their comfortable life changes when the Mexican Baja Cartel demands a partnership in their business. Chon and Ben refuse the deal and the leader of the cartel Elena sends her right-arm in America, Lado, to abduct Ophelia to press the American drug dealers. Chon and Ben ask the support of the dirty DEA Agent Dennis and get inside information to begin a secret war against the Baja Cartel to release Ophelia.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk0ODIyNDAyMF5BMl5BanBnXkFtZTcwMTQ5Nzg3Nw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "50%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "6.4",
		"imdbVotes": "133,998",
		"imdbID": "tt1615065",
		"Type": "movie",
		"DVD": "10 Dec 2015",
		"BoxOffice": "$47,382,068",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Scary Movie 3",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "24 Oct 2003",
		"Runtime": "84 min",
		"Genre": "Comedy",
		"Director": "David Zucker",
		"Writer": "Craig Mazin, Pat Proft, Shawn Wayans",
		"Actors": "Anna Faris, Charlie Sheen, Regina Hall",
		"Plot": "A mysterious killer video tape is circulating around. One look at this tape and you have seven days left to live. News Reporter Cindy Campbell (Faris) witnesses this video tape and tries to work out a way to prevent her death. But this is not the only mystery to appear. Crop circles have been appearing in the local farm of Tom (Sheen) and George (Rex). With help from Aunt Shaneequa (Latifah), Cindy suspects that the aliens may be linked with the killer tape and must now work out both mysteries before it's the end of the world.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "35%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "5.5",
		"imdbVotes": "157,530",
		"imdbID": "tt0306047",
		"Type": "movie",
		"DVD": "08 Oct 2016",
		"BoxOffice": "$110,003,217",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Seven Psychopaths",
		"Year": "2012",
		"Rated": "R",
		"Released": "12 Oct 2012",
		"Runtime": "110 min",
		"Genre": "Comedy, Crime",
		"Director": "Martin McDonagh",
		"Writer": "Martin McDonagh",
		"Actors": "Colin Farrell, Woody Harrelson, Sam Rockwell",
		"Plot": "A struggling screenwriter (Colin Farrell) inadvertently becomes entangled in the Los Angeles criminal underworld after his friends (Christopher Walken and Sam Rockwell) kidnap a gangster's (Woody Harrelson) beloved Shih Tzu.",
		"Language": "English, Vietnamese",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 1 BAFTA Award3 wins & 21 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMzUxMjc0M15BMl5BanBnXkFtZTcwMzQ2MjYyOA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "66/100"
			}
		],
		"Metascore": "66",
		"imdbRating": "7.1",
		"imdbVotes": "272,543",
		"imdbID": "tt1931533",
		"Type": "movie",
		"DVD": "01 Oct 2015",
		"BoxOffice": "$15,024,049",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Shazam! Fury of the Gods",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "17 Mar 2023",
		"Runtime": "130 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "David F. Sandberg",
		"Writer": "Henry Gayden, Chris Morgan, Bill Parker",
		"Actors": "Zachary Levi, Asher Angel, Jack Dylan Grazer",
		"Plot": "The film continues the story of teenage Billy Batson who, upon reciting the magic word \"SHAZAM!\" is transformed into his adult Super Hero alter ego, Shazam.",
		"Language": "English",
		"Country": "United States",
		"Awards": "5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "49%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "5.9",
		"imdbVotes": "122,312",
		"imdbID": "tt10151854",
		"Type": "movie",
		"DVD": "07 Apr 2023",
		"BoxOffice": "$57,638,006",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Snatch",
		"Year": "2000",
		"Rated": "R",
		"Released": "19 Jan 2001",
		"Runtime": "102 min",
		"Genre": "Comedy, Crime",
		"Director": "Guy Ritchie",
		"Writer": "Guy Ritchie",
		"Actors": "Jason Statham, Brad Pitt, Stephen Graham",
		"Plot": "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Mickey, who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off of Travellers. They then try to convince Mickey not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog.",
		"Language": "English, Russian",
		"Country": "United Kingdom, United States",
		"Awards": "4 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "8.2",
		"imdbVotes": "905,585",
		"imdbID": "tt0208092",
		"Type": "movie",
		"DVD": "01 Mar 2011",
		"BoxOffice": "$30,328,156",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sound of Freedom",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "04 Jul 2023",
		"Runtime": "131 min",
		"Genre": "Biography, Crime, Drama",
		"Director": "Alejandro Monteverde",
		"Writer": "Rod Barr, Alejandro Monteverde",
		"Actors": "Jim Caviezel, Mira Sorvino, Bill Camp",
		"Plot": "The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from traffickers.",
		"Language": "English, Spanish",
		"Country": "Mexico, United States",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTAwNWQ1ZjQtZDFmMC00YjNlLWFlNjItMjJlYzZkMjJlNzkyXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Metacritic",
				"Value": "43/100"
			}
		],
		"Metascore": "43",
		"imdbRating": "7.7",
		"imdbVotes": "108,113",
		"imdbID": "tt7599146",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$184,178,046",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Spotlight",
		"Year": "2015",
		"Rated": "R",
		"Released": "20 Nov 2015",
		"Runtime": "129 min",
		"Genre": "Biography, Crime, Drama",
		"Director": "Tom McCarthy",
		"Writer": "Josh Singer, Tom McCarthy",
		"Actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams",
		"Plot": "When the Boston Globe's tenacious \"Spotlight\" team of reporters delves into allegations of abuse in the Catholic Church, their year-long investigation uncovers a decades-long cover-up at the highest levels of Boston's religious, legal, and government establishment, touching off a wave of revelations around the world.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 124 wins & 144 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			},
			{
				"Source": "Metacritic",
				"Value": "93/100"
			}
		],
		"Metascore": "93",
		"imdbRating": "8.1",
		"imdbVotes": "499,420",
		"imdbID": "tt1895587",
		"Type": "movie",
		"DVD": "02 Feb 2016",
		"BoxOffice": "$45,055,776",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Star Trek Into Darkness",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "16 May 2013",
		"Runtime": "132 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "J.J. Abrams",
		"Writer": "Roberto Orci, Alex Kurtzman, Damon Lindelof",
		"Actors": "Chris Pine, Zachary Quinto, Zoe Saldana",
		"Plot": "When the USS Enterprise crew is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction. As our space heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
		"Language": "English, Klingon",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 7 wins & 58 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.7",
		"imdbVotes": "495,435",
		"imdbID": "tt1408101",
		"Type": "movie",
		"DVD": "14 May 2015",
		"BoxOffice": "$228,778,661",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Riddick",
		"Year": "2013",
		"Rated": "R",
		"Released": "06 Sep 2013",
		"Runtime": "119 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "David Twohy",
		"Writer": "David Twohy, Jim Wheat, Ken Wheat",
		"Actors": "Vin Diesel, Karl Urban, Katee Sackhoff",
		"Plot": "The infamous Riddick has been left for dead on a sun-scorched planet that appears to be lifeless. Soon, however, he finds himself fighting for survival against alien predators more lethal than any human he's encountered. The only way off is for Riddick to activate an emergency beacon and alert mercenaries who rapidly descend to the planet in search of their bounty. The first ship to arrive carries a new breed of merc, more lethal and violent, while the second is captained by a man whose pursuit of Riddick is more personal. With time running out and a storm on the horizon that no one could survive, his hunters won't leave the planet without Riddick's head as their trophy.",
		"Language": "English",
		"Country": "Canada, United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk5NzYwMzQ4MV5BMl5BanBnXkFtZTcwMjE5MTI1OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "6.4",
		"imdbVotes": "176,962",
		"imdbID": "tt1411250",
		"Type": "movie",
		"DVD": "09 Dec 2015",
		"BoxOffice": "$42,025,135",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Parasite",
		"Year": "2019",
		"Rated": "R",
		"Released": "08 Nov 2019",
		"Runtime": "132 min",
		"Genre": "Drama, Thriller",
		"Director": "Bong Joon Ho",
		"Writer": "Bong Joon Ho, Han Jin-won",
		"Actors": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
		"Plot": "The Kims - mother and father Chung-sook and Ki-taek, and their young adult offspring, son Ki-woo and daughter Ki-jung - are a poor family living in a shabby and cramped half basement apartment in a busy lower working class commercial district of Seoul. Without even knowing it, they, especially Mr. and Mrs. Kim, literally smell of poverty. Often as a collective, they perpetrate minor scams to get by, and even when they have jobs, they do the minimum work required. Ki-woo is the one who has dreams of getting out of poverty by one day going to university. Despite not having that university education, Ki-woo is chosen by his university student friend Min, who is leaving to go to school, to take over his tutoring job to Park Da-hye, who Min plans to date once he returns to Seoul and she herself is in university. The Parks are a wealthy family who for four years have lived in their modernistic house designed by and the former residence of famed architect Namgoong. While Mr. and Mrs. Park are all about status, Mrs. Park has a flighty, simpleminded mentality and temperament, which Min tells Ki-woo to feel comfortable in lying to her about his education to get the job. In getting the job, Ki-woo further learns that Mrs. Park is looking for an art therapist for the Parks' adolescent son, Da-song, Ki-woo quickly recommending his professional art therapist friend \"Jessica\", really Ki-jung who he knows can pull off the scam in being the easiest liar of the four Kims. In Ki-woo also falling for Da-hye, he begins to envision himself in that house, and thus the Kims as a collective start a plan for all the Kims, like Ki-jung using assumed names, to replace existing servants in the Parks' employ in orchestrating reasons for them to be fired. The most difficult to get rid of may be Moon-gwang, the Parks' housekeeper who literally came with the house - she Namgoong's housekeeper when he lived there - and thus knows all the little nooks and crannies of it better than the Parks themselves. The question then becomes how far the Kims can take this scam in their quest to become their version of the Parks.",
		"Language": "Korean, English",
		"Country": "South Korea",
		"Awards": "Won 4 Oscars. 309 wins & 265 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "99%"
			},
			{
				"Source": "Metacritic",
				"Value": "96/100"
			}
		],
		"Metascore": "96",
		"imdbRating": "8.5",
		"imdbVotes": "932,313",
		"imdbID": "tt6751668",
		"Type": "movie",
		"DVD": "11 Oct 2019",
		"BoxOffice": "$53,369,749",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Snatched",
		"Year": "2017",
		"Rated": "R",
		"Released": "12 May 2017",
		"Runtime": "90 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Jonathan Levine",
		"Writer": "Katie Dippold",
		"Actors": "Amy Schumer, Goldie Hawn, Kim Caramele",
		"Plot": "Freshly dumped by her musician boyfriend and fired from her job, all on the same day, suddenly, the rudderless thirtysomething, Emily Middleton, finds herself with two non-refundable tickets to Ecuador. Finding hard to swallow that she is about to lose the trip of a lifetime, Emily turns to the only person left to come with her: her idiosyncratic, phobic, and cat-loving mother, Linda. But, there, the dream holiday soon turns into an Equatorial nightmare when the mother-and-daughter duo ends up conned and abducted in broad daylight. Now, to stay alive, scaredy-cat Linda and impulsive Emily will need to set aside their differences, and like a fish out of water, navigate through dense jungle thickets. But, can they make it happen?",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTI5NWY1YTQtODYxMi00M2VmLTgzNDQtMGM3NWU5YjViNDE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "36%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "4.7",
		"imdbVotes": "37,496",
		"imdbID": "tt2334871",
		"Type": "movie",
		"DVD": "10 Jul 2017",
		"BoxOffice": "$45,852,178",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Stargate",
		"Year": "1994",
		"Rated": "PG-13",
		"Released": "28 Oct 1994",
		"Runtime": "116 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Roland Emmerich",
		"Writer": "Dean Devlin, Roland Emmerich",
		"Actors": "Kurt Russell, James Spader, Jaye Davidson",
		"Plot": "In 1928, in Egypt, a strange device is found by an expedition. In the present days, the outcast linguist Dr. Daniel Jackson is invited by a mysterious woman to decipher an ancient hieroglyph in a military facility. Soon he finds that the device was developed by an advanced civilization and opens a portal to teletransport to another planet. Dr. Jackson is invited to join a military team under the command of Colonel Jonathan 'Jack' O'Neil that will explore the new world. They find a land that recalls Egypt and humans in a primitive culture that worship and are slaves to Ra, the God of the Sun. But soon they discover the secret of the mysterious \"stargate\".",
		"Language": "English, Norwegian, Swedish, Egyptian (Ancient), Arabic",
		"Country": "United States, France",
		"Awards": "6 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmIwNTg1ODItMTc0MC00MjAzLWFmOWUtYWIwMDI0ZmYxMTNhXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "7.0",
		"imdbVotes": "204,177",
		"imdbID": "tt0111282",
		"Type": "movie",
		"DVD": "26 Aug 2016",
		"BoxOffice": "$71,567,262",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Steve Jobs",
		"Year": "2015",
		"Rated": "R",
		"Released": "23 Oct 2015",
		"Runtime": "122 min",
		"Genre": "Biography, Drama",
		"Director": "Danny Boyle",
		"Writer": "Aaron Sorkin, Walter Isaacson",
		"Actors": "Michael Fassbender, Kate Winslet, Seth Rogen",
		"Plot": "His passion and ingenuity have been the driving force behind the digital age. However his drive to revolutionize technology was sacrificial. Ultimately it affected his family life and possibly his health. In this revealing film we explore the trials and triumphs of a modern day genius, the late CEO of Apple inc. Steven Paul Jobs.",
		"Language": "English, Ukrainian",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 Oscars. 28 wins & 115 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NTA2MTEwOV5BMl5BanBnXkFtZTgwNzg4NzU2NjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "7.2",
		"imdbVotes": "177,476",
		"imdbID": "tt2080374",
		"Type": "movie",
		"DVD": "06 Sep 2016",
		"BoxOffice": "$17,766,658",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Stealth",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "29 Jul 2005",
		"Runtime": "121 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Rob Cohen",
		"Writer": "W.D. Richter",
		"Actors": "Josh Lucas, Jessica Biel, Jamie Foxx",
		"Plot": "In the near future, the Navy develops a fighter jet piloted by an artificial intelligence computer. The jet is placed on an aircraft carrier in the Pacific to learn combat manuevers from the human pilots aboard. But when the computer develops a mind of its own, it's the humans who are charged with stopping it before it incites a war...",
		"Language": "English, Korean, Russian, Spanish",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWE3ZDRlZGItMDY1ZC00YWQ1LWJlZDgtMjFhZGRkYjMwZjBkXkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "13%"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "5.1",
		"imdbVotes": "55,974",
		"imdbID": "tt0382992",
		"Type": "movie",
		"DVD": "01 Jan 2012",
		"BoxOffice": "$32,116,746",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taxi 5",
		"Year": "2018",
		"Rated": "N/A",
		"Released": "11 Apr 2018",
		"Runtime": "102 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Franck Gastambide",
		"Writer": "Franck Gastambide, Stéphane Kazandjian, Luc Besson",
		"Actors": "Franck Gastambide, Malik Bentalha, Bernard Farcy",
		"Plot": "A police officer who's transferred in the police of Marseilles gets assigned to take down a group of Italian robbers who drive the powerful Ferraris with the older nephew of Daniel, a terrible driver who gets the legendary white taxi.",
		"Language": "French, Italian",
		"Country": "France",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODMxNDA4MTYtMWMzMi00MTllLWIyMGQtNTY1OGY3M2M4NThmXkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "0%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "4.7",
		"imdbVotes": "10,545",
		"imdbID": "tt7238392",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taxi",
		"Year": "1998",
		"Rated": "Not Rated",
		"Released": "20 Nov 1998",
		"Runtime": "89 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Gérard Pirès",
		"Writer": "Luc Besson",
		"Actors": "Samy Naceri, Frédéric Diefenthal, Marion Cotillard",
		"Plot": "In Marseilles (France), skilled pizza delivery boy Daniel who drives a scooter finally has his dreams come true. He gets a taxi license. Caught by the police for a huge speed infraction, he will help Emilien, a loser inspector who can't drive, on the track of German bank robbers, so he doesn't lose his license and his dream job.",
		"Language": "French, German, Korean, Portuguese",
		"Country": "France",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODFmMWY3ZWQtMTBhNy00MzE4LWIxODYtNTFmMzczMzY1YmNjXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.0",
		"imdbVotes": "88,823",
		"imdbID": "tt0152930",
		"Type": "movie",
		"DVD": "28 Sep 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Street Kings",
		"Year": "2008",
		"Rated": "R",
		"Released": "11 Apr 2008",
		"Runtime": "109 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "David Ayer",
		"Writer": "James Ellroy, Kurt Wimmer, Jamie Moss",
		"Actors": "Keanu Reeves, Forest Whitaker, Hugh Laurie",
		"Plot": "LAPD detective Tom Ludlow is a ruthlessly efficient, unorthodox undercover cop. Captain Jack Wander always covers for Ludlow, as do even his somewhat jealous colleagues. After technically excessive violence against a vicious Korean gang during the liberation of kidnapped child sex slaves, Ludlow becomes the target of hotshot Internal Affairs captain James Biggs, who feels passed over after Wander's promotion to chief. Ludlow's ex-patrol partner, Terrence Washington, sides with IA but is killed during a shop robbery in Ludlow's presence. Ludlow works his way through the twisted rungs of the police and the deadly streets of Los Angeles for answers that lead to more and more questions.",
		"Language": "English, Turkish",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOThlNTUxOTItNzlhYi00YWQ4LTgzYTgtZWZiNWIyZjQyZDhlXkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "38%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "6.8",
		"imdbVotes": "120,164",
		"imdbID": "tt0421073",
		"Type": "movie",
		"DVD": "12 Dec 2015",
		"BoxOffice": "$26,418,667",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Thank You for Smoking",
		"Year": "2005",
		"Rated": "R",
		"Released": "14 Apr 2006",
		"Runtime": "92 min",
		"Genre": "Comedy, Drama",
		"Director": "Jason Reitman",
		"Writer": "Jason Reitman, Christopher Buckley",
		"Actors": "Aaron Eckhart, Cameron Bright, Maria Bello",
		"Plot": "The chief spokesperson and lobbyist Nick Naylor is the Vice President of the Academy of Tobacco Studies. He is talented in speaking and spins arguments to defend the cigarette industry in the most difficult situations. His best friends are Polly Bailey that works in the Moderation Council in alcohol business, and Bobby Jay Bliss of the gun business own advisory group SAFETY. They frequently meet each other in a bar and they self-title the M.O.D. Squad, a.k.a. Merchants of Death, disputing which industry has killed more people. Nick's greatest enemy is Vermont's Senator Ortolan Finistirre, who defends in the Senate the use of a skull and crossbones on cigarette packs. Nick's son Joey Naylor lives with his mother, and has the chance to know his father in a business trip. When the ambitious reporter Heather Holloway betrays Nick disclosing confidences he had in bed with her, his life turns upside-down. But Nick is good in what he does for the mortgage.",
		"Language": "English",
		"Country": "United States",
		"Awards": "12 wins & 32 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI2MDk5MjE4NV5BMl5BanBnXkFtZTYwMjkwNTU3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.5",
		"imdbVotes": "228,464",
		"imdbID": "tt0427944",
		"Type": "movie",
		"DVD": "12 Dec 2015",
		"BoxOffice": "$24,793,509",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Tales from the Crypt: Demon Knight",
		"Year": "1995",
		"Rated": "R",
		"Released": "13 Jan 1995",
		"Runtime": "92 min",
		"Genre": "Action, Fantasy, Horror",
		"Director": "Ernest R. Dickerson",
		"Writer": "Ethan Reiff, Cyrus Voris, Mark Bishop",
		"Actors": "Billy Zane, William Sadler, Jada Pinkett Smith",
		"Plot": "Brayker is a man who carries the last of seven keys, special containers which held the blood of Christ and were scattered across the universe to prevent the forces of evil from taking over. If The Collector gets the last key, the universe will fall into Chaos, and he has been tracking Brayker all the way to a small inn in a nowhere town. And now the final battle for the universe begins......",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGM3N2VmNDQtNWMwNC00MDI5LThhNzYtNTlkZjkwZTJlNTRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.7",
		"imdbVotes": "26,122",
		"imdbID": "tt0114608",
		"Type": "movie",
		"DVD": "19 Apr 2016",
		"BoxOffice": "$21,089,146",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Surviving Christmas",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "22 Oct 2004",
		"Runtime": "91 min",
		"Genre": "Comedy, Romance",
		"Director": "Mike Mitchell",
		"Writer": "Deborah Kaplan, Harry Elfont, Jennifer Ventimilia",
		"Actors": "Ben Affleck, Christina Applegate, James Gandolfini",
		"Plot": "A lonely, obnoxious young millionaire pays a family to spend Christmas with him.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcwMTI4MTY3Ml5BMl5BanBnXkFtZTcwOTUzMjcyMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "8%"
			},
			{
				"Source": "Metacritic",
				"Value": "19/100"
			}
		],
		"Metascore": "19",
		"imdbRating": "5.5",
		"imdbVotes": "27,652",
		"imdbID": "tt0252028",
		"Type": "movie",
		"DVD": "26 Dec 2016",
		"BoxOffice": "$11,663,156",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taken 2",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "05 Oct 2012",
		"Runtime": "92 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Olivier Megaton",
		"Writer": "Luc Besson, Robert Mark Kamen",
		"Actors": "Liam Neeson, Famke Janssen, Maggie Grace",
		"Plot": "The retired CIA agent Bryan Mills invites his teenage daughter Kim and his ex-wife Lenore, who has separated from her second husband, to spend a couple of days in Istanbul where he is working. Meanwhile, the patriarch of the community of the Albanian gang of human trafficking, Murad Krasniqi, seeks revenge for the death of his son and organizes another gang to kidnap Bryan and his family. Bryan and Lenore are abducted by the Albanians, but Kim escapes and is the only hope that Bryan has to escape and save Lenore.",
		"Language": "English, Turkish, Arabic",
		"Country": "France, United States, Turkey, United Kingdom",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkwNTQ0ODExOV5BMl5BanBnXkFtZTcwNjU3NDQwOA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "22%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.2",
		"imdbVotes": "320,467",
		"imdbID": "tt1397280",
		"Type": "movie",
		"DVD": "01 Aug 2014",
		"BoxOffice": "$139,854,287",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Super 8",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "10 Jun 2011",
		"Runtime": "112 min",
		"Genre": "Action, Mystery, Sci-Fi",
		"Director": "J.J. Abrams",
		"Writer": "J.J. Abrams",
		"Actors": "Elle Fanning, AJ Michalka, Kyle Chandler",
		"Plot": "SPOILER: In the summer of 1979, a group of friends in a small Ohio town witness a catastrophic train crash while making a super 8 movie and soon suspect that it was not an accident. Shortly after, unusual disappearances and inexplicable events begin to take place in town, and the local Deputy tries to uncover the truth - something more terrifying than any of them could have imagined.",
		"Language": "English",
		"Country": "United States",
		"Awards": "11 wins & 70 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIzNjEyMzcwOF5BMl5BanBnXkFtZTcwMTkyMjE0NQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "81%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.0",
		"imdbVotes": "366,486",
		"imdbID": "tt1650062",
		"Type": "movie",
		"DVD": "18 Aug 2013",
		"BoxOffice": "$127,004,179",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Sunshine",
		"Year": "2007",
		"Rated": "R",
		"Released": "27 Jul 2007",
		"Runtime": "107 min",
		"Genre": "Sci-Fi, Thriller",
		"Director": "Danny Boyle",
		"Writer": "Alex Garland",
		"Actors": "Cillian Murphy, Rose Byrne, Chris Evans",
		"Plot": "50 years into the future, the Sun begins to die, and Earth is dying as a result. A team of astronauts is sent to revive the Sun - but the mission fails. Seven years later, a new team is sent to finish the mission as mankind's last hope.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "1 win & 22 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDliNGY4ZGQtMjU5MS00ODhjLWExMDEtNzI1NmIwZDkzZWQwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "7.2",
		"imdbVotes": "266,119",
		"imdbID": "tt0448134",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$3,675,753",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taxi 2",
		"Year": "2000",
		"Rated": "Not Rated",
		"Released": "06 Oct 2000",
		"Runtime": "88 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Gérard Krawczyk",
		"Writer": "Luc Besson",
		"Actors": "Samy Naceri, Frédéric Diefenthal, Emma Wiklund",
		"Plot": "The Japanese ambassaor is visiting Marseilles to view the city police's anti-gang tactics. During the visit, however, he is kidnapped by a group working for the Japanese yakuza. Young officer Emilien is determined to rescue the ambassador and officer Petra (his girlfriend), who was also kidnapped, and restore the honor of his department. Once again, speed demon taxi-driver Daniel (from the first Taxi movie) is called upon to save the day with his high-speed driving skills.",
		"Language": "French, Japanese, German",
		"Country": "France",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4MWJiNzMtNDE5MC00YTBjLTg2M2EtMDI5NmY5ZWJlOTYxXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.5",
		"imdbVotes": "58,936",
		"imdbID": "tt0183869",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$626,164",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Book of Eli",
		"Year": "2010",
		"Rated": "R",
		"Released": "15 Jan 2010",
		"Runtime": "118 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Albert Hughes, Allen Hughes",
		"Writer": "Gary Whitta",
		"Actors": "Denzel Washington, Mila Kunis, Ray Stevenson",
		"Plot": "In a violent post-apocalyptic society, a drifter, Eli (Denzel Washington), has been wandering westward across North America for the last thirty years. He finds solace in a unique book which he carries on his person and guards closely, while surviving by hunting small animals and seeking goods in destroyed houses and vehicles to trade in villages for water and supplies. When he reaches a village ruled by the powerful mobster, Carnegie (Gary Oldman), the man views Eli's impressive fighting skills and offers Eli a place within his gang. Carnegie presses his blind lover Claudia (Jennifer Beals) to send her daughter, Solara (Mila Kunis), to at least convince Eli to spend the night by sleeping with him. However, Eli proves to be the better man when he gently declines her advances. The girl sees Eli's book, and when Carnegie finds out he beats her mother until she reveals what she saw. Carnegie sends his gang into the wasteland to take the book from Eli, but the man proves to be a formidable foe as he makes it more than clear that if they want the book, they must first take his life.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 16 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "47%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "6.8",
		"imdbVotes": "336,615",
		"imdbID": "tt1037705",
		"Type": "movie",
		"DVD": "15 Feb 2014",
		"BoxOffice": "$94,835,059",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Terminator 2: Judgment Day",
		"Year": "1991",
		"Rated": "R",
		"Released": "03 Jul 1991",
		"Runtime": "137 min",
		"Genre": "Action, Sci-Fi",
		"Director": "James Cameron",
		"Writer": "James Cameron, William Wisher",
		"Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
		"Plot": "Over 10 years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, Sarah and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Won 4 Oscars. 39 wins & 33 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "8.6",
		"imdbVotes": "1,166,834",
		"imdbID": "tt0103064",
		"Type": "movie",
		"DVD": "10 Aug 2016",
		"BoxOffice": "$205,881,154",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Talk to Me",
		"Year": "2022",
		"Rated": "R",
		"Released": "28 Jul 2023",
		"Runtime": "95 min",
		"Genre": "Horror, Thriller",
		"Director": "Danny Philippou, Michael Philippou",
		"Writer": "Danny Philippou, Bill Hinzman, Daley Pearson",
		"Actors": "Ari McCarthy, Hamish Phillips, Kit Erhart-Bruce",
		"Plot": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
		"Language": "English, Greek",
		"Country": "Australia, United Kingdom",
		"Awards": "16 wins & 34 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.1",
		"imdbVotes": "132,572",
		"imdbID": "tt10638522",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$48,299,436",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Boxtrolls",
		"Year": "2014",
		"Rated": "PG",
		"Released": "26 Sep 2014",
		"Runtime": "96 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Graham Annable, Anthony Stacchi",
		"Writer": "Irena Brignull, Adam Pava, Alan Snow",
		"Actors": "Ben Kingsley, Jared Harris, Nick Frost",
		"Plot": "THE BOXTROLLS are a community of quirky, mischievous creatures who have lovingly raised an orphaned human boy named Eggs in the amazing cavernous home they've built beneath the streets of a city called Cheesebridge. The story is about a young orphaned boy raised by underground cave-dwelling trash collectors who tries to save his friends from an evil exterminator, the town's villain, Archibald Snatcher. When Snatcher comes up with a plot to get rid of the Boxtrolls. Eggs decides to venture above ground and \"into the light,\" where he meets and teams up with fabulously feisty Winnie. Together, they devise a daring plan to save The BoxTrolls family. The film is based upon the children's novel 'Here Be Monsters' by Alan Snow.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "Nominated for 1 Oscar. 8 wins & 61 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQxODA5MDkyNV5BMl5BanBnXkFtZTgwMDMyNjkzMjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "78%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "6.8",
		"imdbVotes": "61,082",
		"imdbID": "tt0787474",
		"Type": "movie",
		"DVD": "21 Jan 2016",
		"BoxOffice": "$50,837,305",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taxi 4",
		"Year": "2007",
		"Rated": "Not Rated",
		"Released": "14 Feb 2007",
		"Runtime": "91 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Gérard Krawczyk",
		"Writer": "Luc Besson",
		"Actors": "Samy Naceri, Frédéric Diefenthal, Bernard Farcy",
		"Plot": "Unlucky, clumsy, charming Marseille PD detective Émilien Coutant-Kerbalec must assist worse-than-Clouseau commissioner Gibert guarding a Belgian criminal reputed as dangerous as - and caged like Hannibal Lector. Émilien's cool friend, taxi driver Daniel Morales, initially only agrees to babysit both their buddy-sons, as Émilien's wife Petra is away on top-secret mission. But soon the Belgian escapes, and while chasing him the mates stumble on a bank robbery and a drug king's palatial villa, where the grand finale reeks havoc.",
		"Language": "French",
		"Country": "France",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTBhNjJkYTctOWZmOC00NTNiLWE2N2YtMWM2Yzk3MjY1MDUxXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.6/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.6",
		"imdbVotes": "30,446",
		"imdbID": "tt0804540",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Terminator Salvation",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "21 May 2009",
		"Runtime": "115 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "McG",
		"Writer": "John Brancato, Michael Ferris",
		"Actors": "Christian Bale, Sam Worthington, Anton Yelchin",
		"Plot": "In 2003, in the Longview State Correctional Facility, the criminal Marcus Wright is on death row, and is convinced by the cancerous Dr. Serena Kogan to donate his body to her research and he accepts. In 2018, after an unsuccessful attack to a Skynet facility, only John Connor survives, but he discovers that Skynet is developing the powerful new model T-800. Out of the blue, Marcus appears naked and with amnesia in the location. Marcus befriends the teenager Kyle Reese and the girl Star who help him to survive the lethal machines and they travel together in a Jeep. Meanwhile the resistance discovers a signal that might turn-off the machines and John offers to test it. When Kyle is captured by a machine and brought to the Skynet headquarters, Marcus decides to help the youngster and heads to Skynet; on the way, he saves Blair Williams who suggests to him that he should meet John Connor first. But Marcus steps on a mine and is submitted to surgery, when a secret about his origins is disclosed.",
		"Language": "English, Italian",
		"Country": "United States, Germany, United Kingdom, Italy",
		"Awards": "2 wins & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "49/100"
			}
		],
		"Metascore": "49",
		"imdbRating": "6.5",
		"imdbVotes": "375,408",
		"imdbID": "tt0438488",
		"Type": "movie",
		"DVD": "22 Apr 2011",
		"BoxOffice": "$125,322,469",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taken 3",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "09 Jan 2015",
		"Runtime": "108 min",
		"Genre": "Action, Adventure, Crime",
		"Director": "Olivier Megaton",
		"Writer": "Luc Besson, Robert Mark Kamen",
		"Actors": "Liam Neeson, Forest Whitaker, Maggie Grace",
		"Plot": "Liam Neeson returns as ex-covert operative Bryan Mills, whose long awaited reconciliation with his ex-wife is tragically cut short when she is brutally murdered. Consumed with rage, and framed for the crime, he goes on the run to evade the relentless pursuit of the CIA, FBI and the police. For one last time, Mills must use his \"particular set of skills,\" to track down the real killers, exact his unique brand of justice, and protect the only thing that matters to him now - his daughter.",
		"Language": "English, Russian",
		"Country": "France, Spain, United States",
		"Awards": "3 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "13%"
			},
			{
				"Source": "Metacritic",
				"Value": "26/100"
			}
		],
		"Metascore": "26",
		"imdbRating": "6.0",
		"imdbVotes": "203,159",
		"imdbID": "tt2446042",
		"Type": "movie",
		"DVD": "01 Oct 2016",
		"BoxOffice": "$89,256,424",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Tenet",
		"Year": "2020",
		"Rated": "PG-13",
		"Released": "03 Sep 2020",
		"Runtime": "150 min",
		"Genre": "Action, Sci-Fi, Thriller",
		"Director": "Christopher Nolan",
		"Writer": "Christopher Nolan",
		"Actors": "John David Washington, Robert Pattinson, Elizabeth Debicki",
		"Plot": "In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time. The mission: prevent Andrei Sator, a renegade Russian oligarch with precognition abilities, from starting World War III. The Protagonist will soon master the art of \"time inversion\" as a way of countering the threat that is to come.",
		"Language": "English, Russian, Ukrainian, Estonian, Norwegian, Hindi",
		"Country": "United States, United Kingdom",
		"Awards": "Won 1 Oscar. 49 wins & 136 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "69%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.3",
		"imdbVotes": "579,555",
		"imdbID": "tt6723592",
		"Type": "movie",
		"DVD": "15 Dec 2020",
		"BoxOffice": "$58,504,105",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hobbit: An Unexpected Journey",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "14 Dec 2012",
		"Runtime": "169 min",
		"Genre": "Adventure, Fantasy",
		"Director": "Peter Jackson",
		"Writer": "Fran Walsh, Philippa Boyens, Peter Jackson",
		"Actors": "Martin Freeman, Ian McKellen, Richard Armitage",
		"Plot": "Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through treacherous lands swarming with Goblins and Orcs, deadly Wargs and Giant Spiders, Shapeshifters and Sorcerers. Although their goal lies to the East and the wastelands of the Lonely Mountain first they must escape the goblin tunnels, where Bilbo meets the creature that will change his life forever ... Gollum. Here, alone with Gollum, on the shores of an underground lake, the unassuming Bilbo Baggins not only discovers depths of guile and courage that surprise even him, he also gains possession of Gollum's \"precious\" ring that holds unexpected and useful qualities ... A simple, gold ring that is tied to the fate of all Middle-earth in ways Bilbo cannot begin to know.",
		"Language": "English",
		"Country": "New Zealand, United States",
		"Awards": "Nominated for 3 Oscars. 11 wins & 76 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "7.8",
		"imdbVotes": "868,449",
		"imdbID": "tt0903624",
		"Type": "movie",
		"DVD": "11 Dec 2015",
		"BoxOffice": "$303,030,651",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hobbit: The Battle of the Five Armies",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "17 Dec 2014",
		"Runtime": "144 min",
		"Genre": "Adventure, Fantasy",
		"Director": "Peter Jackson",
		"Writer": "Fran Walsh, Philippa Boyens, Peter Jackson",
		"Actors": "Ian McKellen, Martin Freeman, Richard Armitage",
		"Plot": "After the Dragon leaves the Lonely Mountain, the people of Lake-town see a threat coming. Orcs, dwarves, elves and people prepare for war. Bilbo sees Thorin going mad and tries to help. Meanwhile, Gandalf is rescued from the Necromancer's prison and his rescuers realize who the Necromancer is.",
		"Language": "English",
		"Country": "New Zealand, United States",
		"Awards": "Nominated for 1 Oscar. 8 wins & 56 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "59%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "7.4",
		"imdbVotes": "568,745",
		"imdbID": "tt2310332",
		"Type": "movie",
		"DVD": "03 Mar 2015",
		"BoxOffice": "$255,138,261",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Thanks for Sharing",
		"Year": "2012",
		"Rated": "R",
		"Released": "14 Sep 2013",
		"Runtime": "112 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Stuart Blumberg",
		"Writer": "Stuart Blumberg, Matt Winston",
		"Actors": "Mark Ruffalo, Tim Robbins, Gwyneth Paltrow",
		"Plot": "Adam (Mark Ruffalo) has just reached the 5-year mark in his sex addiction sobriety with help from his sponsor Mike (Tim Robbins). New-comer Neil (Josh Gad) seeks out Adam's help hoping that he'll be his mentor, but Neil doesn't have the same maturity and continues to harass women at work, on the street, and on the subway. Adam has also just met Phoebe (Gwyneth Paltrow), who might be perfect for him, but Adam hasn't been in a relationship since he recognized his addiction to sex, and Phoebe doesn't date addicts. As Adam navigates the romantic relationship waters, Mike struggles connecting to his former drug-addicted son who has just returned home, and Neil develops a relationship with another woman in his sex addicts group, but a platonic friendship might be exactly what he needs.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA5MzI3ODcxMF5BMl5BanBnXkFtZTcwODY5MTc4OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "51%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.4",
		"imdbVotes": "29,461",
		"imdbID": "tt1932718",
		"Type": "movie",
		"DVD": "03 Jan 2014",
		"BoxOffice": "$1,065,881",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Day After Tomorrow",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "28 May 2004",
		"Runtime": "124 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Roland Emmerich",
		"Writer": "Roland Emmerich, Jeffrey Nachmanoff",
		"Actors": "Dennis Quaid, Jake Gyllenhaal, Emmy Rossum",
		"Plot": "As Paleoclimatologist Jack Hall is in Antartica, he discovers that a huge ice sheet has sheared off. But what he does not know is that this event will trigger a massive climate shift that will affect the world population. Meanwhile, his son Sam is with friends in New York City to attend an event. There, they discover that it has been raining non-stop for the past three days, and after a series of weather-related disasters begin to occur all over the world, everybody realizes the world is about to enter a new Ice Age and the world population begins trying to evacuate to the warmer climates of the south. Jack makes a daring attempt to rescue his son and his friends who are stuck in New York City and who have managed to survive not only a massive wave but also freezing cold temperatures that could possibly kill them.",
		"Language": "English, Japanese, French, Arabic",
		"Country": "United States",
		"Awards": "Won 1 BAFTA Award6 wins & 12 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWNkNzljZjktY2MwNi00OWExLTliNTMtOTk0NGU2ZDQ3ZTEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.5",
		"imdbVotes": "472,511",
		"imdbID": "tt0319262",
		"Type": "movie",
		"DVD": "29 Aug 2014",
		"BoxOffice": "$186,740,799",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Adventures of Tintin",
		"Year": "2011",
		"Rated": "PG",
		"Released": "21 Dec 2011",
		"Runtime": "107 min",
		"Genre": "Animation, Action, Adventure",
		"Director": "Steven Spielberg",
		"Writer": "Hergé, Steven Moffat, Edgar Wright",
		"Actors": "Jamie Bell, Andy Serkis, Daniel Craig",
		"Plot": "Having bought a model ship, the Unicorn, for a pound off a market stall Tintin is initially puzzled that the sinister Mr. Sakharine should be so eager to buy it from him, resorting to murder and kidnapping Tintin - accompanied by his marvellous dog Snowy - to join him and his gang as they sail to Morocco on an old cargo ship. Sakharine has bribed the crew to revolt against the ship's master, drunken Captain Haddock, but Tintin, Snowy and Haddock escape, arriving in Morocco at the court of a sheikh, who also has a model of the Unicorn. Haddock tells Tintin that over three hundred years earlier his ancestor Sir Francis Haddock was forced to scuttle the original Unicorn when attacked by a piratical forebear of Sakharine but he managed to save his treasure and provide clues to its location in three separate scrolls, all of which were secreted in models of the Unicorn. Tintin and Sakharine have one each and the villain intends to use the glass-shattering top Cs of operatic soprano the Milanese Nightingale to secure the third. With aid from bumbling Interpol agents the Thompson Twins our boy hero, his dog and the captain must prevent Sakharine from obtaining all three scrolls to fulfil the prophesy that only the last of the Haddocks can discover the treasure's whereabouts.",
		"Language": "English, Russian, Ukrainian",
		"Country": "United States, New Zealand, United Kingdom, France, Australia, Belgium",
		"Awards": "Nominated for 1 Oscar. 22 wins & 63 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "75%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.3",
		"imdbVotes": "242,148",
		"imdbID": "tt0983193",
		"Type": "movie",
		"DVD": "19 Dec 2016",
		"BoxOffice": "$77,591,831",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hunger Games: The Ballad of Songbirds & Snakes",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "17 Nov 2023",
		"Runtime": "157 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Francis Lawrence",
		"Writer": "Michael Lesslie, Michael Arndt, Suzanne Collins",
		"Actors": "Rachel Zegler, Tom Blyth, Viola Davis",
		"Plot": "Coriolanus Snow at age 18, years before he would become the tyrannical President of Panem. Young Coriolanus is handsome and charming, and though the Snow family has fallen on hard times, he sees a chance for a change in his fortunes when he is chosen to be a mentor for the Tenth Hunger Games. only to have his elation dashed when he is assigned to mentor the girl tribute from impoverished District 12.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "6 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.8",
		"imdbVotes": "104,406",
		"imdbID": "tt10545296",
		"Type": "movie",
		"DVD": "19 Dec 2023",
		"BoxOffice": "$166,350,594",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Ballad of Buster Scruggs",
		"Year": "2018",
		"Rated": "R",
		"Released": "09 Nov 2018",
		"Runtime": "133 min",
		"Genre": "Comedy, Drama, Musical",
		"Director": "Ethan Coen, Joel Coen",
		"Writer": "Joel Coen, Ethan Coen, Jack London",
		"Actors": "Tim Blake Nelson, Willie Watson, Clancy Brown",
		"Plot": "Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.",
		"Language": "English, French",
		"Country": "United States",
		"Awards": "Nominated for 3 Oscars. 6 wins & 37 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "7.2",
		"imdbVotes": "166,764",
		"imdbID": "tt6412452",
		"Type": "movie",
		"DVD": "16 Nov 2018",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The King's Speech",
		"Year": "2010",
		"Rated": "R",
		"Released": "25 Dec 2010",
		"Runtime": "118 min",
		"Genre": "Biography, Drama, History",
		"Director": "Tom Hooper",
		"Writer": "David Seidler",
		"Actors": "Colin Firth, Geoffrey Rush, Helena Bonham Carter",
		"Plot": "Britain's Prince Albert (Colin Firth) must ascend the throne as King George VI, but he has a speech impediment. Knowing that the country needs her husband to be able to communicate effectively, Elizabeth (Helena Bonham Carter) hires Lionel Logue (Geoffrey Rush), an Australian actor and speech therapist, to help him overcome his stammer. An extraordinary friendship develops between the two men, as Logue uses unconventional means to teach the monarch how to speak with confidence.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "Won 4 Oscars. 108 wins & 206 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "88/100"
			}
		],
		"Metascore": "88",
		"imdbRating": "8.0",
		"imdbVotes": "703,928",
		"imdbID": "tt1504320",
		"Type": "movie",
		"DVD": "01 Apr 2017",
		"BoxOffice": "$138,797,449",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Bourne Legacy",
		"Year": "2012",
		"Rated": "PG-13",
		"Released": "10 Aug 2012",
		"Runtime": "135 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Tony Gilroy",
		"Writer": "Tony Gilroy, Dan Gilroy, Robert Ludlum",
		"Actors": "Jeremy Renner, Rachel Weisz, Edward Norton",
		"Plot": "When a British reporter was writing an expose about Black Ops operations Treadstone and Black Briar, and the ones responsible for them are concerned. And when Jason Bourne, former Treadstone operative got the file on Treadstone and Black Briar and gave it to Pamela Landy who then passed it to the media. When the men behind Treadstone and Black Briar learn of this, they're concerned how this will affect other ops they have. They decide it's best to shut down all ops and make sure make everyone involved disappears. They try to take out Aaron Cross who is part of another op called Outcome, but he manages to survive. He then seeks out Dr. Marta Shearing who worked on him when he began. It seems part of the program is for all subjects to take medications but he has run out, which is why he seeks her. But someone tries to kill her. He saves her and she tells him, he should have stopped taking the medications long ago. They go to Manila so that she can help him. Later the men behind Outcome learn that Cross and Shearing are still alive. They try to get them.",
		"Language": "English, Tagalog, Korean, Russian",
		"Country": "United States, Japan",
		"Awards": "1 win & 12 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc4Njk3MDM1Nl5BMl5BanBnXkFtZTcwODgyOTMxOA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "56%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "6.6",
		"imdbVotes": "314,566",
		"imdbID": "tt1194173",
		"Type": "movie",
		"DVD": "22 Jul 2015",
		"BoxOffice": "$113,203,870",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Mirror Has Two Faces",
		"Year": "1996",
		"Rated": "PG-13",
		"Released": "15 Nov 1996",
		"Runtime": "126 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Barbra Streisand",
		"Writer": "André Cayatte, Gérard Oury, Richard LaGravenese",
		"Actors": "Barbra Streisand, Jeff Bridges, Lauren Bacall",
		"Plot": "Rose and Gregory, both Columbia University professors meet when Rose's sister answers Gregory's \"personals\" ad. Several times burned, the handsome-but-boring Gregory believes that sex has ruined his life, and has deliberately set out to find and marry a woman with absolutely no sex appeal. Greg thinks he's found what he's looking for in Rose, a plain, plump English Lit professor who can't compete with her gorgeous mother and sister. More out of mutual admiration and respect than love, Greg and Rose marry. Greg assumes that Rose understands that he is not interested in a sexual relationship. He's mistaken, and their marriage is nearly destroyed when Rose tries to consummate their relationship. While Gregory is out of the country on a lecture tour, Rose diets and exercises to transform herself into a sexy siren in a last-ditch attempt to save her marriage.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 4 wins & 11 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGQ3ZTEzYzktYTQ5My00MDBkLWFhNjItYjBkMjVmMDZjNGZjXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "54%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.6",
		"imdbVotes": "21,938",
		"imdbID": "tt0117057",
		"Type": "movie",
		"DVD": "14 Sep 2010",
		"BoxOffice": "$41,083,864",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Beanie Bubble",
		"Year": "2023",
		"Rated": "R",
		"Released": "28 Jul 2023",
		"Runtime": "110 min",
		"Genre": "Comedy, Drama",
		"Director": "Kristin Gore, Damian Kulash",
		"Writer": "Zac Bissonnette, Kristin Gore",
		"Actors": "Zach Galifianakis, Elizabeth Banks, Sarah Snook",
		"Plot": "Ty Warner was a frustrated toy salesman until his collaboration with three women grew his idea into the biggest toy craze in history.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODEzNzRjY2EtY2U1My00YmZhLTkzMTYtMjhiNjI1ODJlNDE1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "47%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.3",
		"imdbVotes": "8,661",
		"imdbID": "tt17007120",
		"Type": "movie",
		"DVD": "28 Jul 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taken",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "30 Jan 2009",
		"Runtime": "90 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Pierre Morel",
		"Writer": "Luc Besson, Robert Mark Kamen",
		"Actors": "Liam Neeson, Maggie Grace, Famke Janssen",
		"Plot": "Seventeen year-old Kim is the pride and joy of her father Bryan Mills. Bryan is a retired agent who left the Central Intelligence Agency to be near Kim in California. Kim lives with her mother Lenore and her wealthy stepfather Stuart. Kim manages to convince her reluctant father to allow her to travel to Paris with her friend Amanda. When the girls arrive in Paris they share a cab with a stranger named Peter, and Amanda lets it slip that they are alone in Paris. Using this information an Albanian gang of human traffickers kidnaps the girls. Kim barely has time to call her father and give him information. Her father gets to speak briefly to one of the kidnappers and he promises to kill the kidnappers if they do not let his daughter go free. The kidnapper wishes him \"good luck,\" so Bryan Mills travels to Paris to search for his daughter and her friend.",
		"Language": "English, French, Albanian, Arabic",
		"Country": "France, United Kingdom, United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDA0ODYzZGMtOGI3ZS00YTdjLTk0ZjEtYzA0Zjg3MDM4OTA4XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "60%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "7.7",
		"imdbVotes": "631,377",
		"imdbID": "tt0936501",
		"Type": "movie",
		"DVD": "17 Jun 2013",
		"BoxOffice": "$145,000,989",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Da Vinci Code",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "19 May 2006",
		"Runtime": "149 min",
		"Genre": "Mystery, Thriller",
		"Director": "Ron Howard",
		"Writer": "Akiva Goldsman, Dan Brown",
		"Actors": "Tom Hanks, Audrey Tautou, Jean Reno",
		"Plot": "Dan Brown's controversial best-selling novel about a powerful secret that's been kept under wraps for thousands of years comes to the screen in this suspense thriller from Director Ron Howard. The stately silence of Paris' Louvre museum is broken when one of the gallery's leading curators is found dead on the grounds, with strange symbols carved into his body and left around the spot where he died. Hoping to learn the significance of the symbols, police bring in Sophie Neveu (Audrey Tautou), a gifted cryptographer who is also the victim's granddaughter. Needing help, Sophie calls on Robert Langdon (Tom Hanks), a leading symbologist from the United States. As Sophie and Robert dig deeper into the case, they discover the victim's involvement in the Priory of Sion, a secret society whose members have been privy to forbidden knowledge dating back to the birth of Christianity. In their search, Sophie and Robert happen upon evidence that could lead to the final resting place of the Holy Grail, while members of the priory and an underground Catholic society known as Opus Dei give chase, determined to prevent them from sharing their greatest secrets with the world.",
		"Language": "English, French, Latin, Spanish",
		"Country": "United States, Malta, France, United Kingdom",
		"Awards": "8 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "25%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "6.6",
		"imdbVotes": "455,785",
		"imdbID": "tt0382625",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$217,536,138",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Big Short",
		"Year": "2015",
		"Rated": "R",
		"Released": "23 Dec 2015",
		"Runtime": "130 min",
		"Genre": "Biography, Comedy, Drama",
		"Director": "Adam McKay",
		"Writer": "Charles Randolph, Adam McKay, Michael Lewis",
		"Actors": "Christian Bale, Steve Carell, Ryan Gosling",
		"Plot": "Three separate but parallel stories of the U.S mortgage housing crisis of 2005 are told. Michael Burry, an eccentric ex-physician turned one-eyed Scion Capital hedge fund manager, has traded traditional office attire for shorts, bare feet and a Supercuts haircut. He believes that the US housing market is built on a bubble that will burst within the next few years. Autonomy within the company allows Burry to do largely as he pleases, so Burry proceeds to bet against the housing market with the banks, who are more than happy to accept his proposal for something that has never happened in American history. The banks believe that Burry is a crackpot and therefore are confident in that they will win the deal. Jared Vennett with Deutschebank gets wind of what Burry is doing and, as an investor believes he too can cash in on Burry's beliefs. An errant telephone call to FrontPoint Partners gets this information into the hands of Mark Baum, an idealist who is fed up with the corruption in the financial industry. Baum and his associates, who work at an arms length under Morgan Stanley, decide to join forces with Vennett despite not totally trusting him. In addition to Burry's information, they further believe that most of the mortgages are overrated by the bond agencies, with the banks collating all the sub-prime mortgages under AAA packages. Charlie Geller and Jamie Shipley, who are minor players in a $30 million start-up garage company called Brownfield, get a hold of Vennett's prospectus on the matter. Wanting in on the action but not having the official clout to play, they decide to call an old \"friend\", retired investment banker Ben Rickert, to help out. All three of these groups work on the premise that the banks are stupid and don't know what's going on, while for them to win, the general economy has to lose, which means the suffering of the general investor who trusts the financial institutions. That latter aspect may not sit well with Baum. Some of these assumptions may be incorrect and may be far more manipulative than they could have ever imagined, which in turn may throw curves into the process.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 37 wins & 81 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "81/100"
			}
		],
		"Metascore": "81",
		"imdbRating": "7.8",
		"imdbVotes": "477,406",
		"imdbID": "tt1596363",
		"Type": "movie",
		"DVD": "07 Jul 2016",
		"BoxOffice": "$70,259,870",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Blackening",
		"Year": "2022",
		"Rated": "R",
		"Released": "16 Jun 2023",
		"Runtime": "97 min",
		"Genre": "Comedy, Horror, Thriller",
		"Director": "Tim Story",
		"Writer": "Tracy Oliver, Dewayne Perkins",
		"Actors": "Grace Byers, Jermaine Fowler, Melvin Gregg",
		"Plot": "Seven friends go away for the weekend and end up trapped in a cabin with a killer who has a vendetta. Will their street smarts and knowledge of horror movies help them stay alive? Probably not.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGMzNzEyZWItYjUwZC00NmVkLTk5MWUtZGVjNWJlMjBjODA4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "6.0",
		"imdbVotes": "17,644",
		"imdbID": "tt11703244",
		"Type": "movie",
		"DVD": "07 Jul 2023",
		"BoxOffice": "$17,707,207",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The BFG",
		"Year": "2016",
		"Rated": "PG",
		"Released": "01 Jul 2016",
		"Runtime": "117 min",
		"Genre": "Adventure, Family, Fantasy",
		"Director": "Steven Spielberg",
		"Writer": "Melissa Mathison, Roald Dahl",
		"Actors": "Mark Rylance, Ruby Barnhill, Penelope Wilton",
		"Plot": "Ten-year-old Sophie is in for the adventure of a lifetime when she meets the Big Friendly Giant. Naturally scared at first, the young girl soon realizes that the twenty-four-foot behemoth is actually quite gentle and charming. As their friendship grows, Sophie's presence attracts the unwanted attention of Bloodbottler, Fleshlumpeater, and other giants. After travelling to London, Sophie and the BFG must convince Queen Elizabeth to help them get rid of all of the bad giants once and for all.",
		"Language": "English, Hindi",
		"Country": "United Kingdom, India, United States",
		"Awards": "Nominated for 1 BAFTA Award4 wins & 26 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjAzOTUzNTY3Ml5BMl5BanBnXkFtZTgwMjYwNzE5ODE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "66/100"
			}
		],
		"Metascore": "66",
		"imdbRating": "6.3",
		"imdbVotes": "92,503",
		"imdbID": "tt3691740",
		"Type": "movie",
		"DVD": "29 Nov 2016",
		"BoxOffice": "$55,483,770",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Dictator",
		"Year": "2012",
		"Rated": "R",
		"Released": "16 May 2012",
		"Runtime": "83 min",
		"Genre": "Comedy",
		"Director": "Larry Charles",
		"Writer": "Sacha Baron Cohen, Alec Berg, David Mandel",
		"Actors": "Sacha Baron Cohen, Anna Faris, John C. Reilly",
		"Plot": "The Republic of Wadiya is ruled by an eccentric and oppressive leader named Hafez Aladeen. Aladeen is summoned to New York to a UN assembly to address concerns about his country's nuclear weapons program, but the trip goes awry.",
		"Language": "English, Hebrew, Arabic",
		"Country": "United States",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "56%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.4",
		"imdbVotes": "331,193",
		"imdbID": "tt1645170",
		"Type": "movie",
		"DVD": "14 May 2014",
		"BoxOffice": "$59,650,222",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Emperor's New Groove",
		"Year": "2000",
		"Rated": "G",
		"Released": "15 Dec 2000",
		"Runtime": "78 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Mark Dindal",
		"Writer": "Chris Williams, Mark Dindal, David Reynolds",
		"Actors": "David Spade, John Goodman, Eartha Kitt",
		"Plot": "In this animated comedy from the folks at Disney, the vain and cocky Emperor Kuzco (David Spade) is a very busy man. Besides maintaining his \"groove\", and firing his suspicious administrator, Yzma (Eartha Kitt), he's also planning to build a new waterpark just for himself for his birthday. However, this means destroying one of the villages in his kingdom. Meanwhile, Yzma is hatching a plan to get revenge and usurp the throne. But, in a botched assassination courtesy of Yzma's right-hand man, Kronk (Patrick Warburton), Kuzco is magically transformed into a llama. Now, Kuzco finds himself the property of Pacha, a lowly llama herder whose home is ground zero for the water park. Upon discovering the llama's true self, Pacha offers to help resolve the Emperor's problem and regain his throne, only if he promises to move his water park.",
		"Language": "Swedish, English, Russian",
		"Country": "United States, Japan, France",
		"Awards": "Nominated for 1 Oscar. 7 wins & 27 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjFkMzk2OWUtNjFmZC00ZTJhLTlkNGYtYjc2YWNkNmJmNzczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "7.4",
		"imdbVotes": "223,097",
		"imdbID": "tt0120917",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$89,636,687",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Devil's Advocate",
		"Year": "1997",
		"Rated": "R",
		"Released": "17 Oct 1997",
		"Runtime": "144 min",
		"Genre": "Drama, Fantasy, Mystery",
		"Director": "Taylor Hackford",
		"Writer": "Andrew Neiderman, Jonathan Lemkin, Tony Gilroy",
		"Actors": "Keanu Reeves, Al Pacino, Charlize Theron",
		"Plot": "Kevin Lomax, a ruthless young Florida attorney who never lost a case, is recruited by the most powerful law firm in the world. In spite of his mother's disagreement (she compares New York City to Babylon), he accepts the offer and the money that comes along. But soon, his wife starts feeling homesick and seeing devilish apparitions. However, Kevin is sinking in his new cases and pays less and less attention to his wife. His boss and mentor, John Milton, seems to always know how to overcome every problem and that just freaks out Kevin.",
		"Language": "English, German, Italian, Mandarin, Spanish",
		"Country": "Germany, United States",
		"Awards": "2 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2M2MDJhMDgtMmJkYy00MTgzLTkyZTktODM5NzE1MWUyNDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "63%"
			},
			{
				"Source": "Metacritic",
				"Value": "60/100"
			}
		],
		"Metascore": "60",
		"imdbRating": "7.5",
		"imdbVotes": "399,912",
		"imdbID": "tt0118971",
		"Type": "movie",
		"DVD": "15 Aug 2008",
		"BoxOffice": "$60,944,660",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Cabin in the Woods",
		"Year": "2011",
		"Rated": "R",
		"Released": "13 Apr 2012",
		"Runtime": "95 min",
		"Genre": "Horror, Mystery, Thriller",
		"Director": "Drew Goddard",
		"Writer": "Joss Whedon, Drew Goddard",
		"Actors": "Kristen Connolly, Chris Hemsworth, Anna Hutchison",
		"Plot": "Five teenagers head off for a weekend at a secluded cabin in the woods. They arrive to find they are quite isolated with no means of communicating with the outside world. When the cellar door flings itself open, they of course go down to investigate. They find an odd assortment of relics and curios, but when one of the women, Dana, reads from a book, she awakens a family of deadly zombie killers. However, there's far more going on than meets the eye.",
		"Language": "English, Japanese",
		"Country": "United States, Canada",
		"Awards": "20 wins & 34 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "72/100"
			}
		],
		"Metascore": "72",
		"imdbRating": "7.0",
		"imdbVotes": "446,612",
		"imdbID": "tt1259521",
		"Type": "movie",
		"DVD": "06 May 2014",
		"BoxOffice": "$42,073,277",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Core",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "28 Mar 2003",
		"Runtime": "135 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Jon Amiel",
		"Writer": "Cooper Layne, John Rogers",
		"Actors": "Aaron Eckhart, Hilary Swank, Delroy Lindo",
		"Plot": "The Earth's core has stopped spinning. Disasters are happening around the globe, including; animals acting in bizarre ways, monstrous thunderstorms. Dr. Josh Keyes and his crew of 5 go down to the centre to set off a nuclear device, hoping to make the core start spinning again, or humanity will cease.",
		"Language": "English",
		"Country": "United Kingdom, France, Italy, Germany, Canada, United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MTY3MzkzNl5BMl5BanBnXkFtZTYwNTAwNDk2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "39%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "5.5",
		"imdbVotes": "106,838",
		"imdbID": "tt0298814",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$31,186,896",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Fast and the Furious: Tokyo Drift",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "16 Jun 2006",
		"Runtime": "104 min",
		"Genre": "Action, Crime, Thriller",
		"Director": "Justin Lin",
		"Writer": "Chris Morgan",
		"Actors": "Lucas Black, Zachery Ty Bryan, Shad Moss",
		"Plot": "An American teenager named Sean Boswell is a loner in school, however he challenges his rival for an illegal street racing, and he totals his car in the end of the race. To avoid time in prison he is sent to Tokyo to live with his father who is in the military. As soon as he arrives he discovers a new, fun but dangerous way of street racing in the underworld of the streets of Tokyo, Japan.",
		"Language": "English, Japanese, Portuguese",
		"Country": "United States, Germany",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.0",
		"imdbVotes": "297,999",
		"imdbID": "tt0463985",
		"Type": "movie",
		"DVD": "22 Jul 2015",
		"BoxOffice": "$62,514,415",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Caine Mutiny Court-Martial",
		"Year": "2023",
		"Rated": "TV-14",
		"Released": "06 Oct 2023",
		"Runtime": "108 min",
		"Genre": "Drama, War",
		"Director": "William Friedkin",
		"Writer": "William Friedkin, Herman Wouk",
		"Actors": "Kiefer Sutherland, Jason Clarke, Jake Lacy",
		"Plot": "Follows a naval officer who stands trial for mutiny after taking command from a ship captain he felt was acting in an unstable way, putting both the ship and its crew in danger.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTY2YTcyY2ItODM1YS00YTFmLWJiZmQtMzg5NDNjZDhjNTUwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.8",
		"imdbVotes": "3,409",
		"imdbID": "tt24249946",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Exorcism of Emily Rose",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "09 Sep 2005",
		"Runtime": "119 min",
		"Genre": "Drama, Horror, Thriller",
		"Director": "Scott Derrickson",
		"Writer": "Paul Harris Boardman, Scott Derrickson",
		"Actors": "Laura Linney, Tom Wilkinson, Shohreh Aghdashloo",
		"Plot": "When a younger girl called Emily Rose dies, everyone puts blame on the exorcism which was performed on her by Father Moore prior to her death. The priest is arrested on suspicion of murder. The trial begins with lawyer Erin Bruner representing Moore, but it is not going to be easy, as no one wants to believe what Father Moore says is true.",
		"Language": "English, Syriac, German, Greek, Hebrew, Latin, Aramaic",
		"Country": "United States",
		"Awards": "4 wins & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI2NTM5MjQ0Nl5BMl5BanBnXkFtZTcwNDAxNjAzMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "20%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "6.7",
		"imdbVotes": "139,133",
		"imdbID": "tt0404032",
		"Type": "movie",
		"DVD": "30 Nov 2016",
		"BoxOffice": "$75,072,454",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Current War",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "25 Oct 2019",
		"Runtime": "102 min",
		"Genre": "Biography, Drama, History",
		"Director": "Alfonso Gomez-Rejon",
		"Writer": "Michael Mitnick",
		"Actors": "Benedict Cumberbatch, Oliver Powell, Sophia Ally",
		"Plot": "Three brilliant visionaries set off in a charged battle for the future in The Current War, the epic story of the cutthroat competition that literally lit up the modern world. Benedict Cumberbatch is Thomas Edison, the celebrity inventor on the verge of bringing electricity to Manhattan with his radical new DC technology. On the eve of triumph, his plans are upended by charismatic businessman George Westinghouse (Michael Shannon), who believes he and his partner, the upstart genius Nikola Tesla (Nicholas Hoult), have a superior idea for how to rapidly electrify America: with AC current. As Edison and Westinghouse grapple for who will power the nation, they spark one of the first and greatest corporate feuds in American history, establishing for future Titans of Industry the need to break all the rules. Directed by Alfonso Gomez-Rejon (Me and Earl and the Dying Girl) with Producer Timur Bekmambetov, Basil Iwanyk and Executive Producer Martin Scorsese, The Current War also stars Katherine Waterston, Tom Holland, Matthew Macfadyen and Tuppence Middleton.",
		"Language": "English, Spanish",
		"Country": "United Kingdom, Russia, United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWIxOWU4OGUtMTY1Ny00YmY3LWFhOTgtNzk3NmExYjUwMTFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "34%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "6.5",
		"imdbVotes": "30,782",
		"imdbID": "tt2140507",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$5,979,540",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Girl with the Dragon Tattoo",
		"Year": "2011",
		"Rated": "R",
		"Released": "21 Dec 2011",
		"Runtime": "158 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "David Fincher",
		"Writer": "Steven Zaillian, Stieg Larsson",
		"Actors": "Daniel Craig, Rooney Mara, Christopher Plummer",
		"Plot": "Mikael Blomkvist is a disgraced journalist who is asked by a wealthy industrialist to write a biography on his family. But what he really wants Blomkvist to do is to find out what happened to his niece, who went missing 40 years ago. Blomkvist, at first, is not interested, till the man offers to help him clear his name. Blomkvist, begins by talking to the man's relatives who were there when the girl went missing. And some of them are not forth coming. Blomkvist eventually believes that her disappearance might have something to do with some serial killings that took place 20 years before she disappeared. So he asks for a research assistant. So the industrialist's man suggests Lisbeth Salander, a talented hacker who does background checks for them and who even did one on Blomkvist. When he sees her report, he's impressed and asks her to work with him and she does. She's anti-social but is extremely efficient.",
		"Language": "English, Swedish",
		"Country": "United States, Sweden, Norway",
		"Awards": "Won 1 Oscar. 26 wins & 91 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "7.8",
		"imdbVotes": "490,936",
		"imdbID": "tt1568346",
		"Type": "movie",
		"DVD": "03 Sep 2013",
		"BoxOffice": "$102,515,793",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Heartbreak Kid",
		"Year": "2007",
		"Rated": "R",
		"Released": "05 Oct 2007",
		"Runtime": "116 min",
		"Genre": "Comedy, Romance",
		"Director": "Bobby Farrelly, Peter Farrelly",
		"Writer": "Scot Armstrong, Leslie Dixon, Bobby Farrelly",
		"Actors": "Ben Stiller, Michelle Monaghan, Malin Akerman",
		"Plot": "Eddie is forty, owns a sporting-goods store, and is still single. After watching his ex-fiancée walk down the aisle, he meets Lila, an environmental researcher, who seems too good to be true. Pressured by his father and best friend, Eddie pops the question and marries Lila after only 6 weeks. However, as he almost instantly discovers, his new bride is a nightmare with more baggage than he can handle. She's immature, foolish, a monster in bed, owes a tremendous amount of money to various sources, and as it turns out, is only a volunteer and doesn't actually have a job. While on their honeymoon in Cabo, Eddie meets Miranda, a down-to-earth lacrosse coach who is visiting with her family. Sparks fly, and Eddie falls for her. Now comes the tricky part of breaking off his marriage to crazy Lila, all while keeping the truth from Miranda about why he's in Cabo in the first place...",
		"Language": "English, Spanish",
		"Country": "United States, Mexico",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjExNTM2NTE2NF5BMl5BanBnXkFtZTcwOTI5MDUzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "29%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "5.8",
		"imdbVotes": "96,110",
		"imdbID": "tt0408839",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$36,787,257",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The King of Staten Island",
		"Year": "2020",
		"Rated": "R",
		"Released": "12 Jun 2020",
		"Runtime": "136 min",
		"Genre": "Comedy, Drama",
		"Director": "Judd Apatow",
		"Writer": "Judd Apatow, Pete Davidson, Dave Sirus",
		"Actors": "Pete Davidson, Bel Powley, Ricky Velez",
		"Plot": "Scott has been a case of arrested development ever since his firefighter father died when he was seven. He's now reached his mid-20s having achieved little, chasing a dream of becoming a tattoo artist that seems far out of reach. As his ambitious younger sister heads off to college, Scott is still living with his exhausted ER nurse mother and spends his days smoking weed, hanging with the guys - Oscar, Igor and Richie - and secretly hooking up with his childhood friend Kelsey. But when his mother starts dating a loudmouth firefighter named Ray, it sets off a chain of events that will force Scott to grapple with his grief and take his first tentative steps toward moving forward in life.",
		"Language": "English",
		"Country": "United States, China",
		"Awards": "3 wins & 24 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzkxMzMzOTgtNmZhMS00MGM0LTk3MzUtMjE1MzI4MzU5ZjkzXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "76%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "7.1",
		"imdbVotes": "75,801",
		"imdbID": "tt9686708",
		"Type": "movie",
		"DVD": "28 May 2020",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Taxi 3",
		"Year": "2003",
		"Rated": "Not Rated",
		"Released": "29 Jan 2003",
		"Runtime": "84 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Gérard Krawczyk",
		"Writer": "Luc Besson",
		"Actors": "Samy Naceri, Frédéric Diefenthal, Bernard Farcy",
		"Plot": "A gang of thieves calling themselves the Santa Claus Gang are wreaking havoc, and the police can't keep up. Police Captain Gilbert is distracted by a Chinese reporter writing a story on his squad, detective Emilien's wife has just announced that she's pregnant, and taxi driver Daniel is in the midst of a relationship crisis. After a string of mistakes in which the thieves outsmart the police time and time again with a reporter there to record it all, Daniel and his super-taxi pitch in.",
		"Language": "French",
		"Country": "France",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWI4YTRhODYtYmI3ZS00NWIwLWI3OWMtZjRkZjliOTlkZjc3XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.8",
		"imdbVotes": "45,415",
		"imdbID": "tt0295721",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$497,208",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Death of Stalin",
		"Year": "2017",
		"Rated": "R",
		"Released": "09 Mar 2018",
		"Runtime": "107 min",
		"Genre": "Comedy, Drama, History",
		"Director": "Armando Iannucci",
		"Writer": "Fabien Nury, Thierry Robin, Armando Iannucci",
		"Actors": "Steve Buscemi, Simon Russell Beale, Jeffrey Tambor",
		"Plot": "In early-1953 Moscow, under the Great Terror's heavy cloak of state paranoia, the ever-watchful Soviet leader, Iosif Stalin, collapses, unexpectedly, of a brain haemorrhage. As a result, when someone discovers his body the following morning, a frenetic surge of raw panic starts spreading like a virus amongst the senior members of the Council of Ministers, as they scramble to maintain order, weed out the competition, and, ultimately, take power. But, in the middle of a gut-wrenching roller-coaster of incessant plotting, tireless machinations, and frail allegiances, absolutely no one is safe; not even the feared chief of the secret police, Lavrenti Beria. In the end, who will prevail after the death of Stalin?",
		"Language": "English",
		"Country": "France, United Kingdom, Belgium, Canada, United States",
		"Awards": "Nominated for 2 BAFTA 18 wins & 40 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcxMDc1NjcyNl5BMl5BanBnXkFtZTgwNDU0NDYxMzI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "88/100"
			}
		],
		"Metascore": "88",
		"imdbRating": "7.3",
		"imdbVotes": "112,470",
		"imdbID": "tt4686844",
		"Type": "movie",
		"DVD": "11 Jun 2018",
		"BoxOffice": "$8,047,856",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Green Mile",
		"Year": "1999",
		"Rated": "R",
		"Released": "10 Dec 1999",
		"Runtime": "189 min",
		"Genre": "Crime, Drama, Fantasy",
		"Director": "Frank Darabont",
		"Writer": "Stephen King, Frank Darabont",
		"Actors": "Tom Hanks, Michael Clarke Duncan, David Morse",
		"Plot": "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.",
		"Language": "English, French",
		"Country": "United States",
		"Awards": "Nominated for 4 Oscars. 15 wins & 37 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "8.6",
		"imdbVotes": "1,398,825",
		"imdbID": "tt0120689",
		"Type": "movie",
		"DVD": "15 Aug 2008",
		"BoxOffice": "$136,801,374",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Highwaymen",
		"Year": "2019",
		"Rated": "R",
		"Released": "29 Mar 2019",
		"Runtime": "132 min",
		"Genre": "Biography, Crime, Drama",
		"Director": "John Lee Hancock",
		"Writer": "John Fusco",
		"Actors": "Kevin Costner, Woody Harrelson, Kathy Bates",
		"Plot": "The outlaws made headlines. The lawmen made history. From director John Lee Hancock (The Blind Side), THE HIGHWAYMEN follows the untold story of the legendary detectives who brought down Bonnie and Clyde. When the full force of the FBI and the latest forensic technology aren't enough to capture the nation's most notorious criminals, two former Texas Rangers (Kevin Costner and Woody Harrelson) must rely on their gut instincts and old school skills to get the job done.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZmM5Y2QzOGQtNTdjZS00NDVhLThkYjItZjZiMjk4YjM0ZTUzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.9",
		"imdbVotes": "102,809",
		"imdbID": "tt1860242",
		"Type": "movie",
		"DVD": "30 Mar 2019",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hateful Eight",
		"Year": "2015",
		"Rated": "R",
		"Released": "30 Dec 2015",
		"Runtime": "168 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Quentin Tarantino",
		"Writer": "Quentin Tarantino",
		"Actors": "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
		"Plot": "Some time after the Civil War, a stagecoach hurtles through the wintry Wyoming landscape. Bounty hunter John Ruth and his fugitive captive Daisy Domergue race towards the town of Red Rock, where Ruth will bring Daisy to justice. Along the road, they encounter Major Marquis Warren (an infamous bounty hunter) and Chris Mannix (a man who claims to be Red Rock's new sheriff). Lost in a blizzard, the bunch seeks refuge at Minnie's Haberdashery. When they arrive they are greeted by unfamiliar faces: Bob, who claims to be taking care of the place while Minnie is gone; Oswaldo Mobray, the hangman of Red Rock; Joe Gage, a cow puncher; and confederate general Sanford Smithers. As the storm overtakes the mountainside, the eight travelers come to learn that they might not make it to Red Rock after all...",
		"Language": "English, Spanish, French, Persian",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 45 wins & 116 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "75%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.8",
		"imdbVotes": "654,706",
		"imdbID": "tt3460252",
		"Type": "movie",
		"DVD": "02 Mar 2017",
		"BoxOffice": "$54,117,416",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Lives of Others",
		"Year": "2006",
		"Rated": "R",
		"Released": "30 Mar 2007",
		"Runtime": "137 min",
		"Genre": "Drama, Mystery, Thriller",
		"Director": "Florian Henckel von Donnersmarck",
		"Writer": "Florian Henckel von Donnersmarck",
		"Actors": "Ulrich Mühe, Martina Gedeck, Sebastian Koch",
		"Plot": "Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems, and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler's activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens.",
		"Language": "German",
		"Country": "Germany, France",
		"Awards": "Won 1 Oscar. 80 wins & 38 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "89/100"
			}
		],
		"Metascore": "89",
		"imdbRating": "8.4",
		"imdbVotes": "407,770",
		"imdbID": "tt0405094",
		"Type": "movie",
		"DVD": "20 Oct 2007",
		"BoxOffice": "$11,286,112",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hunt",
		"Year": "2012",
		"Rated": "R",
		"Released": "10 Jan 2013",
		"Runtime": "115 min",
		"Genre": "Drama",
		"Director": "Thomas Vinterberg",
		"Writer": "Thomas Vinterberg, Tobias Lindholm",
		"Actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp",
		"Plot": "Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good.",
		"Language": "Danish, English, Polish",
		"Country": "Denmark, Sweden",
		"Awards": "Nominated for 1 Oscar. 38 wins & 73 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "77/100"
			}
		],
		"Metascore": "77",
		"imdbRating": "8.3",
		"imdbVotes": "361,875",
		"imdbID": "tt2106476",
		"Type": "movie",
		"DVD": "12 Jul 2014",
		"BoxOffice": "$613,308",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Gentlemen",
		"Year": "2019",
		"Rated": "R",
		"Released": "24 Jan 2020",
		"Runtime": "113 min",
		"Genre": "Action, Crime",
		"Director": "Guy Ritchie",
		"Writer": "Guy Ritchie, Ivan Atkinson, Marn Davies",
		"Actors": "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
		"Plot": "A talented American graduate of Oxford, using his unique skills, and audacity, creates a marijuana empire using the estates of impoverished British aristocrats. However, when he tries to sell his empire to a fellow American billionaire, a chain of events unfolds, involving blackmail, deception, mayhem and murder between street thugs, Russian oligarchs, Triad gangsters and gutter journalists.",
		"Language": "English, Russian, Spanish, Chinese",
		"Country": "United States, United Kingdom",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "75%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "7.8",
		"imdbVotes": "386,738",
		"imdbID": "tt8367814",
		"Type": "movie",
		"DVD": "24 Mar 2020",
		"BoxOffice": "$36,471,795",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Last Queen",
		"Year": "2022",
		"Rated": "N/A",
		"Released": "19 Apr 2023",
		"Runtime": "110 min",
		"Genre": "Adventure, Drama, History",
		"Director": "Adila Bendimerad, Damien Ounouri",
		"Writer": "Adila Bendimerad, Damien Ounouri",
		"Actors": "Adila Bendimerad, Dali Benssalah, Mohamed Tahar Zaoui",
		"Plot": "Insipired in the legendary Princess Zaphira, wife of the last King of Algiers Salim Toumi, and his fight to defend her community from pirate Barbarossa.",
		"Language": "Arabic",
		"Country": "France, Algeria, Taiwan, Saudi Arabia, Qatar",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTQ0YmRhZjAtOWUzYy00ZGVjLTg4OTctYjgwNGI0ZGYxNGMwXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "60%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.7",
		"imdbVotes": "1,078",
		"imdbID": "tt18039808",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The General's Daughter",
		"Year": "1999",
		"Rated": "R",
		"Released": "18 Jun 1999",
		"Runtime": "116 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Simon West",
		"Writer": "Nelson DeMille, Christopher Bertolini, William Goldman",
		"Actors": "John Travolta, Madeleine Stowe, James Cromwell",
		"Plot": "The naked corpse of Captain Elisabeth Campbell, daughter of Lieutenant General \"Fighting Joe\" Campbell, is found staked out on the urban warfare range of Fort MacCallum. Army CID detectives and ex-lovers Paul Brenner and Sara Sunhill are called in to investigate, and find themselves wrapped up in a maelstrom of sexual impropriety and misguided face-saving.",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzY3NDQ2YzctMTY1MC00NzkwLWJmNzctMDgzZWI1OWY5MDhjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "21%"
			},
			{
				"Source": "Metacritic",
				"Value": "47/100"
			}
		],
		"Metascore": "47",
		"imdbRating": "6.4",
		"imdbVotes": "63,242",
		"imdbID": "tt0144214",
		"Type": "movie",
		"DVD": "01 May 2012",
		"BoxOffice": "$102,705,852",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The 13th Warrior",
		"Year": "1999",
		"Rated": "R",
		"Released": "27 Aug 1999",
		"Runtime": "102 min",
		"Genre": "Action, Adventure, History",
		"Director": "John McTiernan, Michael Crichton",
		"Writer": "Michael Crichton, William Wisher, Warren Lewis",
		"Actors": "Antonio Banderas, Diane Venora, Dennis Storhøi",
		"Plot": "A cultured diplomat joins a band of savage warriors in time to meet an even more fearsome enemy in this historical adventure. In 922 A.D., Ibn Fadlan (Antonio Banderas) is a Muslim emissary from Baghdad en route to meet with the King of Saqaliba when he is captured by a gang of Vikings. While Ibn and his people are intelligent and well-mannered, the Vikings are a rowdy and sometimes unpleasant lot, with an unquenchable appetite for food, alcohol, and women. However, in time he develops an understanding and respect for the Viking warriors and is welcomed into their society by their leader, Buliwyf. However, Ibn must now join them as they return to their homeland once they receive word of an invasion by a huge pack of bloodthirsty invaders who will destroy and eat anything in their path -- including the flesh of the men they have killed.",
		"Language": "English, Latin, Swedish, Norse, Old, Danish, Arabic",
		"Country": "United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDZhZDk0ZTktZmNhMC00YTU1LWEwY2YtZmIyMWM5MTNlNDEwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "6.6",
		"imdbVotes": "131,067",
		"imdbID": "tt0120657",
		"Type": "movie",
		"DVD": "31 Dec 2013",
		"BoxOffice": "$32,698,899",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Banshees of Inisherin",
		"Year": "2022",
		"Rated": "R",
		"Released": "04 Nov 2022",
		"Runtime": "114 min",
		"Genre": "Comedy, Drama",
		"Director": "Martin McDonagh",
		"Writer": "Martin McDonagh",
		"Actors": "Colin Farrell, Brendan Gleeson, Kerry Condon",
		"Plot": "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
		"Language": "English",
		"Country": "Ireland, United Kingdom, United States",
		"Awards": "Nominated for 9 Oscars. 146 wins & 361 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "96%"
			},
			{
				"Source": "Metacritic",
				"Value": "87/100"
			}
		],
		"Metascore": "87",
		"imdbRating": "7.7",
		"imdbVotes": "249,582",
		"imdbID": "tt11813216",
		"Type": "movie",
		"DVD": "13 Dec 2022",
		"BoxOffice": "$10,582,266",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Grand Budapest Hotel",
		"Year": "2014",
		"Rated": "R",
		"Released": "28 Mar 2014",
		"Runtime": "99 min",
		"Genre": "Adventure, Comedy, Crime",
		"Director": "Wes Anderson",
		"Writer": "Stefan Zweig, Wes Anderson, Hugo Guinness",
		"Actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric",
		"Plot": "This movie recounts the adventures of M. Gustave (Ralph Fiennes), a legendary concierge at a famous European hotel between the wars, and Zero Moustafa (Tony Revolori), the lobby boy who becomes his most trusted friend. The story involves the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune - all against the backdrop of a suddenly and dramatically changing continent.",
		"Language": "English, French, German",
		"Country": "United Kingdom, Germany, United States",
		"Awards": "Won 4 Oscars. 135 wins & 226 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "88/100"
			}
		],
		"Metascore": "88",
		"imdbRating": "8.1",
		"imdbVotes": "878,311",
		"imdbID": "tt2278388",
		"Type": "movie",
		"DVD": "01 Dec 2015",
		"BoxOffice": "$59,301,324",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Lincoln Lawyer",
		"Year": "2011",
		"Rated": "R",
		"Released": "18 Mar 2011",
		"Runtime": "118 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Brad Furman",
		"Writer": "John Romano, Michael Connelly",
		"Actors": "Matthew McConaughey, Marisa Tomei, Ryan Phillippe",
		"Plot": "Mick Haller is a defense lawyer who works out of his Lincoln. When a wealthy Realtor is accused of assaulting a prostitute, Haller is asked to defend him. The man claims that the woman is trying to get some money out of him. But when Haller looks at the evidence against him, he learns that this case might be linked to an old case of his.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.3",
		"imdbVotes": "252,040",
		"imdbID": "tt1189340",
		"Type": "movie",
		"DVD": "19 Dec 2015",
		"BoxOffice": "$58,009,200",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Layover",
		"Year": "2017",
		"Rated": "R",
		"Released": "03 Aug 2017",
		"Runtime": "88 min",
		"Genre": "Comedy, Romance",
		"Director": "William H. Macy",
		"Writer": "David Hornsby, Lance Krall",
		"Actors": "Kate Upton, Alexandra Daddario, Matt Barr",
		"Plot": "After countless lonely nights over a bottle of wine and \"The Bachelor\", the Seattle longtime friends, Kate, a high school English teacher, and Meg, an ambitious cosmetics saleswoman, are beginning to realise that they are going through a rough patch. To take a break, the pair will soon find themselves on an impromptu flight to Fort Lauderdale, seated next to the handsome blonde Ryan who is on his way to a friend's wedding. All of a sudden, the two best friends will get sucked into a destructive spiral of relentless competition and cut-throat one-upmanship with Ryan as the prize, especially when a Category 4 hurricane reroutes their flight to a St. Louis layover. They say all is fair in love and war; however, is Ryan worthy of Meg and Kate's years of friendship?",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTAyNDgwYzQtZGY1OS00OGM2LWExNTktNDJkMGUzMzdkNmVlXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "0%"
			},
			{
				"Source": "Metacritic",
				"Value": "15/100"
			}
		],
		"Metascore": "15",
		"imdbRating": "4.8",
		"imdbVotes": "16,693",
		"imdbID": "tt4565520",
		"Type": "movie",
		"DVD": "01 Sep 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Last Samurai",
		"Year": "2003",
		"Rated": "R",
		"Released": "05 Dec 2003",
		"Runtime": "154 min",
		"Genre": "Action, Drama",
		"Director": "Edward Zwick",
		"Writer": "John Logan, Edward Zwick, Marshall Herskovitz",
		"Actors": "Tom Cruise, Ken Watanabe, Billy Connolly",
		"Plot": "In the 1870s, Captain Nathan Algren (Tom Cruise), a cynical veteran of the American Civil War, who will work for anyone, is hired by Americans who want lucrative contracts with the Emperor of Japan to train the peasant conscripts for the first standing Imperial Army in modern warfare using firearms. The Imperial Omura (Masato Harada) cabinet's first priority is to repress a rebellion of traditionalist Samurai, hereditary warriors, who remain devoted to the sacred dynasty, but reject the Westernizing policy, and even refuse firearms. Yet, when his ill-prepared superior force sets out too soon, their panic allows the sword-wielding samurai to crush them. Badly wounded, Algren's courageous stand makes the samurai leader Katsumoto (Ken Watanabe) spare his life. Once nursed to health, he learns to know and respect the old Japanese way, and participates as advisor in Katsumoto's failed attempt to save the Bushido tradition, but Omura gets repressive laws enacted. He must now choose to honor his loyalty to one of the embittered sides when the conflict returns to the battlefield.",
		"Language": "English, Japanese",
		"Country": "United States, New Zealand, Japan",
		"Awards": "Nominated for 4 Oscars. 20 wins & 67 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "66%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "7.8",
		"imdbVotes": "467,263",
		"imdbID": "tt0325710",
		"Type": "movie",
		"DVD": "01 May 2011",
		"BoxOffice": "$111,127,263",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Magnificent Seven",
		"Year": "2016",
		"Rated": "PG-13",
		"Released": "23 Sep 2016",
		"Runtime": "132 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Antoine Fuqua",
		"Writer": "Akira Kurosawa, Shinobu Hashimoto, Hideo Oguni",
		"Actors": "Denzel Washington, Chris Pratt, Ethan Hawke",
		"Plot": "Director Antoine Fuqua brings his modern vision to a classic story in The Magnificent Seven. With the town of Rose Creek under the deadly control of industrialist Bartholomew Bogue, the desperate townspeople employ protection from seven outlaws, bounty hunters, gamblers and hired guns. As they prepare the town for the violent showdown that they know is coming, these seven mercenaries find themselves fighting for more than money.",
		"Language": "English, North American Indian, Spanish",
		"Country": "United States, Australia",
		"Awards": "5 wins & 12 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.9",
		"imdbVotes": "227,431",
		"imdbID": "tt2404435",
		"Type": "movie",
		"DVD": "20 Dec 2016",
		"BoxOffice": "$93,432,655",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Incredibles",
		"Year": "2004",
		"Rated": "PG",
		"Released": "05 Nov 2004",
		"Runtime": "115 min",
		"Genre": "Animation, Action, Adventure",
		"Director": "Brad Bird",
		"Writer": "Brad Bird",
		"Actors": "Craig T. Nelson, Samuel L. Jackson, Holly Hunter",
		"Plot": "Bob Parr (A.K.A. Mr. Incredible), and his wife Helen (A.K.A. Elastigirl), are the world's greatest famous crime-fighting superheroes in Metroville. Always saving lives and battling evil on a daily basis. But fifteen years later, they have been forced to adopt civilian identities and retreat to the suburbs where they have no choice but to retire as superheroes to live a \"normal life\" with their three children Violet, Dash and Jack-Jack (who were secretly born with superpowers). Itching to get back into action, Bob gets his chance when a mysterious communication summons him to a remote island for a top secret assignment. He soon discovers that it will take a super family effort to rescue the world from total destruction.",
		"Language": "English, French, German, Italian, Portuguese, Russian",
		"Country": "United States, Japan",
		"Awards": "Won 2 Oscars. 69 wins & 56 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Metacritic",
				"Value": "90/100"
			}
		],
		"Metascore": "90",
		"imdbRating": "8.0",
		"imdbVotes": "803,770",
		"imdbID": "tt0317705",
		"Type": "movie",
		"DVD": "29 Mar 2005",
		"BoxOffice": "$261,441,092",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Brothers Grimm",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "26 Aug 2005",
		"Runtime": "118 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Terry Gilliam",
		"Writer": "Ehren Kruger",
		"Actors": "Matt Damon, Heath Ledger, Monica Bellucci",
		"Plot": "Widely known for their valiant acts of supernatural bravado, the bogus ghost-busters, Wilhelm and Jacob, or the Brothers Grimm, try their best to banish all sorts of evil in early-19th-century French-occupied Germany. For the right amount of money, the intrepid charlatans pretend to rid superstitious villages of its local ghouls or witches, until disturbing rumours about missing children in the small village of Marbaden start to spread like wildfire. Now--exposed by the French governor and Napoleon's general, Delatombe--the shameless duo of alleged paranormal fighters will have to prove their worth, and, for the first time in their entire career, do battle with a genuine malevolent force. However, can the utterly unprepared boys confront the real deal? Above all, can the Brothers Grimm clear their name?",
		"Language": "English, French, German, Italian",
		"Country": "United States, Czech Republic, United Kingdom",
		"Awards": "4 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDY1NWI2NzgtMzMyNi00ODk1LWIzMWUtMWNkZjhiNjg3NTJkXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "38%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "5.9",
		"imdbVotes": "125,938",
		"imdbID": "tt0355295",
		"Type": "movie",
		"DVD": "11 Oct 2016",
		"BoxOffice": "$37,916,267",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Grey",
		"Year": "2011",
		"Rated": "R",
		"Released": "27 Jan 2012",
		"Runtime": "117 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Joe Carnahan",
		"Writer": "Joe Carnahan, Ian Mackenzie Jeffers",
		"Actors": "Liam Neeson, Dermot Mulroney, Frank Grillo",
		"Plot": "In Alaska, a team of oil workers board a flight home; however, they cross a storm and the airplane crashes. Only seven workers survive in the wilderness and John Ottway, who is a huntsman that kills wolves to protect the workers, assumes leadership of the group. Shortly after they learn that they are surrounded by a pack of wolves and Ottway advises that they should seek protection in the woods. But while they walk through the heavy snow, they are chased and attacked by the carnivorous mammals.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "6.7",
		"imdbVotes": "262,136",
		"imdbID": "tt1601913",
		"Type": "movie",
		"DVD": "04 Nov 2016",
		"BoxOffice": "$51,580,236",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Big Hit",
		"Year": "1998",
		"Rated": "R",
		"Released": "24 Apr 1998",
		"Runtime": "91 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Kirk Wong",
		"Writer": "Ben Ramsey",
		"Actors": "Mark Wahlberg, Lou Diamond Phillips, Christina Applegate",
		"Plot": "To payoff his second girlfriend's debt, hitman Melvin Smiley undertakes a kidnapping job with his usual associates. In a world of prospective Jewish in-laws and late movie fees, the hitman falls in love with the victim and must settle the score with those out to double-cross him.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNWFmZmMzMGItNDZlNy00NDUwLTg3NTEtYWYyOGI0NWFhYmQ1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "41%"
			},
			{
				"Source": "Metacritic",
				"Value": "31/100"
			}
		],
		"Metascore": "31",
		"imdbRating": "6.0",
		"imdbVotes": "31,307",
		"imdbID": "tt0120609",
		"Type": "movie",
		"DVD": "09 Mar 2014",
		"BoxOffice": "$27,007,143",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Creator",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "29 Sep 2023",
		"Runtime": "133 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Gareth Edwards",
		"Writer": "Gareth Edwards, Chris Weitz",
		"Actors": "John David Washington, Madeleine Yuna Voyles, Gemma Chan",
		"Plot": "Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.",
		"Language": "English, Thai",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 13 wins & 43 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDUyNTIzNDQtYTZmMi00M2FlLTgyZjUtYWViZWNhMDYzMjE4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.8",
		"imdbVotes": "151,847",
		"imdbID": "tt11858890",
		"Type": "movie",
		"DVD": "14 Nov 2023",
		"BoxOffice": "$40,774,679",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Holdovers",
		"Year": "2023",
		"Rated": "R",
		"Released": "10 Nov 2023",
		"Runtime": "133 min",
		"Genre": "Comedy, Drama",
		"Director": "Alexander Payne",
		"Writer": "David Hemingson",
		"Actors": "Paul Giamatti, Da'Vine Joy Randolph, Dominic Sessa",
		"Plot": "A cranky history teacher at a prep school is forced to remain on campus over the holidays with a grieving cook and a troubled student who has no place to go.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 5 Oscars. 129 wins & 196 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "97%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "8.0",
		"imdbVotes": "113,383",
		"imdbID": "tt14849194",
		"Type": "movie",
		"DVD": "28 Nov 2023",
		"BoxOffice": "$20,229,480",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Burial",
		"Year": "2023",
		"Rated": "R",
		"Released": "13 Oct 2023",
		"Runtime": "126 min",
		"Genre": "Drama",
		"Director": "Maggie Betts",
		"Writer": "Doug Wright, Maggie Betts, Jonathan Harr",
		"Actors": "Jamie Foxx, Tommy Lee Jones, Jurnee Smollett",
		"Plot": "Inspired by true events, a lawyer helps a funeral home owner save his family business from a corporate behemoth, exposing a complex web of race, power, and injustice.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMGM4NTE2NzYtNGYzMy00ZmY0LTg3MDEtNmYxMDg3YjU2NWQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.1",
		"imdbVotes": "31,391",
		"imdbID": "tt5648882",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Iron Claw",
		"Year": "2023",
		"Rated": "R",
		"Released": "22 Dec 2023",
		"Runtime": "132 min",
		"Genre": "Biography, Drama, Sport",
		"Director": "Sean Durkin",
		"Writer": "Sean Durkin",
		"Actors": "Zac Efron, Jeremy Allen White, Harris Dickinson",
		"Plot": "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "3 wins & 37 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGE5NjllZTEtMGJjNy00ZTFmLThlNDItNmNiZTgyOTQ4OTA2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.7",
		"imdbVotes": "44,352",
		"imdbID": "tt21064584",
		"Type": "movie",
		"DVD": "13 Feb 2024",
		"BoxOffice": "$35,070,296",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Fifth Element",
		"Year": "1997",
		"Rated": "PG-13",
		"Released": "09 May 1997",
		"Runtime": "126 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Luc Besson",
		"Writer": "Luc Besson, Robert Mark Kamen",
		"Actors": "Bruce Willis, Milla Jovovich, Gary Oldman",
		"Plot": "In the twenty-third century, the universe is threatened by evil. The only hope for mankind is the Fifth Element, who comes to Earth every five thousand years to protect the humans with four stones of the four elements: fire, water, Earth and air. A Mondoshawan spacecraft is bringing The Fifth Element back to Earth but it is destroyed by the evil Mangalores. However, a team of scientists use the DNA of the remains of the Fifth Element to rebuild the perfect being called Leeloo. She escapes from the laboratory and stumbles upon the taxi driver and former elite commando Major Korben Dallas that helps her to escape from the police. Leeloo tells him that she must meet Father Vito Cornelius to accomplish her mission. Meanwhile, the Evil uses the greedy and cruel Jean-Baptiste Emanuel Zorg and a team of mercenary Mangalores to retrieve the stones and avoid the protection of Leeloo. But the skilled Korben Dallas has fallen in love with Leeloo and decides to help her to retrieve the stones.",
		"Language": "Arabic, Egyptian (Ancient), English, Swedish, German",
		"Country": "France, United Kingdom, United States",
		"Awards": "Nominated for 1 Oscar. 10 wins & 39 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "71%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "7.6",
		"imdbVotes": "501,102",
		"imdbID": "tt0119116",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$63,820,180",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Man from U.N.C.L.E.",
		"Year": "2015",
		"Rated": "PG-13",
		"Released": "14 Aug 2015",
		"Runtime": "116 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Guy Ritchie",
		"Writer": "Guy Ritchie, Lionel Wigram, Jeff Kleeman",
		"Actors": "Henry Cavill, Armie Hammer, Alicia Vikander",
		"Plot": "In the 1960s with the Cold War in play, CIA agent Napoleon Solo successfully helps Gaby Teller defect to West Germany despite the intimidating opposition of KGB agent Illya Kuryakin. Later, all three unexpectedly find themselves working together in a joint mission to stop a private criminal organization from using Gaby's father's scientific expertise to construct their own nuclear bomb. Through clenched teeth and stylish poise, all three must find a way to cooperate for the sake of world peace, even as they each pursue their own agendas.",
		"Language": "English, Russian, German, Italian",
		"Country": "United Kingdom, United States",
		"Awards": "7 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTZmMWFhYmQtZDE5YS00YzBlLWJlOGEtYzAwNGU1YzVlYjZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "56/100"
			}
		],
		"Metascore": "56",
		"imdbRating": "7.2",
		"imdbVotes": "330,333",
		"imdbID": "tt1638355",
		"Type": "movie",
		"DVD": "28 Jun 2016",
		"BoxOffice": "$45,445,109",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Fighter",
		"Year": "2010",
		"Rated": "R",
		"Released": "17 Dec 2010",
		"Runtime": "116 min",
		"Genre": "Action, Biography, Drama",
		"Director": "David O. Russell",
		"Writer": "Scott Silver, Paul Tamasy, Eric Johnson",
		"Actors": "Mark Wahlberg, Christian Bale, Amy Adams",
		"Plot": "The Fighter is a drama about boxer \"Irish\" Micky Ward's unlikely road to the world light welterweight title. His Rocky-like rise was shepherded by half-brother Dicky, a boxer-turned-trainer on the verge of being KO'd by drugs and crime.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 74 wins & 123 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "7.8",
		"imdbVotes": "387,309",
		"imdbID": "tt0964517",
		"Type": "movie",
		"DVD": "01 Jul 2013",
		"BoxOffice": "$93,617,009",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Iron Lady",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "13 Jan 2012",
		"Runtime": "105 min",
		"Genre": "Biography, Drama",
		"Director": "Phyllida Lloyd",
		"Writer": "Abi Morgan",
		"Actors": "Meryl Streep, Jim Broadbent, Richard E. Grant",
		"Plot": "Elderly and a virtual prisoner in her own home due to her concerned staff and daughter Carol, Margaret Thatcher, Britain's first woman prime minister, looks back on her life as she clears out her late husband Denis's clothes for the Oxfam shop. Denis is seen as being her rock as she first enters parliament and then runs for the leadership of the Conservative Party, culminating in her eventual premiership. Now his ghost joins her to comment on her successes and failures, sometimes to her annoyance, generally to her comfort until ultimately, as the clothes are sent to the charity shop, Denis departs from Margaret's life forever.",
		"Language": "English",
		"Country": "United Kingdom, France",
		"Awards": "Won 2 Oscars. 27 wins & 47 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "6.4",
		"imdbVotes": "113,005",
		"imdbID": "tt1007029",
		"Type": "movie",
		"DVD": "30 Dec 2013",
		"BoxOffice": "$30,017,992",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Hobbit: The Desolation of Smaug",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "13 Dec 2013",
		"Runtime": "161 min",
		"Genre": "Adventure, Drama, Fantasy",
		"Director": "Peter Jackson",
		"Writer": "Fran Walsh, Philippa Boyens, Peter Jackson",
		"Actors": "Ian McKellen, Martin Freeman, Richard Armitage",
		"Plot": "After successfully crossing over (and under) the Misty Mountains, Thorin and Company must seek aid from a powerful stranger before taking on the dangers of Mirkwood Forest--without their Wizard. If they reach the human settlement of Lake-town it will be time for the hobbit Bilbo Baggins to fulfill his contract with the dwarves. The party must complete the journey to Lonely Mountain and burglar Baggins must seek out the Secret Door that will give them access to the hoard of the dragon Smaug. And, where has Gandalf got off to? And what is his secret business to the south?",
		"Language": "English",
		"Country": "New Zealand, United States",
		"Awards": "Nominated for 3 Oscars. 19 wins & 90 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "75%"
			},
			{
				"Source": "Metacritic",
				"Value": "66/100"
			}
		],
		"Metascore": "66",
		"imdbRating": "7.8",
		"imdbVotes": "700,621",
		"imdbID": "tt1170358",
		"Type": "movie",
		"DVD": "25 Sep 2014",
		"BoxOffice": "$258,387,334",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Last Duel",
		"Year": "2021",
		"Rated": "R",
		"Released": "15 Oct 2021",
		"Runtime": "152 min",
		"Genre": "Action, Drama, History",
		"Director": "Ridley Scott",
		"Writer": "Nicole Holofcener, Ben Affleck, Matt Damon",
		"Actors": "Matt Damon, Adam Driver, Jodie Comer",
		"Plot": "Based on the true story of France's last trial by combat in the Middle Ages. Knight Jean de Carrouges challenges his former friend Jacques Le Gris to a duel after Jean's wife Marguerite accuses Le Gris of rape. Told in multiple \"Rashomon-style\" points of view.",
		"Language": "English, German, French, Latin",
		"Country": "United States, United Kingdom",
		"Awards": "4 wins & 44 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "7.4",
		"imdbVotes": "180,420",
		"imdbID": "tt4244994",
		"Type": "movie",
		"DVD": "30 Nov 2021",
		"BoxOffice": "$10,853,945",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Judge",
		"Year": "2014",
		"Rated": "R",
		"Released": "10 Oct 2014",
		"Runtime": "141 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "David Dobkin",
		"Writer": "Nick Schenk, Bill Dubuque, David Dobkin",
		"Actors": "Robert Downey Jr., Robert Duvall, Vera Farmiga",
		"Plot": "Hank Palmer is a successful defense attorney in Chicago, who is getting a divorce. When his brother calls with the news that their mother has died, Hank returns to his childhood home to attend the funeral. Despite the brittle bond between Hank and the Judge, Hank must come to his father's aid and defend him in court. Here, Hank discovers the truth behind the case, which binds together the dysfunctional family and reveals the struggles and secrecy of the family.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 3 wins & 9 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzIxOTIwMV5BMl5BanBnXkFtZTgwMzE0NjQwMjE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "48%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "7.4",
		"imdbVotes": "200,431",
		"imdbID": "tt1872194",
		"Type": "movie",
		"DVD": "05 Nov 2015",
		"BoxOffice": "$47,119,388",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Laundromat",
		"Year": "2019",
		"Rated": "R",
		"Released": "27 Sep 2019",
		"Runtime": "96 min",
		"Genre": "Comedy, Crime, Drama",
		"Director": "Steven Soderbergh",
		"Writer": "Jake Bernstein, Scott Z. Burns",
		"Actors": "Gary Oldman, Antonio Banderas, AJ Meijer",
		"Plot": "When her idyllic vacation takes an unthinkable turn, Ellen Martin (Meryl Streep) begins investigating a fake insurance policy, only to find herself down a rabbit hole of questionable dealings that can be linked to a Panama City law firm and its vested interest in helping the world's wealthiest citizens amass larger fortunes. Founding partners Jürgen Mossack (Gary Oldman) and Ramón Fonseca (Antonio Banderas) are experts in the seductive ways shell companies and offshore accounts help the rich and powerful prosper. They are about to show us that Ellen's predicament only hints at the tax evasion, bribery and other illicit absurdities that the super wealthy indulge in to support the world's corrupt financial system. Zipping through a kaleidoscope of detours in China, Mexico, Africa (via Los Angeles) and the Caribbean en route to 2016's Panama Papers publication - where journalists leaked the secret, encrypted documents of Mossack Fonseca's high-profile patrons - THE LAUNDROMAT's ensemble cast includes Jeffrey Wright, Melissa Rauch, Jeff Michalski, Jane Morris, Robert Patrick, David Schwimmer, Cristela Alonzo, Larry Clarke, Will Forte, Chris Parnell, Nonso Anozie, Larry Wilmore, Jessica Allain, Nikki Amuka-Bird, Matthias Schoenaerts, Rosalind Chao, Kunjue Li, Ming Lo, with James Cromwell and Sharon Stone.",
		"Language": "English, Mandarin, Spanish, Russian",
		"Country": "United States",
		"Awards": "8 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjFjMGVmYjUtNGVmYy00NTAwLWJhNjAtZGFkYjgzNzI3YTY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "42%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "6.3",
		"imdbVotes": "54,491",
		"imdbID": "tt5865326",
		"Type": "movie",
		"DVD": "18 Oct 2019",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Imaginarium of Doctor Parnassus",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "08 Jan 2010",
		"Runtime": "123 min",
		"Genre": "Adventure, Comedy, Fantasy",
		"Director": "Terry Gilliam",
		"Writer": "Terry Gilliam, Charles McKeown",
		"Actors": "Christopher Plummer, Lily Cole, Heath Ledger",
		"Plot": "In London, the sideshow troupe of Doctor Parnassus promises the audience a journey to the \"Imaginarium\", an imaginary world commanded by the mind of Doctor Parnassus, where dreams come true. In the stories that Doctor Parnassus tells to his daughter Valentina, the midget Percy, and his assistant Anton, he claims to have lived for more than one thousand years; However, when he fell in love with a mortal woman, he made a deal with the devil (Mr. Nick), trading his immortality for youth. As part of the bargain, he promised his son or daughter to Mr. Nick on their sixteenth birthday. Valentina is now almost to the doomed age and Doctor Parnassus makes a new bet with Mr. Nick, whoever seduces five souls in the Imaginarium will have Valentina as a prize. Meanwhile the troupe rescues Tony, a young man that was hanged on a bridge by the Russians. Tony was chased until he finds and joins the group. Tony and Valentina fall in love with each other and the jealous Anton discovers that his competition may be a liar.",
		"Language": "English, Russian, French",
		"Country": "United Kingdom, France, Canada",
		"Awards": "Nominated for 2 Oscars. 5 wins & 23 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY4Njg4NTA3Nl5BMl5BanBnXkFtZTcwNzYxMzg5Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "64%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "6.8",
		"imdbVotes": "153,319",
		"imdbID": "tt1054606",
		"Type": "movie",
		"DVD": "11 Jun 2010",
		"BoxOffice": "$7,689,607",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The King",
		"Year": "2019",
		"Rated": "R",
		"Released": "01 Nov 2019",
		"Runtime": "140 min",
		"Genre": "Biography, Drama, History",
		"Director": "David Michôd",
		"Writer": "David Michôd, Joel Edgerton",
		"Actors": "Tom Glynn-Carney, Gábor Czap, Tom Fisher",
		"Plot": "Hal (Timothée Chalamet), wayward prince and reluctant heir to the English throne, has turned his back on royal life and is living among the people. But when his tyrannical father dies, Hal is crowned King Henry V and is forced to embrace the life he had previously tried to escape. Now the young king must navigate the palace politics, chaos and war his father left behind, and the emotional strings of his past life - including his relationship with his closest friend and mentor, the aging alcoholic knight, John Falstaff (Joel Edgerton).",
		"Language": "English, French, Latin",
		"Country": "United Kingdom, Hungary, United States, Australia",
		"Awards": "12 wins & 28 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWZkNzNlMzMtMjM5ZS00MWYzLWFmMmUtMjE1ODM3NjBlODA5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "71%"
			},
			{
				"Source": "Metacritic",
				"Value": "62/100"
			}
		],
		"Metascore": "62",
		"imdbRating": "7.3",
		"imdbVotes": "150,954",
		"imdbID": "tt7984766",
		"Type": "movie",
		"DVD": "01 Nov 2019",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Men Who Stare at Goats",
		"Year": "2009",
		"Rated": "R",
		"Released": "06 Nov 2009",
		"Runtime": "94 min",
		"Genre": "Comedy, War",
		"Director": "Grant Heslov",
		"Writer": "Jon Ronson, Peter Straughan",
		"Actors": "Ewan McGregor, George Clooney, Kevin Spacey",
		"Plot": "A reporter, trying to lose himself in the romance of war after his marriage fails, gets more than he bargains for when he meets a special forces agent who reveals the existence of a secret, psychic military unit whose goal is to end war as we know it. The founder of the unit has gone missing and the trail leads to another psychic soldier who has distorted the mission to serve his own ends.",
		"Language": "English, Arabic",
		"Country": "United States, United Kingdom",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIwOTQwNzg1MV5BMl5BanBnXkFtZTcwODc4MDU4Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "51%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.2",
		"imdbVotes": "137,101",
		"imdbID": "tt1234548",
		"Type": "movie",
		"DVD": "06 Mar 2012",
		"BoxOffice": "$32,428,195",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Abyss",
		"Year": "1989",
		"Rated": "PG-13",
		"Released": "09 Aug 1989",
		"Runtime": "140 min",
		"Genre": "Adventure, Drama, Mystery",
		"Director": "James Cameron",
		"Writer": "James Cameron",
		"Actors": "Ed Harris, Mary Elizabeth Mastrantonio, Michael Biehn",
		"Plot": "Formerly married petroleum engineers who still have some issues to work out. They are drafted to assist a gung-ho Navy SEAL with a top-secret recovery operation: a nuclear sub has been ambushed and sunk, under mysterious circumstances, in some of the deepest waters on Earth.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 9 wins & 16 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmU4NmUxZjEtYjY0OC00ZDAwLTg0MGQtMDRkNDk5NWQ0OTQ5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "62/100"
			}
		],
		"Metascore": "62",
		"imdbRating": "7.5",
		"imdbVotes": "190,131",
		"imdbID": "tt0096754",
		"Type": "movie",
		"DVD": "30 Nov 2016",
		"BoxOffice": "$54,981,151",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Mortuary Collection",
		"Year": "2019",
		"Rated": "Not Rated",
		"Released": "15 Oct 2020",
		"Runtime": "108 min",
		"Genre": "Fantasy, Horror",
		"Director": "Ryan Spindell",
		"Writer": "Ryan Spindell",
		"Actors": "Tristan Byon, Eden Campbell, Hannah R. Loyd",
		"Plot": "A creepy old mortician manages a very strange mortuary all alone until a young woman shows interest in working for him. The mortician tells the young apprentice a series of stories about those that have died in the town.",
		"Language": "English",
		"Country": "United States",
		"Awards": "14 wins & 16 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTJkNGZkYjEtNDdjMy00NDYxLWE1MDYtNTgyMWNhOWRhZTBkXkEyXkFqcGdeQXVyNDc0MzY5MTk@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "96%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "6.4",
		"imdbVotes": "14,340",
		"imdbID": "tt7781432",
		"Type": "movie",
		"DVD": "15 Oct 2020",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Mummy Returns",
		"Year": "2001",
		"Rated": "PG-13",
		"Released": "04 May 2001",
		"Runtime": "130 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Stephen Sommers",
		"Writer": "Stephen Sommers",
		"Actors": "Brendan Fraser, Rachel Weisz, John Hannah",
		"Plot": "Many years ago, in Ancient Egypt, the Scorpion King led a menacing army, but when he sold his soul to Anubis, he was erased from history. Now he is only a myth...or is he? Rick and Evelyn O'Connell are still discovering new artifacts, along with their 8 year old son Alex. They discover the Bracelet of Anubis. But someone else is after the bracelet. High Priest Imhotep has been brought back from the dead once again and wants the bracelet, to control the Scorpion King's army. That's not the only problem. Imhotep now has Alex and with the bracelet attached to him, doesn't have long to live.",
		"Language": "English, Arabic",
		"Country": "United States",
		"Awards": "6 wins & 19 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2U1NmZmYTUtZWVjNC00Zjk5LWI0YjAtOTc2NWVkMzE3ODYzXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.4",
		"imdbVotes": "344,265",
		"imdbID": "tt0209163",
		"Type": "movie",
		"DVD": "18 Dec 2015",
		"BoxOffice": "$202,019,785",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Mummy: Tomb of the Dragon Emperor",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "01 Aug 2008",
		"Runtime": "112 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Rob Cohen",
		"Writer": "Alfred Gough, Miles Millar, John L. Balderston",
		"Actors": "Brendan Fraser, Jet Li, Maria Bello",
		"Plot": "Centuries ago, the evil Emperor Han was cursed by the sorceress Zi Yuan who transformed him and his army into mummies. In 1946, the explorer Rick O'Connell and his wife Evelyn O'Connell are invited by the British government to take a relic, the diamond \"The Eye of Shangri-La\" to China. The ancient stone is capable of resurrecting the Emperor Han and of pointing the way to Shangri-La and the eternal pool of life. When the couple reaches China, they meet their son Alex O'Connell, who has discovered the tomb of Han, and Evelyn's brother Jonathan Carnahan. The O'Connells are betrayed by their friend Prof. Roger Wilson, who is associated with General Yang. Yang wants to serve Emperor Han, so he resurrects the mummy and they head for Shangri-La. The guardian of Han's tomb (and Zi's daughter) Lin tells them that the only ways to destroy Han are to prevent him from reaching Shangri-La or by stabbing his heart with a cursed dagger.",
		"Language": "English, Mandarin, Sanskrit",
		"Country": "United States, Germany, China, Canada",
		"Awards": "2 wins & 6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "13%"
			},
			{
				"Source": "Metacritic",
				"Value": "31/100"
			}
		],
		"Metascore": "31",
		"imdbRating": "5.2",
		"imdbVotes": "170,082",
		"imdbID": "tt0859163",
		"Type": "movie",
		"DVD": "08 May 2015",
		"BoxOffice": "$102,491,776",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Painted Veil",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "19 Jan 2007",
		"Runtime": "125 min",
		"Genre": "Drama, Romance",
		"Director": "John Curran",
		"Writer": "Ron Nyswaner, W. Somerset Maugham",
		"Actors": "Naomi Watts, Edward Norton, Liev Schreiber",
		"Plot": "This love story has Kitty (Naomi Watts) meeting young, intelligent, shy and somewhat dull Dr. Walter Fane (Edward Norton), whose forte is the study of infectious diseases, and the convenient marriage to which she finds herself committed. It is in this web of intrigue that they head for China, only after Walter discovers Kitty's infidelity with the dashing and witty diplomat Charlie Townsend (Liev Schreiber). So much as to hide her from herself and to help thwart a cholera outbreak, this is a marriage more than on the rocks. This is a cold, indifferent, and loveless partnership in a vast unknown and deadly environment that will test both of these flightless lovebirds and with the hardships and tolerances more than any had ever anticipated. A visual delight amidst the pain and suffering of dying people and failing marriage. Will a cure be found for both, before it's too late?",
		"Language": "English, Mandarin, French",
		"Country": "China, Canada, United States",
		"Awards": "11 wins & 13 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYWRjYmNjODUtNDZhYS00ZmJmLTkyNjQtOGI2ZjBhMjAyNDliXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "74%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.4",
		"imdbVotes": "95,704",
		"imdbID": "tt0446755",
		"Type": "movie",
		"DVD": "01 Dec 2010",
		"BoxOffice": "$8,060,487",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Proposal",
		"Year": "2009",
		"Rated": "PG-13",
		"Released": "19 Jun 2009",
		"Runtime": "108 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Anne Fletcher",
		"Writer": "Peter Chiarelli",
		"Actors": "Sandra Bullock, Ryan Reynolds, Mary Steenburgen",
		"Plot": "For three years, Andrew Paxton has slaved as the assistant to Margaret Tate, hard-driving editor at a New York publisher. When Margaret, a Canadian, faces deportation for an expired visa, she hatches a scheme to marry Andrew - he agrees if she'll promise a promotion. A skeptical INS agent vows to test the couple about each other the next Monday. Andrew had plans to fly home that weekend for his grandma's 90th, so Margaret goes with him - to Sitka, Alaska - where mom, dad, and grams await. Family dynamics take over: tensions between dad and Andrew, an ex-girlfriend, Andrew's dislike of Margaret, and her past color the next few days, with the INS ready to charge Andrew with fraud.",
		"Language": "English",
		"Country": "United States",
		"Awards": "7 wins & 20 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "45%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "6.7",
		"imdbVotes": "356,787",
		"imdbID": "tt1041829",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$163,958,031",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Naked Gun: From the Files of Police Squad!",
		"Year": "1988",
		"Rated": "PG-13",
		"Released": "02 Dec 1988",
		"Runtime": "85 min",
		"Genre": "Comedy, Crime",
		"Director": "David Zucker",
		"Writer": "Jerry Zucker, Jim Abrahams, David Zucker",
		"Actors": "Leslie Nielsen, Priscilla Presley, O.J. Simpson",
		"Plot": "A rerun of many of the gags from the television series Police Squad! (1982). An Airplane! (1980)-type spoof, this time with the an incompetent Lieutenant Frank Drebin, who always \"gets his man\". Visual gags come thick and fast, and it's impossible to catch them all with one viewing. The plot: Queen Elizabeth II of England is coming to town, and Vincent Ludwig has plans to assassinate her using a brainwashed baseball player.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODk1ZWM4ZjItMjFhZi00MDMxLTgxNmYtODFhNWZlZTkwM2UwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "76/100"
			}
		],
		"Metascore": "76",
		"imdbRating": "7.6",
		"imdbVotes": "183,650",
		"imdbID": "tt0095705",
		"Type": "movie",
		"DVD": "01 Aug 2013",
		"BoxOffice": "$78,756,177",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Nice Guys",
		"Year": "2016",
		"Rated": "R",
		"Released": "20 May 2016",
		"Runtime": "116 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Shane Black",
		"Writer": "Shane Black, Anthony Bagarozzi",
		"Actors": "Russell Crowe, Ryan Gosling, Angourie Rice",
		"Plot": "Set against the backdrop of 1977 Los Angeles, The Nice Guys opens when single father and licensed PI Holland March (Gosling) is hired to investigate the apparent suicide of famous porn star Misty Mountains. As the trail leads him to track down a girl named Amelia (Qualley), he encounters less licensed and less hands-off private eye Jackson Healey (Russell Crowe) and his brass knuckles, both hired by the young hippie. However, the situation takes a turn for the worse when Amelia vanishes and it becomes apparent that March wasn't the only party interested. As both men are forced to team up, they'll have to take on a world filled with eccentric goons, strippers dressed as mermaids and even a possible government conspiracy.",
		"Language": "English, German",
		"Country": "United States",
		"Awards": "9 wins & 34 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "70/100"
			}
		],
		"Metascore": "70",
		"imdbRating": "7.4",
		"imdbVotes": "368,723",
		"imdbID": "tt3799694",
		"Type": "movie",
		"DVD": "09 Aug 2016",
		"BoxOffice": "$36,261,763",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Perfect Date",
		"Year": "2019",
		"Rated": "TV-14",
		"Released": "12 Apr 2019",
		"Runtime": "89 min",
		"Genre": "Comedy, Romance",
		"Director": "Chris Nelson",
		"Writer": "Steve Bloom, Randall Green",
		"Actors": "Noah Centineo, Laura Marano, Odiseas Georgiadis",
		"Plot": "Brooks Rattigan (Noah Centineo) has the academic chops to get into his dream Ivy League school, but what he's missing is an outstanding extracurricular - and the money. When he seizes on an opportunity to make some extra cash by posing as the boyfriend of a self-assured, combat boot-loving girl named Celia Lieberman (Laura Marano), he finds he has a knack for being the perfect stand-in. Together with his programmer friend Murph (Odiseas Georgiadis), Brooks launches an app selling himself as a plus-one for all occasions. Along the way, he meets the girl of his dreams (Camila Mendes). But when business starts to boom, Brooks must reassess everything he was once sure of.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGRhOWM5MzQtM2FlNi00Zjc5LThmZmUtZTI2NzY0MTA1YjM2XkEyXkFqcGdeQXVyODQwODA1MjY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.8",
		"imdbVotes": "42,681",
		"imdbID": "tt8201170",
		"Type": "movie",
		"DVD": "12 Apr 2019",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Ugly Truth",
		"Year": "2009",
		"Rated": "R",
		"Released": "24 Jul 2009",
		"Runtime": "96 min",
		"Genre": "Comedy, Romance",
		"Director": "Robert Luketic",
		"Writer": "Nicole Eastman, Karen McCullah, Kirsten Smith",
		"Actors": "Katherine Heigl, Gerard Butler, Bree Turner",
		"Plot": "A romantically challenged morning show producer is reluctantly embroiled in a series of outrageous tests by her chauvinistic correspondent to prove his theories on relationships and help her find love. His clever ploys, however, lead to an unexpected result.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MTM2OTUwNl5BMl5BanBnXkFtZTcwNTgwNTE0Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "14%"
			},
			{
				"Source": "Metacritic",
				"Value": "28/100"
			}
		],
		"Metascore": "28",
		"imdbRating": "6.4",
		"imdbVotes": "229,254",
		"imdbID": "tt1142988",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$88,915,214",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Twilight Samurai",
		"Year": "2002",
		"Rated": "N/A",
		"Released": "02 Nov 2002",
		"Runtime": "129 min",
		"Genre": "Drama, Romance",
		"Director": "Yôji Yamada",
		"Writer": "Shûhei Fujisawa, Yôji Yamada, Yoshitaka Asama",
		"Actors": "Hiroyuki Sanada, Rie Miyazawa, Nenji Kobayashi",
		"Plot": "Seibei Iguchi, a low-ranking samurai, leads a life without glory as a bureaucrat in the mid-XIX century Japan. A widower, he has charge of two daughters (whom he adores) and a senile mother; he must therefore work in the fields and accept piecework to make ends meet. New prospects seem to open up when Tomoe, his long-time love, divorces a brutal husband. However, even as the Japanese feudal system is unraveling, Seibei remains bound by the code of honour of the samurai and by his own sense of social precedences. The consequences are cruel.",
		"Language": "Japanese",
		"Country": "Japan",
		"Awards": "Nominated for 1 Oscar. 38 wins & 9 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDc5NDNkZTgtMmE3MS00OTNjLTkyMTItZGIzMjI1OTg5MmI0XkEyXkFqcGdeQXVyMjYzMDI3OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "99%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "8.1",
		"imdbVotes": "25,204",
		"imdbID": "tt0351817",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$559,765",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Secret Life of Walter Mitty",
		"Year": "2013",
		"Rated": "PG",
		"Released": "25 Dec 2013",
		"Runtime": "114 min",
		"Genre": "Adventure, Comedy, Drama",
		"Director": "Ben Stiller",
		"Writer": "Steve Conrad, James Thurber",
		"Actors": "Ben Stiller, Kristen Wiig, Jon Daly",
		"Plot": "The manager of the negative assets sector of Life magazine, Walter Mitty, has been working for sixteen years for the magazine and has a tedious life, not going anywhere but from his home to his job and vice-versa. He is an escapist, daydreaming into a world of fantasy many times a day. Walter has a crush on the recently hired Cheryl Melhoff but he is too shy to invite her on a date and he is trying to contact her via online dating. The magazine is preparing to release its last printed edition and the loathsome manager of transition Ted Hendricks is preparing an inevitable downsizing over the next few days. Walter has been the liaison between the magazine and the mysterious independent photographer Sean O'Connell who has sent to him a package of negatives and a wallet as a gift for his work. Sean also suggests to the senior management the use of negative 25 for the cover of the last edition. However, Walter cannot find the negative that is missing. Walter has no means to contact Sean and finds a clue that he might be in Greenland. He decides to travel to Greenland to track Sean down in the beginning of an unbelievable adventure.",
		"Language": "English, Spanish, Icelandic",
		"Country": "United States, United Kingdom",
		"Awards": "5 wins & 18 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "7.3",
		"imdbVotes": "339,481",
		"imdbID": "tt0359950",
		"Type": "movie",
		"DVD": "30 Sep 2015",
		"BoxOffice": "$58,236,838",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Other Woman",
		"Year": "2014",
		"Rated": "PG-13",
		"Released": "25 Apr 2014",
		"Runtime": "109 min",
		"Genre": "Comedy, Romance",
		"Director": "Nick Cassavetes",
		"Writer": "Melissa K. Stack",
		"Actors": "Cameron Diaz, Leslie Mann, Kate Upton",
		"Plot": "After discovering her boyfriend is married, Carly Whitten tries to get her ruined life back on track. But when she accidentally meets the wife he's been cheating on, she realizes they have much in common, and her sworn enemy becomes her greatest friend. When yet another affair is discovered, all three women team up to plot mutual revenge on their cheating, lying, three-timing SOB.",
		"Language": "English",
		"Country": "United States",
		"Awards": "3 wins & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTc0ODE4ODY1OF5BMl5BanBnXkFtZTgwMDA5NjkzMTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "26%"
			},
			{
				"Source": "Metacritic",
				"Value": "39/100"
			}
		],
		"Metascore": "39",
		"imdbRating": "6.0",
		"imdbVotes": "149,046",
		"imdbID": "tt2203939",
		"Type": "movie",
		"DVD": "21 Nov 2014",
		"BoxOffice": "$83,911,193",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Warrior's Way",
		"Year": "2010",
		"Rated": "R",
		"Released": "03 Dec 2010",
		"Runtime": "100 min",
		"Genre": "Action, Drama, Fantasy",
		"Director": "Sngmoo Lee",
		"Writer": "Sngmoo Lee, Scott Reynolds",
		"Actors": "Jang Dong-Gun, Kate Bosworth, Geoffrey Rush",
		"Plot": "Yang, the world's finest swordsman, packs it in and leaves Japan to find an old friend in the Wild West rather than kill the infant queen of a rival clan. He carries the baby to his friend's desolate, broken-down town; the friend has died, so Yang reopens a laundry and settles down, hanging wet clothes, growing flowers, raising the infant, and finding himself attracted to Lynne, a red-haired woman with a tragic past. As long as Yang keeps his sword sheathed, his rivals won't find him, but a band of reprobate gunmen terrorize the town and threaten Lynne. Showdowns are inevitable, but once the sword is drawn, can Yang find rest, a home, and a family?",
		"Language": "English",
		"Country": "New Zealand, South Korea",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BY2NjNDdhMDktNDcxYy00MjM4LWIzMzQtODY2MzAyZTk5N2VhXkEyXkFqcGdeQXVyMTEyOTQ1OTk4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "33%"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.2",
		"imdbVotes": "27,185",
		"imdbID": "tt1032751",
		"Type": "movie",
		"DVD": "23 Jun 2011",
		"BoxOffice": "$5,666,340",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Tree of Life",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "17 May 2011",
		"Runtime": "139 min",
		"Genre": "Drama, Fantasy",
		"Director": "Terrence Malick",
		"Writer": "Terrence Malick",
		"Actors": "Brad Pitt, Sean Penn, Jessica Chastain",
		"Plot": "The impressionistic story of a Texas family in the 1950s. The film follows the life journey of the eldest son, Jack, through the innocence of childhood to his disillusioned adult years as he tries to reconcile a complicated relationship with his father (Brad Pitt). Jack (played as an adult by Sean Penn) finds himself a lost soul in the modern world, seeking answers to the origins and meaning of life while questioning the existence of faith.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 3 Oscars. 116 wins & 129 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "85/100"
			}
		],
		"Metascore": "85",
		"imdbRating": "6.8",
		"imdbVotes": "183,095",
		"imdbID": "tt0478304",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$13,303,319",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Naked Gun 2½: The Smell of Fear",
		"Year": "1991",
		"Rated": "PG-13",
		"Released": "28 Jun 1991",
		"Runtime": "85 min",
		"Genre": "Comedy, Crime",
		"Director": "David Zucker",
		"Writer": "Jim Abrahams, David Zucker, Jerry Zucker",
		"Actors": "Leslie Nielsen, Priscilla Presley, George Kennedy",
		"Plot": "Lieutenant Frank Drebbin returns to save the day once again. This time he's out to foil the \"big boys\" in the energy business. A top scientist (Dr. Mainheimer) is about to publish his report on energy supply for the future. Things don't look good for the traditional suppliers; oil, coal, and nuclear. To save their industries, the suppliers kidnap Mainheimer and replace him with a decoy with a more favorable report. Jane, the doctor's secretary, is Drebin's old flame. Their passionate love affair is thus rekindled.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "2 wins & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmU2NGU5MTUtYWRlNy00NzJiLWIxMTMtMDIxNDYxNjRlODg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "58%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "6.9",
		"imdbVotes": "121,303",
		"imdbID": "tt0102510",
		"Type": "movie",
		"DVD": "01 Jan 2011",
		"BoxOffice": "$86,930,411",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Shawshank Redemption",
		"Year": "1994",
		"Rated": "R",
		"Released": "14 Oct 1994",
		"Runtime": "142 min",
		"Genre": "Drama",
		"Director": "Frank Darabont",
		"Writer": "Stephen King, Frank Darabont",
		"Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
		"Plot": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 7 Oscars. 21 wins & 42 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "9.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "82/100"
			}
		],
		"Metascore": "82",
		"imdbRating": "9.3",
		"imdbVotes": "2,865,799",
		"imdbID": "tt0111161",
		"Type": "movie",
		"DVD": "15 Aug 2008",
		"BoxOffice": "$28,767,189",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Prestige",
		"Year": "2006",
		"Rated": "PG-13",
		"Released": "20 Oct 2006",
		"Runtime": "130 min",
		"Genre": "Drama, Mystery, Sci-Fi",
		"Director": "Christopher Nolan",
		"Writer": "Jonathan Nolan, Christopher Nolan, Christopher Priest",
		"Actors": "Christian Bale, Hugh Jackman, Scarlett Johansson",
		"Plot": "In the end of the nineteenth century, in London, Robert Angier, his beloved wife Julia McCullough, and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death, and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences.",
		"Language": "English",
		"Country": "United Kingdom, United States",
		"Awards": "Nominated for 2 Oscars. 6 wins & 44 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "77%"
			},
			{
				"Source": "Metacritic",
				"Value": "66/100"
			}
		],
		"Metascore": "66",
		"imdbRating": "8.5",
		"imdbVotes": "1,428,846",
		"imdbID": "tt0482571",
		"Type": "movie",
		"DVD": "23 Nov 2015",
		"BoxOffice": "$53,089,891",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Other Guys",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "06 Aug 2010",
		"Runtime": "107 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Adam McKay",
		"Writer": "Adam McKay, Chris Henchy",
		"Actors": "Will Ferrell, Mark Wahlberg, Derek Jeter",
		"Plot": "Terry Hoitz's past mistakes in the line of duty and Allen Gamble's reluctance to take risks have landed them the roles of the \"Other Guys\", disgraced New York City police detectives relegated to filling out paperwork for cocky hero cops Danson and Highsmith. The mismatched duo must look past their differences when they take on a high-profile investigation of shady capitalist David Ershon and attempt to fill the shoes of the notoriously reckless officers they idolize.",
		"Language": "English, Ukrainian",
		"Country": "United States",
		"Awards": "3 wins & 15 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMDlhZDQ5NDUtNDcwMi00MTQ5LTk1Y2UtYjNmMjgzNzNhNzU3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "79%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "6.6",
		"imdbVotes": "286,792",
		"imdbID": "tt1386588",
		"Type": "movie",
		"DVD": "01 May 2012",
		"BoxOffice": "$119,219,978",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Rundown",
		"Year": "2003",
		"Rated": "PG-13",
		"Released": "26 Sep 2003",
		"Runtime": "104 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Peter Berg",
		"Writer": "R.J. Stewart, James Vanderbilt",
		"Actors": "Dwayne Johnson, Seann William Scott, Christopher Walken",
		"Plot": "In an attempt to earn enough money to start his own small business, the dauntless bounty hunter--or retrieval expert--and aspiring restaurateur, Beck, is talked into bringing back home his shady boss' adventure-seeking son, Travis, from the impenetrable Amazon jungle. However, there, in the dusty town of El Dorado, Beck is in for a wild ride, as the local tyrant and powerful mining baron, Cornelius Hatcher, too, is desperately trying to track down Travis: the only person who knows the exact location of a precious golden artefact. Now, the feisty barmaid with the hidden agenda, Mariana, and Hatcher's small army of whip-cracking gun-toting henchmen are after Beck and Travis, hell-bent on finding first the rare statuette. Will they get out of the jungle in one piece?",
		"Language": "English, Portuguese",
		"Country": "United States",
		"Awards": "2 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWU3ZDYxZjMtZmYyOS00NWQyLTk1MmItNDg4ZWM2ZGQxOTNiXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "70%"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "6.7",
		"imdbVotes": "142,729",
		"imdbID": "tt0327850",
		"Type": "movie",
		"DVD": "24 Aug 2015",
		"BoxOffice": "$47,726,342",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Vice",
		"Year": "2018",
		"Rated": "R",
		"Released": "25 Dec 2018",
		"Runtime": "132 min",
		"Genre": "Biography, Comedy, Drama",
		"Director": "Adam McKay",
		"Writer": "Adam McKay",
		"Actors": "Christian Bale, Amy Adams, Steve Carell",
		"Plot": "Governor George W. Bush of Texas picks Dick Cheney, the CEO of Halliburton Co, to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive resume includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
		"Language": "English, Arabic",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 35 wins & 139 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NjM0MzgxMV5BMl5BanBnXkFtZTgwNDc4NTY0NjM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "65%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "7.2",
		"imdbVotes": "160,625",
		"imdbID": "tt6266538",
		"Type": "movie",
		"DVD": "12 Mar 2019",
		"BoxOffice": "$47,836,282",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wild Tales",
		"Year": "2014",
		"Rated": "R",
		"Released": "21 Aug 2014",
		"Runtime": "122 min",
		"Genre": "Comedy, Drama, Thriller",
		"Director": "Damián Szifron",
		"Writer": "Julian Loyola, Damián Szifron, Germán Servidio",
		"Actors": "Darío Grandinetti, María Marull, Mónica Villa",
		"Plot": "The film is divided into six segments. (1) \"Pasternak\": While being on a plane, a model and a music critic realise they have a common acquaintance called Pasternak. Soon they discover that every passenger and crew member on board know Pasternak. Is this coincidence? (2) \"The Rats\": A waitress recognizes her client - it's the loan shark who caused a tragedy in her family. The cook suggests mixing rat poison with his food, but the waitress refuses. The stubborn cook, however, decides to proceed with her plan. (3) \"The Strongest\": Two drivers on a lone highway have an argument with tragic consequences. (4) \"Little Bomb\": A demolition engineer has his car towed by a truck for parking in a wrong place and he has an argument with the employee of the towing company. This event destroys his private and professional life, and he plots revenge against the corrupt towing company and the city hall. (5) \"The Proposal\": A reckless son of a wealthy family has an overnight hit-and-run accident, in which a pregnant woman gets killed. He wakes his parents up and his father calls the lawyer. The parents propose to pay the groundkeeper to take the blame for the boy. Soon the father discovers that he is a victim of extortion of his lawyer and the public prosecutor in charge of the investigation. What will be his decision? (6) \"Until Death Do Us Apart\": During the wedding party, the bride discovers that her newlywed husband has been cheating on her with one of the guests, and she decides to pay him back.",
		"Language": "Spanish",
		"Country": "Argentina, Spain, France, United Kingdom",
		"Awards": "Nominated for 1 Oscar. 49 wins & 58 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzAzMjA1ODAxOV5BMl5BanBnXkFtZTgwODg4NTQzNDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "94%"
			},
			{
				"Source": "Metacritic",
				"Value": "77/100"
			}
		],
		"Metascore": "77",
		"imdbRating": "8.1",
		"imdbVotes": "215,088",
		"imdbID": "tt3011894",
		"Type": "movie",
		"DVD": "20 Oct 2016",
		"BoxOffice": "$3,106,530",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wrongfully Accused",
		"Year": "1998",
		"Rated": "PG-13",
		"Released": "21 Aug 1998",
		"Runtime": "87 min",
		"Genre": "Action, Comedy, Thriller",
		"Director": "Pat Proft",
		"Writer": "Pat Proft",
		"Actors": "Leslie Nielsen, Richard Crenna, Kelly LeBrock",
		"Plot": "Ryan Harrison, a violin god, superstar and sex symbol does not want to cheat on sexy Lauren Goodhue's husband with her. Shortly after that Mr. Goodhue is found murdered and Ryan suddenly finds himself being the main suspect. After being sentenced to death he manages to flee while being transferred to his execution site. Now, all the world is after him as he stumbles from one unfortunate incident to the next in order to find the real murderer.",
		"Language": "English",
		"Country": "United States, Germany",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGI5NWUwNmItZDBmZS00Yjg5LWE0ZWMtMjAzYmVlNWIwMmEzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "18%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "6.0",
		"imdbVotes": "28,930",
		"imdbID": "tt0120901",
		"Type": "movie",
		"DVD": "13 May 2019",
		"BoxOffice": "$9,623,329",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Rite",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "28 Jan 2011",
		"Runtime": "114 min",
		"Genre": "Drama, Horror, Mystery",
		"Director": "Mikael Håfström",
		"Writer": "Michael Petroni, Matt Baglio",
		"Actors": "Colin O'Donoghue, Anthony Hopkins, Ciarán Hinds",
		"Plot": "Michael Kovak (Colin O'Donaghue), the son of a funeral director grows indifferent to his father and joins a Seminary. On his way to the course completion, he is overwhelmed by a strong lack of faith. His religious beliefs are further jolted when he sees a young girl haplessly dying in a road accident for whom he reluctantly performs the ritual to absolve her sins. His mentor still believes in him and urges him to go to Italy to take an exorcism course hoping that he it would strengthen his faith in Christianity. In Italy, he attends a session from Father Xavier (Ciarán Hinds), who soon becomes aware of his skepticism. As a result he sends him to an eminent Jesuit exorcist, Father Lucas Trevant (Sir Anthony Hopkins), whose ways though questionable are quite effective. He witnesses the exorcism of a sixteen year old girl but still seems unconvinced. Father Lucas explains to him that it takes multiple sessions over a long stretch of time to completely free a victim from the demon. Despite witnessing some supernatural occurrences during the aforesaid exorcism, Michael is as skeptical as ever. After the second exorcism, the girls condition becomes quite critical as she is moved to a hospital. She soon dies and the demon finds a new victim. As the moment of reckoning draws near, Michael may be the only hope left but first he must overcome his own doubts and apprehensions in order to fight and destroy the ominous forces.",
		"Language": "English, Welsh, Italian, Latin, Russian, Hungarian, Greek",
		"Country": "United States, Hungary, Italy",
		"Awards": "1 win & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTcxNTAxMTMzNF5BMl5BanBnXkFtZTcwMjQ1MDAxNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "22%"
			},
			{
				"Source": "Metacritic",
				"Value": "38/100"
			}
		],
		"Metascore": "38",
		"imdbRating": "6.0",
		"imdbVotes": "102,406",
		"imdbID": "tt1161864",
		"Type": "movie",
		"DVD": "17 Jan 2013",
		"BoxOffice": "$33,047,633",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Zone of Interest",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "20 Feb 2024",
		"Runtime": "105 min",
		"Genre": "Drama, History, War",
		"Director": "Jonathan Glazer",
		"Writer": "Jonathan Glazer, Martin Amis",
		"Actors": "Christian Friedel, Sandra Hüller, Johann Karthaus",
		"Plot": "Auschwitz commandant Rudolf Höss and his wife Hedwig strive to build a dream life for their family in a house and garden beside the camp.",
		"Language": "German, Polish, Yiddish",
		"Country": "United States, United Kingdom, Poland",
		"Awards": "Won 2 Oscars. 55 wins & 155 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzRmOGQwZjktYjM2Ni00M2NmLWFlZDYtZGFhM2RkM2VhZDI1XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Metacritic",
				"Value": "98/100"
			}
		],
		"Metascore": "98",
		"imdbRating": "7.5",
		"imdbVotes": "57,357",
		"imdbID": "tt7160372",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$8,377,499",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Trainwreck",
		"Year": "2015",
		"Rated": "R",
		"Released": "17 Jul 2015",
		"Runtime": "125 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Judd Apatow",
		"Writer": "Amy Schumer",
		"Actors": "Amy Schumer, Bill Hader, Brie Larson",
		"Plot": "Despite having a love/hate relationship with her scoundrel of a father Gordon Townsend, the one thing Amy Townsend has grown up believing from him is that monogamy isn't realistic, he and Amy's mom who broke up due to infidelity when Amy was young. As such, she gets drunk and stoned frequently in her pursuit of indiscriminate sex, with an unstated rule that there is no sleeping over once the sex is over. Her current \"boyfriend\", Steven, believes they are exclusive, not knowing that she sleeps with other men. Working at sensationalistic magazine S'nuff under head sensationalist Dianna, Amy is in line for a promotion, she certain to get it if her next story meets Dianna's scrutiny. That story is a profile of sports doctor to the stars, Dr. Aaron Conners, it despite Amy knowing nothing about sports. To Amy's amazement, Aaron wants to date her following their first sexual encounter, his sexual history in terms of quantity which is in extreme contrast to her own. Also to her amazement, she kind of wants to date him, the entire ritual of being the one person in another person's life a foreign concept to her. The road to a happy ending for the two is not guaranteed as their very different sexual histories and very different perspectives on sexual life may make them incompatible despite truly liking each other as people. Ensuring that his man Aaron is happy and doesn't get hurt in the process is someone who seems to take Aaron's personal life even more to heart than he does: LeBron James.",
		"Language": "English, Mandarin",
		"Country": "United States",
		"Awards": "5 wins & 27 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MjgwNTMyOV5BMl5BanBnXkFtZTgwMTc1MjI0NDE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "6.2",
		"imdbVotes": "142,313",
		"imdbID": "tt3152624",
		"Type": "movie",
		"DVD": "06 Sep 2016",
		"BoxOffice": "$110,212,700",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "True Grit",
		"Year": "2010",
		"Rated": "PG-13",
		"Released": "22 Dec 2010",
		"Runtime": "110 min",
		"Genre": "Drama, Western",
		"Director": "Ethan Coen, Joel Coen",
		"Writer": "Joel Coen, Ethan Coen, Charles Portis",
		"Actors": "Jeff Bridges, Matt Damon, Hailee Steinfeld",
		"Plot": "Following the murder of her father by hired hand Tom Chaney, 14-year-old farm girl Mattie Ross sets out to capture the killer. To aid her, she hires the toughest U.S. marshal she can find, a man with \"true grit,\" Reuben J. \"Rooster\" Cogburn. Mattie insists on accompanying Cogburn, whose drinking, sloth, and generally reprobate character do not augment her faith in him. Against his wishes, she joins him in his trek into the Indian Nations in search of Chaney. They are joined by Texas Ranger LaBoeuf, who wants Chaney for his own purposes. The unlikely trio find danger and surprises on the journey, and each has his or her \"grit\" tested.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 10 Oscars. 38 wins & 169 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU5MjU3MTI4OF5BMl5BanBnXkFtZTcwMTQxOTAxNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "80/100"
			}
		],
		"Metascore": "80",
		"imdbRating": "7.6",
		"imdbVotes": "355,080",
		"imdbID": "tt1403865",
		"Type": "movie",
		"DVD": "01 Jul 2013",
		"BoxOffice": "$171,243,005",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Tooth Fairy",
		"Year": "2010",
		"Rated": "PG",
		"Released": "22 Jan 2010",
		"Runtime": "101 min",
		"Genre": "Comedy, Family, Fantasy",
		"Director": "Michael Lembeck",
		"Writer": "Lowell Ganz, Babaloo Mandel, Joshua Sternin",
		"Actors": "Dwayne Johnson, Ashley Judd, Julie Andrews",
		"Plot": "Derek Thompson (Dwayne \"The Rock\" Johnson) is \"The Tooth Fairy\", a hard-charging minor league hockey player whose nickname comes from his habit of separating opposing players from their bicuspids. When Derek discourages a youngster's hopes, he's sentenced to one week's hard labor as a real tooth fairy, complete with the requisite tutu, wings, and magic wand. At first, Derek \"can't handle the tooth\" - bumbling and stumbling as he tries to furtively wing his way through strangers' homes - doing what tooth fairies do. But as Derek slowly adapts to his new position, he begins to rediscover his own forgotten dreams.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "1 win & 4 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4NjQzMjQxNF5BMl5BanBnXkFtZTcwNTEzMDY4Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "17%"
			},
			{
				"Source": "Metacritic",
				"Value": "36/100"
			}
		],
		"Metascore": "36",
		"imdbRating": "5.0",
		"imdbVotes": "49,259",
		"imdbID": "tt0808510",
		"Type": "movie",
		"DVD": "25 Mar 2013",
		"BoxOffice": "$60,022,256",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Upgrade",
		"Year": "2018",
		"Rated": "R",
		"Released": "01 Jun 2018",
		"Runtime": "100 min",
		"Genre": "Action, Sci-Fi, Thriller",
		"Director": "Leigh Whannell",
		"Writer": "Leigh Whannell",
		"Actors": "Logan Marshall-Green, Melanie Vallejo, Steve Danielsen",
		"Plot": "Grey's a stay-at-home mechanic, whose wife is Asha. One day, Grey asks Asha to help him return a car to his client. Whilst Grey and Asha's self-driving car malfunctions, it crashes. Grey watches helplessly as Asha bleeds to death next to him. Grey returns home - a widowed quadriplegic, under the care of his mother. His wife's death and the inability of police to identify their attackers cause him to sink into a depression. After a suicide attempt, he's offered to have high tech chip implanted - enabling him to walk. Though initially hesitant, he's persuaded to have the surgery.",
		"Language": "English, Dutch",
		"Country": "United States, Australia",
		"Awards": "3 wins & 26 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjI0NzcyMjM5Ml5BMl5BanBnXkFtZTgwMzk2NzAyNTM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "7.5",
		"imdbVotes": "205,514",
		"imdbID": "tt6499752",
		"Type": "movie",
		"DVD": "14 Aug 2018",
		"BoxOffice": "$11,977,130",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Terminator",
		"Year": "1984",
		"Rated": "R",
		"Released": "26 Oct 1984",
		"Runtime": "107 min",
		"Genre": "Action, Sci-Fi",
		"Director": "James Cameron",
		"Writer": "James Cameron, Gale Anne Hurd, William Wisher",
		"Actors": "Arnold Schwarzenegger, Linda Hamilton, Michael Biehn",
		"Plot": "Sent back from a dystopian 2029--where the cold machines have conquered the entire world--to 1984 Los Angeles, the indestructible cyborg-assassin known as the \"Terminator\" commences his deadly mission to kill humankind's most important woman: the unsuspecting Sarah Connor. However, from the same war-torn post-apocalyptic future comes a battle-scarred defender--Kyle Reese, a brave soldier of the human Resistance Army--bent on stopping the cybernetic killer from eliminating the world's last hope. But, the Terminator has no feelings, he doesn't sleep, and above all, he won't stop until he carries out his grim task. Does our future lie in our past?",
		"Language": "English, Spanish",
		"Country": "United Kingdom, United States",
		"Awards": "8 wins & 7 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "100%"
			},
			{
				"Source": "Metacritic",
				"Value": "84/100"
			}
		],
		"Metascore": "84",
		"imdbRating": "8.1",
		"imdbVotes": "915,854",
		"imdbID": "tt0088247",
		"Type": "movie",
		"DVD": "05 Jul 2015",
		"BoxOffice": "$38,371,200",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "True Lies",
		"Year": "1994",
		"Rated": "R",
		"Released": "15 Jul 1994",
		"Runtime": "141 min",
		"Genre": "Action, Comedy, Thriller",
		"Director": "James Cameron",
		"Writer": "James Cameron, Claude Zidi, Simon Michaël",
		"Actors": "Arnold Schwarzenegger, Jamie Lee Curtis, Tom Arnold",
		"Plot": "Harry Tasker (Arnold Schwarzenegger) leads a double life. At work he is a government agent with a license to do just about anything, while at home he pretends to be a dull computer salesman. He is on the trail of stolen nuclear weapons that are in the hands of fanatic terrorists when something more important comes up. Harry finds his wife is seeing another man (Bill Paxton) because she needs some adventure in her life. Harry decides to give it to her, juggling pursuit of terrorists on one hand and an adventure for his wife on the other while showing he can Tango all at once.",
		"Language": "English, French, Arabic, German",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 8 wins & 22 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzg5YmUyNGMtMThiNS00MjA2LTgwZDctNDlhM2RkZDNmZmRkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "71%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.3",
		"imdbVotes": "278,142",
		"imdbID": "tt0111503",
		"Type": "movie",
		"DVD": "07 Oct 2016",
		"BoxOffice": "$146,282,411",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Unbearable Weight of Massive Talent",
		"Year": "2022",
		"Rated": "R",
		"Released": "22 Apr 2022",
		"Runtime": "107 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Tom Gormican",
		"Writer": "Tom Gormican, Kevin Etten",
		"Actors": "Nicolas Cage, Pedro Pascal, Tiffany Haddish",
		"Plot": "The fictionalized version of Nick Cage must accept a $1 million offer to attend the birthday of a dangerous super fan Javi Gutierrez. Things take a wildly unexpected turn when Nick Cage is recruited by a CIA operative Vivian and forced to live up to his own legend, channeling his most iconic and beloved on-screen characters in order to save himself and his loved ones.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "3 wins & 23 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDM2ODNiMWItOWRkNS00ODE3LWE2OGYtNTZkMDJkOWI1ODMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "68/100"
			}
		],
		"Metascore": "68",
		"imdbRating": "7.0",
		"imdbVotes": "148,742",
		"imdbID": "tt11291274",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$20,300,157",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Quest",
		"Year": "1996",
		"Rated": "PG-13",
		"Released": "26 Apr 1996",
		"Runtime": "95 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Jean-Claude Van Damme",
		"Writer": "Frank Dux, Jean-Claude Van Damme, Steven Klein",
		"Actors": "Jean-Claude Van Damme, Roger Moore, James Remar",
		"Plot": "Christopher Dubois embarks on an odyssey of self-discovery that spans the globe. Kidnapped and enslaved by gun smugglers, sold by pirates and thrust into the murky underworld of gambling and kickboxing, Chris' journey takes him to forbidding Muay Thai Island where deadly martial arts are taught, the colonial splendor of British East Asia, the dank back alleys of Bangkok, desolate deserts once trodden by the warriors of Genghis Khan and finally, the ancient Lost City. There he must face the ultimate test of his manhood in the fabled Ghang-gheng, the ancient winner-take-all competition in which the deadliest fighters from around the world employ the most spectacular feats of martial arts skills ever displayed in order to win the prized Golden Dragon. But fighting prowess alone will not be enough for Chris to triumph over such daunting foes. He must reach deep inside and access all of the determination, strength of character, and sense of selfless honor within in order to triumph over this final obstacle on his long trek home.",
		"Language": "English",
		"Country": "Canada, United States",
		"Awards": "1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWIyYjMxZTMtZGUyNy00N2UwLTgwNjctOWQ1OGMzN2VlMDExXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "14%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "5.6",
		"imdbVotes": "27,772",
		"imdbID": "tt0117420",
		"Type": "movie",
		"DVD": "07 May 2015",
		"BoxOffice": "$21,686,547",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Transformers: Rise of the Beasts",
		"Year": "2023",
		"Rated": "PG-13",
		"Released": "09 Jun 2023",
		"Runtime": "127 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Steven Caple Jr.",
		"Writer": "Joby Harold, Darnell Metayer, Josh Peters",
		"Actors": "Anthony Ramos, Dominique Fishback, Luna Lauren Velez",
		"Plot": "Set in the 1990s, Transformers: Rise of the Beasts will take audiences on an action-packed, globetrotting adventure as the Maximals, Predacons, and Terrorcons join the battle between the Autobots and Decepticons on Earth. Noah, a sharp young guy from Brooklyn, and Elena, an ambitious, talented artifact researcher, are swept up in the conflict as Optimus Prime and the Autobots face a terrifying new nemesis bent on their destruction named Scourge.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "1 win & 9 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "52%"
			},
			{
				"Source": "Metacritic",
				"Value": "42/100"
			}
		],
		"Metascore": "42",
		"imdbRating": "6.0",
		"imdbVotes": "100,525",
		"imdbID": "tt5090568",
		"Type": "movie",
		"DVD": "11 Jul 2023",
		"BoxOffice": "$157,066,392",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "War on Everyone",
		"Year": "2016",
		"Rated": "R",
		"Released": "03 Feb 2017",
		"Runtime": "98 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "John Michael McDonagh",
		"Writer": "John Michael McDonagh",
		"Actors": "Alexander Skarsgård, Michael Peña, Theo James",
		"Plot": "Bob Bolano and Terry Monroe are two crooked Albuquerque PD detectives. They tend to hustle criminals but their methods have landed them in hot water with their boss, and they are on their last warning. They get wind of a heist and decide to muscle in on the action, robbing the perpetrators. Unfortunately for them, the mastermind of the heist is someone out of their league, someone they would do well to fear.",
		"Language": "English, Spanish",
		"Country": "United Kingdom",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTU2MjAxMjk3Nl5BMl5BanBnXkFtZTgwMjM5NzI5MDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "62%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "5.8",
		"imdbVotes": "20,298",
		"imdbID": "tt3708886",
		"Type": "movie",
		"DVD": "30 Mar 2017",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "What's Your Number?",
		"Year": "2011",
		"Rated": "R",
		"Released": "30 Sep 2011",
		"Runtime": "106 min",
		"Genre": "Comedy, Romance",
		"Director": "Mark Mylod",
		"Writer": "Karyn Bosnak, Gabrielle Allan, Jennifer Crittenden",
		"Actors": "Anna Faris, Chris Evans, Ari Graynor",
		"Plot": "Ally is a woman who has many ex-boyfriends who turned out to be losers. Now she believes that she can't find a good guy. But when she runs into one of her exes who is now a 'Prince Charming', she decides to look up all of her exes to see if any of them have changed for the better. When she has trouble locating them, she asks her neighbor Colin, who sleeps with a different women every night and sneaks out the morning after to avoid talking to them, to help her.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIzNTc2MTgwNV5BMl5BanBnXkFtZTcwMzYzMzgxNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "23%"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "6.0",
		"imdbVotes": "86,634",
		"imdbID": "tt0770703",
		"Type": "movie",
		"DVD": "25 Nov 2015",
		"BoxOffice": "$14,011,084",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "This Is the End",
		"Year": "2013",
		"Rated": "R",
		"Released": "12 Jun 2013",
		"Runtime": "107 min",
		"Genre": "Comedy, Fantasy",
		"Director": "Evan Goldberg, Seth Rogen",
		"Writer": "Seth Rogen, Evan Goldberg, Jason Stone",
		"Actors": "James Franco, Jonah Hill, Seth Rogen",
		"Plot": "All Jay Baruchel expected coming to LA was a fun time with Seth Rogen with all the wild partying to have both by themselves and at James Franco's housewarming party. Suddenly, the Rapture hits and the Biblical Apocalypse has begun. Now, Jay and Seth are desperately sheltering in James' house for rescue along with a few other friends. Together, they must band together to attempt to survive the end of the world, only for Jay to find that they are all too dumb and superficial to do it until they discover the only way out.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "10 wins & 22 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "83%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "6.6",
		"imdbVotes": "433,511",
		"imdbID": "tt1245492",
		"Type": "movie",
		"DVD": "01 Feb 2015",
		"BoxOffice": "$101,470,202",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Uncharted",
		"Year": "2022",
		"Rated": "PG-13",
		"Released": "18 Feb 2022",
		"Runtime": "116 min",
		"Genre": "Action, Adventure",
		"Director": "Ruben Fleischer",
		"Writer": "Rafe Judkins, Art Marcum, Matt Holloway",
		"Actors": "Tom Holland, Mark Wahlberg, Antonio Banderas",
		"Plot": "Street-smart Nathan Drake (Tom Holland) is recruited by seasoned treasure hunter Victor \"Sully\" Sullivan (Mark Wahlberg) to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada. What starts as a heist job for the duo becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada (Antonio Banderas), who believes he and his family are the rightful heirs. If Nate and Sully can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure and perhaps even Nate's long-lost brother...but only if they can learn to work together.",
		"Language": "English, Spanish, Latin",
		"Country": "United States, Spain",
		"Awards": "3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Metacritic",
				"Value": "45/100"
			}
		],
		"Metascore": "45",
		"imdbRating": "6.3",
		"imdbVotes": "256,061",
		"imdbID": "tt1464335",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$148,648,820",
		"Production": "Columbia Pictures",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Wolverine",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "26 Jul 2013",
		"Runtime": "126 min",
		"Genre": "Action, Sci-Fi",
		"Director": "James Mangold",
		"Writer": "Mark Bomback, Scott Frank",
		"Actors": "Hugh Jackman, Will Yun Lee, Tao Okamoto",
		"Plot": "In modern day Japan, Wolverine is out of his depth in an unknown world as he faces his ultimate nemesis in a life-or-death battle that will leave him forever changed. Vulnerable for the first time and pushed to his physical and emotional limits, he confronts not only lethal samurai steel but also his inner struggle against his own near-immortality, emerging more powerful than we have ever seen him before.",
		"Language": "English, Japanese",
		"Country": "United States, United Kingdom",
		"Awards": "2 wins & 11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "71%"
			},
			{
				"Source": "Metacritic",
				"Value": "61/100"
			}
		],
		"Metascore": "61",
		"imdbRating": "6.7",
		"imdbVotes": "489,214",
		"imdbID": "tt1430132",
		"Type": "movie",
		"DVD": "01 Jun 2015",
		"BoxOffice": "$132,556,852",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "They Cloned Tyrone",
		"Year": "2023",
		"Rated": "R",
		"Released": "21 Jul 2023",
		"Runtime": "122 min",
		"Genre": "Comedy, Mystery, Sci-Fi",
		"Director": "Juel Taylor",
		"Writer": "Tony Rettenmaier, Juel Taylor",
		"Actors": "John Boyega, Jamie Foxx, Teyonah Parris",
		"Plot": "A series of eerie events thrusts an unlikely trio onto the trail of a nefarious government conspiracy in this pulpy mystery caper.",
		"Language": "English",
		"Country": "United States",
		"Awards": "2 wins & 23 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZGM2YTRhOTgtOGU0My00NGIxLTgxMjEtY2U1YzZiZWQ3OGI5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "74/100"
			}
		],
		"Metascore": "74",
		"imdbRating": "6.6",
		"imdbVotes": "39,171",
		"imdbID": "tt9873892",
		"Type": "movie",
		"DVD": "21 Jul 2023",
		"BoxOffice": "N/A",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Women Talking",
		"Year": "2022",
		"Rated": "PG-13",
		"Released": "20 Jan 2023",
		"Runtime": "104 min",
		"Genre": "Drama",
		"Director": "Sarah Polley",
		"Writer": "Sarah Polley, Miriam Toews",
		"Actors": "Rooney Mara, Claire Foy, Jessie Buckley",
		"Plot": "Do nothing, stay and fight, or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Won 1 Oscar. 64 wins & 162 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTZmMmQ4OWYtM2JmNC00NzY0LWJhODUtOTRmMWMyOTU4OWQ4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "79/100"
			}
		],
		"Metascore": "79",
		"imdbRating": "6.9",
		"imdbVotes": "40,925",
		"imdbID": "tt13669038",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$5,456,531",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Perfect Storm",
		"Year": "2000",
		"Rated": "PG-13",
		"Released": "30 Jun 2000",
		"Runtime": "130 min",
		"Genre": "Action, Adventure, Drama",
		"Director": "Wolfgang Petersen",
		"Writer": "Sebastian Junger, William D. Wittliff",
		"Actors": "George Clooney, Mark Wahlberg, John C. Reilly",
		"Plot": "In October 1991, a confluence of weather conditions combined to form a killer storm in the North Atlantic. Caught in the storm was the sword-fishing boat Andrea Gail. Magnificent foreshadowing and anticipation fill this true-life drama while minute details of the fishing boats, their gear and the weather are juxtaposed with the sea adventure.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 4 wins & 28 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGU2MWRiYmQtMDY1MS00OTUzLTkzYTktYjE5YTE4MTI0NzRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Metacritic",
				"Value": "59/100"
			}
		],
		"Metascore": "59",
		"imdbRating": "6.5",
		"imdbVotes": "176,768",
		"imdbID": "tt0177971",
		"Type": "movie",
		"DVD": "02 Sep 2008",
		"BoxOffice": "$182,618,434",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Shape of Water",
		"Year": "2017",
		"Rated": "R",
		"Released": "22 Dec 2017",
		"Runtime": "123 min",
		"Genre": "Drama, Fantasy, Romance",
		"Director": "Guillermo del Toro",
		"Writer": "Guillermo del Toro, Vanessa Taylor",
		"Actors": "Sally Hawkins, Octavia Spencer, Michael Shannon",
		"Plot": "From master storyteller Guillermo del Toro comes THE SHAPE OF WATER, an otherworldly fable set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Doug Jones.",
		"Language": "English, American Sign , Russian, French",
		"Country": "United States, Mexico",
		"Awards": "Won 4 Oscars. 136 wins & 350 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "92%"
			},
			{
				"Source": "Metacritic",
				"Value": "87/100"
			}
		],
		"Metascore": "87",
		"imdbRating": "7.3",
		"imdbVotes": "445,814",
		"imdbID": "tt5580390",
		"Type": "movie",
		"DVD": "23 Feb 2018",
		"BoxOffice": "$63,859,435",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Witches of Eastwick",
		"Year": "1987",
		"Rated": "R",
		"Released": "12 Jun 1987",
		"Runtime": "118 min",
		"Genre": "Comedy, Fantasy, Horror",
		"Director": "George Miller",
		"Writer": "John Updike, Michael Cristofer",
		"Actors": "Jack Nicholson, Cher, Susan Sarandon",
		"Plot": "All three previously married but now single, best friends sculptress Alex Medford, cellist Jane Spofford and writer Sukie Ridgemont are feeling emotionally and sexually repressed, in large part due to the traditional mores overriding their small New England coastal town of Eastwick. After their latest conversation lamenting about the lack of suitable men in Eastwick and describing the qualities they are looking for in a man, mysterious Daryl Van Horne and his equally mysterious butler Fidel arrive in town. Despite being vulgar, crude, brazen and not particularly handsome, Daryl manages to be able to tap into the innermost emotions of the three friends, and as such manages to seduce each. In turn, the three women blossom emotionally and sexually. After an incident involving one of the town's leading citizens, the ultra conservative Felicia Alden, the three women begin to understand how and why Daryl is able to mesmerize them so fully. The three decide to experiment with some powers learned indirectly from Daryl so that they can hopefully regain control of their own lives.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 2 Oscars. 5 wins & 13 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMmY3MDZkODktYjk4My00YWZmLThmOWItN2M1MjU5MDczZTQ1XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "67/100"
			}
		],
		"Metascore": "67",
		"imdbRating": "6.5",
		"imdbVotes": "76,435",
		"imdbID": "tt0094332",
		"Type": "movie",
		"DVD": "01 Oct 2010",
		"BoxOffice": "$63,766,510",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "You Don't Mess with the Zohan",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "06 Jun 2008",
		"Runtime": "113 min",
		"Genre": "Action, Comedy",
		"Director": "Dennis Dugan",
		"Writer": "Adam Sandler, Robert Smigel, Judd Apatow",
		"Actors": "Adam Sandler, John Turturro, Emmanuelle Chriqui",
		"Plot": "Harbouring an ardent desire to be the best in the cut-throat world of hairdressers, the Mossad's finest agent, Zohan, seizes the opportunity to call it quits by faking his death, after a fierce battle with his arch-nemesis, Phantom. In high hopes of making his dream come true in New York, the ambitious Zohan lands a job in the stylish hair salon of the beautiful Palestinian, Dalia, and things seem to work as planned; until a man from the past blows his cover. Now, the Zohan must fight tooth and nail to keep his new lifestyle, and in the meantime, try to win the heart of his boss. Can Zohan's dazzling hairstyling techniques save the world?",
		"Language": "English, Hebrew",
		"Country": "United States",
		"Awards": "2 wins & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "37%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "5.6",
		"imdbVotes": "212,512",
		"imdbID": "tt0960144",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$100,018,837",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Pianist",
		"Year": "2002",
		"Rated": "R",
		"Released": "28 Mar 2003",
		"Runtime": "150 min",
		"Genre": "Biography, Drama, Music",
		"Director": "Roman Polanski",
		"Writer": "Ronald Harwood, Wladyslaw Szpilman",
		"Actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay",
		"Plot": "In this adaptation of the autobiography \"The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945,\" Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.",
		"Language": "English, German, Russian",
		"Country": "France, Poland, Germany, United Kingdom, United States",
		"Awards": "Won 3 Oscars. 57 wins & 74 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "85/100"
			}
		],
		"Metascore": "85",
		"imdbRating": "8.5",
		"imdbVotes": "903,500",
		"imdbID": "tt0253474",
		"Type": "movie",
		"DVD": "19 Apr 2016",
		"BoxOffice": "$32,585,488",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wind River",
		"Year": "2017",
		"Rated": "R",
		"Released": "18 Aug 2017",
		"Runtime": "107 min",
		"Genre": "Crime, Drama, Mystery",
		"Director": "Taylor Sheridan",
		"Writer": "Taylor Sheridan",
		"Actors": "Elizabeth Olsen, Jeremy Renner, Graham Greene",
		"Plot": "East of Boulder Flats, deep into the vast and unforgiving white territory of the Wind River Indian Reservation, the seasoned game tracker, Cory Lambert, discovers the frozen body of the young Native American, Natalie. As this is a federal crime, the F.B.I. dispatches the inexperienced but courageous agent Jane Banner to lead the investigation, however, the unprepared outsider will soon team up with Cory to unravel the mystery of Natalie's murder. Before long, Cory will inevitably have to face his own past, while at the same time, both he and Jane are thirsting to see justice done. In the end, will this be a fruitful alliance?",
		"Language": "English",
		"Country": "United States, United Kingdom, France",
		"Awards": "17 wins & 27 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "88%"
			},
			{
				"Source": "Metacritic",
				"Value": "73/100"
			}
		],
		"Metascore": "73",
		"imdbRating": "7.7",
		"imdbVotes": "277,612",
		"imdbID": "tt5362988",
		"Type": "movie",
		"DVD": "31 Oct 2017",
		"BoxOffice": "$33,800,859",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Sixth Sense",
		"Year": "1999",
		"Rated": "PG-13",
		"Released": "06 Aug 1999",
		"Runtime": "107 min",
		"Genre": "Drama, Mystery, Thriller",
		"Director": "M. Night Shyamalan",
		"Writer": "M. Night Shyamalan",
		"Actors": "Bruce Willis, Haley Joel Osment, Toni Collette",
		"Plot": "Malcom Crowe (Bruce Willis) is a child psychologist who receives an award on the same night that he is visited by a very unhappy ex-patient. After this encounter, Crowe takes on the task of curing a young boy with the same ills as the ex-patient (Donnie Wahlberg) . This boy \"sees dead people\". Crowe spends a lot of time with the boy much to the dismay of his wife (Olivia Williams). Cole's mom (Toni Collette) is at her wit's end with what to do about her son's increasing problems. Crowe is the boy's only hope.",
		"Language": "English, Latin, Spanish",
		"Country": "United States",
		"Awards": "Nominated for 6 Oscars. 37 wins & 56 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "86%"
			},
			{
				"Source": "Metacritic",
				"Value": "64/100"
			}
		],
		"Metascore": "64",
		"imdbRating": "8.2",
		"imdbVotes": "1,041,928",
		"imdbID": "tt0167404",
		"Type": "movie",
		"DVD": "08 Jul 2016",
		"BoxOffice": "$293,506,292",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "There's Something About Mary",
		"Year": "1998",
		"Rated": "R",
		"Released": "15 Jul 1998",
		"Runtime": "119 min",
		"Genre": "Comedy, Romance",
		"Director": "Bobby Farrelly, Peter Farrelly",
		"Writer": "Ed Decter, John J. Strauss, Peter Farrelly",
		"Actors": "Cameron Diaz, Matt Dillon, Ben Stiller",
		"Plot": "Ted was a geek in high school, who was going to go to the prom with one of the most popular girls in school, Mary. The prom date never happened, because Ted had a very unusual accident. Thirteen years later he realizes he is still in love with Mary, so he hires a private investigator to track her down. That investigator discovers he too may be in love with Mary, so he gives Ted some false information to keep him away from her. But soon Ted finds himself back into Mary's life, as we watch one funny scene after another.",
		"Language": "English",
		"Country": "United States",
		"Awards": "17 wins & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWFlZjE5OTYtNWY0ZC00MzgzLTg5MjUtYTFkZjk2NjJkYjM0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "69/100"
			}
		],
		"Metascore": "69",
		"imdbRating": "7.1",
		"imdbVotes": "327,764",
		"imdbID": "tt0129387",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$176,484,651",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Up in the Air",
		"Year": "2009",
		"Rated": "R",
		"Released": "23 Dec 2009",
		"Runtime": "109 min",
		"Genre": "Comedy, Drama, Romance",
		"Director": "Jason Reitman",
		"Writer": "Walter Kirn, Jason Reitman, Sheldon Turner",
		"Actors": "George Clooney, Vera Farmiga, Anna Kendrick",
		"Plot": "Ryan Bingham is a corporate downsizing expert whose cherished life on the road is threatened just as he is on the cusp of reaching ten million frequent flyer miles, and just after he's met the frequent-traveller woman of his dreams.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 6 Oscars. 75 wins & 171 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "90%"
			},
			{
				"Source": "Metacritic",
				"Value": "83/100"
			}
		],
		"Metascore": "83",
		"imdbRating": "7.4",
		"imdbVotes": "348,502",
		"imdbID": "tt1193138",
		"Type": "movie",
		"DVD": "20 Nov 2012",
		"BoxOffice": "$83,823,381",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Under Siege 2: Dark Territory",
		"Year": "1995",
		"Rated": "R",
		"Released": "14 Jul 1995",
		"Runtime": "100 min",
		"Genre": "Action, Adventure, Thriller",
		"Director": "Geoff Murphy",
		"Writer": "Richard Hatem, Matt Reeves, J.F. Lawton",
		"Actors": "Steven Seagal, Eric Bogosian, Everett McGill",
		"Plot": "Seal Team Commander Casey Ryback has retired from the Navy since the conclusion of the events in the first movie, and is now a chef at the Mile High Cafe in Denver, Colorado. Ryback is taking his niece Sarah Ryback on vacation, to reconnect and commiserate with her after the death of her parents. They board a train traveling westbound through the Rocky Mountains from Denver to LA. With the help of gun-for-hire Marcus Penn a couple dozen of his mercenaries, ex-CIA brain (and mentally unstable) Travis Dane commandeers the train, takes the passengers and crew hostage, and sets up a mobile control center. He hacks into the CIA database and gains control of a Top-Secret defence satellite he designed during his Agency days that has just been deployed. Funded by various foreign interests, he stands to make 1 billion dollars for using the space weapon to blow up the Eastern seaboard by targeting a nuclear reactor housed beneath the Pentagon. Dane taunts the Joint Chiefs in the Pentagon Situation Room by using it to blow up a Chinese chemical weapons plant and the two stealth planes sent to intercept him, secure in the knowledge that he cannot be stopped because his location can't be traced as long as the train keeps moving, his location can't be fixed. Ryback, aided by young porter Bobby Zachs, is the only ones who can take out the bad guys, rescue the hostages, and prevent the destruction of the eastern seaboard before Dane can realise his dastardly plans!",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWFjNzhjZTYtMmYxOS00YTBhLTkxM2YtYTVjMGQwYzMzYWU1XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "34%"
			},
			{
				"Source": "Metacritic",
				"Value": "52/100"
			}
		],
		"Metascore": "52",
		"imdbRating": "5.5",
		"imdbVotes": "49,883",
		"imdbID": "tt0114781",
		"Type": "movie",
		"DVD": "08 May 2015",
		"BoxOffice": "$50,024,083",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Waterworld",
		"Year": "1995",
		"Rated": "PG-13",
		"Released": "28 Jul 1995",
		"Runtime": "135 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Kevin Reynolds",
		"Writer": "Peter Rader, David Twohy",
		"Actors": "Kevin Costner, Jeanne Tripplehorn, Dennis Hopper",
		"Plot": "The polar ice caps have melted, and the earth is covered by water. The remaining people travel the seas, in search of survival. Several different societies exist. The Mariner falls from his customary and solitary existence into having to care for a woman and a young girl while being pursued by the evil forces of the Deacon.",
		"Language": "English",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 6 wins & 9 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzE4NTRmMDYtNWYzYi00YmNkLTk4NDEtYjFmMDc4ODQ3ODY2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "46%"
			},
			{
				"Source": "Metacritic",
				"Value": "56/100"
			}
		],
		"Metascore": "56",
		"imdbRating": "6.3",
		"imdbVotes": "208,937",
		"imdbID": "tt0114898",
		"Type": "movie",
		"DVD": "05 Jan 2016",
		"BoxOffice": "$88,246,220",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Troy",
		"Year": "2004",
		"Rated": "R",
		"Released": "14 May 2004",
		"Runtime": "163 min",
		"Genre": "Drama",
		"Director": "Wolfgang Petersen",
		"Writer": "Homer, David Benioff",
		"Actors": "Brad Pitt, Eric Bana, Orlando Bloom",
		"Plot": "It is the year 1250 B.C. during the late Bronze age. Two emerging nations begin to clash after Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband, Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans. But they come to a stop by Hector, Prince of Troy. The whole movie shows their battle struggles and the foreshadowing of fate in this adaptation of Homer's classic \"The Iliad.\"",
		"Language": "English",
		"Country": "United States, Malta, United Kingdom",
		"Awards": "Nominated for 1 Oscar. 5 wins & 23 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "53%"
			},
			{
				"Source": "Metacritic",
				"Value": "56/100"
			}
		],
		"Metascore": "56",
		"imdbRating": "7.3",
		"imdbVotes": "567,674",
		"imdbID": "tt0332452",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$133,378,256",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Titus",
		"Year": "1999",
		"Rated": "R",
		"Released": "11 Feb 2000",
		"Runtime": "162 min",
		"Genre": "Drama, History, Thriller",
		"Director": "Julie Taymor",
		"Writer": "William Shakespeare, Julie Taymor",
		"Actors": "Anthony Hopkins, Jessica Lange, Osheen Jones",
		"Plot": "War begets revenge. Victorious General Titus Andronicus (Sir Anthony Hopkins) returns to Rome with hostages: Tamora (Jessica Lange), Queen of the Goths, and her sons. He orders the eldest hewn to appease the Roman dead. He declines the proffered Emperor's crown, nominating Saturninus (Alan Cumming), the last ruler's venal elder son. Saturninus, to spite his brother Bassianus (James Frain), demands the hand of Lavinia (Laura Fraser), Titus' daughter. When Bassianus, Lavinia, and Titus' sons flee in protest, Titus stands against them and slays one of his own. Saturninus marries the honey-tongued Tamora, who vows vengeance against Titus. The ensuing maelstrom serves up tongues, hands, rape, adultery, racism, and Goth-meat pie. There's irony in which two sons survive.",
		"Language": "English, Latin",
		"Country": "United Kingdom, Italy, United States",
		"Awards": "Nominated for 1 Oscar. 4 wins & 19 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTE0ZWY5N2UtZTlmMy00NGIwLTg4MGItMzkzYTY5OTYyOWIyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "69%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "7.1",
		"imdbVotes": "21,322",
		"imdbID": "tt0120866",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$2,007,290",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Zombieland",
		"Year": "2009",
		"Rated": "R",
		"Released": "02 Oct 2009",
		"Runtime": "88 min",
		"Genre": "Action, Comedy, Horror",
		"Director": "Ruben Fleischer",
		"Writer": "Rhett Reese, Paul Wernick",
		"Actors": "Jesse Eisenberg, Emma Stone, Woody Harrelson",
		"Plot": "Searching for family. In the early twenty-first century, zombies have taken over America. A shy and college student in Texas has survived by following his 30 rules: like \"look in the back seat,\" \"double-tap,\" \"avoid public restrooms.\" He decides to travel to Ohio to see if his parents are alive. He gets a ride with a savage, brutal zombie-killer headed for Florida, and soon they confront a young woman whose sister has been bitten by a zombie and wants to be put out of her suffering. The sisters were headed to an LA park with atractions they've heard is without a zombie.",
		"Language": "English, Spanish, French",
		"Country": "United States",
		"Awards": "10 wins & 29 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "89%"
			},
			{
				"Source": "Metacritic",
				"Value": "73/100"
			}
		],
		"Metascore": "73",
		"imdbRating": "7.5",
		"imdbVotes": "617,556",
		"imdbID": "tt1156398",
		"Type": "movie",
		"DVD": "16 Apr 2012",
		"BoxOffice": "$75,590,286",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Tucker and Dale vs Evil",
		"Year": "2010",
		"Rated": "R",
		"Released": "09 Dec 2010",
		"Runtime": "89 min",
		"Genre": "Comedy, Horror",
		"Director": "Eli Craig",
		"Writer": "Eli Craig, Morgan Jurgenson",
		"Actors": "Tyler Labine, Alan Tudyk, Katrina Bowden",
		"Plot": "Two lovable hillbillies are headed to their \"fixer-upper\" vacation cabin to drink some beer, do some fishin', and have a good time. But when they run into a group of preppy college kids who assume from their looks that they must be in-bred, chainsaw-wielding killers, Tucker &amp; Dale's vacation takes a bloody and hilarious turn for the worse.",
		"Language": "English",
		"Country": "Canada, United Kingdom, United States, India",
		"Awards": "12 wins & 14 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODQ5NDQ0MjkwMF5BMl5BanBnXkFtZTcwNDg1OTU4NQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "85%"
			},
			{
				"Source": "Metacritic",
				"Value": "65/100"
			}
		],
		"Metascore": "65",
		"imdbRating": "7.5",
		"imdbVotes": "192,712",
		"imdbID": "tt1465522",
		"Type": "movie",
		"DVD": "03 Jan 2017",
		"BoxOffice": "$223,838",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Your Highness",
		"Year": "2011",
		"Rated": "R",
		"Released": "08 Apr 2011",
		"Runtime": "102 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "David Gordon Green",
		"Writer": "Danny McBride, Ben Best",
		"Actors": "Danny McBride, Natalie Portman, James Franco",
		"Plot": "Throughout history, tales of chivalry have burnished the legends of brave, handsome knights who rescue fair damsels, slay dragons and conquer evil. But behind many a hero is a good-for-nothing younger brother trying just to stay out of the way of those dragons, evil and trouble in general. As two princes on a daring mission to save their land, they must rescue the heir apparent's fiancée before their kingdom is destroyed. Thadeous (McBride) has spent his life watching his perfect older brother Fabious (Franco) embark upon valiant journeys and win the hearts of his people. Tired of being passed over for adventure, adoration and the throne, he's settled for a life of wizard's weed, hard booze and easy maidens. But when Fabious' bride-to-be, Belladonna (Zooey Deschanel), gets kidnapped by the evil wizard Leezar (Justin Theroux), the king gives his deadbeat son an ultimatum: Man up and help rescue her or get cut off. Half-assedly embarking upon his first quest, Thadeous joins Fabious to trek across the perilous outlands and free the princess. Joined by Isabel (Natalie Portman)-an elusive warrior with a dangerous agenda of her own-the brothers must vanquish horrific creatures and traitorous knights before they can reach Belladonna. If Thadeous can find his inner hero, he can help his brother prevent the destruction of his land. Stay a slacker, and not only does he die a coward, he gets front row seats to the dawn of an all-new Dark Ages.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTY2MDgwODIyMV5BMl5BanBnXkFtZTcwODc1NDQ0NA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "27%"
			},
			{
				"Source": "Metacritic",
				"Value": "31/100"
			}
		],
		"Metascore": "31",
		"imdbRating": "5.5",
		"imdbVotes": "104,229",
		"imdbID": "tt1240982",
		"Type": "movie",
		"DVD": "23 May 2016",
		"BoxOffice": "$21,596,445",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Thor: The Dark World",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "08 Nov 2013",
		"Runtime": "112 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Alan Taylor",
		"Writer": "Christopher L. Yost, Christopher Markus, Stephen McFeely",
		"Actors": "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
		"Plot": "Thousands of years ago, a race of beings known as Dark Elves tried to send the universe into darkness by using a weapon known as the Aether. Warriors from Asgard stopped them, but their leader Malekith (Christopher Eccleston) escaped to wait for another opportunity. The warriors find the Aether, and since it cannot be destroyed, they try to hide it. In the present day, Jane Foster (Natalie Portman) awaits the return of Thor (Chris Hemsworth), although it has been two years since they last saw once another. In the meantime, Thor has been trying to bring peace to the nine realms. Jane discovers an anomaly similar to the one that brought Thor to Earth. She goes to investigate, finds a wormhole, and is sucked into it. Back on Asgard, Thor wishes to return to Earth, but his father, Odin (Sir Anthony Hopkins), refuses to let him. Thor learns from Heimdall (Idris Elba), who can see into all of the realms, that Jane disappeared. Thor then returns to Earth just as Jane reappears. However, when some Policemen try to arrest her, an unknown energy repulses them. Thor then brings Jane to Asgard to find out what happened to her. When the energy is released again, they discover that when Jane disappeared, she crossed paths with the Aether and it entered her. Malekith, upon sensing that the time to strike is now, seeks out the Aether. He attacks Asgard and Thor's mother Frigga (Rene Russo) is killed protecting Jane. Odin wants to keep Jane on Asgard so that Malekith will come. Thor disagrees with his plan, so with his cohorts, he decides to take Jane away. He enlists the aid of his brother, Loki (Tom Hiddleston). Unfortunately, Loki's motivations remain unknown.",
		"Language": "English",
		"Country": "United States",
		"Awards": "4 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.8/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "67%"
			},
			{
				"Source": "Metacritic",
				"Value": "54/100"
			}
		],
		"Metascore": "54",
		"imdbRating": "6.8",
		"imdbVotes": "719,979",
		"imdbID": "tt1981115",
		"Type": "movie",
		"DVD": "06 Sep 2015",
		"BoxOffice": "$206,362,140",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Mummy",
		"Year": "1999",
		"Rated": "PG-13",
		"Released": "07 May 1999",
		"Runtime": "124 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Stephen Sommers",
		"Writer": "Stephen Sommers, Lloyd Fonvielle, Kevin Jarre",
		"Actors": "Brendan Fraser, Rachel Weisz, John Hannah",
		"Plot": "An English librarian called Evelyn Carnahan becomes interested in starting an archaeological dig at the ancient city of Hamunaptra. She gains the help of Rick O'Connell, after saving him from his death. What Evelyn, her brother Jonathan and Rick are unaware of is that another group of explorers are interested in the same dig. Unfortunately for everyone, this group ends up unleashing a curse which been laid on the dead High Priest Imhotep. Now 'The Mummy' is awake and it's going to take a lot more than guns to send him back to where he came from.",
		"Language": "English, Egyptian (Ancient), Arabic, Chinese, Hebrew, Hungarian",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 5 wins & 24 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "61%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "7.1",
		"imdbVotes": "457,941",
		"imdbID": "tt0120616",
		"Type": "movie",
		"DVD": "01 Nov 2015",
		"BoxOffice": "$155,516,138",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wasabi",
		"Year": "2001",
		"Rated": "R",
		"Released": "25 Jan 2002",
		"Runtime": "94 min",
		"Genre": "Action, Comedy, Crime",
		"Director": "Gérard Krawczyk",
		"Writer": "Luc Besson",
		"Actors": "Jean Reno, Ryôko Hirosue, Michel Muller",
		"Plot": "Hubert is a French policeman with very sharp methods. After being forced to take 2 months off by his boss, who doesn't share his view on working methods, he goes back to Japan, where he used to work 19 years ago, to settle the probate of his girlfriend who left him shortly after marriage without a trace. There he mets his former colleague Momo and his daughter Yumi who he did not know was ever born. Hubert eventually finds out why his girlfriend left him and the reason becomes his and his new daughters problem.",
		"Language": "French, Japanese",
		"Country": "France, Japan",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDk5Y2VlMzAtYzQ5MC00ODIwLWI3ZTUtOTBjNzk4MWM3ODIzXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.6/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "43%"
			},
			{
				"Source": "Metacritic",
				"Value": "53/100"
			}
		],
		"Metascore": "53",
		"imdbRating": "6.6",
		"imdbVotes": "42,457",
		"imdbID": "tt0281364",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$97,220",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Thor: Love and Thunder",
		"Year": "2022",
		"Rated": "PG-13",
		"Released": "08 Jul 2022",
		"Runtime": "118 min",
		"Genre": "Action, Adventure, Comedy",
		"Director": "Taika Waititi",
		"Writer": "Taika Waititi, Jennifer Kaytin Robinson, Stan Lee",
		"Actors": "Chris Hemsworth, Natalie Portman, Christian Bale",
		"Plot": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
		"Language": "English",
		"Country": "Australia, United States",
		"Awards": "3 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "63%"
			},
			{
				"Source": "Metacritic",
				"Value": "57/100"
			}
		],
		"Metascore": "57",
		"imdbRating": "6.2",
		"imdbVotes": "394,625",
		"imdbID": "tt10648342",
		"Type": "movie",
		"DVD": "08 Sep 2022",
		"BoxOffice": "$343,256,830",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Total Recall",
		"Year": "1990",
		"Rated": "R",
		"Released": "01 Jun 1990",
		"Runtime": "113 min",
		"Genre": "Action, Adventure, Sci-Fi",
		"Director": "Paul Verhoeven",
		"Writer": "Philip K. Dick, Ronald Shusett, Dan O'Bannon",
		"Actors": "Arnold Schwarzenegger, Sharon Stone, Michael Ironside",
		"Plot": "Douglas Quaid is haunted by a recurring dream about a journey to Mars. He hopes to find out more about this dream and buys a holiday at Rekall Inc. where they sell implanted memories. But something goes wrong with the memory implantation and he remembers being a secret agent fighting against the evil Mars administrator Cohaagen. Now the story really begins and it's a rollercoaster ride until the massive end of the movie.",
		"Language": "English",
		"Country": "United States, Mexico",
		"Awards": "Nominated for 2 Oscars. 7 wins & 16 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			},
			{
				"Source": "Metacritic",
				"Value": "60/100"
			}
		],
		"Metascore": "60",
		"imdbRating": "7.5",
		"imdbVotes": "351,967",
		"imdbID": "tt0100802",
		"Type": "movie",
		"DVD": "26 Aug 2016",
		"BoxOffice": "$119,412,921",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "There Will Be Blood",
		"Year": "2007",
		"Rated": "R",
		"Released": "25 Jan 2008",
		"Runtime": "158 min",
		"Genre": "Drama",
		"Director": "Paul Thomas Anderson",
		"Writer": "Paul Thomas Anderson, Upton Sinclair",
		"Actors": "Daniel Day-Lewis, Paul Dano, Ciarán Hinds",
		"Plot": "The intersecting life stories of Daniel Plainview and Eli Sunday in early twentieth century California is presented. Miner turn oilman Daniel Plainview is a driven man who will do whatever it takes to achieve his goals. He works hard but he also takes advantage of those around him at their expense if need be. His business partner is his son H.W., who in reality he \"acquired\" when H.W.'s biological single father, who worked on one of Daniel's rigs, got killed in a workplace accident. Daniel is deeply protective of H.W. if only for what H.W. brings to the partnership. Eli Sunday is one in a pair of twins, whose family farm Daniel purchases for the major oil deposit located on it. Eli, the local preacher and a self-proclaimed faith healer, wants the money from the sale of the property to finance his own church. The lives of the two competitive men often clash as Daniel pumps oil off the property and tries to acquire all the surrounding land at bargain prices to be able to build a pipeline to the coast, and as Eli tries to build his own religious empire.",
		"Language": "English, American Sign ",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 114 wins & 138 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "91%"
			},
			{
				"Source": "Metacritic",
				"Value": "93/100"
			}
		],
		"Metascore": "93",
		"imdbRating": "8.2",
		"imdbVotes": "635,381",
		"imdbID": "tt0469494",
		"Type": "movie",
		"DVD": "24 Feb 2012",
		"BoxOffice": "$40,222,514",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Saint",
		"Year": "1997",
		"Rated": "PG-13",
		"Released": "04 Apr 1997",
		"Runtime": "116 min",
		"Genre": "Action, Adventure, Romance",
		"Director": "Phillip Noyce",
		"Writer": "Leslie Charteris, Jonathan Hensleigh, Wesley Strick",
		"Actors": "Val Kilmer, Elisabeth Shue, Rade Serbedzija",
		"Plot": "Simon Templar has no real family, no real home, and Simon Templar isn't even his real name. Yet, Simon Templar, also known as the Saint for his use of creating false identities using the names of Catholic saints, is one of the world's most successful thieves. Slick, debonair, and a master of disguise, Simon manages to outwit the police again and again. On his next job, he is hired by the Russian Mafia to steal a cold fusion energy formula from scientist Emma Russel. However, the mission backfires as he falls for the pretty, intelligent scientist. Simon and his new love must now manage to outwit the Russian Mafia and work out the energy formula before the worst happens, and the U.S. is affected forever.",
		"Language": "English, Russian",
		"Country": "United States",
		"Awards": "1 win & 2 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNmM3MjI2YjUtYjk1MS00M2VjLWI4MmUtM2UyYWQyNTVlZGE5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.2/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "30%"
			},
			{
				"Source": "Metacritic",
				"Value": "50/100"
			}
		],
		"Metascore": "50",
		"imdbRating": "6.2",
		"imdbVotes": "71,959",
		"imdbID": "tt0120053",
		"Type": "movie",
		"DVD": "01 Jun 2014",
		"BoxOffice": "$61,363,304",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "World War Z",
		"Year": "2013",
		"Rated": "PG-13",
		"Released": "21 Jun 2013",
		"Runtime": "116 min",
		"Genre": "Action, Adventure, Horror",
		"Director": "Marc Forster",
		"Writer": "Matthew Michael Carnahan, Drew Goddard, Damon Lindelof",
		"Actors": "Brad Pitt, Mireille Enos, Daniella Kertesz",
		"Plot": "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
		"Language": "English, Spanish, Hebrew, Arabic",
		"Country": "United States, United Kingdom, Malta",
		"Awards": "3 wins & 25 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.0/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "66%"
			},
			{
				"Source": "Metacritic",
				"Value": "63/100"
			}
		],
		"Metascore": "63",
		"imdbRating": "7.0",
		"imdbVotes": "715,710",
		"imdbID": "tt0816711",
		"Type": "movie",
		"DVD": "07 Jun 2015",
		"BoxOffice": "$202,807,711",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Underwater",
		"Year": "2020",
		"Rated": "PG-13",
		"Released": "10 Jan 2020",
		"Runtime": "95 min",
		"Genre": "Action, Horror, Sci-Fi",
		"Director": "William Eubank",
		"Writer": "Brian Duffield, Adam Cozad",
		"Actors": "Kristen Stewart, Vincent Cassel, Mamoudou Athie",
		"Plot": "An unknown, massive earthquake happens in a drilling station in the bottom of the Marianna Trench. A scientific crew must find their way across the ocean floor into another station under the threats of deep pressure, dark water, dangerous deep-sea creatures, and a constant lack of oxygen.",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 5 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BM2IyZjQ3YjktOWQ2ZC00M2VhLTgwMzUtYTIyYWRmODI1YmYzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "48%"
			},
			{
				"Source": "Metacritic",
				"Value": "48/100"
			}
		],
		"Metascore": "48",
		"imdbRating": "5.9",
		"imdbVotes": "95,697",
		"imdbID": "tt5774060",
		"Type": "movie",
		"DVD": "14 Apr 2020",
		"BoxOffice": "$17,291,078",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wild Wild West",
		"Year": "1999",
		"Rated": "PG-13",
		"Released": "30 Jun 1999",
		"Runtime": "106 min",
		"Genre": "Action, Comedy, Sci-Fi",
		"Director": "Barry Sonnenfeld",
		"Writer": "Jim Thomas, John Thomas, S.S. Wilson",
		"Actors": "Will Smith, Kevin Kline, Kenneth Branagh",
		"Plot": "Jim West is a guns-a-blazing former Civil War hero. Artemus Gordon is an inventive U.S. Marshal who excels in disguise. When the United States is threatened by psychotic Confederate Arliss Loveless, President Ulysses S Grant teams the duo up to bring him to justice. On a hazard-packed train journey from Washington, D.C. to Utah, West and Gordon must combine their skills to best Loveless and his diabolical machines.",
		"Language": "English",
		"Country": "United States",
		"Awards": "16 wins & 17 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "4.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "16%"
			},
			{
				"Source": "Metacritic",
				"Value": "38/100"
			}
		],
		"Metascore": "38",
		"imdbRating": "4.9",
		"imdbVotes": "166,784",
		"imdbID": "tt0120891",
		"Type": "movie",
		"DVD": "01 Jun 2009",
		"BoxOffice": "$113,804,681",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Sisters Brothers",
		"Year": "2018",
		"Rated": "R",
		"Released": "19 Oct 2018",
		"Runtime": "122 min",
		"Genre": "Drama, Western",
		"Director": "Jacques Audiard",
		"Writer": "Jacques Audiard, Thomas Bidegain, Patrick DeWitt",
		"Actors": "John C. Reilly, Joaquin Phoenix, Jake Gyllenhaal",
		"Plot": "Based on Patrick DeWitt's novel, This movie revolves around the colorfully named gold prospector Hermann Kermit Warm (Riz Ahmed), who's being pursued across one thousand miles of 1850s Oregon desert to San Francisco, California by the notorious assassins Eli Sisters (John C. Reilly) and Charlie Sisters (Joaquin Phoenix). Except Eli is having a personal crisis and beginning to doubt the longevity of his chosen career. And Hermann might have a better offer.",
		"Language": "English, Russian",
		"Country": "France, Spain, Romania, Belgium, United States",
		"Awards": "13 wins & 22 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOTZmNTI1MzMtMGY0ZS00YTRlLWI4OTktYzE3YzZjZjJkNDVlXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "78/100"
			}
		],
		"Metascore": "78",
		"imdbRating": "6.9",
		"imdbVotes": "69,841",
		"imdbID": "tt4971344",
		"Type": "movie",
		"DVD": "22 Jan 2019",
		"BoxOffice": "$3,143,056",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Wonka",
		"Year": "2023",
		"Rated": "PG",
		"Released": "15 Dec 2023",
		"Runtime": "116 min",
		"Genre": "Adventure, Comedy, Family",
		"Director": "Paul King",
		"Writer": "Roald Dahl, Paul King, Simon Farnaby",
		"Actors": "Timothée Chalamet, Gustave Die, Murray McArthur",
		"Plot": "With dreams of opening a shop in a city renowned for its chocolate, a young and poor Willy Wonka discovers that the industry is run by a cartel of greedy chocolatiers.",
		"Language": "English",
		"Country": "United States, United Kingdom, Canada",
		"Awards": "Nominated for 1 BAFTA Award1 win & 35 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "7.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "82%"
			}
		],
		"Metascore": "N/A",
		"imdbRating": "7.1",
		"imdbVotes": "117,835",
		"imdbID": "tt6166392",
		"Type": "movie",
		"DVD": "30 Jan 2024",
		"BoxOffice": "$218,184,781",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "The Wedding Date",
		"Year": "2005",
		"Rated": "PG-13",
		"Released": "04 Feb 2005",
		"Runtime": "90 min",
		"Genre": "Comedy, Romance",
		"Director": "Clare Kilner",
		"Writer": "Elizabeth Young, Dana Fox",
		"Actors": "Dermot Mulroney, Debra Messing, Jack Davenport",
		"Plot": "\"The Wedding Date\" centers around Kat Ellis (Messing), who returns to her parents' London home for her sister's wedding. Afraid of confronting her ex-fiancé, who dumped her two years before, she hires a top-drawer male escort (Mulroney) to pose as her new boyfriend.",
		"Language": "English",
		"Country": "United States, United Kingdom",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BOGVkMzRjZTItOGZlZS00Y2Y1LThiZWMtODE2YTQ0ZTRhZTc0XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "11%"
			},
			{
				"Source": "Metacritic",
				"Value": "32/100"
			}
		],
		"Metascore": "32",
		"imdbRating": "6.1",
		"imdbVotes": "56,150",
		"imdbID": "tt0372532",
		"Type": "movie",
		"DVD": "10 Sep 2015",
		"BoxOffice": "$31,726,995",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Warrior",
		"Year": "2011",
		"Rated": "PG-13",
		"Released": "09 Sep 2011",
		"Runtime": "140 min",
		"Genre": "Action, Drama, Sport",
		"Director": "Gavin O'Connor",
		"Writer": "Gavin O'Connor, Anthony Tambakis, Cliff Dorfman",
		"Actors": "Tom Hardy, Nick Nolte, Joel Edgerton",
		"Plot": "Two brothers face the fight of a lifetime - and the wreckage of their broken family - within the brutal, high-stakes world of Mixed Martial Arts (MMA) fighting in Lionsgate's action/drama, WARRIOR. A former Marine, haunted by a tragic past, Tommy Riordan returns to his hometown of Pittsburgh and enlists his father, a recovered alcoholic and his former coach, to train him for an MMA tournament awarding the biggest purse in the history of the sport. As Tommy blazes a violent path towards the title prize, his brother, Brendan, a former MMA fighter unable to make ends meet as a public school teacher, returns to the amateur ring to provide for his family. Even though years have passed, recriminations and past betrayals keep Brendan bitterly estranged from both Tommy and his father. But when Brendan's unlikely rise as an underdog sets him on a collision course with Tommy, the two brothers must finally confront the forces that tore them apart, all the while waging the most intense, winner-takes-all battle of their lives.",
		"Language": "English, Spanish",
		"Country": "United States",
		"Awards": "Nominated for 1 Oscar. 5 wins & 22 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "84%"
			},
			{
				"Source": "Metacritic",
				"Value": "71/100"
			}
		],
		"Metascore": "71",
		"imdbRating": "8.1",
		"imdbVotes": "494,388",
		"imdbID": "tt1291584",
		"Type": "movie",
		"DVD": "10 Sep 2013",
		"BoxOffice": "$13,657,115",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Tully",
		"Year": "2018",
		"Rated": "R",
		"Released": "04 May 2018",
		"Runtime": "95 min",
		"Genre": "Comedy, Drama, Mystery",
		"Director": "Jason Reitman",
		"Writer": "Diablo Cody",
		"Actors": "Charlize Theron, Mackenzie Davis, Ron Livingston",
		"Plot": "The film is about Marlo, a mother of three, including a newborn. Marlo's brother gives her a night nanny as a gift. Hesitant with the extravagance at first, Marlo comes to form a unique bond with the thoughtful, surprising, and sometimes challenging young nanny named Tully.",
		"Language": "English",
		"Country": "United States, Canada",
		"Awards": "4 wins & 31 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTU0OTM4NTMyMF5BMl5BanBnXkFtZTgwNDA5MzUwNTM@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.9/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "87%"
			},
			{
				"Source": "Metacritic",
				"Value": "75/100"
			}
		],
		"Metascore": "75",
		"imdbRating": "6.9",
		"imdbVotes": "62,692",
		"imdbID": "tt5610554",
		"Type": "movie",
		"DVD": "17 Jul 2018",
		"BoxOffice": "$9,369,755",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Under Siege",
		"Year": "1992",
		"Rated": "R",
		"Released": "09 Oct 1992",
		"Runtime": "103 min",
		"Genre": "Action, Thriller",
		"Director": "Andrew Davis",
		"Writer": "J.F. Lawton",
		"Actors": "Steven Seagal, Gary Busey, Tommy Lee Jones",
		"Plot": "The battleship Missouri is about to be decomissioned. Casey Ryback is Captain Adam's personal cook. And Ryback is always butting heads with the ship's XO Commander Krill but the Captain always intercedes. One day, after the President visits the Missouri, which is also the Captain's birthday, the Captain learns that a helicopter has been cleared to land on the ship by Commander Krill, which he was not informed of. When questioned Krill tells the Captain that it's a surprise for his birthday, the Captain then allows it. Later after another one of their scuffles, Krill has Ryback locked in the freezer. During the party, the rock band reveals themselves to be mercenaries, led by William Stranix, a CIA operative, who is in league with Krill to unload all of the ship's nuclear warheads. They lock up all of the crew and make preparations to remove the warheads. And Krill remembers Ryback, Stranix sends two of his men to take care of Ryback, only thing is that Ryback took care of them. Upon discovering their bodies, Stranix deduces that Ryback is more than a cook. He then sends Krill to check on him, and Krill discovers that Ryback's a NAVY SEAL, who got busted down to a cook after an incident in Panama. And Ryback continues to create trouble for them, so Stranix tries to hunt him down. Along the way, Ryback meets Jordan, a former playmate, who was supposed to entertain at the party but was also forgotten.",
		"Language": "English, Italian",
		"Country": "France, United States",
		"Awards": "Nominated for 2 Oscars. 3 wins & 3 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTlhZmE4Y2EtYjA3ZS00MzBhLTgyZjgtMTBjODEyZTRkNDAxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "80%"
			},
			{
				"Source": "Metacritic",
				"Value": "58/100"
			}
		],
		"Metascore": "58",
		"imdbRating": "6.5",
		"imdbVotes": "94,957",
		"imdbID": "tt0105690",
		"Type": "movie",
		"DVD": "19 Apr 2016",
		"BoxOffice": "$83,563,139",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Van Helsing",
		"Year": "2004",
		"Rated": "PG-13",
		"Released": "07 May 2004",
		"Runtime": "131 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Stephen Sommers",
		"Writer": "Stephen Sommers",
		"Actors": "Hugh Jackman, Kate Beckinsale, Richard Roxburgh",
		"Plot": "Van Helsing is in the world to rid all evil, even if not everyone agrees with him. The Vatican sends the monster hunter and his ally, Carl, to Transylvania. They have been sent to this land to stop the powerful Count Dracula. Whilst there they join forces with a Gypsy Princess called Anna Valerious, who is determined to end an ancient curse on her family by destroying the vampire. They just don't know how!",
		"Language": "English, Latin, Persian",
		"Country": "United States, Czech Republic",
		"Awards": "3 wins & 21 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BODRmY2NhNDItOWViNi00OTIyLTk3YjYtYzY0YTFlMDg1YzQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Metacritic",
				"Value": "35/100"
			}
		],
		"Metascore": "35",
		"imdbRating": "6.1",
		"imdbVotes": "283,105",
		"imdbID": "tt0338526",
		"Type": "movie",
		"DVD": "N/A",
		"BoxOffice": "$120,177,084",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Warcraft",
		"Year": "2016",
		"Rated": "PG-13",
		"Released": "10 Jun 2016",
		"Runtime": "123 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Duncan Jones",
		"Writer": "Charles Leavitt, Duncan Jones",
		"Actors": "Travis Fimmel, Paula Patton, Ben Foster",
		"Plot": "When the world of the Orcs of Draenor is being destroyed by the evil fel magic that uses life-force, the powerful warlock Gul'dan creates a portal to the world of Azeroth and forms the Horde with members of the Orc clans. He also captures many prisoners to keep the portal open. The king of Azeroth, Llane Wrynn and his brother-in-law, Anduin Lothar are informed by the apprentice of magician Khadgar that he has found fel magic in dead bodies and the king decides to summon the Guardian of Tirisfal, Medivh, to protect his kingdom. Lothar and Khadgar head to Kharazhan to meet Medivh and an ominous shadow points a book out to Khadgar, who takes it and hides. Anduin, Khadgar and Medivh and a group of soldiers are attacked by Orcs and they capture the slave Garona, who is released by King Llane, and she shows them the location of the portal. Garona is contacted by the Orc chief of a clan Durotan that wants to meet King Llane to stop the fel magic. Meanwhile Khadgar learns that the gate was opened with the help of someone in Azeroth. Shall King Llane trust Garona and Durotan, who might be the traitor?",
		"Language": "English",
		"Country": "China, United States, Canada, Japan",
		"Awards": "2 wins & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "29%"
			},
			{
				"Source": "Metacritic",
				"Value": "32/100"
			}
		],
		"Metascore": "32",
		"imdbRating": "6.7",
		"imdbVotes": "276,735",
		"imdbID": "tt0803096",
		"Type": "movie",
		"DVD": "23 Feb 2017",
		"BoxOffice": "$47,365,290",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Volcano",
		"Year": "1997",
		"Rated": "PG-13",
		"Released": "25 Apr 1997",
		"Runtime": "104 min",
		"Genre": "Action, Drama, Sci-Fi",
		"Director": "Mick Jackson",
		"Writer": "Jerome Armstrong, Billy Ray",
		"Actors": "Tommy Lee Jones, Anne Heche, Gaby Hoffmann",
		"Plot": "Something unspeakably chilling is ultimately starting to heat up at The City of Los Angeles! Beneath the famed La Brea Tar Pits, a raging volcano has formed, raining a storm of deadly fire bombs and an endless tide of white-hot lava upon the stunned city!",
		"Language": "English, Spanish, German",
		"Country": "United States",
		"Awards": "1 win & 1 nomination",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZWRiYzgwZjQtNjdlMi00MTQ4LWEzYTMtZmIyMzE5MThlMzNlXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "49%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "5.5",
		"imdbVotes": "81,034",
		"imdbID": "tt0120461",
		"Type": "movie",
		"DVD": "01 Mar 2013",
		"BoxOffice": "$49,323,468",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Zombieland: Double Tap",
		"Year": "2019",
		"Rated": "R",
		"Released": "18 Oct 2019",
		"Runtime": "99 min",
		"Genre": "Action, Comedy, Horror",
		"Director": "Ruben Fleischer",
		"Writer": "Rhett Reese, Paul Wernick, Dave Callaham",
		"Actors": "Woody Harrelson, Jesse Eisenberg, Emma Stone",
		"Plot": "One long decade after the post-apocalyptic events in Zombieland (2009), the resilient quartet of survivors--the tough-as-nails zombie exterminator, Tallahassee; his rule-making comrade, Columbus; the free-spirited huntress, Wichita, and her younger sister, Little Rock--find themselves in the bosom of a now-derelict White House. However, in a rabid world still overrun by multitudes of walking dead and mutated strains of evolved animated corpses, a premeditated separation will send the team back to square one, searching, once more, for the promised land. Now, all hope rests on Babylon: an entirely organic commune of blissful vegetarian pacifists who love to party. Is this the end of the road?",
		"Language": "English, Spanish, Italian, Inuktitut, Hindi",
		"Country": "United States",
		"Awards": "6 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjcwNjZhNGYtOGNlNy00NGI3LTlmODMtMGZlMjA3YjA0Njg0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.7/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "68%"
			},
			{
				"Source": "Metacritic",
				"Value": "55/100"
			}
		],
		"Metascore": "55",
		"imdbRating": "6.7",
		"imdbVotes": "200,950",
		"imdbID": "tt1560220",
		"Type": "movie",
		"DVD": "18 Oct 2019",
		"BoxOffice": "$73,123,082",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Welcome Home, Roscoe Jenkins",
		"Year": "2008",
		"Rated": "PG-13",
		"Released": "08 Feb 2008",
		"Runtime": "114 min",
		"Genre": "Comedy, Romance",
		"Director": "Malcolm D. Lee",
		"Writer": "Malcolm D. Lee",
		"Actors": "Martin Lawrence, Louis C.K., James Earl Jones",
		"Plot": "Dr. R.J. Stevens is a talk-show host who visits his family in the Deep South. While there he reunites with his brother Otis, his sister Betty, his cousin/rival Clyde, and his childhood love interest Lucinda Allen.",
		"Language": "English",
		"Country": "United States",
		"Awards": "N/A",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNjIwODgyMDk5OF5BMl5BanBnXkFtZTYwMzQ5Nzc4._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "5.5/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "23%"
			},
			{
				"Source": "Metacritic",
				"Value": "46/100"
			}
		],
		"Metascore": "46",
		"imdbRating": "5.5",
		"imdbVotes": "15,604",
		"imdbID": "tt0494652",
		"Type": "movie",
		"DVD": "10 Sep 2015",
		"BoxOffice": "$42,436,517",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Valerian and the City of a Thousand Planets",
		"Year": "2017",
		"Rated": "PG-13",
		"Released": "21 Jul 2017",
		"Runtime": "136 min",
		"Genre": "Action, Adventure, Fantasy",
		"Director": "Luc Besson",
		"Writer": "Pierre Christin, Jean-Claude Mézières, Luc Besson",
		"Actors": "Dane DeHaan, Cara Delevingne, Clive Owen",
		"Plot": "In the twenty-eighth century, space station Alpha is a city where beings from different planets live together exchanging their knowledge and culture. Peace is granted by a human force, including Major Valerian (Dane DeHaan) and his partner Sergeant Laureline (Cara Delevingne). They are assigned by the Defense Minister (Herbie Hancock) to retrieve the last species of converter in a dangerous mission. They succeed and back to Alpha, unknown humanoids abduct Commander Arun Filitt (Clive Owen) expecting to steal the converter. They head to a forbidden area that is infected, but Valerian and Laureline follow them and disclose a hidden secret about the race and the infected area.",
		"Language": "English, French, Hindi",
		"Country": "France, China, Belgium, Germany, United Arab Emirates, United States, Canada",
		"Awards": "11 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMTkxMDAxNDUyNV5BMl5BanBnXkFtZTgwOTc3MzcxMjI@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "48%"
			},
			{
				"Source": "Metacritic",
				"Value": "51/100"
			}
		],
		"Metascore": "51",
		"imdbRating": "6.4",
		"imdbVotes": "196,014",
		"imdbID": "tt2239822",
		"Type": "movie",
		"DVD": "07 Nov 2017",
		"BoxOffice": "$41,189,488",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "WALL·E",
		"Year": "2008",
		"Rated": "G",
		"Released": "27 Jun 2008",
		"Runtime": "98 min",
		"Genre": "Animation, Adventure, Family",
		"Director": "Andrew Stanton",
		"Writer": "Andrew Stanton, Pete Docter, Jim Reardon",
		"Actors": "Ben Burtt, Elissa Knight, Jeff Garlin",
		"Plot": "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her \"directive\", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, out of love or loneliness, hitches a ride on the outside of the ship to rescue EVE. The ship arrives back at a large space cruise ship, which is carrying all of the humans who evacuated Earth 700 years earlier. The people of Earth ride around this space resort on hovering chairs which give them a constant feed of TV and video chatting. They drink all of their meals through a straw out of laziness and/or bone loss, and are all so fat that they can barely move. When the auto-pilot computer, acting on hastily-given instructions sent many centuries before, tries to prevent the people of Earth from returning by stealing the plant, WALL-E, EVE, the portly captain, and a band of broken robots stage a mutiny.",
		"Language": "English, Russian, Ukrainian",
		"Country": "United States, Japan",
		"Awards": "Won 1 Oscar. 96 wins & 95 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.4/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "95%"
			},
			{
				"Source": "Metacritic",
				"Value": "95/100"
			}
		],
		"Metascore": "95",
		"imdbRating": "8.4",
		"imdbVotes": "1,194,276",
		"imdbID": "tt0910970",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$223,808,164",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Vacation",
		"Year": "2015",
		"Rated": "R",
		"Released": "29 Jul 2015",
		"Runtime": "99 min",
		"Genre": "Adventure, Comedy",
		"Director": "John Francis Daley, Jonathan Goldstein",
		"Writer": "Jonathan Goldstein, John Francis Daley, John Hughes",
		"Actors": "Ed Helms, Christina Applegate, Skyler Gisondo",
		"Plot": "Following in the footsteps of his father, Clark Griswold, the man with a vision in National Lampoon's Vacation (1983), his son, too, the hard-working family man, Rusty Griswold, wants to have some quality time with his wife, Debbie, and their two sons, Kevin and James. With the idea of revisiting the place of his vivid childhood memories, the exciting Walley World, keep coming to mind, Rusty decides to surprise his family with his proposal for an unforgettable trip across the country in their rented Albanian SUV. However, as the Griswolds hit the road for some serious family-bonding, this is easier said than done, and, disaster after disaster, Rusty's romantic intentions seem to go down the drain. Can some minor mishaps thwart Rusty's plans for creating the perfect family vacation?",
		"Language": "English",
		"Country": "United States",
		"Awards": "1 win & 3 nominations",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYTliYWU3ZGEtNjkwYi00ZWQ3LTlhOTgtNTQ4YzhmMjVjY2EwXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "6.1/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "27%"
			},
			{
				"Source": "Metacritic",
				"Value": "34/100"
			}
		],
		"Metascore": "34",
		"imdbRating": "6.1",
		"imdbVotes": "120,795",
		"imdbID": "tt1524930",
		"Type": "movie",
		"DVD": "23 May 2016",
		"BoxOffice": "$58,884,188",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	},
	{
		"Title": "Up",
		"Year": "2009",
		"Rated": "PG",
		"Released": "29 May 2009",
		"Runtime": "96 min",
		"Genre": "Animation, Adventure, Comedy",
		"Director": "Pete Docter, Bob Peterson",
		"Writer": "Pete Docter, Bob Peterson, Tom McCarthy",
		"Actors": "Edward Asner, Jordan Nagai, John Ratzenberger",
		"Plot": "As a boy, Carl Fredricksen wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with Boy Scout Russell by lifting his house with thousands of balloons. On their journey, they make many new friends including a talking dog, and figure out that someone has evil plans. Carl soon realizes that this evildoer is his childhood idol.",
		"Language": "English, Ukrainian, Russian",
		"Country": "United States",
		"Awards": "Won 2 Oscars. 80 wins & 87 nominations total",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjBkM2RjMzItM2M3Ni00N2NjLWE3NzMtMGY4MzE4MDAzMTRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
		"Ratings": [
			{
				"Source": "Internet Movie Database",
				"Value": "8.3/10"
			},
			{
				"Source": "Rotten Tomatoes",
				"Value": "98%"
			},
			{
				"Source": "Metacritic",
				"Value": "88/100"
			}
		],
		"Metascore": "88",
		"imdbRating": "8.3",
		"imdbVotes": "1,115,316",
		"imdbID": "tt1049413",
		"Type": "movie",
		"DVD": "01 Jan 2014",
		"BoxOffice": "$293,004,164",
		"Production": "N/A",
		"Website": "N/A",
		"Response": "True"
	}
]

