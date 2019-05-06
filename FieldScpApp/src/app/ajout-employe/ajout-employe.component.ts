import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../employes/employes.service';
import {Employe} from '../employes/employes.interface';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.scss']
})
export class AjoutEmployeComponent implements OnInit {

  employes: Employe = {
    idEmploye: null,
    nomEmploye: '',
    prenomEmploye: '',
    fonctionEmploye: ''
  };

  constructor(private employeService: EmployeService) { }

  ngOnInit() {
  }

  createEmploye(data: Employe) {
    this.employeService.createEmploye(data);
  }

}
