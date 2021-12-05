import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('placesData', jsonValue);
  } catch (e) {
    // saving error
    console.warn('storeData: error storing user data');
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('placesData');
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    console.warn('getData: error reading user data');
  }
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('placesData');
  } catch (e) {
    // remove error
    console.warn('removeValue: error removing value');
  }

  console.log('Done.');
};
