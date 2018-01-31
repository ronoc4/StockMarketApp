import {animate, state, style, transition, trigger} from '@angular/animations';

export const TRENDING =
  trigger('trending', [
    state('DOWN', style({
      backgroundColor: 'red'
    })),
    state('UP', style({
      backgroundColor: 'green'
    })),
    transition('UP => DOWN', [
      style({
        transform: 'translateX(-100%)'
      }),
      animate(3000)
    ]),
    transition('DOWN => UP', [
      style({transform: 'translateY(-100%)'}),
      animate(200)
    ])
  ]);
