import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Berita from './Berita';

 class News extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { news_list, heading } = value;
                    if (news_list === undefined || news_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row mb-2">
                                {news_list.map(item => (
                                   <Berita key={item._id} berita={item} /> 
                                ))}
                            </div>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        )
    }
}

export default News;