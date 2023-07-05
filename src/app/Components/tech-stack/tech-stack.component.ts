import { Component } from '@angular/core';
import { stack } from './stack';
@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})



export class TechStackComponent {
 TechStack: stack[] =[
  {
    id:'1',
    img:"./assets/images/java.png"

  },
  {
    id:'2',
    img:"./assets/images/html-icon.png"

  },
  {
    id:'3',
    img:"./assets/images/css-icon.png"

  },
  {
    id:'4',
    img:"./assets/images/js.png"

  },
  {
    id:'5',
    img:"./assets/images/angular-icon.svg"

  },
  {
    id:'6',
    img:"./assets/images/springB.png"

  },
  {
    id:'7',
    img:"./assets/images/mysql-icon.png"

  },
  {
    id:'8',
    img:"./assets/images/bootstrap.svg"

  },
  {
    id:'9',
    img:"./assets/images/git.svg"

  },
  {
    id:'10',
    img:"./assets/images/github.svg"

  },
  
 ]
be: any;
}

