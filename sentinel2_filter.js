var imageCollection = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2024-01-01', '2024-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10));

print(imageCollection);
