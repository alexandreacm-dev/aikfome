import { ICity, IState } from "@/models";
import api from "./api.service";

async function getStates(): Promise<IState[]> {
    const response = await api.get<IState[]>("/states");
    return response.data;
}

async function getCities(cityId: any): Promise<ICity[]> {
    const response = await api.get<ICity[]>(`/cities/${cityId}`);
    return response.data;
}


export { getStates, getCities }