import { BookingItem } from '../store/bookinng-process/booking-api';

export type MapPlace = Omit<BookingItem, 'slots'>
