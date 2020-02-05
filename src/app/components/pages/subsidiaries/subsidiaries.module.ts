import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsidiariesComponent } from './subsidiaries.component';
import { AccraHeartsofoakComponent } from './accra-heartsofoak/accra-heartsofoak.component';
import { CloudAfricaComponent } from './cloud-africa/cloud-africa.component';



@NgModule({
  declarations: [SubsidiariesComponent, AccraHeartsofoakComponent, CloudAfricaComponent],
  imports: [
    CommonModule
  ]
})
export class SubsidiariesModule { }
