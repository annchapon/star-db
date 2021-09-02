import React, { Component } from 'react';

import Spinner from '../spinner';
//import ErrorIndicator from '../error-indicator';

// компонент-обертка, отвечает за логику работы с сетью
const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };
  
    componentDidMount() {  
      getData() // return promise
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;