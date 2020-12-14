import { Component, OnInit } from '@angular/core';
import { PositionserviceService } from '../services/positionservice.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-showallpositions',
  templateUrl: './showallpositions.component.html',
  styleUrls: ['./showallpositions.component.css']
})
export class ShowallpositionsComponent implements OnInit {
  positions: Object[] = []
  positions4: Object;
  isCollapsed = true;
  positions2: Object;
  allPositions: Object[];
  short: any;
  DescSearch:any;
  locationSearch:any;
  fullTimeSearch:any;
  pageActual:any;
  test:any
  
  constructor(public positionService: PositionserviceService) { }

  ngOnInit() {

    this.getAllPositions()

  }



  getAllPositions(){
    for(let i = 1; i<=10; i++){
      this.positions.push(this.positionService.getAllPoistions2(i))
    }
    console.log("This positions:",this.positions)
    forkJoin(this.positions).subscribe((data:Object[]) => {
      this.allPositions = data.flat(1);
      console.log("All Positions:", this.allPositions)
    })
    }
  }


