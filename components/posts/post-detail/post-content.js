import classes from './post-content.module.css'
import PostHeader from './post-header';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



const DUMMY_POSTS = 
  {
    slug: "getting-started-nextjs",
    title: "getting-started",
    image: "getting-started-nextjs.png",
    excerpt: "Next js page",
    date: "02-1-2022",
    content: '# This is a first post'
  }

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
