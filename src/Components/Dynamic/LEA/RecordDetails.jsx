/* eslint-disable react/prop-types */
const RecordDetails = ({ detail, serial }) => {
  const { licenseNo, txId, offenseType, date } = detail;

  return (
    <tr className="Record-details">
      <th>{serial}</th>
      <td>{licenseNo}</td>
      <td>{txId}</td>
      <td>{offenseType}</td>
      <td>{date}</td>
      <td>Details</td>
    </tr>
  );
};

export default RecordDetails;
