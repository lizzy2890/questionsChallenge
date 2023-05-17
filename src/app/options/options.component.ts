import { Component, Input, OnInit } from '@angular/core';
import { ChoiceOption } from '../interfaces/choiceOption';
import { QUESTION } from '../question-info/question-info.constant'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  
  questionTypes = QUESTION.TYPES;
  
  @Input() options?: ChoiceOption[];
  @Input() type?: string;

  constructor() { }

  ngOnInit(): void {}

}
