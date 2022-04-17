import DOMPurify from 'dompurify'

const Iframe = ({ title, text }) => {
  return (
    <>
      <div>{title}</div>
      <iframe
        style={{ width: '80vw', height: '80vh' }}
        srcDoc={DOMPurify.sanitize(text)}
      />
    </>
  )
}

export default Iframe
