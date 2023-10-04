import React, { useState, useEffect } from "react";
import { customConfirm } from "@components/utility/CustomConfirm";
import { Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { DataGrid, deDE } from "@mui/x-data-grid";
import ConvertTime from "@components/utility/ConvertTime";
import { GridToolbar, GridRowModes, GridActionsCellItem, GridRowEditStopReasons } from "@mui/x-data-grid";
import DateCamelCase from "@components/utility/DateCamelCase";

export default function BorgTable() {
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
        const response = await fetch("/api/deleteBorg?id=" + id, {
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
          "/api/fetchBorg?companyName=" + companyName
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
    { field: "workplace", headerName: "Arbeitsstation", flex:1, minWidth: 150 },
    { field: "name", headerName: "PID", flex:1, minWidth: 150 },
    { field: "value", headerName: "Wert", flex:1,  minWidth: 90, editable:true },
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
          <Box sx={{ height: 410, width: "auto" }}>
            <DataGrid
              localeText={deDE.components.MuiDataGrid.defaultProps.localeText}
              slots={{ toolbar: GridToolbar }}
              slotProps={{toolbar:{csvOptions:{fileName: `BorgData${DateCamelCase()}`}}}}
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