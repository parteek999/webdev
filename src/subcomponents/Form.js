import React, { Component } from 'react'
import axios from 'axios';
import { createBrowserHistory } from 'history';
import validator from 'validator';
const history = createBrowserHistory();
var emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const showMessage = (message) => {

    alert(message);
};
const validatePhoneNumber = (phoneNumber) => {
    if (
        phoneNumber.length < 10 ||
        phoneNumber.length > 10
    ) {
        const isValidPhoneNumber = validator.isMobilePhone(phoneNumber)
        return (isValidPhoneNumber)
    }


}

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

    // handleChange = (e) => {


    //     this.setState({ [e.target.name]: e.target.value });
    //     console.log("111111111", this.state.fname)

    // }
    handleChange = (e) => {
        e.preventDefault()

        this.setState({ [e.target.name]: e.target.value });
        console.log("111111111", this.state.fname)
    }
    checkvalue = () => {
        const { fname, phoneNumber, email, about } = this.state;
        console.log("check value")


    }


    componentDidMount() {
    }


    fileUploadHandler = (e) => {
        e.preventDefault()

        const { fname, phoneNumber, email, about } = this.state;
        console.log("sdsd", fname)


        if (fname === "") {
            console.log("name check")
            showMessage("Enter name");
        } else if (email === "") {
            showMessage("Enter email address");
        } else if (emailCheck.test(email) === false) {
            showMessage("Enter Valid Email");
        } else if (about === "") {
            showMessage("Enter about");
        } else if (phone.test(phoneNumber) === false) {
            showMessage("Enter valid phonenumber");
        }
        // } else if (validatePhoneNumber(phoneNumber) === false) {

        //     showMessage("Enter correct phone number");
        // }
        else {
            const data = new FormData()
            data.append("fname", fname)
            data.append("email", email)
            data.append("about", about)
            data.append("phoneNumber", phoneNumber)

            console.log("22222222222222", fname)
            axios.post("http://localhost:8000/user/formSubmit", data)
                .then(response => {
                    console.log("11111111111111111111111", response);
                    if (response.data.statusCode === 200) {
                        console.log("11111111111111111111111ffdsfsfsrsa", this);
                        history.push({ pathname: '/' })
                        history.go('/');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    render() {
        console.log(this.state)

        const { fname, email, phoneNumber, about } = this.state;

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
                                <button class="btn btn-primary btn-lg" onClick={(e) => { this.fileUploadHandler(e) }} >Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

