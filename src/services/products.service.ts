import api from "./api.service";

async function fetchProducts(cityId: number): Promise<IProduct[]> {
    const response = await api.get<IProducts>(`stores/filter[city_ids]=${cityId}`);
    return response.data.data;
}

export { fetchProducts }