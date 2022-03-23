import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RandomActivity } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activityEndPointUrl = environment.apiEndpointUrl;
  constructor(private httpClient: HttpClient) {}

  fetchActivity() {
    return this.httpClient.get<RandomActivity>(this.activityEndPointUrl);
  }
}
