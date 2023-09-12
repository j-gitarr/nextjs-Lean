import React from "react";

export default function DataField(props) {
  // Destructure the props to get 'key' and 'value'
  const { index, value, date, id, onDelete, onEdit, EAWS, BORG, persID, NASA, mental, physical, temporal, performance, effort, frustration} = props;

  // Use a separate variable to check if an entry exists
  const entryExists = index !== undefined && value !== undefined;

  const nasaExists = index !== undefined && mental !== undefined && physical !== undefined && temporal !== undefined && performance !== undefined && effort !== undefined && frustration !== undefined;

  const handleDelete = () => {
    // Trigger the delete operation by calling onDelete
    onDelete(id, index);
  };

  const handleEdit = ()=>{
    onEdit(id, index);
  }


  return (
    <>
    
    {EAWS? (
        entryExists ? (
            <tr>
                <th scope="row">{index}</th>
                <td>{value}</td>
                <td>{date}</td>
                <button className="btn btn-primary" onClick={handleEdit}>
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    <i className="fas fa-trash" ></i> Delete
                </button>
                
            </tr>
        ) : (
            <tr><td>Error</td></tr>
        )
    ): null}

    {BORG? (
        entryExists ? (
            <tr>
                <th scope="row">{index}</th>
                <td>{persID}</td>
                <td>{value}</td>
                <td>{date}</td>
                <button className="btn btn-primary" onClick={handleEdit}>
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    <i className="fas fa-trash" ></i> Delete
                </button>
                
            </tr>
        ) : (
            <tr><td>Error</td></tr>
        )
    ): null}

    {NASA? (
        nasaExists ? (
            <><tr>
                <th scope="row">{index}</th>
                <td>{persID}</td>
                <td>{date}</td>
            </tr><tr>
                <td colSpan="4">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Geistig</th>
                        <th>Körperlich</th>
                        <th>Zeitlich</th>
                        <th>Leistung</th>
                        <th>Anstrengung</th>
                        <th>Frustration</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{mental}</td>
                        <td>{physical}</td>
                        <td>{temporal}</td>
                        <td>{performance}</td>
                        <td>{effort}</td>
                        <td>{frustration}</td>
                        <button className="btn btn-danger" onClick={handleDelete}>
                            <i className="fas fa-trash" ></i> Delete
                        </button>
                    </tr>
                    </tbody>
                </table>
                </td>
            </tr></>
        ) : (
            <tr><td>Error</td></tr>
        )
    ): null}

    </>  
  );
}
