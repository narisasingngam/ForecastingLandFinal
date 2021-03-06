import React from "react";
import { Icon } from "leaflet";
import { MapContainer, GeoJSON, TileLayer, Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import reflots from "../../data/reflotPoint.json";
import landValueRange from "../../utils/landValueRange";
import useFindLand from "../../hooks/useFindLand";
import InputHeader from "../../component/InputHeader";
import Layout from '@theme/Layout';

const ReferenceLand = () => {
  const {
    handleChangeInput,
    handleOnKeyPress,
    handleClickSearchBtn,
    point,
  } = useFindLand(reflots.features);

  const onEachLand = (land, layer) => {
    const landValue = land.properties.LAND_VALUE;
    const landID = land.properties.CHANOD_NO;
    layer.bindPopup(`<div><h4>Land Price: ${landValue} Baht</h4><br/><h4>${landID === 0 ? '': 'Land ID: '+landID}</h4></div>`);
    const colorByRange = landValueRange(landValue);
    layer.options.fillColor = colorByRange;
    layer.options.color = colorByRange;
  };

  return (
    <Layout
    title='Reference land'>
      <InputHeader
        handleChangeInput={handleChangeInput}
        handleOnKeyPress={handleOnKeyPress}
        handleClickSearchBtn={handleClickSearchBtn}
      />
      <MapContainer style={{ height: "80vh" }} zoom={14} center={point}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={point}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        />
        <GeoJSON
          style={{
            fillOpacity: 0.5,
          }}
          data={reflots.features}
          onEachFeature={onEachLand}
        />
      </MapContainer>
    </Layout>
  );
};

export default ReferenceLand;
