import { useEffect, useRef } from "react";
import {
  LATITUDE,
  LONGITUDE,
  MAP_API_URL,
  MAP_ZOOM,
  MAPTILER_KEY,
} from "@/constant/CONSTANT";
import { Map, Marker, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import toast from "react-hot-toast";
import { NaxaDetailPopup } from "./naxadetail";

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement | null>(null); // DOM reference
  const mapInstance = useRef<Map | null>(null); // Map instance

  useEffect(() => {
    if (mapInstance.current) return; // prevent re-init
    if (!MAPTILER_KEY) {
      toast.error("MapTiler API key is missing");
      return;
    }
    if (!mapRef.current) return;

    mapInstance.current = new Map({
      container: mapRef.current,
      style: `${MAP_API_URL}`,
      center: [LONGITUDE, LATITUDE],
      zoom: MAP_ZOOM,
    });

    new Marker().setLngLat([LONGITUDE, LATITUDE]).addTo(mapInstance.current);

    new Popup({ closeOnClick: true, closeButton: false, anchor: "left" })
      .setLngLat([LONGITUDE, LATITUDE])
      .setDOMContent(NaxaDetailPopup)
      .addTo(mapInstance.current);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); // cleanup
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full h-[60vh] relative z-10">
      <div ref={mapRef} className="w-full h-full absolute inset-0" />
    </section>
  );
};

export default MapSection;
