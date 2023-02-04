import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";
import React from 'react';

export function Footer() {
    return (
      <MDBFooter className='text-center text-dark fixed-bottom opacity-50' style={{ backgroundColor: '#f3f6f4' }}>
        <MDBContainer className='p-2 mt-auto'></MDBContainer>
  
        <div className='text-center p-3' >
          © 2023 Aviva Joy Gars:
          <a className='text-dark' href='https://mdbootstrap.com/'>
            Ada Panthers A18
          </a>
        </div>
      </MDBFooter>
    );
  }