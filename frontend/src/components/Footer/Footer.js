import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
    return (
             <footer style={{width:'100%',position:'relative',bottom:0,justifyContent:'center'}} >
               <Container>
                 <Row >
                  <Col className =" text-center py3">
                    Copyright @copy: Note Zipper
                  </Col>
                 </Row>
               </Container>
               </footer>
    )
}

export default Footer;