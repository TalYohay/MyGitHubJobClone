import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PositionserviceService {


  constructor(public http: HttpClient) { }


  getAllPoistions2(page){
//     return this.http.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`);
 return this.http.get(`https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${page}`);  }



}
