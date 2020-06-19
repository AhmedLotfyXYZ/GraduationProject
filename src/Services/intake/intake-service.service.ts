import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IntakeServiceService {

  constructor(private http: HttpClient) { }
  getAll() {
    console.log("get all services")
    return this.http.get<any>("https://localhost:44374/")//http://localhots:8080/api/branches
  
  }
addintake(intake)
{
  return this.http.post<any>("https://localhost:44374/",intake);
}
deleteintake(id)
{
  return this.http.get<any>("https://localhost:44374/",id)
}
}
