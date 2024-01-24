import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const withTokenValidation = (WrappedComponent) => {
  const WithTokenValidation = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
      // Cek apakah token ada di localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login')
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithTokenValidation;
};

export default withTokenValidation;
