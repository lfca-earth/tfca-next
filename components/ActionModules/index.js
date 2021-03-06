import React from 'react'

import { ErrorBoundary } from '../ErrorBoundary'
import { ActionWrapper } from '../Layout/ActionWrapper'
import { ActionFinderFlow } from './ActionFinder'
import { Politics } from './Politics'
import { Quiz } from './Quiz'
import { SwitchEnergy } from './SwitchEnergy'

export const ActionModules = (props) => {
  if (!props.actions) return null

  const renderAction = (action) => {
    switch (action.actionId) {
      case 'switch_energy':
        return <SwitchEnergy key={action.actionId} module={action} />
      case 'action_finder':
        return <ActionFinderFlow key={action.actionId} module={action} />
      case 'politics':
        return <Politics key={action.actionId} module={action} />
      case 'quiz':
        return <Quiz key={action.actionId} module={action} />
      default:
        return <div />
    }
  }

  return props.actions.map((action, i) => {
    const color = `color-${(i % 4) + 1}`
    return (
      <ActionWrapper
        color={color}
        effort={action.effort}
        id={action.id}
        impact={action.impact}
        impactDisclaimer={action.impactDisclaimer}
        key={action.id}
        name={action.name}
        otherUsers={props.stats[action.id]}
      >
        <ErrorBoundary>
          {renderAction({
            ...action,
            color: color,
            otherUsers: props.stats[action.id],
          })}
        </ErrorBoundary>
      </ActionWrapper>
    )
  })
}
