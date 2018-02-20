import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatePrice'
})

export class FormatePricePipe implements PipeTransform {
 
    transform(value: string): string {
      //console.log(value);
        return  value+" €";
    }
}