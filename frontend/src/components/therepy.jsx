import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

export default function Therapy() {
    return (
        <div className="m-5">
            <div style={{}}>
                <MDBContainer className="mx-auto ">
                    <MDBCarousel showControls dark>
                        <MDBCarouselItem className="active text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Hearing Care</h5>
                                    {/* <p>Photographer</p> */}
                                    <p className="text-muted fs-3">
                                    Discover a world of sound with our comprehensive hearing care services. From diagnostic tests to hearing aid fittings and cochlear implants, our audiologists and hearing specialists work together to improve your child's communication and quality of life.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Speech & Language Therapy
                                    </h5>
                                    {/* <p>Web Developer</p> */}
                                    <p className="text-muted fs-3">
                                    Unlock your child's communication potential with our speech and language therapy services. Our experienced therapists use evidence-based techniques to improve speech clarity, language skills, and social communication, empowering your child to express themselves with confidence.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>

                        <MDBCarouselItem className="text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Occupational Therapy
                                    </h5>
                                    <p className="text-muted fs-3">
                                    Help your child master the skills they need for daily living with our occupational therapy services. Our therapists use play-based interventions to enhance fine motor skills, sensory integration, and self-care abilities, promoting independence and self-esteem.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>
                        
                        <MDBCarouselItem className="text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Physiotherapy

                                    </h5>
                                   
                                    <p className="text-muted fs-3">
                                    Support your child's physical development with our physiotherapy services. Our experienced physiotherapists design personalized exercise programs to improve mobility, strength, balance, and coordination, helping your child reach their full potential.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>
                        
                        <MDBCarouselItem className="text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Behavioural Modification Therapy

                                    </h5>
                                    <p className="text-muted fs-3">
                                    HTransform your child's behaviour with our behavioural modification therapy services. Our therapists use positive reinforcement techniques to address challenging behaviours, teaching new skills and strategies to improve social, emotional, and academic functioning.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>
                        <MDBCarouselItem className="text-center">
                            <img
                                src="https://picsum.photos/id/1/200/200"
                                alt="avatar"
                                className="rounded-circle shadow-1-strong mb-4"
                                style={{ width: "150px" }}
                            />
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol lg="8">
                                    <h5 className="mb-3 fs-2">Special Education
                                    
                                    </h5>
                                    <p className="text-muted fs-3">
                                    Empower your child's educational journey with our special education services. Our experienced educators and therapists collaborate to create customized learning plans, addressing individual needs and goals, and fostering academic and personal growth.
                                    </p>
                                </MDBCol>
                            </MDBRow>
                            
                        </MDBCarouselItem>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        </div>
    );
}
