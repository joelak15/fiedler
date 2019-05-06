import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PointageService} from '../pointage/pointage.service';
import {Pointage} from '../pointage/pointage.interface';
import { Employe } from '../employes/employes.interface'
import { EmployeService } from '../employes/employes.service'
import * as moment from 'moment';

@Component({
  selector: 'app-pointage-employe',
  templateUrl: './pointage-employe.component.html',
  styleUrls: ['./pointage-employe.component.scss']
})
export class PointageEmployeComponent implements OnInit {
  // creation des array pour recuperation des listes employe et pointage
    pointages: Pointage[];
    employes: Employe[];
    id: number;
  
    constructor(private pointageService: PointageService,
      private route : ActivatedRoute,
      private employeService: EmployeService) { }
  
    ngOnInit() {

      this.id = +this.route.snapshot.params['id'];
      console.log(this.id);

      // recuperation des pointages depuis le serveur des l'initialisation
      this.pointageService.getPointageById(this.id)
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
    getNameById() {
      let employe = this.employes.find(employe => employe.idEmploye === +this.id);
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