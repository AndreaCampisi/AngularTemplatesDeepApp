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

  add = output<{title: string, text: string}>()

  ngOnInit() {
    console.log('onInit');
    console.log(this.form().nativeElement); // this doesn't work if i don't use signal
  }

  ngAfterViewInit() {
    console.log('AfterViewinit');
    console.log(this.form().nativeElement);
  }

  onSubmit(titleInput: string, textInput: string) {
    //titleElement: HTMLInputElement
    // const enterdTitle = titleElement.value;
    // console.log(enterdTitle);
    this.add.emit({title:titleInput, text:textInput});
    console.log(titleInput, textInput);
    this.form().nativeElement.reset();
  }
}
