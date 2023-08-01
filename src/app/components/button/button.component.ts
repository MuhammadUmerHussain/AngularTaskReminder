import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() btnText : any;
  @Input() color:string | undefined;
  @Output() btnclick=new EventEmitter( );
  OnClick(){
    this.btnclick.emit();
  }

  

}
