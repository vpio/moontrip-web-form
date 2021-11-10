import './App.css';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import userIcon from './assets/user.png'
import mailIcon from './assets/mail.png'
import phoneIcon from './assets/phone.png'

const Counter = ({ title, current, fn }) => (
  <div>
    <div className="form-label">
      {title}
    </div>
    <div id="counter">
      <span onClick={() => (current > 0) ? fn(current - 1) : fn(current)} class="fa-stack fa-1x counter-btn">
        <i class="fa fa-circle fa-stack-2x counter-btn-bg"></i>
        <i class="fas fa-minus fa-stack-1x"></i>
      </span>
      <h3 id="counter-display">{current}</h3>
      <span onClick={() => fn(current + 1)} class="fa-stack fa-1x counter-btn">
        <i class="fa fa-circle fa-stack-2x counter-btn-bg"></i>
        <i class="fas fa-plus fa-stack-1x"></i>
      </span>
    </div>
  </div>
)

function App() {
  const [adultCount, setAdultCount] = useState(0)
  const [kidCount, setKidCount] = useState(0)
  const [cabinRoomCount, setCabinRoomCount] = useState(0)
  const [{ name, email, phone }, setFormState] = useState({})

  const handleSubmit = () => {
    setAdultCount(0)
    setKidCount(0)
    setCabinRoomCount(0)
    setFormState({ name: '', email: '', phone: '' })
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="App">
      <div id="main-page-overlay">
        <div className="header">
          <h2>Book a trip</h2>
        </div>
        <div className="subtitle">
          <p>An amazing journey is waiting for you and your loved ones! You’re just one step away from a new adventure:</p>
        </div>
        <Container className="form-content">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">YOUR NAME</Form.Label>
              <InputGroup className="mb-2 input-font">
                <InputGroup.Text><img src={userIcon} /></InputGroup.Text>
                <FormControl className="input-icon-border" value={name} name="name" onChange={onChange} placeholder="Enter your full name" />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">E-MAIL ADDRESS</Form.Label>
              <InputGroup className="mb-2 input-font">
                <InputGroup.Text><img src={mailIcon} /></InputGroup.Text>
                <FormControl className="input-icon-border" value={email} name="email" onChange={onChange} placeholder="Enter your E-mail address" />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">PHONE NUMBER</Form.Label>
              <InputGroup className="mb-2 input-font">
                <InputGroup.Text><img src={phoneIcon} /></InputGroup.Text>
                <FormControl className="input-icon-border" value={phone} name="phone" onChange={onChange} placeholder="Enter your phone number" />
              </InputGroup>
            </Form.Group>
          </Form>
          <div className="counter-group">
            <Counter title="ADULTS" current={adultCount} fn={setAdultCount} />
            <Counter title="KIDS" current={kidCount} fn={setKidCount} />
            <Counter title="CABIN ROOMS" current={cabinRoomCount} fn={setCabinRoomCount} />
          </div>
          <div className="form-bottom">
            <button className="submit-btn" onClick={handleSubmit}>
              COMPLETE YOUR BOOKING
            </button>
          </div>
        </Container>
      </div>

    </div>
  );
}

export default App;
