import Map = require('esri/Map');
import MapView = require('esri/views/MapView');
import FeatureLayer = require('esri/layers/FeatureLayer');
import { MilSymbolRenderer } from './milSymbolRenderer';

let rend = new MilSymbolRenderer({
  field: 'milsym'
});

let points = new FeatureLayer({
  url:
    'https://services.arcgis.com/gaVYtevi9moVMgCz/arcgis/rest/services/ArcadePoints/FeatureServer/0',
  outFields: ['*'],
  renderer: rend,
  popupEnabled: true,
  popupTemplate: {
    title: 'Random Feature',
    content: [
      {
        type: 'fields',
        fieldInfos: [{ fieldName: 'milsym', label: 'MilSym', visible: true }]
      }
    ]
  }
});

let map = new Map({
  basemap: 'gray'
});

let view = new MapView({
  container: 'viewDiv',
  map: map,
  zoom: 8,
  center: {
    spatialReference: { wkid: 4326 },
    x: -118.0067670883747,
    y: 35.757109556035545
  },
  popup: {
    dockEnabled: true,
    dockOptions: {
      buttonEnabled: false,
      breakpoint: false
    }
  }
});
map.add(points);
