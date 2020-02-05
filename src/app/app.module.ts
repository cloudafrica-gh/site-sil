import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';
import { PartnerAreaComponent } from './components/partner-area/partner-area.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { FreeTrialAreaComponent } from './components/free-trial-area/free-trial-area.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { MachineLearningTwoComponent } from './components/pages/machine-learning-two/machine-learning-two.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { AfricaWorldairlineComponent } from './components/page/subsidiaries/africa-worldairline/africa-worldairline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutAreaComponent,
    PartnerAreaComponent,
    FeedbackComponent,
    PricingPlanComponent,
    FreeTrialAreaComponent,
    AboutComponent,
    TeamComponent,
    PricingComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    PartnerComponent,
    NotFoundComponent,
    FaqComponent,
    ComingSoonComponent,
    ContactComponent,
    MachineLearningComponent,
    MachineLearningTwoComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    AfricaWorldairlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
