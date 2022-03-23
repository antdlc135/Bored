import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomActivity } from '../../../../models/models';

@Component({
  selector: 'bored-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.scss'],
})
export class FavoriteActivityComponent implements OnInit, AfterViewInit {
  @Input() favActivity$!: Observable<RandomActivity>;
  favActivity: RandomActivity[] = [];
  constructor() {}

  ngOnInit(): void {
    this.favActivity$.subscribe((activity) => {
      this.favActivity.push(activity);
    });
  }

  ngAfterViewInit(): void {}

  deleteActivity(i: number) {
    this.favActivity.splice(i, 1);
  }
}
