import React, { useState, useEffect } from "react";
import { customConfirm } from "@components/utility/CustomConfirm";
import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, deDE } from "@mui/x-data-grid";
import ConvertTime from "@components/utility/ConvertTime";
import { GridToolbar, GridRowModes, GridActionsCellItem, GridRowEditStopReasons } from "@mui/x-data-grid";
import DateCamelCase from "@components/utility/DateCamelCase";

export default function EawsTable() {
  // Initialize rows as an empty array
  const [rows, setRows] = useState([]);

  const handleDelete = async (id, index) => {
    setTimeout(function() {
      document.getElementById("CustomConfirmConfirmButton").focus();
    },100);
    let del = await customConfirm("Wollen Sie den Eintrag wirklich löschen?");
    if(!del){
        return;
    }
    try {
        const response = await fetch("/api/deleteKfza?id=" + id, {
            method: "DELETE",
        });

        if (response.ok) {
            // If the delete operation is successful, update the state to reflect the change
            const updatedData = rows.filter((row) => row._id !== id);
            setRows(updatedData);
        } else {
            console.error("Failed to delete entry: " + id);
        }
    } catch (error) {
        console.error("Error deleting entry:", error);
    }
};


  useEffect(() => {
    const companyName = localStorage.getItem("companyName");

    if (companyName === null) {
      console.error("no Company Associated");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(
          "/api/fetchKFZA?companyName=" + companyName
        );
        if (response.ok) {
          console.log("awaiting response");
          const data = await response.json();
          setRows(data.data); // Set the fetched data in state
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex:0.2,
      minWidth: 50,
      cellClassName: "actions",
      getActions:({id}) =>{
        return [
          <GridActionsCellItem
            id={"DelFor"+id}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={()=>handleDelete(id)}
            color="inherit"
          />,
        ];
      }
    },
    { field: "name", headerName: "PID", flex:1, minWidth: 100 },
    { field: "question0", headerName: "Q0", flex:1,  minWidth: 50, editable:true },
    { field: "question1", headerName: "Q1", flex:1,  minWidth: 50, editable:true },
    { field: "question2", headerName: "Q2", flex:1,  minWidth: 50, editable:true },
    { field: "question3", headerName: "Q3", flex:1,  minWidth: 50, editable:true },
    { field: "question4", headerName: "Q4", flex:1,  minWidth: 50, editable:true },
    { field: "question5", headerName: "Q5", flex:1,  minWidth: 50, editable:true },
    { field: "question6", headerName: "Q6", flex:1,  minWidth: 50, editable:true },
    { field: "question7", headerName: "Q7", flex:1,  minWidth: 50, editable:true },
    { field: "question8", headerName: "Q8", flex:1,  minWidth: 50, editable:true },
    { field: "question9", headerName: "Q9", flex:1,  minWidth: 50, editable:true },
    { field: "question10", headerName: "Q10", flex:1,  minWidth: 50, editable:true },
    { field: "question11", headerName: "Q11", flex:1,  minWidth: 50, editable:true },
    { field: "question12", headerName: "Q12", flex:1,  minWidth: 50, editable:true },
    { field: "question13", headerName: "Q13", flex:1,  minWidth: 50, editable:true },
    { field: "question14", headerName: "Q14", flex:1,  minWidth: 50, editable:true },
    { field: "question15", headerName: "Q15", flex:1,  minWidth: 50, editable:true },
    { field: "question16", headerName: "Q16", flex:1,  minWidth: 50, editable:true },
    { field: "question17", headerName: "Q17", flex:1,  minWidth: 50, editable:true },
    { field: "question18", headerName: "Q18", flex:1,  minWidth: 50, editable:true },
    { field: "question19", headerName: "Q19", flex:1,  minWidth: 50, editable:true },
    { field: "question20", headerName: "Q20", flex:1,  minWidth: 50, editable:true },
    { field: "question21", headerName: "Q21", flex:1,  minWidth: 50, editable:true },
    { field: "question22", headerName: "Q22", flex:1,  minWidth: 50, editable:true },
    { field: "question23", headerName: "Q23", flex:1,  minWidth: 50, editable:true },
    { field: "question24", headerName: "Q24", flex:1,  minWidth: 50, editable:true },
    { field: "question25", headerName: "Q25", flex:1,  minWidth: 50, editable:true },
    
    {
      field: "timestamp",
      headerName: "Datum",
      flex:1,
      minWidth: 150,
      valueGetter: (params) => ConvertTime(params.value),
    },
  ];

  return (
    <div id="myVeryFreshTabel">
      {rows ? (
        rows.length !== -1 ? (
          <Box sx={{ height: 425, width: "auto" }}>
            <DataGrid
              localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
              slots={{ toolbar: GridToolbar }}
              slotProps={{toolbar:{csvOptions:{fileName: `KfzaData${DateCamelCase()}`}}}}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              disableRowSelectionOnClick
              getRowId={(row) => row._id}

            />
          </Box>
        ) : (
          <p>Es liegen noch keine Daten vor</p>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}