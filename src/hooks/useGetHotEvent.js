import { useQuery } from "@apollo/client"
import { GetHotEvent } from "../graphql/query"

export default function useGetHotEvent() {
    const {data, loading, error} = useQuery(GetHotEvent)
    
    return {
        data, loading, error
    }
}