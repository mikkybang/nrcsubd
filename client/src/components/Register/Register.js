import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            school_address: '',
            home_address: '',
            phone_number: '',
            date_of_birth: '',
            department: '',
            expected_year_of_graduation: '',
            year_of_recruitment: '',
            semester_of_recruitment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDateChange(date) {
        this.setState({
            date_of_birth: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            school_address: this.state.school_address,
            home_address: this.state.home_address,
            phone_number: this.state.phone_number,
            date_of_birth: this.state.date_of_birth,
            department: this.state.department,
            expected_year_of_graduation: this.state.expected_year_of_graduation,
            year_of_recruitment: this.state.year_of_recruitment,
            semester_of_recruitment: this.state.semester_of_recruitment
        }
        this.registerUser(user);
        console.log(user);
    }

    registerUser(user) {
        axios.post('/crosser/add', user)
            .then((res) => {
                alert(`${res.data.name} You have Sucessfully Registered Thank you`)
                console.log(res)
                this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className="container " style={{ marginTop: '50px', width: '100%' }}>
                <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                <div className=" col-lg-4">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>School Address:</label>
                        <input
                            type="text"
                            placeholder="School Address"
                            className="form-control"
                            name="school_address"
                            onChange={this.handleInputChange}
                            value={this.state.school_address}
                        />
                    </div>
                    <div className="form-group">
                        <label>Home Address:</label>
                        <input
                            type="text"
                            placeholder="Home Address"
                            className="form-control"
                            name="home_address"
                            onChange={this.handleInputChange}
                            value={this.state.home_address}
                        />
                    </div>
                    </div>
                    <div className=" col-lg-4">
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="form-control"
                            name="phone_number"
                            onChange={this.handleInputChange}
                            value={this.state.phone_number}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of birth MM/DD/YYYY:</label>
                        <DatePicker
                            selected={this.state.date_of_birth}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department:</label>
                        <input
                            type="text"
                            placeholder="Enter Your Department"
                            className="form-control"
                            name="department"
                            onChange={this.handleInputChange}
                            value={this.state.department}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expected Year of Graduation:</label>
                        <input
                            type="text"
                            placeholder="Year of Graduation"
                            className="form-control"
                            name="expected_year_of_graduation"
                            onChange={this.handleInputChange}
                            value={this.state.expected_year_of_graduation}
                        />
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="form-group">
                        <label>Recruitment Year:</label>
                        <input
                            type="text"
                            placeholder="Enter the year you Recruited"
                            className="form-control"
                            name="year_of_recruitment"
                            onChange={this.handleInputChange}
                            value={this.state.year_of_recruitment}
                        />
                    </div>
                    <div className="form-group">
                        <label>Semester of Recruitment:</label>
                        <select className="browser-default custom-select"
                            name="semester_of_recruitment"
                            onChange={this.handleInputChange}
                        >
                            <option defaultValue="Select the Semester you Recruited">Kindly Select the Semester you Recruited</option>
                            <option value="1st Semester">1st Semester</option>
                            <option value="2nd Semester">2nd Semester</option>
                        </select>

                    </div>
                    </div>
                     
                    <div className="form-group" style= {{width: '100%'}}>
                        <button type="submit" className="btn btn-primary" style= {{margin: 'auto'}}  >
                            Submit
                    </button>
                    </div>
    
                 
                    </div>
                </form>
            </div>
        )
    }
}





export default Register