import Link from '@docusaurus/Link';
import React from 'react';
import styles from './time.module.css';
import useTime from '../../../hooks/useTime';

const Time = (props) => {
  const { startTime, endTime } = useTime('HH:mm', [30, 'm'])

  return (
    <div className={styles['time-wrap']} style={props.style}>
      {
        !props.style && <Link to="/tools" className={styles.back}>返回</Link>
      }
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
