import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelcase' })
export class CamelPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    args = value.toLowerCase().split(' ');
    console.log(args)
    for (var i = 1; i < args.length; i++) {
      args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1);

    }
    return args.join('');


  }
}