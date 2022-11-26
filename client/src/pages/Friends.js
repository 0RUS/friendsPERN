import React, { useState, useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchFriends } from '../http/personAPI';
import { PERSONS_ROUTE } from '../utils/consts';
const Friends = () => {
    const [persons, setPersons] = useState({person: []})
    const {id} = useParams();

    useEffect( () => {
        fetchFriends(id).then(data => setPersons(data.rows))
    }, [id])

    return (
        <div style={{height: "30em", padding:"2em", display:"flex", verticalAlign:"middle", justifyContent: "center", alignItems: "center"}}>
            {
            persons.length !== undefined ?
            <Table bordered hover variant="secondary" style={{width :'40em'}}>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                persons.map(item => {
                    return (
                      <tr key={item.id}  style={{transform: `rotate(0)`}}>
                        <td><a className="link-dark text-decoration-none stretched-link" href={PERSONS_ROUTE+"/"+item.id}>{ item.first_name }</a></td>
                        <td>{ item.gender }</td>
                      </tr>
                    );
                  })}
            </tbody>
            </Table>
            :
            <Spinner animation="border" />
            }
        </div>
    );
};

export default Friends;