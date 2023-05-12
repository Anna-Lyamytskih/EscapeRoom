import leaflet, { Map, Marker, FeatureGroup } from 'leaflet';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { MapPlace } from '../types/map';
import { ATTRIBUTION, TITLE } from './constants';

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
  place: MapPlace,
  zoom?: number,
): { map: Map | null; mapMarkers: FeatureGroup | null } => {
  const [map, setMap] = useState<Map | null>(null);
  const [mapMarkers, setMapMarkers] = useState<FeatureGroup | null>(null);

  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const center = {
        lat: place?.location.coords[0],
        lng: place?.location.coords[1],
      };
      const instance = leaflet.map(mapRef.current, {
        center,
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
