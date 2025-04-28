type State = {
    id: number;
    name: string;
    uf: string;
}

interface IState {
    id: number;
    name: string;
    uf: string;
    region: string;
}

interface ICity {
    id: number;
    name: string;
    state: State;
}