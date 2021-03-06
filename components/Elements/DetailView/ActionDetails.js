require('./actionDetails.less')

import { CarryOutOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

import { textBlockToString } from '../../../utils'
import { CallToAction } from '../CallToAction'
import { ListSection, TextSection } from '../Sections'

export const ActionDetails = ({ actionId, blocks, item, onNext }) => {
  return (
    <div className="detail-view action">
      <header>
        <div className="title">{item.name}</div>
      </header>

      <TextSection
        text={item?.shortDescription}
        title={textBlockToString(blocks['details.description.label'])}
      />

      <ListSection
        items={item?.reasons}
        title={textBlockToString(blocks['details.why.label'])}
        titleIcon={<QuestionCircleOutlined />}
      />

      <TextSection
        text={item?.description}
        title={textBlockToString(blocks['details.how.label'])}
        titleIcon={<CarryOutOutlined />}
      />

      <Space direction="vertical" style={{ width: '100%' }}>
        {item?.actions?.map((action, i) => (
          <CallToAction
            actionId={actionId}
            data-testid="action-details-cta-btn"
            key={`action-${i}`}
            onCountMeIn={onNext}
            showLeaveModal
            {...action}
            block
            ghost={false}
          />
        ))}
      </Space>
    </div>
  )
}
