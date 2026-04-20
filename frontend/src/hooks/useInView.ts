import { useInView as useInViewLib } from 'react-intersection-observer'

export function useInView(threshold = 0.15) {
  const { ref, inView } = useInViewLib({ threshold, triggerOnce: true })
  return { ref, inView }
}
