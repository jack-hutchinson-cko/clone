import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Post } from '../../../types/posts'
import { getPostById, getPosts } from '../../../lib/posts'
import PostComponent from '../../../components/Post'

interface PostProps {
  postData: Post
}

const PostPage: NextPage<PostProps> = ({ postData }) => <PostComponent {...postData} />

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
