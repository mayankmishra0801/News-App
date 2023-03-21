import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http:HttpClient) { }

  //top Headline API URL

  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=f3f3ec3a990c49c892ab51f2c62f8196';

  tcHeadlines():Observable<any>{
     return this.http.get(this.topHeadlinesNews)
  }




}
