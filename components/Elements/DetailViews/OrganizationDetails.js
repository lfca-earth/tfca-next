require('./organizationDetails.less')

import {
  CheckOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Button, List, Space } from 'antd'
import Image from 'next/image'
import React from 'react'

import { Text, text } from '../../../utils/Text'
import CallToAction from '../CallToAction'

export const OrganizationDetails = ({ item }) => {
  return (
    <div className="detail-view organization">
      <div className="header">
        <div className="text">
          <div className="title">{item.name}</div>
        </div>

        <div className="info-wrapper">
          <div className="logo-wrapper">
            <Image
              height={70}
              objectFit="contain"
              src={item.logo?.url}
              width={120}
            />
          </div>
          <div className="actions">
            <Space style={{ width: '100%' }}>
              <Button
                block
                icon={<ShareAltOutlined />}
                shape="round"
                type="primary"
              />
              <Button block shape="round" type="primary">
                {item?.pricePerMonth
                  ? `${item?.pricePerMonth} ${item?.currency}`
                  : 'Free'}
              </Button>
            </Space>
          </div>
        </div>
      </div>

      <div className="activities">
        <div className="section-title title">
          <PlusCircleOutlined />
          Activities
        </div>

        <List
          className="simple-list"
          dataSource={item?.activitiesCollection?.items}
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

      <div className="description">
        <div className="section-title title">
          <PlusCircleOutlined />
          About
        </div>
        <Text block={item?.description} />
      </div>

      {item?.actionsCollection?.items?.map((action, i) => (
        <CallToAction key={`action-${i}`} {...action} />
      ))}
    </div>
  )
}
