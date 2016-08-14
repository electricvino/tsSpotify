/// <reference path="../typings/es6-promise/es6-promise.d.ts" />

import {IHttpService} from "./Http";

export interface ISearchResult {
    total: number;
    items: ISpotifyItem[];
}

export interface ISpotifyItem {
    name: string;
    images: IImage[];
}

export interface IImage {
    height?: number;
    width?: number;
    url: string;
}

export interface ISpotify {
    search(query: string): Promise<ISearchResult>
}

export class Spotify implements ISpotify {
    constructor(private http:IHttpService){}

    search(query: string): Promise<ISearchResult> {
        return this.http.get<any>(`https://api.spotify.com/v1/search?=${encodeURI(query)}&type=artist`)
            .then(response => {
                return response.data.artists;
            });
    }
}