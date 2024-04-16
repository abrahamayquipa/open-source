import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = 'sbRgx5kY9YlaQWuhJCmKTuqIRWQrcSx0';
  baseUrl = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient) { }

  getDays() {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&country=PE&year=2023`;
    return this.http.get(url);
  }
}
