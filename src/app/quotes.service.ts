import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  url = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}
  getquotes(){
    return this.http.get(this.url);
  }
}
