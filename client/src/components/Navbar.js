import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MAX_FOLLOWING_ROUTE, NOT_FOLLOWING_ROUTE, PERSONS_ROUTE } from '../utils/consts';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="ml-auto">
                <Nav.Link href={PERSONS_ROUTE}>PERSONS</Nav.Link>
                <Nav.Link href={MAX_FOLLOWING_ROUTE}>MAX FOLLOWING</Nav.Link>
                <Nav.Link href={NOT_FOLLOWING_ROUTE}>NOT FOLLOWING</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;