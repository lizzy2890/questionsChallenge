import { Question } from "./question";

export interface SectionQuestion {
    'id': string,
    'canTakeOver': boolean,
    'startedByMe': boolean,
    'questions': Question[]
}