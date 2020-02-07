import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubsidiariesComponent} from './subsidiaries.component';
import {AccraHeartsofoakComponent} from './accra-heartsofoak/accra-heartsofoak.component';
import {CloudAfricaComponent} from './cloud-africa/cloud-africa.component';
import {SasFinanceComponent} from './sas-finance/sas-finance.component';
import {SubsidiariesRoutingModule} from './subsidiaries-routing.module';
import {AfricaWorldairlineComponent} from './africa-worldairline/africa-worldairline.component';
import { PklComponent } from './pkl/pkl.component';
import { SunonAsogliComponent } from './sunon-asogli/sunon-asogli.component';
import { WtcAccraComponent } from './wtc-accra/wtc-accra.component';
import { LightingComponent } from './lighting/lighting.component';


@NgModule({
    declarations: [
        SubsidiariesComponent,
        AccraHeartsofoakComponent,
        CloudAfricaComponent,
        SasFinanceComponent,
        AfricaWorldairlineComponent,
        PklComponent,
        SunonAsogliComponent,
        WtcAccraComponent,
        LightingComponent
    ],
    imports: [
        CommonModule,
        SubsidiariesRoutingModule
    ]
})
export class SubsidiariesModule {
}

