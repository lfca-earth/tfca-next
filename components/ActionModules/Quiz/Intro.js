import { Button } from 'antd'
import React from 'react'

import { textBlockToString } from '../../../utils'
import { Category, GameProgress, StepHeader } from '../../Elements'

export const Intro = ({
  quizLength,
  goTo,
  module: { blocks = {}, icon = {} },
  nextKey,
  prevKey,
}) => {
  return (
    <div className="step">
      <Category
        addOn={<GameProgress answers={{}} totalQuestionCount={quizLength} />}
        goBack={prevKey ? () => goTo(prevKey) : undefined}
        icon={icon.url}
        title={textBlockToString(blocks['category.title'])}
      />
      <StepHeader
        subtitle={blocks['intro.hint']}
        title={blocks['intro.title']}
      />

      <Button
        block
        data-testid="quiz-intro-start-btn"
        onClick={() => goTo(nextKey)}
        size="large"
        type="primary"
      >
        {textBlockToString(blocks['intro.button.primary'])}
      </Button>
    </div>
  )
}
