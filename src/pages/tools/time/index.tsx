import React from 'react';
import styles from './time.module.css';
import useTime from './useTime';

const Time = () => {
  const { startTime, endTime, time } = useTime('HH:mm', [30, 'm'])

  return (
    <div className={styles['time-wrap']}>
      <div className={styles['time-title']}>留观时间</div>
      <div className={styles['time-content']}>
        <div >
          <span className={styles['time-label']}>开始：</span>
          <span className={styles['time']}>{ startTime }  </span>
        </div>
        <div>
          <span className={styles['time-label']}>结束：</span>
          <span className={styles['time']}>{ endTime }</span>
        </div>
      </div>
    </div>
  )
}

export default Time;
