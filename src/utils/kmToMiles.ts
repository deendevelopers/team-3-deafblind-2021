export const kmToMiles = (km: number) => {
  // 1km = 0.621371 miles
  return (km / 100 / 1.609).toFixed(2);
};
