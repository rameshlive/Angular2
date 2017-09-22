import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(items, args): any {

    let [filtertext , age] = args;
    console.log(filtertext)
    console.log(parseInt(age));

    if(filtertext){
        return items.filter( function(item){
              var title = item.title.toLowerCase().includes(filtertext.toLowerCase());
              var author = item.author.toLowerCase().includes(filtertext.toLowerCase());
              var email = item.email.toLowerCase().includes(filtertext.toLowerCase());
              var url = item.URL.toLowerCase().includes(filtertext.toLowerCase());
              return title || author || email || url;
        });
      }
      if(age){
        return items.filter(person => {
          return person.age >= 0 && person.age <= +age;
        });
      }
      else{
        return items;
      }
   }



}
