import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda',
})
export class MonedaPipe implements PipeTransform {
  transform(values: Date): string {
    return '';
  }
}
