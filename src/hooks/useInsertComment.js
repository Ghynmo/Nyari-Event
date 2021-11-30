import { useMutation } from '@apollo/client'
import { InsertComment } from '../graphql/mutation'
import { GetComments } from '../graphql/query'

export default function useInsertComment() {
    const [insertComment, {loading: loadingInsert}] = useMutation(InsertComment)
        // {refetchQueries: [GetComments]})
    return {
        insertComment, loadingInsert
    }
}