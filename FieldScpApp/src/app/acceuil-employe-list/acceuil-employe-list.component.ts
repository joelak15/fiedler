import { Component, OnInit, Input } from '@angular/core';
import { EmployeService } from '../employes/employes.service';
import { Employe} from '../employes/employes.interface';

@Component({
  selector: 'app-acceuil-employe-list',
  templateUrl: './acceuil-employe-list.component.html',
  styleUrls: ['./acceuil-employe-list.component.scss']
})
export class AcceuilEmployeListComponent implements OnInit {

  employes: Employe[];

  constructor( private employeService: EmployeService) { }

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

addPointage(){
      console.log(this.trackById);
}

trackById(index, item){
  return item.idEmploye;
}

}
