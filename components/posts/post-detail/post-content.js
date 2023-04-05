import classes from './post-content.module.css'
import PostHeader from './post-header';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';



// const post = 
//   {
//     slug: "getting-started-nextjs",
//     title: "getting-started",
//     image: "getting-started-nextjs.png",
//     excerpt: "Next js page",
//     date: "02-1-2022",
//     content: '# This is a first post'
//   }

function PostContent(props) {
  const { post } = props;
  console.log(post)
    const imagePath = `/images/posts/${post.slug}/${post.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
