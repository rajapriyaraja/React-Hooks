import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableRow, TableHeader, TableHeaderCell, TableBody, TableCell, Button } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  onDelete, getData } from './MockAPI';

export function Read() {
  const [APIData, setAPIData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getData();
      setAPIData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await onDelete(id);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={() => navigate("/")}>Back</button>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Username</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Password</TableHeaderCell>
            <TableHeaderCell>Update</TableHeaderCell>
            <TableHeaderCell>Delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {APIData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.uname}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.password}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdate(data.id)}>Update</Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(data.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
