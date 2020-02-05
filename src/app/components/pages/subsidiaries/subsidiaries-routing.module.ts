import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccraHeartsofoakComponent} from './accra-heartsofoak/accra-heartsofoak.component';
import {SubsidiariesComponent} from './subsidiaries.component';
import {CloudAfricaComponent} from './cloud-africa/cloud-africa.component';
import {AfricaWorldairlineComponent} from '../../page/subsidiaries/africa-worldairline/africa-worldairline.component';

const routes: Routes = [
    { path: '', component: SubsidiariesComponent },
    { path: 'heartsofoak', component: AccraHeartsofoakComponent },
    { path: 'cloudafrica', component: CloudAfricaComponent},
    { path: 'awa', component: AfricaWorldairlineComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubsidiariesRoutingModule {
}
