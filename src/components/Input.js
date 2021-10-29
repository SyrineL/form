import React from "react"

class Input extends React.Component {

  render() {
      const {type, onChange} = this.props
    return (
      <>
        <input type={type}  onChange={onChange}/>
      </>
    )
  }
}

export default Input
