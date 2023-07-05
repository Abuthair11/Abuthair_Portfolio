import { Component } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent  {


  Projects: Project[] = [
    {

      name:'Disney+Hotstar Clone',
      
      Desc:'Disney+Hotstar  UI is replicated using HTML CSS JS',
      
      techstack:' HTML CSS JS',
      
      img:"./assets/images/Disney+Hotstar.png",
      
        liveUrl:"https://abuthair11.github.io/Disney-Hotstar_Clone/",
      
      gitUrl:"https://github.com/Abuthair11/Disney-Hotstar_Clone"
      
      },
      
      {
      
      name:'Abuthair LinkTree',
      
      Desc:'LinkTree  UI is replicated using HTML CSS JS',
      
      techstack:' HTML CSS JS',
      
        img:"./assets/images/LinkTree.png",
      
        liveUrl:"https://abuthair11.github.io/LinkTreeClone/",
      
      gitUrl:"https://github.com/Abuthair11/LinkTreeClone"
      
      },
      
      {
      
      name:'Calculator' ,
      
      Desc:'Calculator using Kotlin in android Studio' ,
      
      techstack: 'Kotlin',
      
        img:"./assets/images/kotlin2.png",
      
        liveUrl:"Na",
      
      gitUrl:"https://github.com/Abuthair11/AndroidStudio_CalculatorApp"
      
      },
      
      {
      
      name:'Employee Management' ,
      
      Desc:'Employee Management using Java in Spring Boot',
      
      techstack:' Java , MySQL , Spring ,JPA',
      
        img:"./assets/images/Emp.png",
      
        liveUrl:"Na",
      
      gitUrl:"https://github.com/Abuthair11/Employmanagement_SpringBoot"
      
      }
  ]

}

