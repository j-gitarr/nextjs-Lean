import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

export default function ReactTableTest() {
  const columns = [
    {
      Header: '#',
      accessor: 'index',
    },
    {
      Header: 'Personen ID',
      accessor: 'persID',
    },
    {
      Header: 'Wert',
      accessor: 'value',
    },
    {
      Header: 'Datum',
      accessor: 'date',
    },
    // Add more columns as needed
  ];

  const [borgData, setBorgData] = useState([]); // State to hold the fetched data

  useEffect(() => {
    const companyName = localStorage.getItem("companyName");
    console.log("companyName is:" + companyName);
  
    if (companyName === null) {
      console.error("no Company Associated");
      return;
    }
  
    async function fetchData() {
      try {
        const response = await fetch("/api/fetchBorg?companyName=" + companyName);
        if (response.ok) {
          console.log("awaiting response");
          const data = await response.json();
          setBorgData(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, [companyName]);
  

  // Memoize the data
  const data = React.useMemo(() => borgData, [borgData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead className="table-dark">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
