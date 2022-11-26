import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchFriends, fetchOnePerson } from '../http/personAPI';
import { useParams } from 'react-router-dom';
import { PERSONS_ROUTE, FRIENDS_ROUTE } from '../utils/consts';
import { Spinner } from 'react-bootstrap';

const Person = () => {
    const [person, setOnePerson] = useState({person: []})
    const [friendsCount, setFriendsCount] = useState(-1)
    const {id} = useParams();

    useEffect( () => {
        fetchOnePerson(id).then(data => setOnePerson(data))
        fetchFriends(id).then(data => setFriendsCount(data.count))
    }, [id])

    return (
        <div style={{height: "30em", display:"flex", flexDirection:"column", verticalAlign:"middle", justifyContent: "center", alignItems: "center"}}>
        {
        person.first_name !== undefined ? 
        <>
        <Card border="dark" bg="light" key="light"
            text="black" style={{ width: '20rem'}}>
        <Card.Header as="h1">{person.first_name}</Card.Header>
        <Card.Body>
            <Card.Text as="h4">{person.gender}</Card.Text>
            <Card.Text as="h5"><strong>FRIENDS : {friendsCount === -1 ? (<Spinner animation='border' size='sm'/>) : friendsCount} </strong><a className="btn btn-dark" href={PERSONS_ROUTE + "/" + id + FRIENDS_ROUTE}>Show</a></Card.Text>
            <br/>
            <Card.Link className="link-dark" href={PERSONS_ROUTE}><strong>Back</strong></Card.Link>
        </Card.Body>
        </Card>
        </>
        :
        <Spinner animation="border" />
        }
        </div>
        );
};

export default Person;