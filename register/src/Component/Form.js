import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
            

        }
    }

    firsthandler=(event)=>{
        this.setState({
        [event.target.firstName]:event.target.value
        })
    }
    lasthandler=(event)=>{
        this.setState({
            [event.target.lastName]:event.target.value
        })
    }
    passwordhandler=(event)=>{
        this.setState({
           [event.target.password]:event.target.value
        })
    }

    genderhandler=(event)=>{
        this.setState({
            [event.target.value]:event.target.value
        })
    }

    handleSubmit=()=>{
        alert("User Registered Successfully !!!!")
        console.log(this.state);
        this.setState({
            firstName:"",
            lastName:"",
            password:'',
            gender:""
        })
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                   <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br/>
                   <label>LastName :</label> <input type="text"  value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br/>
                   <label>Password :</label> <input type="password" value={this.state.password}  onChange={this.passwordhandler} placeholder="Passowrd..." /><br/>
                   <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender"><br/>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form