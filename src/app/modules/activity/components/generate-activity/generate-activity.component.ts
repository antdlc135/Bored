import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivityService } from 'src/app/shared/activity.service';
import { RandomActivity } from '../../../../models/models';

@Component({
  selector: 'bored-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.scss'],
})
export class GenerateActivityComponent implements OnInit {
  @Output() sendActivity = new EventEmitter<Observable<RandomActivity>>();

  constructor(private activityService: ActivityService) {}
  private activitySub = new Subject<RandomActivity>();
  activity$ = this.activitySub.asObservable();
  activity!: RandomActivity;
  disabled!: boolean;
  ngOnInit(): void {
    this.disabled = true;
    this.sendActivity.emit(this.activity$);
  }

  fetchActivity() {
    this.activityService.fetchActivity().subscribe((act) => {
      this.activity = act;
      this.disabled = false;
    });
  }

  saveActivity() {
    this.activitySub.next(this.activity);
    localStorage.setItem(this.activity.activity, JSON.stringify(this.activity));
  }
}
