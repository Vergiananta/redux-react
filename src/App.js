import logo from './logo.svg';
import { Component, Fragment, useState } from 'react';
import { createStore } from 'redux'
import ProductReducer from './reducers/product';
import { Provider } from 'react-redux';
import { Row, Col } from 'reactstrap'
import Product from './component/product'
import Counter from './component/counter'
import MyComponent from './components';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,

//     }
//     this.increment = this.increment.bind(this)
//   }

//   componentDidMount() {
//     console.log("component did mount");
//   }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnMount");
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate ");
//   }

//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate")
//     return true
//   }

//   increment = () => {
//     const { counter } = { ...this.state }
//     this.setState({ counter: counter + 1 })
//   }



//   render() {
//     const { counter } = { ...this.state }
//     return (
//       <div className="App">
//         <Counter handleIncrement={this.increment} data={counter} />

//       </div>
//     );
//   }
// }


function App() {

  const counterOrder = createStore(ProductReducer)
  console.log("mycomponent");

    return (
      <Provider store={counterOrder}>
        <MyComponent />
      </Provider>
    )
}

export default App;

