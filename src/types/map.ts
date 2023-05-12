import { BookingItem } from '../store/booking-api/types';

export type MapPlace = Omit<BookingItem, 'slots'>
