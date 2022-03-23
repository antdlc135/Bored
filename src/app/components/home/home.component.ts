import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomActivity } from '../../models/models';

@Component({
  selector: 'bored-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favActivity!: Observable<RandomActivity>;
  constructor() {}

  ngOnInit(): void {}

  sendFavorite(activity: Observable<RandomActivity>) {
    this.favActivity = activity;
  }
}
