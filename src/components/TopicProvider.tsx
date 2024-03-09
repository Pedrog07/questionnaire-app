'use client'

import { createContext, useState } from 'react'

export interface TopicsContextValue {
  allTopics?: any[]
  currentTopic?: TopicState
  selectTopic?: (id: string, current: TopicState) => void
  goBack?: (current: TopicState) => void
  startQuestionnaire?: () => void
  cancelQuestionnaire?: () => void
  saveQuestionAnswer?: (
    current: TopicState,
    questionId: string,
    answer: 'A' | 'B' | 'C'
  ) => void
}

export const TopicsContext = createContext<TopicsContextValue>({})

interface Topic {
  id: string
  description?: string
  children: string[]
  resources?: any[]
  questions: any[] | null
  startedQuestionnaire?: boolean
}

type TopicState = Topic & { previousParents: string[] }

const initialTopic: Topic = {
  id: 'development',
  description: 'Select which area  you want to dive in.',
  children: ['frontend', 'fullstack'],
  questions: null,
}

export function TopicsProvider({
  children,
  topics,
}: {
  topics: any[]
  children: React.ReactNode
}) {
  const [allTopics] = useState([...topics, initialTopic])
  const [currentTopic, setCurrentTopic] = useState<TopicState>({
    ...initialTopic,
    previousParents: [],
  })

  const selectTopic = (id: string, current: TopicState) => {
    if (!id) return

    const selectedTopic = allTopics.find((topic) => topic.id === id)

    setCurrentTopic({
      id,
      previousParents: current.previousParents.concat([current.id]),
      children: selectedTopic.children,
      description: selectedTopic.description,
      resources: selectedTopic.resources,
      questions: selectedTopic.questions,
    })
  }

  const goBack = (current: TopicState) => {
    if (!current.previousParents.length) return

    const parent = current.previousParents.pop()

    const selectedTopic = allTopics.find((topic) => topic.id === parent)

    setCurrentTopic({
      id: selectedTopic.id,
      previousParents: current.previousParents,
      children: selectedTopic.children,
      description: selectedTopic.description,
      resources: selectedTopic.resources,
      questions: selectedTopic.questions,
    })
  }

  const startQuestionnaire = () => {
    setCurrentTopic({ ...currentTopic, startedQuestionnaire: true })
  }

  const cancelQuestionnaire = () => {
    setCurrentTopic({ ...currentTopic, startedQuestionnaire: false })
  }

  const saveQuestionAnswer = (
    current: TopicState,
    questionId: string,
    answer: 'A' | 'B' | 'C'
  ) => {
    const { questions } = current

    if (questions) {
      setCurrentTopic({
        ...current,
        questions: questions.map((q) =>
          q.id === questionId ? { ...q, answer } : q
        ),
      })
    }
  }

  return (
    <TopicsContext.Provider
      value={{
        allTopics,
        currentTopic,
        selectTopic,
        goBack,
        startQuestionnaire,
        cancelQuestionnaire,
        saveQuestionAnswer,
      }}
    >
      {children}
    </TopicsContext.Provider>
  )
}
