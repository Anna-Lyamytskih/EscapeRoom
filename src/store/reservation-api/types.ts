import { Quest } from '../../types/quests';
import { Location } from '../../types/location';

export type ReservationItem = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}
