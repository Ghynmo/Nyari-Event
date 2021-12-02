import { useMutation } from '@apollo/client'
import { InsertComment } from '../graphql/mutation'
// import { Comments } from '../graphql/query'

export default function useInsertComment() {
    const [insertComment, {loading: loadingInsert}] = useMutation(InsertComment)
        // {refetchQueries: [Comments]})
    return {
        insertComment, loadingInsert
    }
}