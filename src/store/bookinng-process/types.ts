import { Location } from '../../types/location';
import { Quest } from '../../types/quests';
import { BookingItem } from './booking-api';

export type ReservationQuest = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}

export type bookingProcess = {
  places: ReservationQuest[];
  place: BookingItem | null;
  isAvailable: boolean;
  nextBookinQuest: BookingItem | null;
};

export type PlaceId = {
  placeId: string;
};
