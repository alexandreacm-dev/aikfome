import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "@/services/stores.service";

function useStoreViewModel(cityId: number) {
    const {
        data: stores,
        isError,
        error,
        isLoading,
        isFetched,
    } = useQuery({
        queryKey: ["stores", cityId],
        enabled: !!cityId,
        queryFn: () => fetchStores(cityId),
    });

    return {
        stores,
        isError,
        error: isError ? error.message : 'Erro ao buscar os dados da loja.',
        isLoading,
        isFetched,
    }
}

export default useStoreViewModel;