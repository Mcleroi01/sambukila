export interface WeddingEvent {
  id: string;
  coupleName: string;
  eventName: string;
  date: string;
  time: string;
  location: string;
  message: string;
  backgroundImage?: string;
  createdAt: Date;
}

export interface Guest {
  id: string;
  eventId: string;
  name: string;
  email?: string;
  phone?: string;
  invitationUrl: string;
  createdAt: Date;
}