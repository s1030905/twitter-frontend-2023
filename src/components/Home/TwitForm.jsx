import styles from "../../pages/HomeStyle.module.scss";
import { ReactComponent as TalkIcon } from "../../assets/image/TalkIcon.svg";
import { ReactComponent as LikeIcon } from "../../assets/image/LikeIcon.svg";

const TwitForm = (props) => {
  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetCollection}>
          <div
            className={styles.twitAvatar}
            onClick={() => {
              props.setIsOther(true);
              props.setHouse(false)
              props.setReplyTwit(false)
            }}
          >
            {/* <Head /> */}
          </div>
          <div className={styles.tweetContent}>
            <div
              className={styles.nameInfo}
              onClick={() => {
                props.setReplyTwit(true);
              }}
            >
              <div className={styles.tweetName}>Apple</div>
              <div className={styles.tweetTime}>@apple &bull;3小時</div>
            </div>
            <div
              className={styles.tweetArticle}
              onClick={() => {
                props.setReplyTwit(true);
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              temporibus, non enim debitis ipsum repudiandae beatae nesciunt ea
              odio?
            </div>
            <div className={styles.tweetMessage}>
              <div className={styles.smallIcon}>
                <TalkIcon
                  className={styles.interaction}
                  onClick={() => props.setReplyPop(true)}
                />
                <div>13</div>
              </div>
              <div className={styles.smallIcon}>
                <LikeIcon className={styles.interaction} />
                <div>73</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDivider}></div>
    </>
  );
};

export default TwitForm;
