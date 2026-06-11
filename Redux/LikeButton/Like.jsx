import { useSelector, useDispatch } from 'react-redux'
import { like } from './LikeSlice'

function Like() {
  const likes = useSelector(state => state.likes)
  const dispatch = useDispatch()

  return (
    <div style={{ padding: 20 }}>
      <h2>Post</h2>
      <p>❤️ Likes: {likes}</p>
      <button onClick={() => dispatch(like())}>
        Like
      </button>
    </div>
  )
}

export default Like;
