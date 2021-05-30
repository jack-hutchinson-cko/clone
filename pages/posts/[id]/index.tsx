import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Post } from '../../../types/posts'
import { getPostById, getPosts } from '../../../lib/posts'

interface PostProps {
  postData: Post
}

const PostPage: NextPage<PostProps> = ({ postData }) => (
  <div>
    <h3>{postData.title}</h3>
    <p>{postData.body}</p>
  </div>
)

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPosts()
  const paths = allPosts.map(({ id }) => ({
    params: {
      id: String(id),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const postData = await getPostById(String(params.id))
  return {
    props: {
      postData,
    },
  }
}
