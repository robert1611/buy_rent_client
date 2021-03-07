import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <div>
      <h3>404 - Not Found</h3>
      <p> It seems you're not at the right page</p>
      <div>
        <Link to='/'>Visit Home</Link>
      </div>
    </div>

  )
};

export default NotFoundPage;