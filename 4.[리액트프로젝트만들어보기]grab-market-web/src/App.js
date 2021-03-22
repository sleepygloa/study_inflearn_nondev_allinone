import logo from './logo.svg';
import './App.css';
import ChildComponent from './child.js';
import TimeComponent from './timer.js';

function App() {
  const text = "헬로월드";
  const sayHello = () => {
    return <h3>인프런강의 너무좋아</h3>;
  }
  const sayHello2 = () => {
    alert('안녕하세얼럿');
  }
  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>{text}</h2>
      {sayHello()}  
      <div onClick={sayHello2}>클릭해주세영</div>
      <TimeComponent />
      <ChildComponent name="그랩" age={17} />
      <ChildComponent name="츄" age={7} />
      <ChildComponent name="시우" age={2} />
      <ChildComponent name="황시목" age={40} />
    </div>
  );
}

export default App;
