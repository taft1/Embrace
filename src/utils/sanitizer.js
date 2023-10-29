import DOMPurify from 'dompurify'

const sanitize = (dirtyInput) => {
    return DOMPurify.sanitize(dirtyInput)
}

export default sanitize
