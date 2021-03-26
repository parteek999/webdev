import React, { Component } from 'react'
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            phoneNumber: '',
            about: ''

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("111111111", this.state.fname)

    }
   
    
    componentDidMount() { 
    }


    fileUploadHandler = (e) => {
        e.preventDefault()
        const { fname,phoneNumber, email,about } = this.state;
        const data = new FormData()
              data.append("fname",fname)
              data.append("email",email)
              data.append("about",about)
              data.append("phoneNumber",phoneNumber)

        console.log("22222222222222",fname)
        axios.post("http://localhost:8000/user/formSubmit", data)
          .then(response => {
            console.log("11111111111111111111111", response);
            if (response.data.statusCode === 200) {
              console.log("11111111111111111111111ffdsfsfsrsa", this);
              history.push('/')

            }
          })
          .catch(error => {
            console.log(error);
          })
      }

    render() {
        console.log(this.state)

        const { fname, email, phoneNumber,about } = this.state;

        return (
            <div>
                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control" value={fname} type="text" name="fname" placeholder="Name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control"
                                    type="text" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control" value={phoneNumber} type="text" name="phoneNumber" placeholder="Phone Number" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <select name="about" 
                            value={about}
                            onChange={this.handleChange}
                            // className="selectpicker"
                            >
                                <option value="" selected disabled hidden>Choose here</option>
                                <option >What is app 3333 about?</option>
                                <option>What is app 111 about?</option>
                                <option>What is app 222222 about?</option>
                            </select>

                        </div>
                        <div class="col-12">

                            <div class="btn-blk text-center">
                                <button class="btn btn-primary btn-lg" onClick={(e) => { this.fileUploadHandler(e)}} >Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

