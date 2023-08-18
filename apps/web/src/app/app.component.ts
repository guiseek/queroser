import {Component} from '@angular/core'

@Component({
  selector: 'queroser-root',
  template: ` <router-outlet /> `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class AppComponent {
  title = 'web'
}
