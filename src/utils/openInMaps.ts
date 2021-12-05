import { Linking, Platform } from 'react-native';
import { lat as globalLat, lng as globalLng } from '../network/GoogleMapsAPI';

export const openInMaps = (lat: string, lng: string) => {
  if (Platform.OS === 'android') {
    return Linking.openURL(`google.navigation:q=${lat}+${lng}`);
  }

  if (Platform.OS === 'ios') {
    return Linking.openURL(
      `maps://app?saddr=${globalLat}+${globalLng}&daddr=${lat}+${lng}`
    );
  }
};
