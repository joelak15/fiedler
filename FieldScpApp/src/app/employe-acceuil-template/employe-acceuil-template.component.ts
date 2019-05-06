import { Component, OnInit, Input } from '@angular/core';
import { Pointage } from '../pointage/pointage.interface';
import { PointageService } from '../pointage/pointage.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employe-acceuil-template',
  templateUrl: './employe-acceuil-template.component.html',
  styleUrls: ['./employe-acceuil-template.component.scss']
})
export class EmployeAcceuilTemplateComponent implements OnInit {

  @Input() indexOfEmploye: number;
  @Input() id: number;
  @Input() nom: string;
  @Input() prenom: string;
  @Input() fonction: string;

  listStatus: boolean = true;
  popTitle: string;

  pointages: Pointage = {
    idPointage: null,
    idPointEmploye: null,
    datePointage: null,
    arrivePointage: null,
    departPointage: null
  };

  constructor(private pointageService: PointageService, private datePipe : DatePipe) { }

  ngOnInit() {
  }

  pointage() {

    //creation date
    var pointDate = new Date();

    //variable option pour convertir la date
    var timeOption = {hour: "numeric", minute: "numeric", second: "numeric",
           hour12: false};

    //creation ou mise a jour de pointage avec condition
    if(this.listStatus){
      this.pointages.idPointEmploye = this.id;
      this.pointages.datePointage = this.datePipe.transform(pointDate, 'yyyy-MM-dd');
      this.pointages.arrivePointage = new Intl.DateTimeFormat('default', timeOption)
        .format(pointDate);
      this.pointageService.createPointage(this.pointages);
      this.listStatus = false;
    } 
    //mise a jour de la table pointage avec heure de depart
    else if (!this.listStatus) {
      this.pointages.idPointage = this.pointageService.idPoint;
      this.pointages.departPointage = new Intl.DateTimeFormat('default', timeOption)
      .format(pointDate);
      this.pointageService.updatePointage(this.pointages);
      this.listStatus = true;
    }
  }

}
