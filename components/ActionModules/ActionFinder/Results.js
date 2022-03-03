import { Form, List, Select, Tag } from 'antd'
import React from 'react'

import { LIST_GRIDS } from '../../../utils'
import { text } from '../../../utils/Text'
import ActionCard from '../../Elements/Cards/ActionCard'
import { ScrollableFilters } from '../../Elements/ScrollableFilters'
import Category from '../helpers/Category'
import { StepHeader } from '../helpers/StepHeader'

const Results = (props) => {
  const availableFilters = props.availableFilters || []

  const handleNext = (item) => {
    props.setStore({ ...props.store, item: item })
    props.setProgress(0.3)
    props.goTo(props.nextKey)
  }

  const filterByAttributes = (item) => {
    // every item needs to pass every filter
    // as soon as one item fails a filter, return false
    for (const availableFilter of availableFilters) {
      const { fieldName } = availableFilter
      const collectionName = `${fieldName}Collection`
      const itemValues = item?.[collectionName]?.items?.map((i) => i.key)
      const storeValues = props.store[fieldName]
      const isEmpty = !storeValues || storeValues?.length === 0

      const matches = !isEmpty
        ? storeValues?.some((v) => itemValues?.includes(v))
        : true
      if (!matches) return false
    }
    return true
  }

  const dataMain = props.data['main']
  const data = dataMain?.items || []

  return (
    <div className="step">
      <Category
        goBack
        icon={props.icon}
        prev={() => props.goTo(props.prevKey)}
        title={text(props.blocks['category.title'])}
      />

      <StepHeader
        subtitle={props.blocks['results.subtitle']}
        title={props.blocks['results.title']}
      />

      <ScrollableFilters
        availableFilters={availableFilters}
        setStore={props.setStore}
        store={props.store}
      />

      <List
        dataSource={data.filter(filterByAttributes)}
        grid={LIST_GRIDS['1-col']}
        renderItem={(item) => (
          <List.Item>
            <ActionCard item={item} onNext={handleNext} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Results
