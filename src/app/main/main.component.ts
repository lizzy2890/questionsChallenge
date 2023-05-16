import { Component, OnInit } from '@angular/core';
import { Section } from '../interfaces/section';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sections?: Section[];

  constructor(private readonly sectionSvc: SectionService) { }

  ngOnInit(): void {
    this.sectionSvc.getSections()
    .subscribe(result => {
      this.sections = [...result];
      console.log('num of sections:', this.sections.length, ' sections: ', this.sections);
    });
  }
}
