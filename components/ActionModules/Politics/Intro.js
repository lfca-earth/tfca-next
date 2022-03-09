import React from 'react'

import { text } from '../../../utils/Text'
import Category from '../helpers/Category'

const Intro = (props) => {
  const handleNext = (v) => {
    props.setStore({ ...props.store, type: v.type })
    props.setProgress(0.3)
    props.goTo('results')
  }

  return (
    <div className="step">
      <Category
        icon={props.icon}
        title={text(props.blocks['category.title'])}
      />
      <h2>Hallo David</h2>
    </div>
  )
}

export default Intro
