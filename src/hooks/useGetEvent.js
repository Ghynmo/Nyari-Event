import { useQuery } from "@apollo/client"
import { GetEvent } from "../graphql/query"

export default function useGetEvent() {
    const {data, loading, error} = useQuery(GetEvent)
    
    return {
        data, loading, error
    }
}