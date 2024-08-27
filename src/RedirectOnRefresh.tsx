import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const RedirectOnRefresh = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      history.push('/');
    }
  }, [location, history]);

  return children;
};

export default RedirectOnRefresh;
