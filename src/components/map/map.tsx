import { useEffect, useRef } from 'react';
import useMap, { useMapMarkers } from '../../hooks/useMap';
import { Place } from '../../store/bookinng-process/types';
import { Marker, PointExpression, Icon } from 'leaflet';

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = 'img/svg/pin-active.svg';

export const DEFAULT_COORDINATE = {
  location: {
    coords: [59.968322, 30.317359],
  },
  zoom: 11,
};

type MapProps = {
  // className: string;
  place: Place;
  list?: Place[];
  selectedId?: string;
};

export const ICON_SIZE = [27, 39] as PointExpression | undefined;
export const ICON_ANCHOR = [13.5, 39] as PointExpression | undefined;

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

const Map = ({ place, list, selectedId }: MapProps) => {
  const mapRef = useRef(null);

  const { map, mapMarkers } = useMap(mapRef, place, DEFAULT_COORDINATE.zoom);
  const { addMarker, clearMarkers } = useMapMarkers({ map, mapMarkers });
  const cityLocation = place?.location ?? DEFAULT_COORDINATE;

  useEffect(() => {
    if (map) {
      const { coords } = cityLocation;
      map.flyTo(coords, DEFAULT_COORDINATE.zoom);
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map && mapMarkers) {
      clearMarkers();
      list?.forEach((item) => {
        const marker = new Marker({
          lat: item.location.coords[0],
          lng: item.location.coords[1],
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
