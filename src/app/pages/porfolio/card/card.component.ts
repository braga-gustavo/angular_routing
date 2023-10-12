import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private parameterizer: ActivatedRoute,
    private navigator: Router
  ) {
    this.parameterizer.params.subscribe((res) => console.log(res));

    this.parameterizer.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    setInterval(() => {
      this.navigator.navigate(['/']);
    }, 5000);
  }
}
