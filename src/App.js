import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './components/input/input'
import confirm from './components/confirm'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class Child extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
 
  componentDidUpdate() {
    console.log('update', this.props.name)
  }
  componentWillUnmount() {
    console.log('unmount', this.props.name)
  }

}
class App extends Component {
  state = {
    list: ['a', 'b', 'c'],
    value: 1,
  }
  inputVal = (val) => {
    console.log(val, 'appval');
    
    this.setState({
      value: val,
    })
  }
   
  async componentDidMount(){
    console.log('mount', this.props.name)
    let res = await confirm("确定删除吗").catch(err => {})
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.list.map(item => <Child key={item} name={item}/>)}
                            <button onClick={e => {
                                     this.setState({
                                             list: ['b','c','d']
                                     })
                            }}>set</button> */}
        <InputNumber  value={this.state.value} />
      </div>
    );
  }
}



export default App;
