import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CrossersView.css';

class CrossersView extends Component {
    constructor() {
        super()
        this.state = {
            crossers: [],
            searchText: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.searchCrossers = this.searchCrossers.bind(this)
        this.getallCrossers = this.getallCrossers.bind(this)
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.searchText)
        const search = {
            text: this.state.searchText,
        }
        this.searchCrossers(search.text)
    }

    componentWillMount() {
        this.getallCrossers()
    }

    getallCrossers() {
        axios.get('/admin/all').then((res) => {
            console.log(res.data)
            this.setState({ crossers: res.data, message: `${res.data.length} Crosser Registered` })
        })

    }
    
    searchCrossers(searchText) {
        axios.get(`/admin/search/${searchText}`).then((res) => {
            console.log(res.data)
            if (res.data.length !== 0) {
                this.setState({ crossers: res.data })
            }
            else {
                this.setState({ crossers: res.data, message: 'No crosser with that name' })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="">
                    <div className="col col-md-6 col-sm-12">
                        <form onSubmit={this.handleSubmit}>
                            <label>Search Crossers</label>
                            <input type="text"
                                placeholder="Search"
                                className="form-control"
                                name="searchText"
                                onChange={this.handleInputChange}
                                value={this.state.searchText}
                            />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form >
                    </div>

                    <div className="col col-md-6 col-sm-12">
                        <span>{this.state.message}</span>
                        <br />
                        <strong>List of Crossers</strong>

                        <ul>
                            {this.state.crossers.map(crosser => (
                                <Link key={crosser._id} to={`/admin/c/${crosser._id}`}>
                                    <li >
                                        {crosser.name}
                                    </li>
                                </Link>

                            ))}

                        </ul>
                    </div>

                </div>

            </div>


        )
    }
}

export default CrossersView