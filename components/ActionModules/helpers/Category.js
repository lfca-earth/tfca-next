import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

import { useBlocks } from '../../../hooks/useTranslation'
import { text } from '../../../utils/Text'

const Category = (props) => {
  const backString = useBlocks('nav.back')
  if (props.goBack) {
    return (
      <div className="action-category">
        <Button onClick={props.prev} type="link">
          <ArrowLeftOutlined /> {text(backString)}
        </Button>
      </div>
    )
  }
  return (
    <div className="action-category">
      <span className="icon-wrapper">
        <img src={props.icon} />
      </span>
      {props.title}
    </div>
  )
}

export default Category
