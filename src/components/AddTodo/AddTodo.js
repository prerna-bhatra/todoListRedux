import React from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../../actions'

const AddTodo=(props)=>{

	return	<form onSubmit={(event)=>
			{
				event.preventDefault()
				let input=event.target.userInput.value
				if(input=='')
				{
					window.alert("please add a value")
				}
				else
				{
					props.dispatch(addtodo(input));
				event.target.userInput.value=""
				//console.log(input)
				}
				

			}}>
        <input type="text" name="userInput"/>
        <button>Submit</button>
		</form>
	
}

export default connect()(AddTodo)