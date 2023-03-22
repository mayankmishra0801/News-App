import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{
  tcBuzzNewsData: any = [];

  constructor(private api:TcnewsapiService){}



//business News
  ngOnInit(): void {

    // tcBuzzNewsData:any = [];

    this.api.tcBuzzNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcBuzzNewsData = result.articles;
    })


  }

}
