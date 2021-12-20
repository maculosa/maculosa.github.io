import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import React from 'react'
import styles from './index.module.css'
import Time from './time'

const Tools = () => {

  return (
    <Layout title="便捷工具" noFooter>
      <div className={styles.container}>
        <h1>便捷工具</h1>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <div className={styles.card}>
              <div className={styles['card-content']}>
                <Time style={{ fontSize: '4px'}} />
              </div>
              <div className={styles['card-footer']}>
                <Link to="/tools/time" className={styles.title} >留观时间</Link>
                <span className={styles.subtitle}>留观登记参考时间</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Tools
