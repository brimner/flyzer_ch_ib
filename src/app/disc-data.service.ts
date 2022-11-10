import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {response} from "express";



export class Disc {
  model: string;
  manufacturer: string;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
}


@Injectable({
  providedIn: 'root'
})
export class DiscDataService {

  constructor(
    private http: HttpClient,
  ) { }

  private url = "/v1/discs/";

  public getDisc(model: string): Observable<Disc> {
    return this.http.get<Disc>(`${this.url}/${model}`)
  }

  public getDiscDetails(): Observable<Disc[]> {
    return this.http.get<Disc[]>(this.url);
  }

}

