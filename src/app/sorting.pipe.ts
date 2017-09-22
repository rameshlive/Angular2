import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){

        console.log(args);
        let sortField = args[0].toLowerCase();
        let order = args[1].toLowerCase();
        let bedroomtype = args[2].toLowerCase();
        let rentRange =parseInt(args[3]);

       // var result = args.slice(2);

        if(bedroomtype){
            if( bedroomtype == 'all'){
               var filterValues = value;
            }else{
              var filterValues=  value.filter( x => x.bedrooms == bedroomtype)
            }
        }

        let modifier = 1;

        if( order == 'asc'){
            modifier = 1;
        }else{
          modifier = -1;
        }

        filterValues.sort( (a:any ,b :any) => {
          if( a[sortField] < b [sortField]){
            return -1 * modifier;
          }else if(a[sortField] > b [sortField]){
            return 1 * modifier ;
          }else{
            return 0;
          }
        });
        

        if(rentRange){
          return filterValues.filter(person => {
            return person.price >= 0 && person.price <= +rentRange;
          });
        }

        return filterValues;

       
        
       
    }
  }

}
