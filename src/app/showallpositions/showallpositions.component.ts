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
    // this.positionService.getAllPositions().subscribe(data => {
    //   this.positions = data;
    //   console.log(this.positions)
    // })
    this.getAllPositions()

  }

  // getAllPositions(){
  //   for(let i = 1; i<=4; i++){
  //     this.positions = this.positionService.getAllPoistions2(i).subscribe((data: Object[]) => {
  //       this.positions = data
  //       console.log("All Positions:", this.positions)
  //     })
  //   }
  // }

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

  // getAllPositions(){
  //   let i: number = 0;
  //   const observablesList = []; 
  
  //   while(i < 20){
  //     observablesList.push(this.positionService.getAllPoistions2(i));
  //     i++;
  //   }
  //   forkJoin(observablesList).subscribe((response) => {
  //     observablesList  = response
  //     console.log(response);
  //   });
    
  // }
  // getPage4(){
  //   this.positionService.getNextPage4().subscribe(data4 => {
  //     this.positions4 = data4;
  //     console.log("Page 4:", this.positions4)
  //   })
  // }



// testingFunction() {
//   let i: number = 0;
//   const observablesList = []; 

//   while(i < 20){
//     observablesList.push(this.positionService.getAllPoistions2(i));
//     i++;
//   }
//   forkJoin(observablesList).subscribe((response) => {
//     console.log(response);
//   });
// }
