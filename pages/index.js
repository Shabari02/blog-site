import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-nextjs",
//     title: "getting-started",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js page",
//     date: "02-1-2022",
//   },
//   {
//     slug: "getting-started-nextjs2",
//     title: "getting-started",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js page",
//     date: "02-1-2022",
//   },
//   {
//     slug: "getting-started-nextjs3",
//     title: "getting-started",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js page",
//     date: "02-1-2022",
//   },
//   {
//     slug: "getting-started-nextjs4",
//     title: "getting-started",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js page",
//     date: "02-1-2022",
//   },
// ];
function HomePage(props) {
  return (
    <>
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
