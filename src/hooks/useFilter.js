import { useLazyQuery } from "@apollo/client"
import { Filter } from "../graphql/query"

export default function useFilter() {
    const [FilterEvent, {data: FilterData, loading: FilterLoading, error: FilterError}] = useLazyQuery(Filter)
    
    return {
        FilterEvent, FilterData, FilterLoading, FilterError
    }
}