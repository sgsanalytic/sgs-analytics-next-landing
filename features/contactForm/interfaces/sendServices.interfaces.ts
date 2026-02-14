export interface ISendServicesBody {
  name: string;
  email: string;
  message: string;
  /** Optional. Company name. */
  company?: string;
  /** Optional. Role or job title. */
  role?: string;
  /** Optional. documentId of the selected contact topic. */
  topic?: string;
}
export interface ISendServicesResponse {
  ok: boolean;
  message: string;
}
