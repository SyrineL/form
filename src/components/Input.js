import React from "react"

class Input extends React.Component {

  render() {
      const {type, onChange, isValid} = this.props
    return (
      <>
        <input type={type}  onChange={onChange} isValid={isValid}/>
      </>
    )
  }
}

export default Input
