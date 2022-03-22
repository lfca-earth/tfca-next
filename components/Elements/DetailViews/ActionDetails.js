require('./actionDetails.less')

import {
  CheckOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Button, List } from 'antd'
import Image from 'next/image'
import React from 'react'

import { Text, text } from '../../../utils/Text'
// import { BasicModal } from '../BasicModal'
import CallToAction from '../CallToAction'

export const ActionDetails = ({ item, onNext }) => {
  return (
    <div className="detail-view action">
      <div className="hero-image">
        <Image height={304} src={item.hero?.url} width={665} />
      </div>

      <div className="header">
        <div className="title">{item.name}</div>
        <div className="actions">
          <Button icon={<ShareAltOutlined />} shape="round" type="primary" />
        </div>
      </div>

      <div className="short-description">{item?.shortDescription}</div>

      <div className="reasons">
        <div className="section-title title">
          <PlusCircleOutlined />
          Why do this?
        </div>

        <List
          className="simple-list"
          dataSource={item?.reasonsCollection?.items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckOutlined />}
                description={text(item.value)}
              />
            </List.Item>
          )}
        />
      </div>

      <div className="reasons">
        <div className="section-title title">
          <QuestionCircleOutlined />
          How to do this?
        </div>
        <Text block={item?.description} />
      </div>

      {item?.actionsCollection?.items?.map((action, i) => (
        <CallToAction key={`action-${i}`} {...action} />
      ))}

      {/* <BasicModal
        content={<div>Do you want to do more than this action?</div>}
        setVisible={setVisible}
        title={null}
        visible={visible}
      /> */}
    </div>
  )
}
