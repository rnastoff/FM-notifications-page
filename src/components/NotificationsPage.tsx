import { useState } from 'react';

import styles from './NotificationPage.module.css';

import Notification from './Notification';

import { data } from '../data/data.js';

const NotificationsPage = () => {

  const countNewPosts = () => {
    let num = 0;
    data.forEach(n => { if (n.new) num++; });
    return num;
  }

  const [posts, setPosts] = useState(data);
  const [newPosts, setNewPosts] = useState(countNewPosts());

  const notifications = posts.map((n, index) => {
    return (
      <Notification n={n} key={index} />
    )
  });

  const markAllAsRead = () => {
    let temp = posts.map((n) => {
      return { ...n, new: false }
    });
    setPosts(temp);
    setNewPosts(0);
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.headerGroup}>
          <h1>Notifications</h1>
          <div className={styles.number}>
            {newPosts}
          </div>
        </div>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </div>

      <div className={styles.notifications}>
        {notifications}
      </div>

    </div>
  )
}

export default NotificationsPage;