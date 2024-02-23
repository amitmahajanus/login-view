import React, { useState, useEffect } from 'react';



const IndexPage = () => {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/email', { mode: 'no-cors' , credentials: 'include'}); 
        const data = await response.text();
        setApiResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page of the app.</p>
      <div>
        <h2>API Response:</h2>
        <p>{apiResponse}</p>
      </div>
    </div>
  );
};

export default IndexPage;