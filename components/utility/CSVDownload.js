import React, { useState, useEffect } from 'react';
import json2csv from 'json2csv';
import DateCamelCase from './DateCamelCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function CSVDownload({type, children, className}) {
  const [companyName, setCompanyName] = useState(null);

  useEffect(() => {
    // Check if running in the browser before accessing localStorage
    if (typeof window !== 'undefined') {
      const storedCompanyName = localStorage.getItem('companyName');
      setCompanyName(storedCompanyName);
    }
  }, []);


  const handleDownload = async () => {
    try {

      if (!companyName) {
        console.error('No companyName found in localStorage');
        return;
      }

      // Fetch data from your API when the button is clicked
      let response;
      let fname;

      switch (type) {
        case "borg":
          response = await fetch("/api/fetchBorg?companyName=" + companyName);
          fname = "borg" + DateCamelCase();
          break;
        case "eaws":
          response = await fetch("/api/fetchEAWS?companyName=" + companyName);
          fname = "eaws" + DateCamelCase();
          break;
        case "nasa":
          response = await fetch("/api/fetchNASATLX?companyName=" + companyName);    
          fname = "nasa" + DateCamelCase();
          break;
        case "kfza":
          response = await fetch("/api/fetchKFZA?companyName=" + companyName);
          fname = "kfza" + DateCamelCase();    
          break;
        default:
          return;
      }
      
      if (response.ok) {
        const data = await response.json();
        const csvData = json2csv.parse(data.data); // Use the fetched data
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fname;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error('Error creating CSV:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload} className={`btn btn-success ${className}`}>
      <FontAwesomeIcon icon={faDownload} /> {children}
      </button>
    </div>
  );
}

export default CSVDownload;

