var roi = ee.Geometry.Point([77.2090, 28.6139]);

var image = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(roi)
  .filterDate('2024-01-01', '2024-12-31')
  .median();

var ndvi = image.normalizedDifference(['B8', 'B4']);

Map.centerObject(roi, 10);
Map.addLayer(ndvi, {min:0, max:1}, 'NDVI');
