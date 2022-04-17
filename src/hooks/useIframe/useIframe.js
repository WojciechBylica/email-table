import { useState } from 'react'

const useIframe = () => {
  const [showIframe, setShowIframe] = useState(false)
  const [iframeContent, setIframeContent] = useState('')
  const handleShowIframe = (title, text) => {
    setIframeContent({ title, text })
    setShowIframe(true)
  }
  const handleHideIframe = () => setShowIframe(false)

  return [showIframe, iframeContent, handleShowIframe, handleHideIframe]
}

export default useIframe
