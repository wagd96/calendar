import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private apiUrl = "https://lis.udea.edu.co/db/user/calendar";
  constructor(private http: HttpClient) { }

  public getSala1(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl + "/room/sala1");
  }
}
