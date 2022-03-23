import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateActivityComponent } from './components/generate-activity/generate-activity.component';
import { FavoriteActivityComponent } from './components/favorite-activity/favorite-activity.component';

@NgModule({
  declarations: [GenerateActivityComponent, FavoriteActivityComponent],
  imports: [CommonModule],
  exports: [GenerateActivityComponent, FavoriteActivityComponent],
})
export class ActivityModule {}
