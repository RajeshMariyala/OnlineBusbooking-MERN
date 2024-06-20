import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Payment.css";
import NavBar from "../NavBar";



export const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypal, setPayPal] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  sessionStorage.setItem("status", "pending");
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleUPIPayment = (e) => {
    e.preventDefault();
    if (!upiId.trim()) {
      setErrorMessage('Please enter UPI ID.');
      return;
    }

    const upiIdRegex = /^[\w.-]+@[\w.-]+$/;
    if (!upiIdRegex.test(upiId)) {
      setErrorMessage('Please enter a valid UPI ID.');
      return;
    }
    // Add logic for UPI payment (simulated with a prompt)
    prompt('Enter UPI PIN to complete payment:');
    setSuccessMessage('Payment successful!');
    setUpiId('');
    navigate('/success');
  };

  const handleNetBankingPayment = (e) => {
    e.preventDefault();
    if (!bank || bank === 'Select Bank') {
      setErrorMessage('Please select a bank.');
      return;
    }

    // Simulate bank-specific validation

    // Add logic for Net Banking payment (simulated with a prompt)
    prompt('Enter Net Banking credentials to complete payment:');
    setSuccessMessage('Payment successful!');
    setBank('');
    navigate('/success');
  };

  const handleCardPayment = (e) => {
    e.preventDefault();
    if (!cardNumber.trim() || !expiry.trim() || !cvv.trim()) {
      setErrorMessage('Please fill in all card details.');
      return;
    }

    // Card number validation
    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      setErrorMessage('Please enter a valid 16-digit card number.');
      return;
    }

    // Expiry date validation
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // January is 0
    const [expiryMonth, expiryYear] = expiry.split('/');
    if (parseInt(expiryYear, 10) < currentYear || (parseInt(expiryYear, 10) === currentYear && parseInt(expiryMonth, 10) < currentMonth)) {
      setErrorMessage('Card has expired.');
      return;
    }

    // CVV validation
    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cvv)) {
      setErrorMessage('Please enter a valid 3-digit CVV.');
      return;
    }

    // Add logic for Card payment (simulated with a prompt)
    prompt('Enter OTP sent to your mobile number to complete payment:');
    setSuccessMessage('Payment successful!');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    navigate('/success');
  };

  const handlePayPalPayment = (e) => {
    e.preventDefault();
    if (!paypal.trim()) {
      setErrorMessage('Please enter PayPal details.');
      return;
    }

    // Add any PayPal-specific validation here

    // Logic for PayPal payment (simulated with a prompt)
    prompt('Enter PayPal credentials to complete payment:');
    setSuccessMessage('Payment successful!');
    setPayPal('');
    navigate('/success');
  };

  const totalPrice = localStorage.getItem('total');
  return (<div>
    <NavBar/>
    <Container fluid >
      <Row>

        <Col md={3} className="payment-methods text-center  ">
          <h3 className="text2">Payment Methods<br/><br/>Total Price to Pay: {totalPrice}/-</h3>
          <br /> <br/>
          <Button
            className="custom-button1"
            onClick={() => handlePaymentMethodChange('upi')}
          >
            UPI/QR
          </Button>
          <Button
            className="custom-button2"
            onClick={() => handlePaymentMethodChange('netbanking')}
          >
            Net Banking
          </Button>
          <Button
            className="custom-button3"
            onClick={() => handlePaymentMethodChange('card')}
          >
            Card
          </Button>
          <Button
            className="custom-button4"
            onClick={() => handlePaymentMethodChange('paypal')}
          >
            PayPal
          </Button>
         
          {/* </Col> */}
          <Col md={9} className="payment-form">
            {paymentMethod === 'upi' && (
              <div className="payment-form-wrapper1">
                <Form onSubmit={handleUPIPayment}>
                  <Form.Group controlId="upiId">
                    <img src="https://i.pinimg.com/736x/0c/37/f4/0c37f4e696e961a5b577cfc93f1cf01f.jpg" alt="Enter UPI ID" style={{ width: '330px', height: '350px', marginTop: '-40px' }} />
                    <br />
                    <Form.Label className="upitext">Scan QR (or)Enter ID</Form.Label><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Form.Control className=" inputtext" type="text" placeholder="Enter UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)}
                      style={{ width: '45%', height: '20px', marginLeft: '-1px', backgroundColor: 'white', boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.1)', border: '2px solid white' }} />
                  </Form.Group>
                  <Button className="upibutton " variant="dark" type="submit">
                    Pay Now
                  </Button>
                </Form>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="payment-form-wrapper2">
                <Form onSubmit={handleNetBankingPayment}>
                  <Form.Group controlId="bank">
                    <Form.Label>Select Bank</Form.Label><br/>
                    <Form.Control as="select" value={bank} onChange={(e) => setBank(e.target.value)} style={{ width: '30%' }}>
                      <option>State Bank</option>
                      <option>Bank of Boroda</option>
                      <option>Punjab National Bank</option>
                      <option>Bank of Boroda</option>
                      <option>Punjab National Bank</option>
                      <option>Bank of Boroda</option>
                      <option>Punjab National Bank</option>
                    </Form.Control>
                  </Form.Group>
                  <input  type="submit" className="button-netbanking" value="Pay via Net Banking"/>
                    
                 
                </Form>
              </div>
            )}

            {paymentMethod === 'card' && (

              <Row className="justify-content-center align-items-center payment-form-wrapper5 " style={{ minHeight: '100vh' }}>
                <Col md={15} className="flex">

                  <div><img src="images/card.gif" alt="Credit Card" /></div>
                  <div className="card-form-wrapper">
                    <Form onSubmit={handleCardPayment} >
                      <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                      </Form.Group>
                      <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter 16-digit Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                      </Form.Group>
                      <Row>
                        <Col>
                          <Form.Group controlId="expiry">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="cvv">
                            <Form.Label>CVV</Form.Label><br/>
                            <Form.Control type="text" placeholder="3-digit CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                        Pay via Card
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>

            )}

            {paymentMethod === 'paypal' && (
              <div className="payment-form-wrapper3">
                <Form onSubmit={handlePayPalPayment}>
                  <img src="https://ia803205.us.archive.org/33/items/hurley-paypal-qr-code_202005/Hurley%20Paypal%20QR%20Code.png" alt="Enter PayPal Email" style={{ width: '330px', height: '300px' }} />

                  <div style={{ textAlign: 'left' }}>

                    <p><span className="bold-colorful-text">Scan QR Code</span> </p>
                  </div>

                  <Form.Group controlId="paypal">

                    <Form.Control type="text" placeholder="Enter Payment details" value={paypal} onChange={(e) => setPayPal(e.target.value)} style={{ width: '30%' }} />
                  </Form.Group>
                  <br />

                  <Button className="paypalbutton" variant="dark" type="submit">
                    Pay Now
                  </Button>
                </Form>
              </div>
            )}

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
          </Col>
        </Col>
      </Row>
    </Container></div>
  );
};