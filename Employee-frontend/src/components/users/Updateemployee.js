import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams,useNavigate } from 'react-router-dom';

const Updateemployee = () => {

  // Hook to navigate to a different page
  let navigate = useNavigate();

  // useParams hook to get the id from the URL
  const {id} = useParams(); 

  // State to store form values
  const[formValues, setFormValues] = useState({  
    firstname: "" ,
    lastname: "" ,
    email: "" ,
    department: "" ,
    employmentType: "" 
  })

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormValues({...formValues,[event.target.name]: event.target.value})
  }

 
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    await axios.put(`http://localhost:8080/employee/update/${id}`, formValues);  // Axios POST request
    alert('Employee details Edited successfully!',formValues);
    navigate('/');   // Navigates to the home page
  };

  // Function to get employee details by id
  // const getEmployee = async () => {
  //   try{
  //   const response = await axios.get(`http://localhost:8080/employee/${id}`);
  //   setFormValues(response.data);
  //   }
  //   catch(error){
  //     console.log('Error', error);
  //   }
  // };

  // useEffect(() => {
  //   getEmployee();
  // }, []);

  const getEmployee = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/employee/${id}`);
      setFormValues(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching employee data', error);
    }
  }, [id]);

  useEffect(() => {
    getEmployee();
  }, [getEmployee]);

  // Function to handle form reset
  const handleReset = () => {
    setFormValues({
      firstname: '',
      lastname: '',
      email: '',
      department: '',
      employmentType: '',
    });
  };

  return (
    <div className='outer' style={{ backgroundColor: 'rgb(217, 225, 235)' }}>
    <div className= "container" 
    style={{
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', 
      height: '90vh' , 
      }}>
    <div className="formouter"  onSubmit={handleSubmit} onReset={handleReset}
    style={{ 
      padding: '20px' ,
      margin: '20px 90px' ,
      backgroundColor: 'rgb(196, 208, 226)',
      border: '1px solid rgb(196, 208, 226)', 
      borderRadius: '10px' , 
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}>
      <Form style={{margin: '20px'}}>
        <div className="formheader" style={{margin: '40px' ,textAlign: 'center'}}>
          <h2 style={{ fontWeight: 'bold', color: '#343a40' }}>Edit Employees</h2>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label style={{ fontWeight: 'bold', color: '#495057' }}>First Name</Form.Label>
            <Form.Control 
            type="text" 
            name="firstname"  // Name attribute should be same as the key in state
            value={formValues.firstname}  // Value attribute should be same as the value in state
            onChange={handleChange}   // OnChange event handler
            placeholder="Enter firstname"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label style={{ fontWeight: 'bold', color: '#495057' }}>Last Name</Form.Label>
            <Form.Control 
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
            placeholder="Enter Lastname"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label style={{ fontWeight: 'bold', color: '#495057' }}>Email</Form.Label>
          <Form.Control 
          type="Email" 
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="mail@xyz.com"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDepartment">
            <Form.Label style={{ fontWeight: 'bold', color: '#495057' }}>Department</Form.Label>
            <Form.Select 
              name="department"
              value={formValues.department}
              onChange={handleChange}
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
              defaultValue="Select...">
              <option value="">Select...</option>
              <option>Development & Engineering</option>
              <option>Quality Assurance (QA)</option>
              <option>IT Support</option>
              <option>UI/UX Design</option>
              <option>Sales and Marketing</option>
              <option>Customer Support & Services</option>
              <option> Human Resources (HR)</option>
              <option>Data Science & Analytics</option>
              <option>Project Management</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDesignation">
            <Form.Label style={{ fontWeight: 'bold', color: '#495057' }}>Employment Type</Form.Label>
            <Form.Select 
              name="employmentType"
              value={formValues.employmentType}
              onChange={handleChange}
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
              defaultValue="Select...">
              <option>Select...</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract-Based</option>
              <option>Internship</option>
              <option>Apprenticeship/Trainee</option>
              <option>Remote/Work-From-Home Employment</option>
              <option>Shift-Based Employment</option>
            </Form.Select>
          </Form.Group>  
        </Row>

        <div className="mb-3" style={{ margin: '20px', textAlign: 'center' }}>
          <Button variant="primary" type="submit" style={{ marginRight: '10px', padding: '10px 20px' }}>
            Submit
          </Button>
          <Button variant="primary" type="reset" style={{ padding: '10px 20px' }}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
    </div>
    </div>
  )
}

export default Updateemployee;