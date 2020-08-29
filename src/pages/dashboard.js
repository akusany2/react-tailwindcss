import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2 className='text-center'>protected route</h2>
      <p className='text-center'>
        <Link to='/'>Home</Link>
      </p>
    </div>
  );
}
