
import styles from './Notification.module.css';


interface data {
  n: {
    name: string
    profilePhoto: string
    time: string
    react: string
    followed: boolean
    joinedGroup: string
    pm: string
    comment: string
    left: string
    new: boolean
  }
}

const Notification = (props: data) => {

  let notificationNew = props.n.new ? styles.notificationNew : "";

  let messageWidth = props.n.comment ? styles.messageComment : styles.message;

  return (
    <div className={`${styles.notification} ${notificationNew}`}>

      <div className={styles.notificationBlock}>

        <div className={styles.profile}>

          <div className={styles.profilePhoto}>
            <img src={props.n.profilePhoto} />
          </div>

          <div className={styles.messageAndTime}>
            <div className={messageWidth}>
              <span className={styles.name}>{props.n.name}</span>
              {props.n.react && <span className={styles.messageReacted}> reacted to your recent post <span className={styles.reactText}>{props.n.react}</span> </span>}
              {props.n.followed && <span className={styles.messageFollowed}> followed you</span>}
              {props.n.joinedGroup && <span className={styles.messageJoined}> has joined your group <span className={styles.groupText}>{props.n.joinedGroup}</span></span>}
              {props.n.pm && <span className={styles.messagePM}> sent you a private message</span>}
              {props.n.comment && <span className={styles.messageCommented}> commented on your picture</span>}
              {props.n.left && <span className={styles.messageLeft}> left the group <span className={styles.groupText}>{props.n.left}</span></span>}
              {props.n.new && <div className={styles.newDot}></div>}
            </div>
            <div className={styles.time}>{props.n.time} ago</div>
          </div>


        </div>

        {props.n.comment && <div className={styles.commentPicture}>
          <img src={props.n.comment} />
        </div>}
      </div>



      {props.n.pm && <div className={styles.privateMessage}>
        <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm having lots of fun and improving my game.</p>
      </div>}


    </div >
  )
}

export default Notification;