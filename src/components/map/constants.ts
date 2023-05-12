import { PointExpression } from 'leaflet';
import { BookingItem } from '../../store/bookinng-api/types';

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '/img/svg/pin-active.svg';

export const DEFAULT_COORDINATE: Partial<BookingItem> & { zoom: number } = {
  id: 'id',
  location: {
    address: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
    coords: [59.968322, 30.317359],
  },
  zoom: 11,
};

export const ICON_SIZE = [27, 39] as PointExpression | undefined;

export const ICON_ANCHOR = [13.5, 39] as PointExpression | undefined;
