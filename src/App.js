import './App.css';
import './css/bootstrap.min.css'
import { Component } from 'react';
// import FirstComponent from './components/examples/FirstComponent';
// import SecondComponent from './components/examples/SecondComponent';
// import ThirdComponent from './components/examples/ThirdComponent';
// import Counter from './components/counter/Counter'
import BooksMgmt from './components/books/BooksMgmt'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksMgmt></BooksMgmt>
      </div>
    );
  }
}

// Testing source control

// class LearningExamples extends Component {
//   render() {
//     return (
//       <div className="App">
//         Hi, Lets learn react !!
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
// Test
//   }
// }

export default App;
