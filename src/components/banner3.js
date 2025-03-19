import React from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container thq-section-padding ${props.rootClassName} `}
    ></div>
  )
}

Banner3.defaultProps = {
  rootClassName: '',
}

Banner3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Banner3
