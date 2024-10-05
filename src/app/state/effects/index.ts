import {OmdbApiEffects} from './omdb-api.effects';
import {OmdbDbEffects} from "./omdb-db.effects";
import {PlexApiEffects} from "./plex-api.effects";
import {FileSerEffects} from "./file-srv.effects";

export const effects: any[] = [OmdbApiEffects, OmdbDbEffects, PlexApiEffects, FileSerEffects];

export * from './omdb-api.effects';
export * from './omdb-db.effects';
export * from './plex-api.effects';
export * from './file-srv.effects';

