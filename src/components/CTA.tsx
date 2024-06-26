import { VARIANT } from '../types'
import { Button } from './common/Button'

type CTAProps = {
  children: string
}

export const CTA = ({ children }: CTAProps) => {
  return (
    <article className="relative z-10 flex flex-col gap-8 w-full h-full items-center">
      <p className="text-[32px]">{children}</p>
      <Button
        onClick={() => {
          console.log('')
        }}
        variant={'PRIMARY'}
      >
        Accede con Discord
      </Button>
    </article>
  )
}
