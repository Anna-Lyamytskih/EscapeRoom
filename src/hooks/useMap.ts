import leaflet, { Map, Marker, FeatureGroup } from 'leaflet';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { BookingItem } from '../store/bookinng-process/booking-api';

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const TITLE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const useMapMarkers = ({ map, mapMarkers }: {
  map: Map | null;
  mapMarkers: FeatureGroup | null;
}) => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const addMarker = (newMarker: Marker) => {
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const clearMarkers = () => {
    if (map) {
      mapMarkers?.clearLayers();
      setMarkers([]);
    }
  };

  return { markers, addMarker, clearMarkers };
};

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  place: BookingItem,
  zoom?: number,
): { map: Map | null; mapMarkers: FeatureGroup | null } => {
  const [map, setMap] = useState<Map | null>(null);
  const [mapMarkers, setMapMarkers] = useState<FeatureGroup | null>(null);

  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: place.location.coords[0],
          lng: place.location.coords[1],
        },
        zoom
      });

      leaflet
        .tileLayer(TITLE, {
          attribution: ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);

      setMapMarkers(new FeatureGroup().addTo(instance));
      isRenderedRef.current = true;
    }
  }, [mapRef, map, place, zoom]);

  return { map, mapMarkers };
};

export default useMap;
