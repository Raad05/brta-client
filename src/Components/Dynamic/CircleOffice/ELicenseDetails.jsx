/* eslint-disable react/prop-types */
const ELicenseDetails = ({ detail, serial }) => {
  const { nidNo, name, userDocuments, date, approval } = detail;

  const approved = (e) => {
    e.preventDefault();
    console.log("Approved");
  };

  const rejected = (e) => {
    e.preventDefault();
    console.log("Rejected");
  };

  return (
    <tr className="e-license-details">
      <th>{serial}</th>
      <td>{nidNo}</td>
      <td>{name}</td>
      <td>{userDocuments}</td>
      <td>{date}</td>
      {approval === "Pending" ? (
        <td>
          <button onClick={approved} className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 35 27"
              fill="none"
            >
              <path
                d="M11.8876 25.5873L0.512542 14.2123C-0.170847 13.5289 -0.170847 12.4209 0.512542 11.7374L2.98736 9.26255C3.67075 8.57909 4.77885 8.57909 5.46224 9.26255L13.125 16.9252L29.5378 0.512542C30.2211 -0.170847 31.3293 -0.170847 32.0126 0.512542L34.4875 2.98743C35.1708 3.67082 35.1708 4.77885 34.4875 5.46231L14.3624 25.5874C13.679 26.2708 12.5709 26.2708 11.8876 25.5873Z"
                fill="black"
              />
            </svg>
          </button>
          <button onClick={rejected} className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 35 33"
              fill="none"
            >
              <path
                d="M24.1341 16.2722L34.0842 7.02015C35.3053 5.88479 35.3053 4.044 34.0842 2.90773L31.8729 0.851515C30.6518 -0.283838 28.6722 -0.283838 27.4501 0.851515L17.5 10.1035L7.54986 0.851515C6.32884 -0.283838 4.34915 -0.283838 3.12713 0.851515L0.915767 2.90773C-0.305256 4.04308 -0.305256 5.88387 0.915767 7.02015L10.8659 16.2722L0.915767 25.5242C-0.305256 26.6595 -0.305256 28.5003 0.915767 29.6366L3.12713 31.6928C4.34815 32.8282 6.32884 32.8282 7.54986 31.6928L17.5 22.4408L27.4501 31.6928C28.6712 32.8282 30.6518 32.8282 31.8729 31.6928L34.0842 29.6366C35.3053 28.5013 35.3053 26.6605 34.0842 25.5242L24.1341 16.2722Z"
                fill="black"
              />
            </svg>
          </button>
        </td>
      ) : (
        <td>{approval}</td>
      )}
    </tr>
  );
};

export default ELicenseDetails;
