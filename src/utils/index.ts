import { DefaultTheme } from "styled-components/native";

export type ThemeProp = {
    theme: DefaultTheme;
}

function isFavorite(storeFavorites: IStore[], storeId: number): boolean {
    return storeFavorites.filter((store) => store.id == storeId).length > 0;
}

export {
    isFavorite
}