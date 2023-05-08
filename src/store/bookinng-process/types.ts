import { Location } from '../../types/location';
import { ReservationQuest } from './api-actions';

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
