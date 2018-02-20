import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces',

})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, value2: string): string {
        return value.replace(value2, "xxx");
    }
}
