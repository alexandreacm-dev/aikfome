import api from "./api.service";

async function fetchStores(cityId: number): Promise<IStore[]> {
    const response = await api.get<IStores>(`stores/filter[city_ids]=${cityId}`);
    return response.data.data;
}

export { fetchStores }