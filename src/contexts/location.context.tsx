import React, { useContext, useState } from "react";
import { createContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type LocationContextProps = {
  locationName: string;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  cityId: number;
  setCityId: React.Dispatch<React.SetStateAction<number>>;
  favorites: IStore[];
  setFavorites: React.Dispatch<React.SetStateAction<IStore[]>>;
};

const LocationContext = createContext<LocationContextProps>(
  {} as LocationContextProps
);

export const useLocation = () => useContext(LocationContext);

const LocationProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [locationName, setLocationName] = useState("");
  const [cityId, setCityId] = useState(0);
  const [favorites, setFavorites] = useState<IStore[]>([]);

  return (
    <LocationContext.Provider
      value={{
        locationName,
        setLocationName,
        cityId,
        setCityId,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
