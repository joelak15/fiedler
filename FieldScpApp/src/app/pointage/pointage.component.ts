import { Component, OnInit } from '@angular/core';
import {PointageService} from './pointage.service';
import {Pointage} from './pointage.interface';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})
export class PointageComponent implements OnInit {
  pointages: Pointage[];

  constructor(private pointageService: PointageService) { }

  ngOnInit() {
    this.pointageService.getPointage()
    .subscribe(
      (data: Pointage[]) => {this.pointages = data},
      (error) => console.log(error)
    );
  }

}
