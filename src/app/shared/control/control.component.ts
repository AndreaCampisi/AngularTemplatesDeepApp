import { Component, ElementRef, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {
    // @HostBinding('class') className = 'control';
    // @HostBinding('click') onClick() {
    //     console.log('clicked!');
    // }
  label = input.required<string>();
  private el = inject(ElementRef)
  onClick(){
    console.log(this.el)
  }
}