import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CrosserView.css';



class CrosserView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            crosser: {}
        }

        this.deleteCrosser = this.deleteCrosser.bind(this)
    }

    componentWillMount() {
        axios.get(`/admin/${this.props.match.params.id}`).then((res) => {
            console.log(res.data)
            this.setState({
                crosser: res.data
            })
        }
        )
    }

    deleteCrosser(){
        let check = window.confirm("Are you Sure you want to delete Crosser")
        if (check === true ){
             axios.delete(`/admin/${this.props.match.params.id}`).then(
            (res) => {
                alert('Crosser deleted')
                this.props.history.push('/admin/all')
            }
        )
        }
        // else{
        //     alert('it doesnt')
        // }

       
    }

    render() {
        return (
            <div className="container">
                <div>
                    <span>Name:</span>
                    {this.state.crosser.name}
                </div>

                <div>
                    <span>Email:</span>
                    {this.state.crosser.email}
                </div>

                <div>
                    <span>Phone Number:</span>
                    {this.state.crosser.phone_number}
                </div>
                <div>
                    <span>Home Address:</span>
                    {this.state.crosser.home_address}
                </div>
                <div>
                    <span>School Address:</span>
                    {this.state.crosser.school_address}
                </div>
                <div>
                    <span>Department:</span>
                    {this.state.crosser.department}

                </div>
                <div>
                    <span>Expected Year of Graduation:</span>
                    {this.state.crosser.expected_year_of_graduation}
                </div>
                <div>
                    <span>Year of Recruitment:</span>
                    {this.state.crosser.year_of_recruitment}
                </div>
                <div>
                    <span>Semester of Recruitment:</span>
                    {this.state.crosser.semester_of_recruitment}

                </div>
                <div>
                    <span>Date of Birth:</span>
                    {this.state.crosser.date_of_birth}

                </div>
                <Link className="btn btn-primary" to={`/admin/edit/${this.state.crosser._id}`}>
                        Update Crosser
                    </Link>

                <button className="btn btn-danger" style={{margin: "2px"}} onClick={this.deleteCrosser}>
                        Delete Crosser
                 </button>



                <br />
                {this.props.match.params.id}
            </div>
        )
    }
}

export default CrosserView