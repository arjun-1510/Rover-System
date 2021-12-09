import {Navbar , Form,  FormControl, Nav , NavDropdown , Container}  from 'react-bootstrap';



const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" varient="dark">
  <Container>
    <Navbar.Brand className="mr-auto" >React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      

          <Nav className="m-auto">
          <Form inline>
        
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
      </Form>
      </Nav>
      <Nav className="m-auto">
        <Nav.Link href="#home">My Notes</Nav.Link>
        
        <NavDropdown title="Arjun" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header;
