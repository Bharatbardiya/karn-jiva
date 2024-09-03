import React, { Fragment } from "react";
import KarnJivaTeam from "./Karn/KarnJivaTeam";

const About = () => {
	return (
		<Fragment>
			<div className="about">
				<div className="container">
					<div className="row">
						<dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="about_box" style={{width:"80%"}}>
								<figure>
									<img
										src="assets/images/program/program_collage.png"
										alt="image"
									/>
								</figure>
							</div>
						</dir>
						<dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="about_box">
								<h3>What is Karn jiva</h3>
								<p>
									Welcome to Karn Jiva Child Development &
									Hearing Care Clinic, a beacon of hope and
									support for children. Our name, 'Karn Jiva',
									symbolizes the union of hearing and life,
									reflecting our commitment to empowering
									children to reach their full potential.
									<br />
									<br />
									Our journey began with a vision to provide
									comprehensive care for children with
									developmental delays, Autism, Down's
									Syndrome, disabilities, and hearing
									impairments. Our team of dedicated
									professionals, including speech therapists,
									occupational therapists, behavioral
									therapists, physiotherapists, and special
									educators, Audiologist & Psychologist work
									together to create personalized treatment
									plans tailored to each child's unique needs.
									<br />
									<br />
									At Karn Jiva, we believe that every child
									deserves to be heard, seen, and empowered.
									Our state-of-the-art facilities and
									cutting-edge technology enable us to provide
									world-class services, including hearing aids
									and cochlear implants. Our compassionate and
									nurturing environment fosters a sense of
									belonging, making every child feel valued
									and supported.
									<br />
									<br />
									We are dedicated to helping children
									overcome challenges, achieve milestones, and
									thrive in life. Join us on this journey, and
									together, let's unlock the full
									potential of your child.
								</p>
							</div>
						</dir>
					</div>
				</div>
			</div>
			{/* CHOOSE  */}
			{/* <div className="whyschose">
    <div className="container">
      <div className="row">
        <div className="col-md-7 offset-md-3">
          <div className="title">
            <h2>Why <strong className="black">choose us</strong></h2>
            <span>Fastest repair service with best price!</span>
          </div>
        </div>
      </div>
    </div>
  </div> */}
			{/* <div className="choose_bg">
    <div className="container">
      <div className="white_bg">
        <div className="row">
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/1.png" alt='image'/></i>
              <h3>Data recovery</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/2.png" alt='image'/></i>
              <h3>Computer repair</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/3.png" alt='image'/></i>
              <h3>Mobile service</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/4.png" alt='image'/></i>
              <h3>Network solutions</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <div className="col-md-12">
            <a className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
			{/* end CHOOSE */}
			<KarnJivaTeam />
		</Fragment>
	);
};

export default About;
