import { FileDoneOutlined } from '@ant-design/icons'
import { Alert, Button, ConfigProvider, Form, Select } from 'antd'
import React, { useState } from 'react'

import { text } from '../../../utils/Text'
import Category from '../helpers/Category'
import { StepHeader } from '../helpers/StepHeader'

const { Option } = Select

const GREEN = [
  'Naturstrom',
  'Fair Trade Power',
  'EWS Schönau',
  'Green Planet (Greenpeace Energy)',
  'Bürgerwerke',
  'Polarstern',
  'LichtBlick',
  'Westfalen WIND',
  'Enspire Energie',
  'Prokon',
  'Mann Strom',
  'Ökostrom +',
  'ProEngeno',
  'Bremer SolidarStrom',
  'Wemag',
]

const customizeRenderEmpty = () => (
  <div style={{ margin: '20px 0', textAlign: 'center' }}>
    <FileDoneOutlined style={{ fontSize: 32, marginBottom: '20px' }} />
    <p>Du findest den Namen deines Providers z.B. auf deiner Stromrechnung</p>
  </div>
)

export const CheckProvider = (props) => {
  const [provider, setProvider] = useState()

  const handleChange = (val) => {
    setProvider(val)
  }

  const handleNext = () => props.goTo('success')

  const isVerified = provider !== '-'
  const infoAlert = isVerified ? (
    <Alert
      description="Dein Provider erfüllt bereits alle Vorgaben als unabhängiger Ökostromlieferant. Klick auf den Button, um deine Challenge erfolgreich abzuschließen!"
      message="Wunderbar!"
      showIcon
      type={'success'}
    />
  ) : (
    <Alert
      description={
        <div>
          Dein Provider erfüllt nicht die höchsten Herausforderungen an
          Ökostrom. Um die Challenge abzuschließen, kannst du mit wenigen Klicks
          deinen Anbieter wechseln!
        </div>
      }
      message="Schade!"
      showIcon
      type="warning"
    />
  )

  const continueButton = isVerified ? (
    <Button
      block
      disabled={!provider}
      onClick={handleNext}
      size="large"
      style={{ marginTop: '15px' }}
      type="primary"
    >
      Challenge abschließen
    </Button>
  ) : (
    <Button
      block
      onClick={() => props.goTo('calculate')}
      size="large"
      style={{ marginTop: '15px' }}
      type="primary"
    >
      Jetzt Provider wechseln
    </Button>
  )

  return (
    <div className="step">
      <Category
        goBack
        icon={props.icon}
        prev={() => props.goTo('intro')}
        title={text(props.blocks['category.title'])}
      />

      <StepHeader
        subtitle={props.blocks['checkprovider.description']}
        title={props.blocks['checkprovider.title']}
      />

      <Form>
        <Form.Item name="provider">
          <ConfigProvider renderEmpty={customizeRenderEmpty}>
            <Select
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={handleChange}
              optionFilterProp="children"
              placeholder={
                <span>{text(props.blocks['checkprovider.choose'])}</span>
              }
              showSearch
              size="large"
              style={{ width: '100%' }}
              value={provider}
            >
              {GREEN.map((provider) => (
                <Option key={provider} value={provider}>
                  {provider}
                </Option>
              ))}
              <Option key={'-'} value={'-'}>
                Anderer Provider
              </Option>
            </Select>
          </ConfigProvider>
        </Form.Item>

        {provider && infoAlert}
        {continueButton}
      </Form>
    </div>
  )
}
