import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makeatable';
  hotels:any[] = [
    {
      "name" : "Paragon Hotel",
      "location": "Palazhi, Calicut"

    },
    {
      "name" : "Paragon Hotel",
      "location": "Palazhi, Calicut"

    },
    {
      "name" : "Paragon Hotel",
      "location": "Palazhi, Calicut"

    }
  ]
}
