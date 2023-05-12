import { BookingItem } from '../store/bookinng-api/types';

export type MapPlace = Omit<BookingItem, 'slots'>
