import React, { createContext, useContext, useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { isMobile as isMobileClient } from 'react-device-detect'

import { useTrackEvent } from '../services/analytics'

const AppContext = createContext()

// content is passed during the build process on every page
// therefore the translation provider is fulled on boot up
export const AppProvider = ({ children, content, customization = null }) => {
  const [activeAction, setActiveAction] = useState()
  const [showConfetti, setShowConfetti] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setClient] = useState(false)

  const key = isClient ? 'client' : 'server'

  useTrackEvent({ name: 'page_visit' })

  // due to SSG we only know if it's mobile after first client side render
  useEffect(() => {
    setClient(true)
    setIsMobile(isMobileClient)
  }, [])

  return (
    <AppContext.Provider
      value={{
        activeAction,
        content,
        customization,
        isClient,
        isMobile,
        key,
        progress,
        setActiveAction,
        setProgress,
        setShowConfetti,
      }}
    >
      {showConfetti && <Confetti />}
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  return context
}

export const useActiveAction = () => {
  const { activeAction, setActiveAction } = React.useContext(AppContext)
  return { activeAction, setActiveAction }
}

export const useContent = () => {
  const context = useContext(AppContext)
  return context.content
}

export const useContentBlocks = (key) => {
  const context = useContext(AppContext)
  return context.content?.metaData?.blocks?.[key] || ''
}

export const useContentNavs = (key) => {
  const context = useContext(AppContext)
  return context.content?.navs?.[key] || ''
}

export const useContentLists = (key) => {
  const context = useContext(AppContext)
  return context.content?.metaDataLists?.[key] || { items: [] }
}

export const useConfetti = () => {
  const { setShowConfetti } = useContext(AppContext)

  const fireConfetti = useCallback(() => {
    setShowConfetti(true)
    let timer = setTimeout(() => setShowConfetti(false), 3500)
    return () => clearTimeout(timer)
  }, [setShowConfetti])

  useEffect(() => {
    fireConfetti()
  }, [fireConfetti])

  return true
}

export const useIsMobile = () => {
  const { isMobile } = React.useContext(AppContext)
  return isMobile
}