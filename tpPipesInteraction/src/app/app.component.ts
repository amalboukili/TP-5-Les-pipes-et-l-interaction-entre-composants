import { Component } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP5 <br> Les pipes et l\'interaction entre composants';
  maDate = new Date();
  num = 344.357467846;
  produits = [
    {"type": "phone", 
    "nom":"Samsung Galaxy 8 32G",
    "prix": 900,
    "qte": 80
    },
    { "type": "phone",
    "nom":"iPhone 6",
    "prix": 700,
    "qte": 150
    },
    { "type": "phone",
    "nom":"Nokia",
    "prix": 1300,
    "qte": 100
    },
    { "type": "phone",
    "nom":"Infinix",
    "prix": 200,
    "qte": 0
    }
  ];
  
}

