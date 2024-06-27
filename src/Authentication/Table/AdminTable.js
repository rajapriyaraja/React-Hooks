import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const AdminTable = () => {
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
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
    <div>
    <div>AdminTable</div>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>
        {users && users.map(user => (
              <tr key={user.userId}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>{user.status}</td>
              </tr>
            ))}
        </tbody>
    </table>
    </div>
    </>
  )
}
export  default AdminTable;