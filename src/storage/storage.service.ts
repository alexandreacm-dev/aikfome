import { mmkvStorage } from "./mmKV.storage";

export interface IStorageService {
    getItem: <T> (key: string) => Promise<T | null>;
    setItem: <T> (key: string, value: T) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
}

export let storageService: IStorageService;

export const initializeStorage = (storage: IStorageService) => {
    storageService = storage
}