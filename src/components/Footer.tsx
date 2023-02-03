import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";
import React from 'react';

export function Footer() {
    return (
      <MDBFooter sticky="bottom" className='text-center text-white fixed-bottom' style={{ backgroundColor: '#21081a' }}>
        <MDBContainer className='p-4'></MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Aviva Joy Gars:
          <a className='text-white' href='https://mdbootstrap.com/'>
            Ada Panthers A18
          </a>
        </div>
      </MDBFooter>
    );
  }