import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enterdText = '';

  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('onInit');
    console.log(this.form().nativeElement); // this doesn't work if i don't use signal
  }

  ngAfterViewInit() {
    console.log('AfterViewinit');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    //titleElement: HTMLInputElement
    // const enterdTitle = titleElement.value;
    // console.log(enterdTitle);
    this.add.emit({ title: this.enteredTitle, text: this.enterdText });
    this.enteredTitle = '';
    this.enterdText = '';
  }
}
