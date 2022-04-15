import PropTypes from 'prop-types'

const cutText = (text, textLength) => {
  if (text?.length > textLength) {
    return `${text.slice(0, textLength)}...`
  } else {
    return text
  }
}

export default cutText

cutText.propTypes = {
  text: PropTypes.string.isRequired,
  textLength: PropTypes.number.isRequired,
}
