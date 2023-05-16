import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SectionQuestionsComponent } from "./section-questions/section-questions.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    },
    {
        path: 'section',
        component: SectionQuestionsComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }