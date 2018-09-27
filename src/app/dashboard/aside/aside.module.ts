import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AsideComponent} from './aside.component';
import {StatusModule} from '../../../shared/status/status.module';

@NgModule({
  imports: [
    CommonModule,
    StatusModule
  ],
  declarations: [AsideComponent],
  exports: [AsideComponent]
})
export class AsideModule {}
