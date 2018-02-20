import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from '../materials.module';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule 
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
