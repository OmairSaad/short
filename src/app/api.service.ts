import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://url-mohammad-omairs-projects.vercel.app/"
  constructor(private http: HttpClient) { }
  sendData(a:any){
  return this.http.post(this.url, a);
  }
}
