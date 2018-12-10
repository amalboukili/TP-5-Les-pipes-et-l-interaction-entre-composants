import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, property?: any): any {
    if (value !== undefined) {
      value.sort(function(a:Object,b:object ){
        if(a[property] === undefined && b[property]===undefined)
        return 0;
        if(a[property] === undefined) return -1;
        if(b[property] === undefined) return 1;
  
        if(a[property].toLowerCase() < b[property].toLowerCase()) return -1;
        if(a[property].toLowerCase() > b[property].toLowerCase()) return 1;
      });
    } 
    return value;
  }

}
