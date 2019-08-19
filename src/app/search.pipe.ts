import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], filed: string,kework:string): any {
    if(!filed||!kework){
      return list
    }
    return list.filter(item=>{
      let itemfiler:string=item[filed];
      if(itemfiler){
        return itemfiler.toUpperCase();
      }else{
        return undefined;
      }
    })
  }

}
