import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Systeme de controle de presence Fiedler-ams';

constructor(private router: Router){}

goToAdmin(){
  this.router.navigate(['dashboard']);
}

}
