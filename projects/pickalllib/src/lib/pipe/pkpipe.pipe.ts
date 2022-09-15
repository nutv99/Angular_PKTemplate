import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pkpipe'
})
export class PkpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
