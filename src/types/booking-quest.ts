import { Day, Quests } from './quests';

export type QuestsBookingDescriptions = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quests;
}


export type Booking = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingQuest = {
  id: string;
  location: Location;
  slots: {
    today: Day;
    tomorrow: Day;
  };
}
