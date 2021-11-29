import { useQuery } from "@apollo/client"
import { Filter } from "../graphql/query"

export default function useFilter() {
    const {data, loading, error} = useQuery(Filter)
    
    return {
        data, loading, error
    }
}