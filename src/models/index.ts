type State = {
    id: number;
    name: string;
    uf: string;
}

export interface IState {
    id: number;
    name: string;
    uf: string;
    region: string;
}

export interface ICity {
    id: number;
    name: string;
    state: State;
}

type VirtualAvatar = {
    132: string;
    160: string;
    300: string;
    500: string;
    default: string;
}

type HighlightImage = {
    300: string;
    960: string;
    1500: string;
    default: string;
}

type Address = {
    street_name: string;
    number: string;
    complement: string;
    city_name: string;
    state_uf: string;
}
type Ratings = {
    average: number;
    count: number;
}

export interface IStore {
    id: number;
    name: string;
    slug: string;
    phones: string;
    time_to_prepare_order: number;
    time_to_delivery: string;
    order_minimum_value: string;
    top: boolean;
    virtual_avatar: VirtualAvatar;
    highlight_image: HighlightImage;
    status: string;
    aiqentrega_active: boolean;
    address: Address;
    ratings: Ratings;
}


export interface IStores {
    data: Array<IStore>;
}