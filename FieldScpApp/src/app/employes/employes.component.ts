import { Component, OnInit } from '@angular/core';
import {EmployeService} from './employes.service';
import {Employe} from './employes.interface';
import {Router} from "@angular/router";


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {

  employes: Employe[];

  constructor(
    private employeService: EmployeService, private router: Router) {

     }

  ngOnInit() {
    this.getEmploye();
  }
  
  getEmploye(){
    this.employeService.getEmploye()
    .subscribe(
      (data: Employe[]) => {this.employes = data},
      (error) => console.log(error)
    );
  }

  goToAddEmploye () {
    this.router.navigateByUrl('/ajout-employe');
  }
  

}
