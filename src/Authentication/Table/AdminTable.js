import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Tooltip } from 'primereact/tooltip';
import axios from 'axios';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token not found in local storage');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8080/api/admin/getAllusers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
      } catch (error) {
        setError('Error fetching user data');
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-5 mt-5 text-secondary text-center">Admin Table</h1>
      <div className="container mt-5">
        <div className="card">
          <DataTable value={users} paginator rows={10} rowsPerPageOptions={[5, 10, 20]} className="p-datatable-striped">
            <Column field="userName" header="Name" sortable />
            <Column field="email" header="Email" sortable />
            <Column field="mobileNo" header="Mobile No" sortable />
            <Column field="status" header="Status" sortable />
          </DataTable>
        </div>
      </div>
    </>
  );
};
