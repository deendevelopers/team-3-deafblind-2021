const axios = require('axios');
import { kmToMiles } from '../utils/kmToMiles';
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

export interface ILocationData {
  place_id: string;
  name: string;
  photos: object;
  location: string;
  distance: number;
}

export async function getPlacesByType(type: types = types.bank) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=5000&key=${GOOGLE_MAPS_API_KEY}&type=${type}&keyword=${type}`
    );

    if (response.data.error_message)
      return console.log(response.data.error_message);

    const transformedData: ILocationData[] = response.data.results.map(
      async ({ place_id, name, photos, geometry }, index) => {
        const currentLocationAddress = await getAddress(
          geometry.location.lat,
          geometry.location.lng
        );

        const currentDistance = await getDistanceToPlace(place_id);

        return {
          place_id,
          name,
          photos,
          location: currentLocationAddress,
          distance: (currentDistance / 10).toFixed(2),
        };
      }
    );

    const finalData = await Promise.all(transformedData);
    return finalData;
  } catch (error) {
    console.warn('getPlacesByType: Error fetching places');
    console.log(error);
  }
}

async function getAddress(lat: string, lng: string) {
  try {
    const response =
      await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}
   `);

    return response.data.results[0].formatted_address;
  } catch (error) {
    console.warn('getAddress: Error fetching address');
    console.log(error);
  }
}

async function getDistanceToPlace(placeId: string) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${encodeURIComponent(
        `place_id:${placeId}`
      )}&origins=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
    );

    return kmToMiles(response.data.rows[0].elements[0].distance.value);
  } catch (error) {
    console.warn('getAddress: Error fetching address');
    console.log(error);
  }
}
