import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false // impure pipe 
})
// export class SearchPipe implements PipeTransform {
//   transform(value: any, arg ?: any): any {
//     if(!value) return null;
//     if(!arg) return value;

//     arg = arg.toLowerCase();

//     return value.filter(function(myData){
//       return JSON.stringify(myData).toLowerCase().includes(arg);
//     });
//   }
// }

export class SearchPipe implements PipeTransform {
  transform(allPositions: Array<any>, DescSearch: string, locationSearch: string, fullTimeSearch:string, companySearch: string){
      if (allPositions && allPositions.length){
          return allPositions.filter(position =>{
              if (DescSearch && position.description.toLowerCase().indexOf(DescSearch.toLowerCase()) === -1){
                  return false;
              }
              
            //   if (companySearch && position.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
            //     return false;
            // }
          //   if (titleSearch && position.company.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1){
          //     return false;
          // }
              if (locationSearch && position.location.toLowerCase().indexOf(locationSearch.toLowerCase()) === -1){
                  return false;
              }
              if (fullTimeSearch && position.type.length <= 0){
                console.log("checkbox:")
                return false;
                
            }
              return true;
         })
      }
      else{
          return allPositions;
      }
    }
  }
