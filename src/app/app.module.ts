import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SectionSummaryComponent } from './section-summary/section-summary.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SectionQuestionsComponent } from './section-questions/section-questions.component';
import { QuestionInfoComponent } from './question-info/question-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionSummaryComponent,
    MainComponent,
    SectionQuestionsComponent,
    QuestionInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
