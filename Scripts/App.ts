/// <reference path="../typings/lodash/lodash.d.ts" />

import { Spotify } from "./Spotify";
import { FetchHttpService } from "./Http";

var searchButton = <HTMLButtonElement>document.querySelector("#searchButton");
var textbox = <HTMLInputElement>document.querySelector('#searchQuery');
var resultList = <HTMLUListElement>document.querySelector('#resultList');

var spotify = new Spotify(new FetchHttpService());

searchButton.onclick = ev => {
    var query = textbox.value;

    spotify.search(query)
        .then(x => {
            for (const item of x.items) {
                const li = document.createElement("li");
                const image = _.first(_.filter(item.images, y => y.width <= 700 && y.width >= 500));
                const imgTag = image ? `<img src="${image.url}" width="200" />` : "";
                li.innerHTML = `${imgTag} ${item.name}`;
                resultList.appendChild(li);
            }
        })
}