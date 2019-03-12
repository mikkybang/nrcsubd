import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MaterialTable from 'material-table'
import './CrossersView.css';
import moment from 'moment';

class CrossersView extends Component {
    constructor() {
        super()
        this.state = {
            crossers: [],
            searchText: '',
            message: '',
        }
        this.handleBirthdays = this.handleBirthdays.bind(this)
        this.getallCrossers = this.getallCrossers.bind(this)
    }

    handleBirthdays(e) {
        const today = moment();
        var cbirthdays = this.state.crossers
        console.log(cbirthdays.length)
        const birthdays = cbirthdays.filter(crosser => {
            const crtime = moment(crosser.date_of_birth)
            console.log(crtime)
             return crtime.date() === today.date() && crtime.month() === today.month()
        })
        console.log(birthdays)
    
        this.setState({ crossers: birthdays, message: `${birthdays.length} Crosser(s) have birthdays today` })
    }

    componentWillMount() {
            this.getallCrossers()
    }

    getallCrossers() {
        axios.get('/admin/all').then((res) => {
            console.log(res.data)
            this.setState({ crossers: res.data, message: `${res.data.length} Registered Crossers` })
        })

    }

    render() {
        return (
            <div className="container" style={{ Width: '100%' }}>
                <div className="text-center col col-md-6 col-sm-12">
                    <span>{this.state.message}</span>
                </div>
                <div>
                    <button onClick={this.handleBirthdays} className= "fas fa-birthday-cake btn-info"> Today's birthdays</button>
                </div>
                <MaterialTable
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Email Address', field: 'email' },
                        { title: 'Phone Number', field: 'phone_number' },
                        { title: 'Semester of Recruitment', field: 'semester_of_recruitment' },
                        { title: 'Year of Recruitment', field: 'year_of_recruitment' },
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