import React from 'react';

interface IAppContext {
  locationData: object;
  setLocationData: () => void;
}

export const AppContext = React.createContext<IAppContext>({
  locationData: {},
  setLocationData: () => {},
});
