import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";


const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "getting-started",
    image: "getting-started-nextjs.png",
    excerpt: "Next js page",
    date: "02-1-2022",
  },
  {
    slug: "getting-started-nextjs2",
    title: "getting-started",
    image: "getting-started-nextjs.png",
    excerpt: "Next js page",
    date: "02-1-2022",
  },
  {
    slug: "getting-started-nextjs3",
    title: "getting-started",
    image: "getting-started-nextjs.png",
    excerpt: "Next js page",
    date: "02-1-2022",
  },
  {
    slug: "getting-started-nextjs4",
    title: "getting-started",
    image: "getting-started-nextjs.png",
    excerpt: "Next js page",
    date: "02-1-2022",
  }
];
function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
