import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './employes/employes.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { RechercheParGradeComponent } from './recherche-par-grade/recherche-par-grade.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGradesComponent } from './liste-grades/liste-grades.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeGuard } from './employe.guard';



const routes: Routes = [
    {path: "employes", component : EmployesComponent},
    {path: "add-employe", component : AddEmployeComponent,canActivate:[EmployeGuard]},
    {path: "", redirectTo: "employes", pathMatch: "full" },
    {path: "updateEmploye/:id", component: UpdateEmployeComponent},
    {path: "rechercheParGrade", component : RechercheParGradeComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "listeGrades", component : ListeGradesComponent},
    {path: "updateGrade", component: UpdateGradeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
