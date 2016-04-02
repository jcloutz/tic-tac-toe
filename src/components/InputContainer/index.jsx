import React from 'react'
require('./input-container.styl')

const InputContainer = ({ visible, children }) => (
  <div className={'input-container ' + (visible ? 'input-container--show' : 'input-container--hide')}>
    {children}
  </div>
)

const { element, bool } = React.PropTypes

InputContainer.propTypes = {
  children: element,
  visible: bool
}

export default InputContainer
