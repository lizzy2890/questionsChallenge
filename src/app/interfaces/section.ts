import { IssueStatus } from "./issueStatus";

export interface Section {
    'sectionOccurrenceId': string,
    'status': string,
    'issueStatus': IssueStatus,
    'name': string,
    'description': string,
    'numberLevel': string,
    'totalQuestions': string,
    'answeredQuestions': string
}