import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(items: any, filtertext: any): any {
   if(filtertext){
       return items.filter( item => item.name.toLowerCase().includes(filtertext.toLowerCase()));
    }else{
      return items;
    }
  }

}
