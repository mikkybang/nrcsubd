import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MaterialTable from 'material-table'
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
        this.getBirthdays = this.getBirthdays.bind(this)
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
        const pathname = window.location.pathname
        if (pathname.includes('birthday')) {
            this.getBirthdays()
            
        }
        else {
            this.getallCrossers()
        }
    }

    componentWillReceiveProps(){
        const pathname = window.location.pathname
        if (pathname.includes('birthday')) {
            this.getBirthdays()
            
        }
        else {
            this.getallCrossers()
        }
    }

    getallCrossers() {
        axios.get('/admin/all').then((res) => {
            console.log(res.data)
            this.setState({ crossers: res.data, message: `${res.data.length} Crosser Registered` })
        })

    }

    getBirthdays() {
        axios.get('/admin/g/birthday').then((res) => {
            console.log(res.data)
            this.setState({ crossers: res.data, message: `${res.data.length} Crosser(s) have birthdays today` })
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
            <div className="container" style={{Width: '100%' }}>
                    <div className="text-center col col-md-6 col-sm-12">
                        <span>{this.state.message}</span>
                </div>
                <MaterialTable
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Email Address', field: 'email' },
                        { title: 'Phone Number', field: 'phone_number'},
                        {title: 'Semester of Recruitment', field: 'semester_of_recruitment'},
                        {title: 'Year of Recruitment', field: 'year_of_recruitment'},
                    ]}
                    data={this.state.crossers}
                    title="Click to see Crosser Info"
                    actions={[
                        {
                            icon: 'account_circle',
                            tooltip: 'Show User Info',
                            onClick: (event, rowData) => {
                                this.props.history.push(`/admin/c/${rowData._id}`)
                            },
                            iconProps: {
                                style: {
                                    fontSize: 30,
                                    color: 'red',
                                },
                            },
                        },
                    ]}
                />
            </div>


        )
    }
}

export default CrossersView