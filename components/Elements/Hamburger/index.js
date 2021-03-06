require('./styles.less')

import { Drawer } from 'antd'
import classNames from 'classnames'
import React, { useState } from 'react'

export const Hamburger = ({ content, isFloating, mode, title }) => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div
      className={classNames('hamburger-wrapper', mode, {
        'is-floating': isFloating,
      })}
    >
      <button
        className={classNames('hamburger', 'hamburger--spin', {
          'is-active': open,
        })}
        onClick={toggleMenu}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <Drawer
        className="hamburger-drawer drawer-md"
        onClose={toggleMenu}
        placement="right"
        title={title}
        visible={open}
      >
        {content}
      </Drawer>
    </div>
  )
}
