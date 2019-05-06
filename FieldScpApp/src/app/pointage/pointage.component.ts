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
  pointages: Pointage[];
  employes: Employe[];

  constructor(private pointageService: PointageService, private employeService: EmployeService) { }

  ngOnInit() {
    this.pointageService.getPointage()
    .subscribe(
      (data: Pointage[]) => {this.pointages = data},
      (error) => console.log(error)
    );
    this.employeService.getEmploye()
    .subscribe((data: Employe[]) => {this.employes = data},
    (error) => console.log(error));
  }

  getNameById(id: number) {
    let employe = this.employes.find(employe => employe.idEmploye === id);
    return employe.nomEmploye;
  }

  sommeTime(begin: string, end: string){
    var heureOne = moment(begin,"HH:mm:ss");
    var heureTwo = moment(end,"HH:mm:ss");
    var time = heureTwo.diff(heureOne, 'minutes');
    //return time;
      if(time >= 60 ){
        return moment(time,"mm").format("HH:mm:ss");}
        else {
          return moment(time,"mm").format("mm:ss");
        }

    //return new Intl.DateTimeFormat('default', timeOption).format(time);
  }

}
