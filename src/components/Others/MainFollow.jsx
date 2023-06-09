
import styles from "./otherStyle.module.scss";
// import UserTweetList from "../User/UserTweetList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { Link } from "react-router-dom";
import UserProfileNew from "../Others/UserProfileNew";
import StickOption from "./StickOption";
import TwitForm from "../Home/TwitForm";
import ReplyList from "../../common/Reply/ReplyList";
import UserEditModal from "./UserEditModal";
import LikeForm from "../Home/LikeForm";
import { useState } from "react";

const MainFollow = () => {
  const [twitSection, setTwitSection] = useState(true);
  const [replySection, setReplySection] = useState(false);
  const [likeSection, setLikeSection] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/home">
          <div className={styles.arrow}>
            <Arrow />
          </div>
        </Link>
        <div className={styles.returnWrapper}>
          <div className={styles.userName}>John Doe</div>
          <div className={styles.tweetNum}>25 推文</div>
        </div>
      </div>
     <div className={styles.ChoiceBox}>
      
     </div>
  
    </div>
  );
};

export default MainFollow;
