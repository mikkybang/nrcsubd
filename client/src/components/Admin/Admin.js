import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CrossersView from '../CrossersView/CrossersView';

class Admin extends Component {
    constructor() {
        super()
        this.state ={

        }
            
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">NRCSUBD ADMIN</Link>
                <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/a/all">list all Crossers</Link>
            </li>
        </ul>
        </nav>
            </div>
        )
    }



}

export default Admin