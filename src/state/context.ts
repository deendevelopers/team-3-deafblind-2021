import React from 'react';

interface IAppContext {
  locationData: object;
}

export const AppContext = React.createContext<IAppContext>({
  locationData: {},
});
