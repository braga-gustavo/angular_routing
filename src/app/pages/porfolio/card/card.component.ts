import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private parameterizer: ActivatedRoute) {
    this.parameterizer.params.subscribe(res => console.log(res))
   }

  ngOnInit(): void {
  }

}
