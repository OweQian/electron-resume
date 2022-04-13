import React from 'react';
import { shell } from 'electron'
import { useHistory } from "react-router";
import './index.less'
import Logo from '@assets/logo.png'
const Root = () => {
  const history = useHistory()
  const onRouterToLink = (text: string) => {
    switch (text) {
      case '简历':
        history.push('/resume')
        break
      case '源码':
        shell.openExternal('https://github.com/OweQian/electron-resume')
        break
      default:
        history.push('/')
        break
    }
  }
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt=""/>
        <div styleName="title">ResumeMook</div>
        <div styleName="tips">一个模板简历制作平台，让你的简历更加出众</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div onClick={() => onRouterToLink(text)} styleName="item" key={index}>{text}</div>
            )
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <div styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By wangxiaobai
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Root;