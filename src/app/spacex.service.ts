import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './mission.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  getMissionById(id: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }

  getFilteredMissions(year?: string, launchSuccess?: string | boolean, landSuccess?: string | boolean): Observable<Mission[]> {
    let url = 'https://api.spacexdata.com/v3/launches?limit=100';

    if (year) {
      url += `&launch_year=${year}`;
    }

    if (launchSuccess !== '') {
      url += `&launch_success=${launchSuccess}`;
    }

    if (landSuccess !== '') {
      url += `&land_success=${landSuccess}`;
    }

    return this.http.get<Mission[]>(url);
  }


}
