var before = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2023-01-01', '2023-12-31')
  .median();

var after = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2024-01-01', '2024-12-31')
  .median();

var difference = after.subtract(before);

Map.addLayer(difference, {}, 'Change Detection');
