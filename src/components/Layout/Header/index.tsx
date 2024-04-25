import React from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
import styles from './header.less'
import logoImage from '@/assets/images/logo_name.png'

const Header = () => {
  // const history = useNavigate();

  const handleGo = () => {
    // history("/discovery");
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logoImage} alt='' />
      </div>
      <div className={styles.headerNav}>
        <span onClick={handleGo}>个性推荐</span>
        <span>歌单</span>
        <span>排行榜</span>
        <span>最新音乐</span>
      </div>
    </div>

    // <div className='header'>
    //   <div className='headerLogo'>
    //     <span className='headerLogo'></span>
    //   </div>
    //   <div className='headerNav'>
    //     <span onClick={handleGo}>个性推荐</span>
    //     <span>歌单</span>
    //     <span>排行榜</span>
    //     <span>最新音乐</span>
    //   </div>
    // </div>
  )
}
export default Header
