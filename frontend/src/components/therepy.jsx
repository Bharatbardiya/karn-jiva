import React, { useState } from "react";
import {
	MDBCarousel,
	MDBCarouselItem,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";

const TherapyData = [
	{
		image: "assets/images/services/hearing_test.jpeg",
        title: "Hearing Assessment & Hearing Aids",
        description: "Specialized Pediatric & Adult Hearing Assessments At our Child Development Centre and Hearing Care Clinic, we prioritize hearing health across all ages, with a special focus on children where early detection is vital for language, learning, and social development. Our expert pediatric audiologists conduct thorough hearing assessments using child-friendly, non-invasive techniques, ensuring that even the youngest patients feel comfortable. We also offer hearing tests for adults, identifying issues that could impact communication and daily functioning.\nCustom Hearing Aid Solutions for Children and Adults. \nFor children diagnosed with hearing loss, we provide personalized hearing aids tailored to their unique needs. Our child-specific hearing aids are designed to support speech development and learning, ensuring durability and comfort for active kids. We also offer hearing aids for adults, featuring cutting-edge technology in sound clarity, noise reduction, and wireless connectivity, ensuring better integration into both school and home environments.",
	},
	{
		image: "assets/images/services/Vestibular-Rehabilitation-Therapy.jpg",
		title: "Vestibular Evaluation & Rehabilitation",
		description: "Pediatric Vestibular Assessments for Balance & Dizziness\nBalance disorders in children can affect their motor skills, coordination, and even academic performance. Our vestibular evaluation services focus on diagnosing dizziness, vertigo, or balance difficulties in children. We use specialized techniques to identify vestibular dysfunctions and help children regain their balance for better mobility and physical activity.\nVestibular Rehabilitation for Children & Adults\nOnce diagnosed, our rehabilitation programs are designed to help children improve their balance, coordination, and confidence in movement. Through structured exercises and therapies, we address dizziness and imbalance to promote better motor development. Our vestibular rehabilitation services also extend to adults facing dizziness, helping them regain stability and independence in daily activities."
	},
	{
		image: "assets/images/services/speech_therapy.jpeg",
		title:"Speech Therapy",
		description: "Speech & Language Therapy for Children\nSpeech and language delays can have a significant impact on a child's ability to learn, interact socially, and build self-esteem. Our experienced speech-language pathologists provide individualized therapy for children with speech delays, articulation issues, stuttering, or language comprehension difficulties. We create personalized treatment plans that make therapy fun and engaging, helping children build the communication skills they need for success in school and social interactions.\nSpeech Therapy for Children with Hearing Loss\nChildren with hearing impairments often need specialized speech therapy to support their language development. We work closely with children who use hearing aids or cochlear implants, helping them develop clear speech, improve listening skills, and engage confidently in conversations."
	},
	{
		image: "assets/images/services/occupational_therapy.jpg",
        title: "Occupational Therapy",
        description: "Developing Life Skills for Children\nOur occupational therapy services focus on helping children develop the fine motor skills, coordination, and sensory processing abilities they need to thrive in school and daily life. Whether it's learning to hold a pencil, improving handwriting, or developing self-care routines, our therapists work with children to build independence and self-confidence.\nSensory Integration Therapy for Children\nFor children with sensory processing challenges, we offer specialized therapy to help them better manage sensory input from their environment. This includes support for children who are sensitive to light, sound, textures, or movement, ensuring they can engage fully in learning and play without feeling overwhelmed.",
	},
	{
		image: "assets/images/services/Behavioral_therapy.jpeg",
        title: "ABA Therapy / Behavioral Therapy",
        description: "Applied Behavior Analysis (ABA) for Autism & Behavioral Challenges\nOur ABA Therapy services are designed for children with Autism Spectrum Disorder (ASD) or other behavioral challenges. Through evidence-based techniques, we help children improve social interactions, develop positive behavior patterns, and reduce disruptive behaviors. Our approach is child-centered, and we work closely with families to set achievable goals, fostering positive development in a structured, supportive environment.\nBehavioral Therapy for Children with Developmental Delays\nChildren with developmental delays may struggle with emotional regulation, following instructions, or social interactions. Our behavioral therapists use play-based and evidence-driven strategies to encourage positive behavior, helping children build coping skills, emotional resilience, and better behavior management."
	},
	{
		image: "assets/images/services/psychology.jpg",
        title: "Psychological Evaluation",
        description: "Comprehensive Psychological Assessments for Children\nUnderstanding a child’s emotional, cognitive, and behavioral challenges is key to their development. We offer detailed psychological evaluations to diagnose a wide range of concerns, including learning disabilities, ADHD, autism, and emotional issues. These assessments are performed by child psychologists and are essential for creating individualized education or treatment plans tailored to the child’s unique needs.\nEarly Intervention for Emotional and Behavioral Challenges\nThrough early diagnosis and intervention, we aim to provide children with the right support at the right time. Our evaluations lead to personalized recommendations for therapy, behavioral intervention, or educational support, ensuring that every child can reach their full potential."
	},
	{
		image: "assets/images/services/physiotherapy.jpg",
		title: "Physiotherapy",
		description: "Pediatric Physiotherapy for Motor Skill Development\nChildren experiencing delayed motor milestones, muscle weakness, or physical disabilities benefit greatly from our pediatric physiotherapy services. We work to improve balance, coordination, strength, and mobility, helping children engage more fully in physical activities and daily life. Our physiotherapists specialize in child-centered care, making exercises fun and interactive while focusing on key developmental goals.\nRehabilitation for Physical Conditions\nWe offer physiotherapy for children recovering from injuries, surgeries, or chronic conditions like cerebral palsy. Our goal is to help them build strength, flexibility, and endurance to improve their overall physical well-being. Through tailored rehabilitation programs, we ensure children develop the physical capabilities needed to live active, healthy lives."
	},
	{
		image: "assets/images/services/Special_educatio2.jpeg",
		title: "Special Education",
		description: "Individualized Education Programs (IEP) for Children with Special Needs\nOur Special Education services are designed to meet the unique learning needs of children with developmental disabilities, learning disorders, or cognitive challenges. We work closely with families and schools to develop customized IEPs that support the child’s academic, social, and emotional growth. Our team of special educators uses a holistic approach to enhance learning in a way that’s meaningful and engaging for each child.\nSupporting Learning through Inclusive Education\nWe believe in creating inclusive educational environments where children of all abilities can learn and grow together. Our special education services include tailored instruction, behavior support, and adaptive strategies to help children succeed in school while fostering a positive self-image."
	}
]

export default function Therapy() {

	const [currentTherapy, setCurrentTherapy] = useState(TherapyData[0]);
	return (
		<>
		
		<div className="m-5">
				<MDBContainer className="mx-auto ">
					<MDBCarousel showControls dark>
					{
						TherapyData.map((therapy, i)=> (
							<MDBCarouselItem className={`text-center ${i==0 && "active"}`}>
								<img
									src={therapy.image}
									alt="avatar"
									className="rounded-circle shadow-1-strong mb-4"
									style={{ width: "250px" }}
								/>
								<MDBRow className="d-flex justify-content-center">
									<MDBCol lg="8">
										<h5 className="mb-3 fs-2">{therapy.title}</h5>
										<p className="text-muted fs-4">
											{therapy.description.substring(0,50)}... 
											<span data-bs-toggle="modal" data-bs-target="#detailTherapy" style={{color:"blue", cursor:"pointer"}} onClick={()=>{
												setCurrentTherapy(therapy);
											}}>read more</span>
										</p>
									</MDBCol>
								</MDBRow>
							</MDBCarouselItem>
						))
					}
					
					</MDBCarousel>
				</MDBContainer>
		</div>

		<div class="modal fade" id="detailTherapy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel" style={{color:"black"}}>{currentTherapy.title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="card" style={{width: "100%"}}>
				<img src={currentTherapy.image} class="card-img-top" alt="..."/>
				<div class="card-body">
					<p class="card-text">{currentTherapy.description}</p>
				</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
			</div>
		</div>
		</div>
		</>
	);
}
