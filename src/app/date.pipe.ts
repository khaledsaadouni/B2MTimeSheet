import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Dating'
})
export class DatePipe implements PipeTransform {

  transform(value, ...args: unknown[]): unknown {
    let d=String(value)
    let y=d.slice(0,4);
    let m=d.slice(4,6);
    let da=d.slice(6);
    return (da+'/'+m+'/'+y)

  }

}
