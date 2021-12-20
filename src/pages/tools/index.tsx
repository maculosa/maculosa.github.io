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
              <div style={{ overflow: 'hidden' }} >
                <Time style={{ fontSize: '5px'}} />
              </div>
              <Link to="/tools/time" className={styles.label} >留观时间</Link>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Tools
