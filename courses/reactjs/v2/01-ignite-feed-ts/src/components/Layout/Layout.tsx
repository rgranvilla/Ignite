import { Sidebar } from "../Sidebar";
import { Post } from "../Post";

import styles from "./Layout.module.css";
import { data } from "../../database/data";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {data.map(({ id: postId, author, content, publishedAt }) => (
          <Post
            key={postId}
            id={postId}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </main>
    </div>
  );
}
export { Layout };
