import React, { useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import MainNavbar from "../components/layout/Navbar";
import ComponentBar from "../components/layout/ComponentBar";
import Footer from "../components/layout/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Announcement1 from "../components/images/sample-images/announcement1.png";
import Announcement2 from "../components/images/sample-images/announcement2.png";
import Announcement3 from "../components/images/sample-images/announcement3.png";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Post = () => {

    //Editable
    const [isEditing, setIsEditing] = useState(false);
    const [organizerName, setOrganizerName] = useState("Organizer Name");
    const [phoneNumber, setPhoneNumber] = useState("+1 234 567 890");
    const [email, setEmail] = useState("example@example.com"); 
    const [mainImage, setMainImage] = useState(Announcement3);
    const [publishedDate, setPublishedDate] = useState("2023-10-15");
    const navigate = useNavigate();

    const handleEditRedirect = () => {
       
        navigate("/admin"); 
    };

    // Edit
    const toggleEdit = () => setIsEditing(!isEditing);

    // Input
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrganizerName(e.target.value);
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value); 
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setPublishedDate(e.target.value);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMainImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div>
            <ComponentBar />
            <MainNavbar />
            <Container className="mt-5">
                <Row>
                    {/* Main Post */}
                    <Col xs={12} md={8}>    
                        <div className="main-post">
                            <img src={mainImage} alt="Announcement" width={800} className="main-img" />
                            <h4>Titulo del Post</h4>
                            <p className="published-date">
                            Published on: {isEditing ? (
                                <input 
                                    type="date" 
                                    value={publishedDate} 
                                    onChange={handleDateChange} 
                                    className="form-control date-input"
                                />
                            ) : publishedDate}
                        </p>
                            <p>This is a sample announcement post. Here you can add the details about the announcement, along with an image to make it more engaging.</p>
                        </div>
                        <hr/>
                        <div className="organizer-info">
                            <h4>For more Information</h4>
                            {isEditing ? (
                                <>
                                    <input 
                                        type="text" 
                                        value={organizerName} 
                                        onChange={handleNameChange} 
                                        className="form-control mb-2"
                                        placeholder="Enter Organizer Name"
                                    />
                                    {/*
                                    <input 
                                        type="tel" 
                                        value={phoneNumber} 
                                        onChange={handlePhoneChange} 
                                        className="form-control mb-2"
                                        placeholder="Enter Phone Number"
                                    />

                                    <input 
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="form-control mb-2"
                                        placeholder="Enter Email"
                                    />
                                    <input 
                                        type="file" 
                                        onChange={handleImageChange} 
                                        className="form-control mb-2"
                                    />*/}

                                </>
                            ) : (
                                <>
                                    <p><i className="bi bi-person-fill organizer-icon"></i> {organizerName}</p>
                                    <p><i className="bi bi-telephone-fill phone-icon"></i> {phoneNumber}</p>
                                    <p><i className="bi bi-envelope-fill email-icon"></i> <a href={`mailto:${email}`} className="email-link">{email}</a></p>
                                </>
                            )}
                        </div>

                         {/* Edit Button*/}
                        <Button onClick={handleEditRedirect} variant="primary">
                            {isEditing ? "Save Changes" : "Edit"}
                        </Button>
                    </Col>

                    {/* Related Posts Column */}
                    <Col xs={12} md={4}>
                        <h4 className="related-heading">Otros Posts</h4>
                        <Card className="related-post">
                            <Card.Img src={Announcement1} alt="Related Post 1" />
                            <Card.Body>
                                <Card.Title>Related Post 1</Card.Title>
                                <Card.Text>Brief description of related post 1.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="related-post">
                            <Card.Img src={Announcement2} alt="Related Post 2" />
                            <Card.Body>
                                <Card.Title>Related Post 2</Card.Title>
                                <Card.Text>Brief description of related post 2.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Post;
