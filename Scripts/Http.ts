/// <reference path="../typings/es6-promise/es6-promise.d.ts" />

export interface IHttpService {
    get<T>(url: string): Promise<IHttpResponse<T>>;
}

export interface IHttpResponse<T> {
    status: number;
    statusText: string;
    data: T;
}