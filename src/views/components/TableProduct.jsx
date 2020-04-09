import React from "react";

const TableProduct = () => {
  let arr = [
    { nama: "Seto", pekerjaan: "Developer" },
    { nama: "Anton", pekerjaan: "Designer" },
  ];

  const renderRows = () => {
    return arr.map((val, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{val.nama}</td>
          <td>{val.pekerjaan}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Pekerjaan</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default TableProduct;
