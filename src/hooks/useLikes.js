import { useMutation } from '@apollo/client'
import { Like } from '../graphql/mutation'

export default function useLikes() {
    const [AddLikes, {loading: loadingLikes}] = useMutation(Like)

    return {
        AddLikes, loadingLikes
    }
}
