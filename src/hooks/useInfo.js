import { useLazyQuery } from "@apollo/client"
import { Info } from "../graphql/query"

export default function useInfo() {
    const [InfoEvent, {data: InfoData, loading: InfoLoading, error: InfoError}] = useLazyQuery(Info)
    
    return {
        InfoEvent, InfoData, InfoLoading, InfoError
    }
}