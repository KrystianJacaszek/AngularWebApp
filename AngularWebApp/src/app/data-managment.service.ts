import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataManagmentService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get('/api/getData')
  }

  postAPIData(data){
    return this.http.post('/api/postData', data);
  }

  insertAPIData(data){
    return this.http.post('/api/insertData', data);
  }



}
