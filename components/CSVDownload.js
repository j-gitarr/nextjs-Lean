import React from 'react';
import json2csv from 'json2csv';

function CSVDownload({ data }) {
  const handleDownload = () => {
    try {
      const csvData = json2csv.parse(data);
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating CSV:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload} className='btn btn-primary'>
        Download CSV
      </button>
    </div>
  );
}

export default CSVDownload;
