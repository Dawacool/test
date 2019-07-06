import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
    state = {
        newsTitle: ''
    };

 findNews = (dispatch,e) => {
        e.preventDefault();

        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=document_type&fq=${this.state.newsTitle}&page=1&sort=newest&api-key=${process.env.REACT_APP_NYT_KEY}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'SEARCH_NEWS',
                    payload: res.data.response.docs
                });

                this.setState({ newsTitle: '' });
            })
            .catch(err => console.log(err));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                Search For News
                            </h1>
                            <p className="lead text-center">Look for another news</p>
                            <form onSubmit={this.findNews.bind(this, dispatch)}>
                                <div className="form-groub">
                                    <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Search" 
                                    name="newsTitle" 
                                    value={this.state.newsTitle}
                                    onChange={this.onChange} 
                                    />
                                </div>
                                <br></br>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit"> Get The News </button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default Search;
