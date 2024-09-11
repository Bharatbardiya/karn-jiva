import React, { useState } from "react";
import axios from "axios";
import "../Qchat/Qchat.css"; // Import custom styles
import { Link, useNavigate } from "react-router-dom";
// import q1 from ''

const MchatASDTest = () => {
	const [formData, setFormData] = useState({});
	const [questionNo, setQuestionNo] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [apiResult, setApiResult] = useState(-1);
	const [apiMessage, setApiMessage] = useState("");
	const navigate = useNavigate();

	const options = ["always", "usually", "sometimes", "rarely", "never"];
	const questionArray = [
		{
			key: "A1",
			name: "If you point at something across the room, does your child look at it? (FOR EXAMPLE, if you point at a toy or an animal, does your child look at the toy or animal?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q1.png",
		},
		{
			key: "A2",
			name: "Have you ever wondered if your child might be deaf?",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q2.png",
		},
		{
			key: "A3",
			name: "Does your child play pretend or make-believe? (FOR EXAMPLE, pretend to drink from an empty cup, pretend to talk on a phone, or pretend to feed a doll or stuffed animal?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q3.jpg",
		},
		{
			key: "A4",
			name: "Does your child like climbing on things? (FOR EXAMPLE, furniture, playground equipment, or stairs)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q4.jpg",
		},
		{
			key: "A5",
			name: "Does your child make unusual finger movements near his or her eyes? (FOR EXAMPLE, does your child wiggle his or her fingers close to his or her eyes?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q5.png",
		},
		{
			key: "A6",
			name: "Does your child point with one finger to ask for something or to get help? (FOR EXAMPLE, pointing to a snack or toy that is out of reach)",
			type: "radio",
			option: ["yes", "no"],
			image: "/assets/images/m-chat/q6.jpg",
		},

		{
			key: "A7",
			name: "Does your child point with one finger to show you something interesting? (FOR EXAMPLE, pointing to an airplane in the sky or a big truck in the road)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q7.png",
		},
		{
			key: "A8",
			name: "Is your child interested in other children? (FOR EXAMPLE, does your child watch other children, smile at them, or go to them?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q8.jpg",
		},
		{
			key: "A9",
			name: "Does your child show you things by bringing them to you or holding them up for you to see not to get help, but just to share?  (FOR EXAMPLE, showing you a flower, a stuffed animal, or a toy truck)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q9.png",
		},
		{
			key: "A10",
			name: "Does your child respond when you call his or her name? (FOR EXAMPLE, does he or she Yes No look up, talk or babble, or stop what he or she is doing when you call his or her name?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q10.png",
		},
		{
			key: "A11",
			name: "When you smile at your child, does he or she smile back at you?",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q11.png",
		},
		{
			key: "A12",
			name: "Does your child get upset by everyday noises? (FOR EXAMPLE, does your child scream or cry to noise such as a vacuum cleaner or loud music?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q12.png",
		},
		{
			key: "A13",
			name: "Does your child walk?",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q13.png",
		},
		{
			key: "A14",
			name: "Does your child look you in the eye when you are talking to him or her, playing with him or her, or dressing him or her?",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q14.png",
		},
		{
			key: "A15",
			name: "Does your child try to get you to watch him or her? (FOR EXAMPLE, does your child look at you for praise, or say “look” or “watch me”?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q15.png",
		},
		{
			key: "A16",
			name: "Does your child try to copy what you do? (FOR EXAMPLE, wave bye-bye, clap, or Yes make a funny noise when you do)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q16.png",
		},
		{
			key: "A17",
			name: "If you turn your head to look at something, does your child look around to see what you are looking at? ",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q17.png",
		},
		{
			key: "A18",
			name: "Does your child understand when you tell him or her to do something? (FOR EXAMPLE, if you don't point, can your child understand “put the book on the chair” or “bring me the blanket”?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q18.jpeg",
		},
		{
			key: "A19",
			name: "If something new happens, does your child look at your face to see how you feel about it? (FOR EXAMPLE, if he or she hears a strange or funny noise, or sees a new toy, will he or she look at your face?)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q19.png",
		},
		{
			key: "A20",
			name: " Does your child like movement activities? (FOR EXAMPLE, being swung or bounced on your knee)",
			type: "radio",
			option: ["yes", "no"],
			image: "assets/images/m-chat/q20.png",
		},
	];

	const handleInputChange = (questionName, value) => {
		setFormData({ ...formData, [questionName]: value });
		setIsAnswered(true); // Mark the question as answered when an option is selected
	};

	const handleNext = () => {
		if (isAnswered) {
			if (questionNo < questionArray.length - 1) {
				setQuestionNo(questionNo + 1);
				setIsAnswered(false); // Reset isAnswered state for the next question
			}
		} else {
			alert(
				"Please select an option before proceeding to the next question."
			);
		}
	};

	const handlePrevious = () => {
		if (questionNo > 0) {
			setQuestionNo(questionNo - 1);
			setIsAnswered(true); // Assume previous question was answered when navigating back
		}
	};
	const handleMchat = () => {
		setApiResult(-1);
		// navigate("/mchat")
		window.location.reload();
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const positiveAnswer = ["A2", "A5", "A12"];
		let score = 0;
		for (const key in formData) {
			if (positiveAnswer.includes(key) && formData[key] === "yes") {
				score++;
			} else if (
				!positiveAnswer.includes(key) &&
				formData[key] === "no"
			) {
				score++;
			}
		}
		console.log("score : ", score);
		// console.log(formData)
		if (score <= 2) {
			setApiResult(0);
			setApiMessage(
				"Based on the analysis, it appears that you may not have Autism Spectrum Disorder (ASD). However, if you have any concerns or questions about your mental health or behavior, we encourage you to consult with a healthcare professional for personalized guidance and support."
			);
		} else if (score >= 3 && score <= 7) {
			setApiResult(1);
			setApiMessage(
				"Based on the analysis, it appears that you may have Autism Spectrum Disorder (ASD). We recommend seeking professional advice and visiting an ASD care center or expert for further evaluation and support. Remember, early intervention and appropriate care can make a significant difference in managing ASD."
			);
		} else {
			setApiResult(2);
			setApiMessage(
				"Based on the analysis, it appears that you may have Autism Spectrum Disorder (ASD). We recommend seeking professional advice and visiting an ASD care center or expert for further evaluation and support. Remember, early intervention and appropriate care can make a significant difference in managing ASD."
			);
		}
	};

	return (
		<div className="form-container my-3">
			<h1 className="font-weight-bold">
				Autism Detection Screening Tool(MChat)
			</h1>
			<form>
				<div className="question">
					<i>
						<img src={questionArray[questionNo].image} alt="image" style={{height: '300px' , marginBottom: '20px'}} />
					</i>

					<p className="question-text">
						Q.{questionNo + 1} {questionArray[questionNo].name}
					</p>
					<div className="options-container">
						{questionArray[questionNo].option.map(
							(option, index) => (
								<>
									<label key={index} className="option-label">
										<input
											className="mr-2"
											type="radio"
											name={questionArray[questionNo].key}
											value={option}
											checked={
												formData[
													questionArray[questionNo]
														.key
												] === option
											}
											onChange={(e) =>
												handleInputChange(
													questionArray[questionNo]
														.key,
													e.target.value
												)
											}
										/>
										{option}
									</label>
								</>
							)
						)}
					</div>
				</div>
				<div className="button-container">
					{questionNo > 0 && apiResult === -1 && (
						<button
							type="button"
							className="prev-button"
							onClick={handlePrevious}
						>
							Previous
						</button>
					)}
					{questionNo === questionArray.length - 1 ? (
						<button
							type="button"
							className="submit-button"
							onClick={handleSubmit}
						>
							Submit
						</button>
					) : (
						<button
							type="button"
							className="next-button"
							onClick={handleNext}
						>
							Next
						</button>
					)}
				</div>
			</form>
			{apiResult !== -1 && (
				<div className="container mt-5">
					<div className="row justify-content-center">
						<div className="col-md-6"></div>
						<div className="card">
							<a
								className="btn btn-primary text-white mt-3 ml-3"
								style={{ width: "100px" }}
								onClick={() => handleMchat()}
							>
								Reset
							</a>
							<div className="card-body">
								<h5 className="card-title">Result</h5>
								<p className="card-text">
									<span className="h4">Status:</span>
									<span
										className="h3 font-weight-bold mx-2"
										style={{
											color: `${
												apiResult === 2
													? "red"
													: apiResult === 1
													? "orange"
													: "green"
											}`,
										}}
									>
										{apiResult === 0
											? "Not ASD Positive / Low Risk"
											: apiResult === 1
											? "Modrate Risk"
											: "High Risk"}
									</span>
								</p>
								<p className="card-text">
									<span className="font-weight-bold mx-1">
										Message:
									</span>
									<span
										style={{
											color: `${
												apiResult === 2
													? "red"
													: apiResult === 1
													? "orange"
													: "green"
											}`,
										}}
									>
										{apiMessage}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MchatASDTest;
