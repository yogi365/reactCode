import logo from './logo.svg';
import './App.css';
import First from './components/first';
import ClassComponent from './components/ClassComponent';
function App() {
  var fruits=["Apple","Mango","Kiwi","Jack Fruit"]
  return (
    <div className="App">
     <First fruits={fruits}/>
     <ClassComponent firstName="Abc"/>
    </div>
  );
}

export default App;
