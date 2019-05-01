import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable()
export class EmployeService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
 
  getEmploye(){
    return  this.http.get(`${this.url}/employes`);
  }

  createEmploye(data) {
    this.http.post(`${this.url}/employes`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre employe a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/employe');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}