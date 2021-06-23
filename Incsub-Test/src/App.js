import react, {useState} from 'react';
import './App.css';
import StepComponent from './components/StepComponent';
import Form from './components/Form/Form';
import Arrow from './components/Arrow';

function App() {

  return (
    <div className="wrapper">
      <Arrow direction="left"/>
      <Arrow direction="right"/>
      <div className="container main-content">
        <StepComponent stepNumber={1}/>
        <div className="md:px-14 font-small">
          <h1 className="text-base font-semibold mb-8">Let's set up your account</h1>
          <p className="mb-7">Already have an account? <span className="cta font-semibold">Sign in</span></p>
          <Form/>
        </div>
      </div>

      <div className="container secondary-content font-semibold text-white hidden md:flex flex-col justify-center items-center gap-5">
          <h1>Dummy Heading</h1>
          <p className="font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis perferendis repudiandae est, ullam pariatur.</p>
      </div>
    </div>
  );
}

export default App;
