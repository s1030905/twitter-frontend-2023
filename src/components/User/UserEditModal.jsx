import styles from "./editStyle.module.scss";
import { ReactComponent as ModalX } from "../../assets/image/ModalX.svg";
import { ReactComponent as EditTitle } from "../../assets/image/EditTitle.svg";
import { ReactComponent as EditSave } from "../../assets/image/EditSave.svg";
import { ReactComponent as DeleteCoverIcon } from "../../assets/image/delete-white.svg";
import { ReactComponent as ChangePhotoIcon } from "../../assets/image/iconCCamera.svg";
import { useState, useEffect } from "react";
import { putUser } from "../../api/user";
// import { useAuth } from "../../contexts/AuthContext";
import Loading from "../Animation/Loading";

import TimePopup from "../TimePopup/TimePopup";

const UserEditModal = ({ reloadUserMain, user, setEditPopup }) => {
  // get data
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [avatar, setAvatar] = useState("");
  const [background, setBackground] = useState("");
  const [loading, setLoading] = useState(false);

  // const { user } = useAuth();

  const [notiStatus, setNotiStatus] = useState("finished");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setIntroduction(user.introduction);
      setAvatar(user.avatar);
      setBackground(user.background);
    }
  }, [user]);

  const handleChangeInfo = async () => {
    const id = localStorage.getItem("userId");

    if (name.length === 0) {
      setNotiStatus("nameEmpty");
      return;
    }
    if (introduction.length === 0) {
      setNotiStatus("introductionEmpty");
      return;
    }
    if (name.length > 50 || introduction.length > 160) {
      setNotiStatus("max");
      return;
    }
    setLoading(true);
    try {
      await putUser({
        id,
        name,
        introduction,
        avatar,
        background,
      });
      reloadUserMain(); // <-------------------
    } catch (error) {
      console.error(error);
    }
    // window.location.reload()
    setEditPopup(false);
    setLoading(false);
  };

  const handleClosePopup = () => {
    setNotiStatus("finished");
  };

  return (
    <>
      {user ? (
        <>
          <div className={styles.notiContainer} onClick={handleClosePopup}>
            {notiStatus === "nameEmpty" && (
              <TimePopup notification="error" title="名稱不可為空白" />
            )}
            {notiStatus === "introductionEmpty" && (
              <TimePopup notification="error" title="自我介紹不可為空白" />
            )}
            {notiStatus === "max" && (
              <TimePopup notification="error" title="字數超出上限！" />
            )}
            {notiStatus === "finish" && ""}
          </div>
          <div className={styles.editContainer}>
            <div className={styles.editInner}>
              <div className={styles.editHeader}>
                <div>
                  <ModalX
                    className={styles.icon}
                    onClick={() => setEditPopup(false)}
                  />
                  <EditTitle />
                </div>
                <div>
                  <EditSave
                    className={styles.saveIcon}
                    onClick={handleChangeInfo}
                  />
                </div>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.coverContainer}>
                  <img
                    className={styles.cover}
                    src={
                      background instanceof File
                        ? URL.createObjectURL(background)
                        : background
                    }
                    alt="cover"
                  />
                </div>
                <div className={styles.iconWrapper}>
                  <div>
                    <label>
                      <ChangePhotoIcon className={styles.icon} />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setBackground(e.target.files[0]);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <DeleteCoverIcon className={styles.icon} />
                  </div>
                </div>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatarContainer}>
                    <img
                      className={styles.avatar}
                      src={
                        avatar instanceof File
                          ? URL.createObjectURL(avatar)
                          : avatar
                      }
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <label>
                      <ChangePhotoIcon className={styles.changePhotoIcon} />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          setAvatar(e.target.files[0]);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.nameInput}>
                  <label className={styles.input}>
                    <div>名稱</div>
                    <input
                      className={styles.editInput}
                      type="text"
                      value={name}
                      placeholder={name}
                      // maxLength="50"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className={styles.textCount}>{name.length}/50</div>

                <div className={styles.textareaWrap}>
                  <div action="" className={styles.textContainer}>
                    <label className={styles.textTitle}>自我介紹</label>

                    <textarea
                      type="text"
                      id="note"
                      value={introduction}
                      placeholder={introduction}
                      // maxLength="160"
                      onChange={(e) => setIntroduction(e.target.value)}
                    ></textarea>
                  </div>
                  <div className={styles.textCount}>
                    {introduction.length}/160
                  </div>
                </div>
              </div>
            </div>
            {loading && (
              <div className={styles.loadingWrapper}>
                <Loading className={styles.loading} />
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserEditModal;
