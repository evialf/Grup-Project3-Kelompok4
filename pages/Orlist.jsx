import React from "react";

export default function Orlist() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dom</td>
          <td>6000</td>
        </tr>
        <tr className={styles.row}>
          <td>Melissa</td>
          <td>5150</td>
        </tr>
      </tbody>
    </table>
  );
}
