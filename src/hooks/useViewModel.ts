import { useQuery } from "@tanstack/react-query";
import { getCities, getStates } from "@/services/search-location.service";

function useViewModel(cityId: number) {
    const {
        data: states,
        isError,
        error,
        isLoading,
        isFetched,
    } = useQuery({
        queryKey: ["states"],
        queryFn: getStates,
    });

    const {
        data: cities,
        isLoading: isLoadingCity,
        isFetched: isFetchedCity,
    } = useQuery({
        queryKey: ["cities", { cityId }],
        queryFn: () => getCities(cityId),
    });

    return {
        states,
        isError,
        error: isError ? error?.message : 'Error fetching data',
        isLoading,
        isFetched,
        cities,
        isLoadingCity,
        isFetchedCity
    }
}

export default useViewModel;