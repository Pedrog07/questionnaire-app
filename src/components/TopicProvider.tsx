'use client'

import { createContext, useContext, useState } from 'react'

export const TopicsContext = createContext<{
  allTopics?: any[]
  currentTopic?: CurrentTopic
  selectTopic?: (id: string) => void
}>({})

interface CurrentTopic {
  id: string
  previousParentId?: null | string
  description?: string
  children: any[]
  resources?: any[]
}

const initialTopic: CurrentTopic = {
  id: 'initial',
  description: 'Select which area  you want to dive in.',
  children: [{ id: 'frontend' }, { id: 'fullstack' }],
}

export default function TopicsProvider({
  children,
  topics,
}: {
  topics: any[]
  children: React.ReactNode
}) {
  const [allTopics] = useState([
    ...topics,
    { ...initialTopic, previousParentId: null },
  ])
  const [currentTopic, setCurrentTopic] = useState(initialTopic)

  const selectTopic = (id: string) => {
    const selectedTopic = allTopics.find((topic) => topic.id === id)

    setCurrentTopic({
      id,
      previousParentId: currentTopic.id,
      children: selectedTopic.children,
      description: selectedTopic.description,
      resources: selectedTopic.resources,
    })
  }
  return (
    <TopicsContext.Provider value={{ allTopics, currentTopic, selectTopic }}>
      {children}
    </TopicsContext.Provider>
  )
}
