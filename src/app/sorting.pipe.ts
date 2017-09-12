import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){

        let sortField = args[0].toLowerCase();
        let order = args[1].toLowerCase();
        let bedroomtype = 'all';

       // var result = args.slice(2);

        if(bedroomtype){
            if( bedroomtype == 'all'){
               var filterValues = value;
            }else{
              var filterValues=  value.filter( x => x.bedrooms == '1')

               //var filteredArray = value.filter(element);
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

        return filterValues;

    }
  }

}
