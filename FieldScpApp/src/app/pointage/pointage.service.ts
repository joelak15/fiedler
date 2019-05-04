import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Pointage} from './pointage.interface'


@Injectable()
export class PointageService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  idPoint = null;
 
  getPointage(){
    return  this.http.get(`${this.url}/pointages`);
  }

  createPointage(data: Pointage) {
    this.http.post<Pointage>(`${this.url}/pointages`, data)
      .subscribe(
        res => {
          console.log(res);
          this.idPoint= res.idPointage;
          this.toastr.success('Heure arrivee sauvegarder.', 'Success');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  updatePointage(data) {
    this.http.post(`${this.url}/pointages/update`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Heure depart sauvegarder.', 'Success');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}