import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DataField(props) {
  // Destructure the props to get 'key' and 'value'
  const { index, value, date, id, onDelete, onEdit, persID, workplace,
          EAWS, 
          BORG,
          NASA, mental, physical, temporal, performance, effort, frustration, 
          KFZA, kfzaValues,
          Custom, valueName} = props;

  // Use a separate variable to check if an entry exists
  const entryExists = index !== undefined && value !== undefined;

  const nasaExists = index !== undefined && mental !== undefined && physical !== undefined && temporal !== undefined && performance !== undefined && effort !== undefined && frustration !== undefined;

  const handleDelete = () => {
    // Trigger the delete operation by calling onDelete
    onDelete(id, index);
  };

  const handleEdit = () => {
    onEdit(id, index);
  }

  return (
    <>
      {EAWS ? (
        entryExists ? (
          <tr>
            <th scope="row">{index}</th>
            <td>{value}</td>
            <td>{date}</td>
            <td className="text-end">
              <button className="btn btn-primary spaceRightSM" onClick={handleEdit}>
                Edit <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ) : (
          <tr><td>Error</td></tr>
        )
      ) : null}

      {BORG ? (
        entryExists ? (
          <tr>
            <th scope="row">{index}</th>
            <td>{workplace}</td>
            <td>{persID}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td className="text-end">
              <button className="btn btn-primary spaceRightSM" onClick={handleEdit}>
                Edit <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ) : (
          <tr><td>Error</td></tr>
        )
      ) : null}

      {NASA ? (
        nasaExists ? (
          <tr>
            <th scope="row">{index}</th>
            <td>{persID}</td>
            <td>
              <table className="table table-sm table-borderless">
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
                  </tr>
                </tbody>
              </table>
            </td>
            <td>{date}</td>
            <td>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ) : (
          <tr><td>Error</td></tr>
        )
      ) : null}

      {KFZA ? (
        (
          <tr>
            <th scope="row">{index}</th>
            <td>{persID}</td>
            <td>
              {kfzaValues.map((item) => (
                <span key={item.index}>{`${item.value}, `}</span>
              ))}
            </td>

            <td>{date}</td>
            <td>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        )
      ) : null}

      {Custom?(
        <tr>
          <th scope="row">{index}</th>
          <td>{valueName}</td>
          <td>{workplace}</td>
          <td>{value}</td>
          <td>{date}</td>
          <td className="text-end">
              <button className="btn btn-primary spaceRightSM" onClick={handleEdit}>
                Edit <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
        </tr>
      ): null}

    </>
  );
}
