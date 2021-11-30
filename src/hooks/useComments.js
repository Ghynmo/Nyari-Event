import { useLazyQuery } from "@apollo/client"
import { Comments } from "../graphql/query"

export default function useComment() {
    const [CommentEvent, {data: CommentData, loading: CommentLoading, error: CommentError}] = useLazyQuery(Comments)
    
    return {
        CommentEvent, CommentData, CommentLoading, CommentError
    }
}