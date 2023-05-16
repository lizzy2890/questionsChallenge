import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Section } from '../interfaces/section';
import { SectionQuestion } from '../interfaces/sectionQuestion';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-section-questions',
  templateUrl: './section-questions.component.html',
  styleUrls: ['./section-questions.component.css']
})
export class SectionQuestionsComponent implements OnInit {
  selectedSectionQuestion?: SectionQuestion;
  selectedSection!: Section;
  sectionId!: string;

  constructor(private readonly sectionSvc: SectionService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.sectionId = params['sectionId'];
        this.sectionSvc.getSection()
        .subscribe(
          result => {
            this.selectedSection = result;
            console.log(' selectedSection: ', this.selectedSection);
          });

      }
    )
    this.sectionSvc.getSelectedSectionQuestions()
    .subscribe(result => {
      this.selectedSectionQuestion = result;
      console.log(' selectedSectionQuestion: ', this.selectedSectionQuestion);
    });
  }

}
