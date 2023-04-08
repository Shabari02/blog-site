import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";
import Head from 'next/head'

function HomePage(props) {
  return (
    <>
    <Head>
      <title>Welcome to my blog</title>
      <meta name="description" content="I post about programming and web development" />
      
    </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default HomePage;
