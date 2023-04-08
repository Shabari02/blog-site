import AllPosts from "../../components/posts/all-posts";
import getAllPost from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}
export function getStaticProps() {
  const allPosts = getAllPost();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
