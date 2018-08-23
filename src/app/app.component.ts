import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public info: any;

    public constructor() {
        this.info = {
            "firstname": "Nic",
            "lastname": "Raboy",
            "urls": [
                "https://www.thepolyglotdeveloper.com",
                "https://www.twitter.com/nraboy"
            ]
        }
    }
}
