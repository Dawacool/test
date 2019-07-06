import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_NEWS':
        return {
            ...state,
            news_list: action.paylaod,
            heading : 'Search Result'
        };
    default:
        return state;
    }
};

export class Provider extends Component {
    state = {
        news_list: [],
        heading: "Most Popular",
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_fields=document_type&fq=obama&page=1&sort=newest&api-key=${process.env.REACT_APP_NYT_KEY}`)
            .then(res => {
                console.log(res.data);
                this.setState({news_list: res.data.response.docs});
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
