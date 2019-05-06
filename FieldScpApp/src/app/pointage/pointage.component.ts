import { Component, OnInit, Input } from '@angular/core';
import {PointageService} from './pointage.service';
import {Pointage} from './pointage.interface';
import { Employe } from '../employes/employes.interface'
import { EmployeService } from '../employes/employes.service'
import * as moment from 'moment';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})

export class PointageComponent implements OnInit {
// creation des array pour recuperation des listes employe et pointage
  pointages: Pointage[];
  employes: Employe[];

  constructor(private pointageService: PointageService, private employeService: EmployeService) { }

  ngOnInit() {
    // recuperation des pointages depuis le serveur des l'initialisation
    this.pointageService.getPointage()
    .subscribe(
      (data: Pointage[]) => {this.pointages = data},
      (error) => console.log(error)
    );
    // recuperation des employe depuis le serveur des l'initialisation
    this.employeService.getEmploye()
    .subscribe((data: Employe[]) => {this.employes = data},
    (error) => console.log(error));
  }
//retrouver le nom employe avec id dans l'array
  getNameById(id: number) {
    let employe = this.employes.find(employe => employe.idEmploye === id);
    return employe.nomEmploye;
  }

  sommeTime(begin: string, end: string){
    var heureOne = moment(begin,"HH:mm:ss");
    var heureTwo = moment(end,"HH:mm:ss");
    var time = heureTwo.diff(heureOne, 'minutes');
    //rconversion en heure ou minute
      if(time >= 60 ){
        return moment(time,"mm").format("HH:mm:ss");}
        else {
          return moment(time,"mm").format("mm:ss");
        }

  }

}
