import React from 'react'
import Table from 'react-bootstrap/Table'
import { Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import CURRENT_USER from '../../../Queries/CURRENT_USER'

export default function CurrentUser () {
  const { loading, error, data, refetch } = useQuery(CURRENT_USER)

  if (loading) return <div>Loading...</div>
  if (error) return <Redirect to='/auth/signin' />

  const { id, firstname, lastname, username } = data.currentUser

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{username}</td>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  )
}
