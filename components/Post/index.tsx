import { FunctionComponent } from 'react'
import { Post } from '../../types/posts'

const PostComponent: FunctionComponent<Post> = ({ title, body }) => (
  <div>
    <div>{title}</div>
    <div>{body}</div>
  </div>
)

export default PostComponent
