import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as PostButton } from "../../assets/image/PostButton.svg";

const Post = (props) => {
  return (
    <div className={styles.postContainer} onClick={() => props.setTwit(true)}>
      <div className={styles.postContent}>
        <div className={styles.postAvatar}></div>
        <textarea
          className={styles.postText}
          placeholder="有什麼新鮮事？"
        ></textarea>
      </div>
      <div className={styles.postButton}>
        <PostButton />
      </div>
    </div>
  );
};

export default Post;