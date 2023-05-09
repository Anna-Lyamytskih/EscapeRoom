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

export type Place = {
  id: string;
  location: Location;
  slots: {
    today: [{
      time: string;
      isAvailable: boolean;
    }];
    tomorrow: [{
      time: string;
      isAvailable: boolean;
    }];
  };
};

export type bookingProcess = {
  places: ReservationQuest[];
  place: Place | null;
  isAvailable: boolean;
  nextBookinQuest: Place | null;
};

export type PlaceId = {
  placeId: string;
};
