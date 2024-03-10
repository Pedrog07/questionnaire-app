import { useContext } from 'react'
import { Button, TopicsContext } from '../..'

export const RecommendationsContainer = () => {
  const { currentTopic, goBack, selectTopic } = useContext(TopicsContext)
  return (
    <div className="flex flex-col w-full">
      <Button
        type="secondary"
        classes="max-w-[50%]"
        onClick={() => {
          goBack!(currentTopic!)
        }}
      >
        go back
      </Button>

      {!!currentTopic?.children?.length ? (
        <>
          <h3 className="font-bold mt-6">Recommendations:</h3>
          {currentTopic.children.map((child) => (
            <Button
              key={child}
              expandEffect
              type="primary"
              classes="mt-4"
              onClick={() => {
                selectTopic!(child, currentTopic)
              }}
            >
              {child}
            </Button>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
