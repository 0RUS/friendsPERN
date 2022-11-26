import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { fetchMaxFollowing, fetchNotFollowing } from '../http/personAPI';
import { MAX_FOLLOWING_ROUTE, PERSONS_ROUTE } from '../utils/consts';

const Following = () => {
    const location = useLocation()
    const isMax = location.pathname === MAX_FOLLOWING_ROUTE ? true : false;    
    
    const [persons, setPersons] = useState({persons: []})

    useEffect( () => {
        isMax ? 
        fetchMaxFollowing().then(data => setPersons(data))
        :
        fetchNotFollowing().then(data => setPersons(data))
    }, [isMax])

    console.log(isMax)

    return (
            <div style={{height: "30em", padding:"2em", display:"flex", verticalAlign:"middle", justifyContent: "center", alignItems: "center"}}>
                {
            persons.length !== undefined ?
            <Table bordered hover variant="secondary">
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

export default Following;