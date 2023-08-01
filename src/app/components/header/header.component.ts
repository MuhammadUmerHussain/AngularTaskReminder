import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title : string ='my-app';
  
  func(){
    console.log("hey from func");
  }
  
  ngOnInit(): void {
  }

}
