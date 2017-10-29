import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'] 
})
export class NavigationComponent implements OnInit {
  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
  ngOnInit() {
  }
  show:boolean = false;
  
  navLinks:Menus[];
  constructor(){
    this.navLinks = [{name:"Home",path:"/home"},{name:"About",path:"/about"},
    {name:"Services",path:"/services"},{name:"Clients",path:"clients"},{name:"Projects",path:"projects"},
    {name:"Technologies",path:"technologies"},{name:"Carriers",path:"carriers"},{name:"Insights",path:"insights"},
    {name:"Contact",path:"contact"}];
  }
}
export class Menus{
  name:string;
  path:string;
}
