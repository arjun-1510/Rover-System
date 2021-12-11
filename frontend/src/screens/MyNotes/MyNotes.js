import React from 'react';
import {  Badge, Button, Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
import {Link}  from "react-router-dom"
import { fontSize } from '@mui/system';
import notes,{} from "../../data/notes";
import Accordion from 'react-bootstrap/Accordion'





const MyNotes = () => {

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure")) {

        }
    }


    return (
        <div>
            
        <MainScreen title="Welcome Back Arjun......">
            <Link to="createnote">
            <Button style={{marginLeft:10, marginBottom: 6}} size="lg">
                Create New Note
            </Button>
            </Link>
             {
                 notes.map(note => (

                    <Accordion>
                    <Card style={{ margin: 10 }} key={note._id}>
                      <Card.Header style={{ display: "flex" }}>
                        <span
                          // onClick={() => ModelShow(note)}
                          style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18,
                          }}
                        >
                          <Accordion.Toggle
                            as={Card.Text}
                            variant="link"
                            eventKey="0"
                          >
                            {note.title}
                          </Accordion.Toggle>
                        </span>
      
                        <div>
                          <Button href={`/note/${note._id}`}>Edit</Button>
                          <Button
                            variant="danger"
                            className="mx-2"
                            onClick={() => deleteHandler(note._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <h4>
                            <Badge variant="success">
                              Category - {note.category}
                            </Badge>
                          </h4>
                          <blockquote className="blockquote mb-0">
                            <div>{note.content}</div>
                            
                          </blockquote>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                 ))
             }

            
           
        </MainScreen>
        </div>
    )
}

export default MyNotes;
