import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../interfaces/section';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.css']
})
export class SectionSummaryComponent implements OnInit {

  @Input() section?: Section;
  details: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
   this.details = `Total questions: ${this.section?.totalQuestions}, answered: ${this.section?.answeredQuestions}`
  }

  seeSection(): void{
    console.log('Going to see the questions...', this.section?.sectionOccurrenceId);
    this.router.navigate(['section'], { queryParams: { sectionId: this.section?.sectionOccurrenceId }});
  }

}
