import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import { IPublication } from './models/publications';

import { HttpHandler } from '@angular/common/http/src/backend';
@Injectable()
export class ExploreService {
  
  private _exploreUrl = 'http://preprod-m2s.zeens.ws/api/v3/catalog/publications/newest';

  constructor(private _http: HttpClient) { 
  }
  
getPublications(): Observable<IPublication> {
  let myHeaders = new HttpHeaders().set('Content-Type', 'application/json');; 
    let myParams = new HttpParams().set('itemCount', "4");

    //console.log(myHeaders);
    //console.log(myParams);
    const httpOptions = {
        headers: myHeaders,
        params:  myParams
      };

    return this._http.get<IPublication>(this._exploreUrl,httpOptions)
       // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}


private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = 'Error ';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}

}
