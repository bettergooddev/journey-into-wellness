'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getClientSideURL } from '@/utilities/getURL'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName, onLoad } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      const handleLoad = () => {
        onLoad?.()
      }

      video.addEventListener('loadeddata', handleLoad)
      // If video is already loaded, trigger onLoad
      if (video.readyState >= 2) {
        handleLoad()
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoad)
      }
    }
  }, [onLoad])

  if (resource && typeof resource === 'object') {
    const { filename } = resource

    return (
      <video
        autoPlay
        className={cn(videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: 'transparent',
        }}
      >
        <source src={`${getClientSideURL()}/media/${filename}`} />
      </video>
    )
  }

  return null
}
