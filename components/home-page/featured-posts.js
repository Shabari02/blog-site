import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";
function FeaturedPost(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPost;
