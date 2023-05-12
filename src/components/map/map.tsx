import { useEffect, useRef } from 'react';
import useMap, { useMapMarkers } from '../../hooks/use-map/use-map';
import { Marker, Icon } from 'leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css';
import { MapPlace } from '../../types/map';
import { DEFAULT_COORDINATE, ICON_ANCHOR, ICON_SIZE, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './constants';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
});

type MapProps = {
  place: MapPlace;
  list?: MapPlace[];
  selectedId?: string | undefined;
  setSelectedId?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Map = ({ place, list, selectedId, setSelectedId }: MapProps) => {
  const mapRef = useRef(null);

  const cityLocation = place ?? DEFAULT_COORDINATE;
  const { map, mapMarkers } = useMap(mapRef, place, DEFAULT_COORDINATE.zoom);
  const { addMarker, clearMarkers } = useMapMarkers({ map, mapMarkers });

  useEffect(() => {
    let isMounted = true;

    if (isMounted && map) {
      const coords = cityLocation?.location?.coords as [number, number];
      map.flyTo(coords, DEFAULT_COORDINATE.zoom);
    }

    return () => {
      isMounted = false;
    };
  }, [map, cityLocation]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && map && mapMarkers) {
      clearMarkers();
      list?.forEach((item) => {
        const marker = new Marker({
          lat: item.location.coords[0],
          lng: item.location.coords[1],
        }).on('click', () => {
          if (setSelectedId) {
            setSelectedId(item.id);
          }
        });

        marker
          .setIcon(
            selectedId && item.id === selectedId
              ? currentCustomIcon
              : defaultCustomIcon
          );
        mapMarkers.addLayer(marker);
        addMarker(marker);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [map, list, selectedId]);


  return (
    <section
      style={{ height: '562px' }}
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
