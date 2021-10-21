import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProject } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjectByUserId(id: number): Observable<Array<UserProject>> {

    //You should pass the ID via query string 
    return this.http.get<any>('http://api/GetProjectById/'+id);

  }
}
