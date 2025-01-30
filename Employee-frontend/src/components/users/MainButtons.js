import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MainButtons = () => {

  return (
    <div style={{ padding: '20px' }}>
        {/* <h3 style={{ textAlign: 'center' }}>SGM Employee Records</h3> */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' ,gap: '20px'}}>           
            < Link to="/add-employee" >
                <Button variant="primary" size="lg"
                    style={{ padding: '10px 20px', fontSize: '16px' ,alignItems:'end'}}
                >
                Add Employee
                </Button>
            </Link>
            <Link to={"/view-allemployee"}>
                <Button variant="secondary" size="lg" 
                    style={{ padding: '10px 20px', fontSize: '16px' ,alignItems:'end' }}>
                View Employee
                </Button>
            </Link>
        </div>
    </div>
  );
}

export default MainButtons;