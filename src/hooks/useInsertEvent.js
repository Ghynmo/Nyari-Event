import { useMutation } from '@apollo/client'
import { InsertEvent } from '../graphql/mutation'
import { GetEvents } from '../graphql/query'

export default function useInsertEvent() {
    const [insertEvent, {loading: loadingInsert}] = useMutation(InsertEvent)
        // {refetchQueries: [GetEvents]})
    return {
        insertEvent, loadingInsert
    }
}
