import styles from "../../pages/Home/HomeStyle.module.scss";
import Follower from "./Follower";

const Popular = () => {
  return (
    <div className={styles.rightColumn}>
      
      <div className={styles.popularList}>
        <div className={styles.popularTitle}>
          <div>推薦跟隨</div>
        </div>
        <div className={styles.popularRectangle}></div>
        <Follower />
        <Follower />
      </div>
    </div>
  );
};

export default Popular;
