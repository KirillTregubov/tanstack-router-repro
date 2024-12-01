import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { MotionLink } from '../lib/motionlink'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const linkRef = React.useRef<HTMLAnchorElement>(null)

  return (
    <MotionLink
      ref={linkRef}
      to="/about"
    >
      Go to About
    </MotionLink>
  )
}
