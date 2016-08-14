/// <reference path="../typings/es6-promise/es6-promise.d.ts" />

declare var fetch:any;

export interface IHttpService {
    get<T>(url: string): Promise<IHttpResponse<T>>;
}

export interface IHttpResponse<T> {
    status: number;
    statusText: string;
    data: T;
}

export class FetchHttpService implements IHttpService {
    get<T>(url: string): Promise<IHttpResponse<T>> {
        return new Promise<IHttpResponse<T>>((resolve, reject) => {
            fetch(url)
            .then(response => {
                return response.json().then(data => {
                    resolve({ status: response.status, 
                        statusText: response.statusText, 
                        data: data
                    })
                });
            });
        });
    }
}