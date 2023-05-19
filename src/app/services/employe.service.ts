import { Injectable } from '@angular/core';
import { employe } from '../model/employe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grade } from './../model/grade.model';
import { gradeWrapper } from '../model/gradeWrapped.model';
import { Image } from '../model/image.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  apiURL: string = 'http://localhost:8081/employes/api';
  apiURLG: string = 'http://localhost:8081/employes/api/grade';
  employes! : employe[]; 
  
  constructor(private http : HttpClient) {   }
 
  listeEmployes(): Observable<employe[]>{
    return this.http.get<employe[]>(this.apiURL+"/all");
  }

  ajouterEmploye( emp: employe):Observable<employe>{

    return this.http.post<employe>(this.apiURL+"/addemp", emp, httpOptions);
    }
    
  supprimerEmploye(id : number) {
    const url = `${this.apiURL}/delemp/${id}`;

    return this.http.delete(url, httpOptions);
    }
    
    consulterEmploye(id: number): Observable<employe> {
      const url = `${this.apiURL}/getbyid/${id}`;

      return this.http.get<employe>(url);
      }
          
    trierEmployes(){
    this.employes = this.employes.sort((n1 , n2) =>{
      if (n1.idEmploye! > n2.idEmploye!){
        return 1 ;
      }
      if (n1.idEmploye! < n2.idEmploye!){
        return -1 ;
      }
      return 0 ;
    })
  }  

  listeGrade():Observable<Grade[]>{
    return this.http.get<Grade[]>(this.apiURL+"/grade");
    }
        
  updateEmploye(prod :employe) : Observable<employe>
  {
  return this.http.put<employe>(this.apiURL+"/updateemp", prod, httpOptions);
  }

  listeGrades():Observable<Grade[]>{
    return this.http.get<Grade[]>(this.apiURLG);
  }

  rechercherParGrades(idG: number):Observable< employe[]> {
    const url = `${this.apiURL}/empsG/${idG}`;
    return this.http.get<employe[]>(url);
  }

  rechercherParNom(nom: string):Observable< employe[]> {
    const url = `${this.apiURL}/empsByName/${nom}`;
    return this.http.get<employe[]>(url);
  }

  ajouterGrade( g: Grade):Observable<Grade>{
    return this.http.post<Grade>(this.apiURLG, g, httpOptions);
  }
    
  
  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
    }
    loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
    }
    
          

}
