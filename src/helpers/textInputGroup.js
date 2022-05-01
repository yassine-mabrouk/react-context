import React from 'react'
import classNames  from 'classnames';

const TextInputGroup = (props)=>  {
  return (
    <div className="form-group">
    <label for={props.name}>{props.lebel} </label>
    <input 

    className={classNames('form-control', {
        'is-invalid':  props.error
    })}
 
    type={props.type}
    value={props.value}  
    name ={props.name}
    onChange={props.onChange}

    />
        <div className="invalid-feedback">
        {props.error}
      </div>
</div>
  )
}

export default TextInputGroup;