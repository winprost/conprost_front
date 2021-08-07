import { style } from 'dom-helpers';
import React, { useState } from 'react';
import styles from './detailTeamTask.module.scss';
import profile from '../images/profile.jpg';




const DetailTeamTask = () => {

    return (
<div className={styles.teamTask}>

    <h2 className={styles.title}>
        승주야 보고있니?
    </h2>
    <p className={styles.text}>
        프론트는 이렇게 하는거야
    </p>
    <div className={styles.comment}>
        <div className={styles.profile}>
            <div className={styles.userPhoto}>
                <img src={profile}  className={styles.userProfilePhoto}alt="user-profile-photo" />
            </div>
            <span className={styles.id}>kyilee</span>
        </div>
        <p className={styles.comtents}>와 정말 잘짜셨네요~!</p>
        <div className={styles.date}>2021.08.04 23:23</div>
        <div className={styles.tag}>
            <button className={styles.reply}>답글</button>
            <button className={styles.heart}>❤️ 1</button>
        </div>
        <div className={styles.inputComment}>
            <div className={styles.profile}>
                <div className={styles.userPhoto}>
                    <img src={profile}  className={styles.userProfilePhoto}alt="user-profile-photo" />
                </div>
                <span className={styles.id}>kyilee</span>
            </div>
            <input placeholder="댓글을 입력하세요." className={styles.field}/>
            <button className={styles.post}>등록</button>

        </div>


    </div>



</div>
    )
}
export default DetailTeamTask