import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-primary mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-secondary mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-success mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-danger mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-warning mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-info mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow text-dark mx-2" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
}
