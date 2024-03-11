import { useContext } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button, TopicsContext } from '../..'

export const RecommendationsContainer = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { currentTopic, goBack, selectTopic } = useContext(TopicsContext)
  return (
    <div className="flex flex-col w-full">
      {!!currentTopic?.previousParents.length && (
        <Button
          type="secondary"
          classes="max-w-[50%]"
          onClick={() => {
            router.back()
            //goBack!(currentTopic!)
          }}
        >
          go back
        </Button>
      )}

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
                router.push(`${pathname}/${child}`)
                //selectTopic!(child, currentTopic)
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
