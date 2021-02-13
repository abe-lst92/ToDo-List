import React from 'react'
function Header(props) {
    return (
        <div className="class-header">
            <h1 className="class-header-title">You have {props.numTodos} Tasks to Do:</h1>
           
            <h2>Choose your Best Tour Goal on which Country.</h2>
        </div>
    )
}
export default Header
