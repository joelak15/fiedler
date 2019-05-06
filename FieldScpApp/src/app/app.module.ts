import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployesComponent } from './employes/employes.component';
import {EmployeService} from "./employes/employes.service";
import {ToastrModule} from "ngx-toastr";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { FormsModule } from '@angular/forms';
import { AcceuilEmployeListComponent } from './acceuil-employe-list/acceuil-employe-list.component';
import { PointageComponent } from './pointage/pointage.component';
import { PointageService } from './pointage/pointage.service';
import { EmployeAcceuilTemplateComponent } from './employe-acceuil-template/employe-acceuil-template.component';
import { DatePipe } from '@angular/common';
import { PointageEmployeComponent } from './pointage-employe/pointage-employe.component';


const appRoutes: Routes = [
  { path: '', component: AcceuilEmployeListComponent },
  {path: 'employe', component: EmployesComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'ajout-employe', component: AjoutEmployeComponent },
  { path: 'acceuil-employe-list', component: AcceuilEmployeListComponent },
  {path: 'pointage', component: PointageComponent},
  {path: 'pointage/:id', component: PointageEmployeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployesComponent,
    AjoutEmployeComponent,
    AcceuilEmployeListComponent,
    PointageComponent,
    EmployeAcceuilTemplateComponent,
    PointageEmployeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
    EmployeService,
    PointageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
