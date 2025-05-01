import { MMKV } from 'react-native-mmkv';
import { IStorageService } from './storage.service';

export const storage = new MMKV();

export const mmkvStorage: IStorageService = {
    getItem: async (key: string) => {
        const item = await storage.getString(key);

        if (item != null) {
            return JSON.parse(item)
        }

        return null;
    },
    setItem: async (key, value) => {
        await storage.set(key, JSON.stringify(value))
    },
    removeItem: async (key) => {
        storage.delete(key)
    },
}
