import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
news:News[];
  constructor() { }

  ngOnInit() {
    this.news=[{date:"11-28-2016",description:"Today, we are happy to announce the release of Reclaim 2.0 project to production..."},
    {date:"11-03-2016",description:"Another milestone for SITEK, INC. as we launch the ARIS application to live..."}]
  }

}
class News{
  date:string;
  description:string;
}
