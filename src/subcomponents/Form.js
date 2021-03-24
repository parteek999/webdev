import React, { Component } from 'react'
import axios from 'axios';

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


    fileUploadHandler = () => {
        const { fname, lname, email,about } = this.state;
        axios.post("http://localhost:8000/formsubmit", { fname, lname, email ,about})
          .then(response => {
            console.log("11111111111111111111111", response);
            if (response.data.statusCode == 200) {
              console.log("11111111111111111111111", this);
              this.props.history.push('/')
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
                                <option>What is app 3333 about?</option>
                                <option>What is app 111 about?</option>
                                <option>What is app 222222 about?</option>
                            </select>

                        </div>
                        <div class="col-12">

                            <div class="btn-blk text-center">
                                <button class="btn btn-primary btn-lg" onClick={() => { this.fileUploadHandler() }} >Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

