import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe<T> implements PipeTransform {

  transform(value: T, func: (arg: T) => any): any {
    return func(value);
  }

}
