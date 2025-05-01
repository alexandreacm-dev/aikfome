import { useQuery } from "@tanstack/react-query";
import { getCities, getStates } from "@/services/search-location.service";

function useLocationViewModel(stateId: number) {
    const {
        data: states,
        isError: isErrorStates,
        error: errorStates,
        isLoading: isLoadingStates,
        isFetched: isFetchedStates,
    } = useQuery({
        queryKey: ["states"],
        queryFn: getStates,
    });

    const {
        data: cities,
        isLoading: isLoadingCity,
        isFetched: isFetchedCity,
        isError: isErrorCity,
        error: ErrorCity
    } = useQuery({
        queryKey: ["cities", { stateId }],
        queryFn: () => getCities(stateId),
    });

    return {
        states,
        isErrorStates,
        errorState: isErrorStates ? errorStates?.message : 'Erro ao carregar os estados',
        isLoadingStates,
        isFetchedStates,
        cities,
        isLoadingCity,
        isFetchedCity,
        isErrorCity,
        ErrorCity: isErrorCity ? ErrorCity?.message : 'Erro ao carregar as cidades',
    }
}

export default useLocationViewModel;