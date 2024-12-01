import * as React from 'react'
import { createLink } from '@tanstack/react-router'
import { motion, type HTMLMotionProps } from 'motion/react'

const MotionLinkComponent = React.forwardRef<HTMLAnchorElement, HTMLMotionProps<'a'>>(
  (props, ref) => {
    return <motion.a {...props} ref={ref} />
  }
)

export const MotionLink = createLink(MotionLinkComponent);