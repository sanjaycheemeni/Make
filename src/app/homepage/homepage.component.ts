import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // top rated food list
  top_foods: any[] = [
    {
      "name": "Masala Dosa", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qmpmqzlnx5tjok1nuzai", "hotel": "Paragon Hotel", "rating": "4.9"
    },
    {
      "name": "Meals", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wmstulbnn8zoswub996q", "hotel": "Paragon Hotel", "rating": "4.7"
    },
    {
      "name": "Dosa", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ipjsuasggph9zabfsrlv", "hotel": "Paragon Hotel", "rating": "4.6"
    },
    {
      "name": "Veg Noodiles", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s5hw232nz6c3zqldtp4h", "hotel": "Paragon Hotel", "rating": "4.5"
    },
    {
      "name": "Butter Naan", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tv9jyia5g1qhw9b5aoue", "hotel": "Paragon Hotel", "rating": "4.3"
    }

  ];



  // Top hotels list
  hotels: any[] = [
    {
      "name": "Paragon Hotel",
      "location": "Palazhi, Calicut"

    },
    {
      "name": "Paragon Hotel",
      "location": "Palazhi, Calicut"

    },
    {
      "name": "Paragon Hotel",
      "location": "Palazhi, Calicut"

    }
  ]

  // catagories
  catagories: any[] = [
    {
      "name": "juices", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/enj6kfzegxo0mitgnk6i"
    },
    {
      "name": "Snacks", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ccep1wsbqicnzm61bpmg"
    },
    {
      "name": "Tea", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/vym1eyhhsbaxeyrojfne"
    },
    {
      "name": "Cool", "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/4487a95f83a351b2d22d59a2f66e2204"
    },
    
  ]

}
