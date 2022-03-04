require('./bankDetails.less')

import {
  CheckOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Button, Col, List, Space } from 'antd'
import React from 'react'

import { Text, text } from '../../../utils/Text'
import CallToAction from '../CallToAction'

export const BankDetails = ({ item }) => {
  return (
    <div className="bank-detail-view">
      <div className="header">
        <div className="text">
          <div className="title">{item.name}</div>
          <div className="description">
            <Text block={item?.description} />
          </div>
        </div>

        <div className="info-wrapper">
          <div className="logo-wrapper">
            <img src={item.logo?.url} />
          </div>
          <div className="actions">
            <Space direction="vertical" style={{ width: '100%' }}>
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

      <div className="benefits">
        <div className="section-title title">
          <PlusCircleOutlined />
          Benefits
        </div>

        <List
          className="simple-list white"
          dataSource={item?.benefitsCollection?.items}
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

      <div className="sustainability">
        <div className="section-title title">
          <PlusCircleOutlined />
          Sustainability
        </div>

        <List
          className="simple-list white"
          dataSource={item?.sustainabilityCollection?.items}
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

      <CallToAction
        block
        text="Visit provider"
        type="primary"
        url={`https://google.de`}
      />
    </div>
  )
}