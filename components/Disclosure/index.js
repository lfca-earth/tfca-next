require('./styles.less')

import { ArrowDownOutlined, CheckCircleFilled } from '@ant-design/icons'
import { Card, Col, Collapse, List, Row } from 'antd'
import { Image as GalleryImage } from 'antd'
import Image from 'next/image'
import React from 'react'

import { useContentBlocks } from '../../hooks'
import { stringToLowerCase, textBlockToString } from '../../utils'

const { Panel } = Collapse

const ImageGallery = ({ images = [] }) => {
  if (images.length < 1) return null
  return (
    <div className="image-gallery">
      <List
        dataSource={images}
        grid={{ column: 2, gutter: 16 }}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable>
              <GalleryImage src={item?.url} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

const ContributionPanelContent = ({ participationPackage }) => {
  const stringAsId = stringToLowerCase(participationPackage)
  const customTitle =
    textBlockToString(useContentBlocks(`disclosure.${stringAsId}`)) ||
    participationPackage
  return (
    <Panel
      className="actions-container"
      header={
        <span className="action">
          <div className="icon">
            <CheckCircleFilled />
          </div>
          <div className="inline">{customTitle}</div>
        </span>
      }
      key={participationPackage}
    />
  )
}

export const Disclosure = ({ data }) => {
  const actionsList = data?.completedCompanyActions
  const campaignContributionMap = data.campaignParticipationPackages
  const additionalTitle = textBlockToString(
    useContentBlocks('disclosure.additional.title')
  )

  return (
    <div className="disclosure">
      <header>
        <Row>
          <Col md={20} xs={16}>
            <h1>{data?.name}</h1>
          </Col>
          <Col md={4} xs={8}>
            <div className="logo-container">
              <div className="logo-wrapper">
                <Image layout="fill" objectFit="contain" src={data?.logoUrl} />
              </div>
            </div>
          </Col>
        </Row>
      </header>

      <section>
        <h4>{textBlockToString(useContentBlocks('disclosure.goals.title'))}</h4>
        <div
          className="content-text"
          dangerouslySetInnerHTML={{
            __html: data?.campaignGoals,
          }}
        />
        {data?.campaignContribution && (
          <>
            <h4>{additionalTitle}</h4>
            <div
              className="content-text"
              dangerouslySetInnerHTML={{
                __html: data?.campaignContribution,
              }}
            />
          </>
        )}

        <ImageGallery images={data?.campaignFiles} />

        <h4>
          {textBlockToString(useContentBlocks('disclosure.contribution.title'))}
        </h4>

        <Collapse
          accordion
          className="actions-wrapper"
          collapsible="disabled"
          expandIcon={() => null}
          expandIconPosition="right"
        >
          {campaignContributionMap &&
            Object.keys(campaignContributionMap).map((participationPackage) => (
              <ContributionPanelContent
                key={participationPackage}
                participationPackage={participationPackage}
              />
            ))}
        </Collapse>
      </section>

      <section>
        <h4>
          {textBlockToString(useContentBlocks('disclosure.reduction.title'))}
        </h4>
        <p>
          {textBlockToString(useContentBlocks('disclosure.reduction.text'))}
        </p>
        <Collapse
          accordion
          className="actions-wrapper"
          expandIcon={({ isActive }) => (
            <ArrowDownOutlined rotate={isActive ? 180 : 0} />
          )}
          expandIconPosition="right"
        >
          {actionsList &&
            actionsList.map((action) => {
              return (
                <Panel
                  className="actions-container"
                  header={
                    <span className="action">
                      <div className="icon">
                        <CheckCircleFilled />
                      </div>
                      <div className="inline">{action.title}</div>
                    </span>
                  }
                  key={action.contentId}
                >
                  {action.description && <div>{action.description}</div>}

                  {action.requirements.length > 0 ? (
                    <div>
                      <h5>Requirements</h5>
                      <ul className="green-list">
                        {action.requirements.map((requirement) => {
                          return (
                            <li key={requirement.contentId}>
                              {requirement.title}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ) : (
                    'This action does not have further requirements.'
                  )}
                </Panel>
              )
            })}
        </Collapse>
      </section>
    </div>
  )
}
