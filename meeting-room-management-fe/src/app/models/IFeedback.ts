export interface IFeedback{
  id: string,
  dateRequest: Date,
  dateResponse: Date,
  noteRequest: string,
  noteResponse: string,
  status: boolean,
  user: any,
  room: any
}
