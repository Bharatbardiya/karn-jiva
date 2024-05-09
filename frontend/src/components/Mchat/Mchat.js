import React, { useState } from 'react';
import axios from 'axios';
import './Qchat.css'; // Import custom styles

const AutismDetectionForm = () => {
  const [formData, setFormData] = useState({});
  const [questionNo, setQuestionNo] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [apiResult, setApiResult] = useState("undefined");
  const [apiMessage, setApiMessage] = useState("");

 const options = ["always", "usually", "sometimes", "rarely", "never"];
  const questionArray = [
    {
      key:"A1",
      name: "If you point at something across the room, does your child look at it? (FOR EXAMPLE, if you point at a toy or an animal, does your child look at the toy or animal?) ",
      type: "radio",
    },
    {
        key:"A2",
      name: "Have you ever wondered if your child might be deaf?  ",
      type: "radio",
    },
    {
        key:"A3",
      name: "Does your child play pretend or make-believe? (FOR EXAMPLE, pretend to drink from an empty cup, pretend to talk on a phone, or pretend to feed a doll or stuffed animal?) ",
      type: "radio",
    },
    {
        key:"A4",
      name: "Does your child like climbing on things? (FOR EXAMPLE, furniture, playground equipment, or stairs)",
      type: "radio",
    },
    {
        key:"A5",
      name: "Does your child make unusual finger movements near his or her eyes? (FOR EXAMPLE, does your child wiggle his or her fingers close to his or her eyes?) ",
      type: "radio",
    },
    {
        key:"A6",
      name: "Does your child point with one finger to ask for something or to get help? (FOR EXAMPLE, pointing to a snack or toy that is out of reach) ",
      type: "radio",
    }, 

    {
        key:"A7",
      name: " Does your child point with one finger to show you something interesting? (FOR EXAMPLE, pointing to an airplane in the sky or a big truck in the road) ",
      type: "radio",
    },
    {
        key:"A8",
      name: "Is your child interested in other children? (FOR EXAMPLE, does your child watch other children, smile at them, or go to them?) ",
      type: "radio",
    },
    {
        key:"A9",
      name: "Does your child show you things by bringing them to you or holding them up for you to see not to get help, but just to share?  (FOR EXAMPLE, showing you a flower, a stuffed animal, or a toy truck) ",
      type: "radio",
    },
    {
        key:"A10",
      name: "Does your child respond when you call his or her name? (FOR EXAMPLE, does he or she Yes No look up, talk or babble, or stop what he or she is doing when you call his or her name?) ",
      type: "radio",
    },
    {
        key:"A11",
      name: "When you smile at your child, does he or she smile back at you?  ",
      type: "radio",
    },
    {
        key:"A12",
      name: "Does your child get upset by everyday noises? (FOR EXAMPLE, does your child scream or cry to noise such as a vacuum cleaner or loud music?) ",
      type: "radio",
    },
    {
        key:"A13",
      name: "Does your child walk? ",
      type: "radio",
    },
    {
        key:"A14",
      name: "Does your child look you in the eye when you are talking to him or her, playing with him or her, or dressing him or her?  ",
      type: "radio",
    },
    {
        key:"A15",
      name: " Does your child try to get you to watch him or her? (FOR EXAMPLE, does your child look at you for praise, or say “look” or “watch me”?) ",
      type: "radio",
    },
    {
        key:"A16",
      name: " Does your child try to copy what you do? (FOR EXAMPLE, wave bye-bye, clap, or Yes make a funny noise when you do)    ",
      type: "radio",
    },
    {
        key:"A17",
      name: "If you turn your head to look at something, does your child look around to see what you are looking at? ",
      type: "radio",
    },
    {
        key:"A18",
      name: "Does your child understand when you tell him or her to do something? (FOR EXAMPLE, if you don’t point, can your child understand “put the book on the chair” or “bring me the blanket”?) ",
      type: "radio",
    },
    {
        key:"A19",
      name: "If something new happens, does your child look at your face to see how you feel about it? (FOR EXAMPLE, if he or she hears a strange or funny noise, or sees a new toy, will he or she look at your face?) ",
      type: "radio",
    },
    {
        key:"A20",
      name: " Does your child like movement activities? (FOR EXAMPLE, being swung or bounced on your knee)",
      type: "radio",
    },
  ];
  
  const convertToPayload = (formData) => {
    const _options = {
        "always":1,
        "usually":2,
        "sometimes":3,
        "rarely":4,
        "never":5,
    }
    const payload = {};
    payload["A1"] = Math.floor(_options[formData["A1"]]/4);
    payload["A2"] = Math.floor(_options[formData["A2"]]/4);
    payload["A3"] = Math.floor(_options[formData["A3"]]/4);
    payload["A4"] = Math.floor(_options[formData["A4"]]/4);
    payload["A5"] = Math.floor(_options[formData["A5"]]/4);
    payload["A6"] = Math.floor(_options[formData["A6"]]/4);
    payload["A7"] = Math.floor(_options[formData["A7"]]/4);
    payload["A8"] = Math.floor(_options[formData["A8"]]/4);
    payload["A9"] = Math.floor(_options[formData["A9"]]/4);
    payload["A10_Autism_Spectrum_Quotient"] = Math.floor(_options[formData["A10_Autism_Spectrum_Quotient"]]/4);
    payload["Age_Years"] = Number(formData["Age_Years"]);
    payload["Sex"] = formData["Sex"]==="Male" ? true : false;
    payload["Jaundice"] = formData["Jaundice"]==="Yes" ? true : false;
    payload["Family_mem_with_ASD"] = formData["Family_mem_with_ASD"]==="Yes" ? true : false;

    payload["Ethnicity_Black"] = false;
    payload["Ethnicity_Hispanic"] = false;
    payload["Ethnicity_Latino"] = false;
    payload["Ethnicity_Middle Eastern"] = false;
    payload["Ethnicity_Mixed"] = false;
    payload["Ethnicity_Native Indian"] = false;
    payload["Ethnicity_Others"] = false;
    payload["Ethnicity_Pacifica"] = false;
    payload["Ethnicity_South Asian"] = false;
    payload["Ethnicity_Turkish"] = false;
    payload["Ethnicity_White European"] = false;
    payload["Ethnicity_White-European"] = false;
    payload["Ethnicity_others"] = false;
    const Ethnicity_key = `Ethnicity_${formData["Ethnicity"]}`;
    payload[Ethnicity_key] = true;
    if(formData["Ethnicity"]==="White-European"){
        payload["Ethnicity_White European"] = true;
    }
    if(formData["Ethnicity"]==="Others"){
        payload["Ethnicity_others"] = true;
    }

    payload["Who_completed_the_test_Health Care Professional"] = false;
    payload["Who_completed_the_test_Others"] = false;
    payload["Who_completed_the_test_Parent"] = false;
    payload["Who_completed_the_test_Relative"] = false;
    payload["Who_completed_the_test_School and NGO"] = false;
    payload["Who_completed_the_test_Self"] = false;
    const who_key = `Who_completed_the_test_${formData["Who_completed_the_test"]}`;
    payload[who_key] = true;
    const array1 = [];
    array1.push(payload)
    return array1;
  }

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
      alert('Please select an option before proceeding to the next question.');
    }
  };

  const handlePrevious = () => {
    if (questionNo > 0) {
      setQuestionNo(questionNo - 1);
      setIsAnswered(true); // Assume previous question was answered when navigating back
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = convertToPayload(formData);
    try {
      console.log(payload);
      const response = await axios.post('http://127.0.0.1:5000', payload);
      console.log('Response from backend:', response.data);
      console.log('Response:', response.data[0]);
      // Display success message or redirect to another page
      setApiResult(response.data[0])
      console.log("apiresult", apiResult)
      if(apiResult.toLowerCase()==="yes"){
        setApiMessage("Based on the analysis, it appears that you may have Autism Spectrum Disorder (ASD). We recommend seeking professional advice and visiting an ASD care center or expert for further evaluation and support. Remember, early intervention and appropriate care can make a significant difference in managing ASD.");
      } else {
        setApiMessage("According to our analysis, it seems that you do not have Autism Spectrum Disorder (ASD). However, if you have any concerns or questions about your mental health or behavior, we encourage you to consult with a healthcare professional for personalized guidance and support.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error message to the user
    }
  };

  return (
    <div className="form-container my-3">
      <h1 className='font-weight-bold'>Autism Detection Screening Tool</h1>
      <form >
        <div className="question">
          <p className="question-text">
            Q.{questionNo + 1} {questionArray[questionNo].name}
          </p>
          {questionArray[questionNo].type === 'radio' ? (
            <div className="options-container">
              {questionArray[questionNo].option.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                  className='mr-2'
                    type="radio"
                    name={questionArray[questionNo].key}
                    value={option}
                    checked={formData[questionArray[questionNo].key] === option}
                    onChange={(e) =>
                      handleInputChange(questionArray[questionNo].key, e.target.value)
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          ) : questionArray[questionNo].type === 'number' ? (
            <input
              type="number"
              name={questionArray[questionNo].key}
              value={formData[questionArray[questionNo].key] || ''}
              onChange={(e) =>
                handleInputChange(questionArray[questionNo].key, e.target.value)
              }
              className="number-input"
              placeholder="Enter a number"
            />
          ) : null}
        </div>
        <div className="button-container">
          {questionNo > 0 && (
            <button type="button" className="prev-button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {questionNo === questionArray.length - 1 ? (
            <button type="button" className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </form>
      {
        apiResult !== "undefined" && (
            <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6"></div>
            <div className="card">
     <a className='btn btn-primary text-white mt-3 ml-3' style={{width:"100px"}} onClick={()=>(setApiResult("undefined"))}>Clear</a>
                <div className="card-body">
                <h5 className="card-title">Result</h5>
                <p className="card-text">
                    <span className="h4">Status:</span>
                    <span className='h3 font-weight-bold mx-2' style={{color: `${apiResult==="Yes" ? "red": "green"}`}}>{apiResult==="Yes" ? "ASD Positive" : "ASD Negative"}</span> 
                </p>
                <p className="card-text">
                    <span className="font-weight-bold mx-1">Message:</span>
                    <span style={{color: `${apiResult==="Yes" ? "red": "black"}`}}>

                    {apiMessage}
                    </span>
                </p>
                </div>
            </div>
            </div>
            </div>
        )
      }
    </div>
  );
};

export default AutismDetectionForm;
