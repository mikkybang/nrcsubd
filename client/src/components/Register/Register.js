import React, { Component } from 'react';
import axios from 'axios';

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
            year_of_recruitment: '',
            semester_of_recruitment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            year_of_recruitment: this.state.year_of_recruitment,
            semester_of_recruitment: this.state.semester_of_recruitment
        }
        this.registerUser(user);
        console.log(user);
    }

    registerUser(user) {
        axios.post('/crosser/add', user)
        .then((res) => {
            console.log(res)
        })
        .catch()
    }


    render() {
        return (
            <div className="container" style={{ marginTop: '50px', width: '700px' }}>
                <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
                        <input
                            type="text"
                            placeholder="Home Address"
                            className="form-control"
                            name="home_address"
                            onChange={this.handleInputChange}
                            value={this.state.home_address}
                        />
                    </div>
                    <div className="form-group">
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
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            className="form-control"
                            name="date_of_birth"
                            onChange={this.handleInputChange}
                            value={this.state.date_of_birth}
                        />
                    </div>
                    <div className="form-group">
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
                        <select className="browser-default custom-select"
                            name="semester_of_recruitment"
                            onChange={this.handleInputChange}
                        >
                            <option defaultValue="Select the Semester you Recruited">Kindly Select the Semester you Recruited</option>
                            <option value="1st Semester">1st Semester</option>
                            <option value="2nd Semester">2nd Semester</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}





export default Register