import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'primeicons/primeicons.css';
import blankProfilePicture from '../../assets/images/img.png'; // Adjust relative path


        

const ViewEmployeeByid = () => {

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: "",
    employmentType: "",
  });

  useEffect(() => {
    loademployes();
  }, []);

  const loademployes = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`);
    setEmployee(result.data);
  };

  
  return (
    <div className="outer" style={{ fontSize: '20px', textAlign: 'center', padding: '20px' }}>
      <div className="container" style={{ marginTop: '50px' }}>
        <div 
          className="card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            maxWidth: '800px', 
            margin: 'auto', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)', 
            backgroundColor:'#FAF3E0'
          }}
        >
          {/* Content on the Left */}
          <div style={{  padding: '20px', textAlign: 'left' }}>
          <img 
              src={blankProfilePicture} 
              alt="Employee" 
              style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} 
            />
          </div>

          {/* Image on the Right */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1 style={{letterSpacing:'2px'}}>{employee.firstname} {employee.lastname}</h1>
             <p className="title" style={{ color: 'grey', fontSize: '18px' }}>
               {employee.department} <br />
                {employee.employmentType}
              </p>
            <p>{employee.email}</p>
            <div style={{ margin: '24px 0', cursor:'pointer' }}>
              <i className="pi pi-linkedin" style={{ color: '#0072b1', padding: '10px', fontSize: '24px' }}></i>
              <i className="pi pi-whatsapp" style={{ color: '#25D366', padding: '10px', fontSize: '24px' }}></i>
              <i className="pi pi-facebook" style={{ color: '#1877F2', padding: '10px', fontSize: '24px' }}></i>
              <i className="pi pi-github" style={{ color: '#24292e', padding: '10px', fontSize: '24px' }}></i>
            </div>
            <Link to={"/"}>
              <Button variant="success">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeByid;
