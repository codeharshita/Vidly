import React from 'react'

const Input = ({name, label, value, onChange}) => {
    return( 
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
    
    onChange={onChange}
    value={value}
    autoFocus
    ref={this.username} 
    name={name}
    id={name} 
    type="text" 
    className="form-control" />
    

    {/* <small id="emailHelp" class="form-text text-muted">
        We'll never share your username with anyone else.</small> */}
    </div>
    );
}
 
export default Input;