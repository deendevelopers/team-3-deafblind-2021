const axios = require('axios');
import { GOOGLE_MAPS_API_KEY } from '../utils/extras';
import { types } from './GoogleMapsAPI.types';

/* Each 'Place' object has the following properties:
  "business_status",
  "geometry",
  "icon",
  "icon_background_color",
  "icon_mask_base_uri",
  "name",
  "opening_hours",
  "photos",
  "place_id",
  "plus_code",
  "rating",
  "reference",
  "scope",
  "types",
  "user_ratings_total",
  "vicinity",
*/

// Hardcoded location (Piccadilly Circus, London) - in future pass in user's coordinates
const lat = '51.510084785550006';
const lng = '-0.13502325923340425';

export async function apiCall(type: types = types.bank) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&key=${GOOGLE_MAPS_API_KEY}&type=${type}`
  );

  const transformedData = response.data.results.map(
    async ({ place_id, name, photos, geometry }) => {
      const currentLocationAddress = await getAddress(
        geometry.location.lat,
        geometry.location.lng
      );

      return {
        place_id,
        name,
        photos,
        location: currentLocationAddress,
      };
    }
  );

  const finalData = await Promise.all(transformedData);
  return finalData;
}

export default async function getAddress(lat: string, lng: string) {
  const response =
    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}
   `);

  return response.data.results[0].formatted_address;
}
