import { Button, Col, Row } from 'antd'
import React from 'react'

import { textBlockToString } from '../../../utils'
import { Category, StepHeader, Text } from '../../Elements'

export const Intro = ({ goTo, module: { blocks = {}, icon = {} } }) => {
  return (
    <div className="step">
      <Category
        icon={icon.url}
        title={textBlockToString(blocks['category.title'])}
      />

      <StepHeader title={blocks['intro.title']} />

      <Row className="btn-wrapper" gutter={12} style={{ marginBottom: '15px' }}>
        <Col md={12} xs={24}>
          <Button
            block
            onClick={() => goTo('calculate')}
            size="large"
            type="primary"
          >
            {textBlockToString(blocks['intro.button.primary'])}
          </Button>
        </Col>
        <Col md={12} xs={24}>
          <Button
            block
            ghost
            onClick={() => goTo('form-check')}
            size="large"
            type="primary"
          >
            {textBlockToString(blocks['intro.button.secondary'])}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={24}>
          <Text block={blocks['intro.hint']} />
        </Col>
      </Row>
    </div>
  )
}
