## Author
Roman Garstea
Full-stack developer (Angular + NodeJS)
roman.garstea.dev@gmail.com

# Movies Frontend
A web application built with Angular 19 for managing and browsing movie collections.

## Screenshots
![Home View](assets/screenshots/list.png)
![Movie Details](assets/screenshots/poster.png)
![Movie Details](assets/screenshots/filter.png)

## Features
Search movies using the OMDb API. https://www.omdbapi.com/
Save movies to your personal database via a NestJS backend
Display full movie details: title, year, genre, ratings, and poster
Integration with Plex API for media library access
State management using NgRx (Store, Actions, Effects, Selectors)

## Future Improvements
User authentication
Favorites and watchlists
Better error handling
Improved mobile UI

## Technologies Used
- Angular 19
- TypeScript
- RxJS
- NgRx
- SCSS
- Angular CDK
- OMDb API
- Plex API
- NestJS

## Getting Started

### Prerequisites
- Node.js (18+ recommended)
- Angular CLI installed globally

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Installation
git clone https://github.com/RomanGarsteaRo/movies_frontend.git
cd movies_frontend
npm install
npm start
