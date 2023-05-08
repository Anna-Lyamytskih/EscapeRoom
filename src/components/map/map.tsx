import { useEffect, useRef } from 'react';
import { Place } from '../../store/bookinng-process/types';
//import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


export type BookingFormProps = {
  place: Place | null;
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const Map = ({ place }: BookingFormProps) => {
  const mapRef = useRef(null);
 // const map = useMap(mapRef, place);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // useEffect(() => {
  //   if (map) {
  //     place?.location.coords.forEach((point) => {
  //       leaflet
  //         .marker({
  //           lat: point,
  //           lng: point,
  //         }, {
  //           icon: defaultCustomIcon,
  //         })
  //         .addTo(map);
  //     });
  //   }
  // }, [map, place]);

  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </div>
  );
}
export default Map;
