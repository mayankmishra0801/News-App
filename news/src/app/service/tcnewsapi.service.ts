import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http:HttpClient) { }

  //top Headline API URL

  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f3f3ec3a990c49c892ab51f2c62f8196';


   //tech news API URl

     techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f3f3ec3a990c49c892ab51f2c62f8196';

     // bussiness news API URL
     businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3f3ec3a990c49c892ab51f2c62f8196';


  // Use tech method
     tcTechNews():Observable<any>{

      return this.http.get(this.techNews)

     }

     // use business method

     tcBuzzNews():Observable<any>{
      return this.http.get(this.businessNews)
     }


  tcHeadlines():Observable<any>{
     return this.http.get(this.topHeadlinesNews)
  }




}
