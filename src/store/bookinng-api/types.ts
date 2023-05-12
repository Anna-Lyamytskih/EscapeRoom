import { Location } from '../../types/location';
import { Quest } from '../../types/quests';

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

export type BookingInformation = {
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
  date: 'today' | 'tomorrow';
  time: string;
}

export type BookingFormType = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  peopleCount: number;
  withChildren: boolean;
  placeId: string;
  questId: string;
}

export type BookingItem = {
  id: string;
  location: Location;
  slots: {
    today: {
      time: string;
      isAvailable: boolean;
    }[];
    tomorrow: {
      time: string;
      isAvailable: boolean;
    }[];
  };
}
