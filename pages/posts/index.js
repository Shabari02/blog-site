import AllPosts from "../../components/posts/all-posts";

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
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS}/>;
}

export default AllPostsPage;
