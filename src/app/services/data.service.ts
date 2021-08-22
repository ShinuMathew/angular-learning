import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { NotFoundError } from '../common/errors/app-errors/not-found-error';
import { BadRequestError } from '../common/errors/app-errors/bad-request-error';
import { UnexpectedError } from '../common/errors/app-errors/unexpected-error';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(public url: string, public http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(this.url).pipe(
            // map((res: Response) => res.json()),
            catchError(this._handleError),
            retry(2)
        )
    }

    public getSpecific(resourceId): Observable<any> {
        return this.http.get(`${this.url}/${resourceId}`).pipe(
            catchError(this._handleError)
        )
    }

    public post(resource): Observable<any> {
        return this.http.post(this.url, resource).pipe(
            catchError(this._handleError)
        )
    }

    public put(resourceId, resource): Observable<any> {
        return this.http.put(`${this.url}/${resourceId}`, resource).pipe(
            catchError(this._handleError)
        )
    }

    public delete(resourceId): Observable<any> {
        return this.http.delete(`${this.url}/${resourceId}`).pipe(
            catchError(this._handleError)
        )
    }

    private _handleError(error: Response): Observable<never> {
        switch (error.status) {
            case 400:
                return throwError(new BadRequestError(error))
            case 404:
                return throwError(new NotFoundError(error))
            case 500:
                return throwError(new UnexpectedError(error))
            default:
                return throwError(new UnexpectedError(error))
        }
    }
}