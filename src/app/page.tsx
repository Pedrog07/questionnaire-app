'use client'
import { useContext } from 'react'
import { TopicsContext } from '../components/TopicProvider'

export default function Home() {
  const { currentTopic, selectTopic, allTopics } = useContext(TopicsContext)
  console.log(allTopics, length)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Questionnaire
    </main>
  )
}
