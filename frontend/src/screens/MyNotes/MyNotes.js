import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
import {Link}  from "react-router-dom"
import { fontSize } from '@mui/system';
import notes,{} from "../../data/notes";


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
                    <Card style={{margin:10}}>
                    <Card.Header style={{display:"flex"}}>
                        <div  style={{
                            color:"block",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18,
    
                        }}>
                            {note.title}
                        </div>
                   
                    <div>
                        <Button href={`/notes/${note._id}`}>Edit</Button>
                        <Button variant='danger' className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                    </div>
                    </Card.Header>
                    <Card.Body>
                        <h4>
                            <Badge bg='info' >
                                Category - {note.category}
                            </Badge>
                        </h4>



                  <blockquote className="blockquote mb-0">
                   <p>
                      
                   {note.content}
                  </p>
                   <footer className="blockquote-footer">
                    Creted On-Date
                   </footer>
                 </blockquote>
                   </Card.Body>
                </Card>

                 ))
             }

            
           
        </MainScreen>
        </div>
    )
}

export default MyNotes;
