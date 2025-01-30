import React,{useState , useEffect}from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Employeerecords = () => {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
       loademployes();

    }, []);

    // Hook to get the id from the URL
    // const { id } = useParams();

    const loademployes = async() => {
        const result = await axios.get("http://localhost:8080/employee/getall");
        setEmployee(result.data);
        console.log(result.data);
    }

    // Function to delete an employee
    const deleteEmployee = async (id) => {
        const confrimed = window.confirm('Do you want to delete this employee?');
        if(confrimed){
            await axios.delete(`http://localhost:8080/employee/delete/${id}`);
            loademployes();
        }
    }


  return (
    <div className='employeerecords'>
        <div className='recordsheader' style={{margin: '35px'}}>
            <h2>Employee Records</h2>
        </div>
        <div className='employetable' style={{margin: '25px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>EmploymentType</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((employee) => (
                            <tr key={employee.id}>
                                <th scope="row">{employee.id}</th>
                                {/* <td>{employee.id}</td> */}
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.employmentType}</td>
                                <td>
                                    <div style={{display: 'flex', gap: '12px' ,justifyContent: 'center'}} >
                                    <Link to={`/View-employee/${employee.id}`}>
                                        <Button variant="success">View</Button>
                                    </Link>
                                    <Link to={`/update-employee/${employee.id}`}>
                                        <Button variant="warning">Edit</Button>
                                    </Link>
                                    <Button variant="danger" onClick={() => deleteEmployee(employee.id)}>Delete</Button>
                                    </div>
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Employeerecords