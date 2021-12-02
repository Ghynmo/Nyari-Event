import { useSubscription } from '@apollo/client'
import { Comments } from '../graphql/subscription'

export default function useSubscriptionComments(props) {
    const {data: CommentData, loading: CommentLoading, error: CommentError} = useSubscription(Comments, 
        {variables: {
            event_id: props
    }})
    
    return {
        CommentData, CommentLoading, CommentError
    }
}