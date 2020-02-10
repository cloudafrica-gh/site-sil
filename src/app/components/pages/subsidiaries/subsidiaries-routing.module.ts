import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccraHeartsofoakComponent} from './accra-heartsofoak/accra-heartsofoak.component';
import {CloudAfricaComponent} from './cloud-africa/cloud-africa.component';
import {SasFinanceComponent} from './sas-finance/sas-finance.component';
import {SubsidiariesComponent} from './subsidiaries.component';
import {AfricaWorldairlineComponent} from './africa-worldairline/africa-worldairline.component';
import {LightingComponent} from './lighting/lighting.component';
import {PklComponent} from './pkl/pkl.component';
import {SunonAsogliComponent} from './sunon-asogli/sunon-asogli.component';
import {WtcAccraComponent} from './wtc-accra/wtc-accra.component';

const routes: Routes = [
    {path: '', component: SubsidiariesComponent},
    {path: 'hearts', component: AccraHeartsofoakComponent},
    {path: 'awa', component: AfricaWorldairlineComponent},
    {path: 'cloudafrica', component: CloudAfricaComponent},
    {path: 'lighting', component: LightingComponent},
    {path: 'pkl', component: PklComponent},
    {path: 'sas', component: SasFinanceComponent},
    {path: 'asogli', component: SunonAsogliComponent},
    {path: 'wtcaccra', component: WtcAccraComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubsidiariesRoutingModule {}



