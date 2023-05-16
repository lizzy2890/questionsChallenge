import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../interfaces/section';
import { SectionQuestion } from '../interfaces/sectionQuestion';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private url = '/assets/data/sections.json';
  private urlSection = '/assets/data/section.json';
  private urlSectionQuestion = '/assets/data/selectedSection.json';
  

  constructor(private readonly http: HttpClient) { }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.url);
  }

  getSection(): Observable<Section> {
    return this.http.get<Section>(this.urlSection);
  }


  getSelectedSectionQuestions(): Observable<SectionQuestion> {
    return this.http.get<SectionQuestion>(this.urlSectionQuestion);
  }
}
