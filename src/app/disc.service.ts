import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disc } from './disc';
import { DISCS } from './mock-discs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  constructor() { }


  getDiscs(): Disc[] {
    return DISCS;
  }
}


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
