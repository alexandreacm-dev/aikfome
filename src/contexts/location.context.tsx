import { key_CityId, key_favorites, key_location } from "@/constants";
import { storage } from "@/storage/mmKV.storage";
import { storageService } from "@/storage/storage.service";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type LocationContextProps = {
  locationName: string | null;
  setLocationName: React.Dispatch<React.SetStateAction<string | null>>;
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
  const [locationName, setLocationName] = useState<string | null>("");
  const [cityId, setCityId] = useState<number>(0);
  const [favorites, setFavorites] = useState<IStore[]>([]);

  useEffect(() => {
    storage.clearAll();

    async function loadingFavorites() {
      try {
        const localFavorites = await storageService.getItem<IStore[]>(
          key_favorites
        );
        const cityId = await storageService.getItem<number>(key_CityId);

        const locationStateCity = await storageService.getItem<string>(
          key_location
        );

        if (localFavorites !== null) {
          setFavorites(localFavorites);
        }

        if (cityId !== null) {
          setCityId(cityId);
        }

        if (locationStateCity !== null) {
          setLocationName(locationStateCity);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadingFavorites();
  }, []);

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
