import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PositionserviceService {

  // uri = 'https://jobs.github.com/positions'

  constructor(public http: HttpClient) { }

  getAllPositions(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
  }


  getAllPoistions2(page){
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`);
  }

}
