import { useLazyQuery } from "@apollo/client"
import { Search } from "../graphql/query"

export default function useSearch() {
    const [SearchEvent, {data: SearchData, loading: SearchLoading, error: SearchError}] = useLazyQuery(Search)
    
    return {
        SearchEvent, SearchData, SearchLoading, SearchError
    }
}