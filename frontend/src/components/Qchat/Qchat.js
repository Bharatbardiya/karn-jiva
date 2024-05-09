
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Qchat.css'; // Import custom styles

// const AutismDetectionForm = () => {
//   const [formData, setFormData] = useState({});
//   const [questionNo, setQuestionNo] = useState(0);
//   const [isAnswered, setIsAnswered] = useState(false);

//   const questionArray = [
//             {
//               name: "Does your child look at you when you call his/her name?",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "How easy is it for you to get eye contact with your child?",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child point to indicate that he/she wants something?(e.g. a toy that is out of reach)",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child point to share interest with you?(e.g. pointing at an interesting sight)",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child pretend?(e.g. care for dolls, talk on a toy phone)",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child follow where you’re looking?",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?(e.g. stroking hair, hugging them)",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "would you describe your child’s first words as:",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child use simple gestures?(e.g. wave goodbye)",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Does your child stare at nothing with no apparent purpose?",
//               type: "radio",
//               option: ["1","2","3","4","5"],
//             },
//             {
//               name: "Age(in years)",
//               type: "number",
//             },
//             {
//               name: "Sex",
//               type: "radio",
//               option: ["Male", "Female"],
//             },
//             {
//               name: "Jaundice",
//               type: "radio",
//               option: ["Yes", "No"],
//             },
//             {
//               name: "Family_mem_with_ASD",
//               type: "radio",
//               option: ["Yes", "No"],
//             },
//             {
//               name: "Ethnicity",
//               type: "radio",
//               option: [
//                 "White-European",
//                 "Latino",
//                 "Black",
//                 "South_Asian",
//                 "Middle Eastern",
//                 "Pacifica",
//                 "Native_Indian",
//                 "Mixed",
//                 "Hispanic",
//                 "Turkish",
//                 "Others",
//               ],
//             },
//             {
//               name: "Who completed the test",
//               type: "radio",
//               option: [
//                 "Parent",
//                 "Self",
//                 "Health care professional",
//                 "Relative",
//                 "School_and_NGO",
//                 "Others",
//               ],
//             },
//           ];
    

//   const handleInputChange = (questionName, value) => {
//     setFormData({ ...formData, [questionName]: value });
//     setIsAnswered(true); // Mark the question as answered when an option is selected
//   };

//   const handleNext = () => {
//     if (isAnswered) {
//       if (questionNo < questionArray.length - 1) {
//         setQuestionNo(questionNo + 1);
//         setIsAnswered(false); // Reset isAnswered state for the next question
//       }
//     } else {
//       alert('Please select an option before proceeding to the next question.');
//     }
//   };

//   const handlePrevious = () => {
//     if (questionNo > 0) {
//       setQuestionNo(questionNo - 1);
//       setIsAnswered(true); // Assume previous question was answered when navigating back
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData)
//       const response = await axios.post('/your-backend-endpoint', formData);
//       console.log('Response from backend:', response.data);
//       // Display success message or redirect to another page
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Display error message to the user
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Autism Detection Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="question">
//           <p className="question-text">
//             Q.{questionNo + 1} {questionArray[questionNo].name}
//           </p>
//           {questionArray[questionNo].type === 'radio' ? (
//             <div className="options-container">
//               {questionArray[questionNo].option.map((option, index) => (
//                 <label key={index} className="option-label">
//                   <input
//                     type="radio"
//                     name={questionArray[questionNo].name}
//                     value={option}
//                     onChange={(e) =>
//                       handleInputChange(questionArray[questionNo].name, e.target.value)
//                     }
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           ) : (
//             <input
//               type="number"
//               name={questionArray[questionNo].name}
//               value={formData[questionArray[questionNo].name] || ''}
//               onChange={(e) =>
//                 handleInputChange(questionArray[questionNo].name, e.target.value)
//               }
//               className="number-input"
//             />
//           )}
//         </div>
//         <div className="button-container">
//           {questionNo > 0 && (
//             <button type="button" className="prev-button" onClick={handlePrevious}>
//               Previous
//             </button>
//           )}
//           {questionNo === questionArray.length - 1 ? (
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           ) : (
//             <button type="button" className="next-button" onClick={handleNext}>
//               Next
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AutismDetectionForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Qchat.css'; // Import custom styles

// const AutismDetectionForm = () => {
//   const [formData, setFormData] = useState({});
//   const [questionNo, setQuestionNo] = useState(0);
//   const [isAnswered, setIsAnswered] = useState(false);

//   const questionArray = [
//                 {
//                   name: "Does your child look at you when you call his/her name?",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "How easy is it for you to get eye contact with your child?",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child point to indicate that he/she wants something?(e.g. a toy that is out of reach)",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child point to share interest with you?(e.g. pointing at an interesting sight)",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child pretend?(e.g. care for dolls, talk on a toy phone)",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child follow where you’re looking?",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?(e.g. stroking hair, hugging them)",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "would you describe your child’s first words as:",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child use simple gestures?(e.g. wave goodbye)",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Does your child stare at nothing with no apparent purpose?",
//                   type: "radio",
//                   option: ["1","2","3","4","5"],
//                 },
//                 {
//                   name: "Age(in years)",
//                   type: "number",
//                 },
//                 {
//                   name: "Sex",
//                   type: "radio",
//                   option: ["Male", "Female"],
//                 },
//                 {
//                   name: "Jaundice",
//                   type: "radio",
//                   option: ["Yes", "No"],
//                 },
//                 {
//                   name: "Family_mem_with_ASD",
//                   type: "radio",
//                   option: ["Yes", "No"],
//                 },
//                 {
//                   name: "Ethnicity",
//                   type: "radio",
//                   option: [
//                     "White-European",
//                     "Latino",
//                     "Black",
//                     "South_Asian",
//                     "Middle Eastern",
//                     "Pacifica",
//                     "Native_Indian",
//                     "Mixed",
//                     "Hispanic",
//                     "Turkish",
//                     "Others",
//                   ],
//                 },
//                 {
//                   name: "Who completed the test",
//                   type: "radio",
//                   option: [
//                     "Parent",
//                     "Self",
//                     "Health care professional",
//                     "Relative",
//                     "School_and_NGO",
//                     "Others",
//                   ],
//                 },
//               ];
        
//   const handleInputChange = (questionName, value) => {
//     setFormData({ ...formData, [questionName]: value });
//     setIsAnswered(true); // Mark the question as answered when an option is selected
//   };

//   const handleNext = () => {
//     if (isAnswered) {
//       if (questionNo < questionArray.length - 1) {
//         setQuestionNo(questionNo + 1);
//         setIsAnswered(false); // Reset isAnswered state for the next question
//       }
//     } else {
//       alert('Please select an option before proceeding to the next question.');
//     }
//   };

//   const handlePrevious = () => {
//     if (questionNo > 0) {
//       setQuestionNo(questionNo - 1);
//       setIsAnswered(true); // Assume previous question was answered when navigating back
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData);
//       const response = await axios.post('/your-backend-endpoint', formData);
//       console.log('Response from backend:', response.data);
//       // Display success message or redirect to another page
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Display error message to the user
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Autism Detection Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="question">
//           <p className="question-text">
//             Q.{questionNo + 1} {questionArray[questionNo].name}
//           </p>
//           {questionArray[questionNo].type === 'radio' ? (
//             <div className="options-container">
//               {questionArray[questionNo].option.map((option, index) => (
//                 <label key={index} className="option-label">
//                   <input
//                     type="radio"
//                     name={questionArray[questionNo].name}
//                     value={option}
//                     onChange={(e) =>
//                       handleInputChange(questionArray[questionNo].name, e.target.value)
//                     }
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           ) : (
//             <input
//               type="number"
//               name={questionArray[questionNo].name}
//               value={formData[questionArray[questionNo].name] || ''}
//               onChange={(e) =>
//                 handleInputChange(questionArray[questionNo].name, e.target.value)
//               }
//               className="number-input"
//             />
//           )}
//         </div>
//         <div className="button-container">
//           {questionNo > 0 && (
//             <button type="button" className="prev-button" onClick={handlePrevious}>
//               Previous
//             </button>
//           )}
//           {questionNo === questionArray.length - 1 ? (
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           ) : (
//             <button type="button" className="next-button" onClick={handleNext}>
//               Next
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AutismDetectionForm;
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
      name: "Does your child look at you when you call his/her name?",
      type: "radio",
      option: options,
    },
    {
        key:"A2",
      name: "How easy is it for you to get eye contact with your child?",
      type: "radio",
      option: options,
    },
    {
        key:"A3",
      name: "Does your child point to indicate that he/she wants something?(e.g. a toy that is out of reach)",
      type: "radio",
      option: options,
    },
    {
        key:"A4",
      name: "Does your child point to share interest with you?(e.g. pointing at an interesting sight)",
      type: "radio",
      option: options,
    },
    {
        key:"A5",
      name: "Does your child pretend?(e.g. care for dolls, talk on a toy phone)",
      type: "radio",
      option: options,
    },
    {
        key:"A6",
      name: "Does your child follow where you’re looking?",
      type: "radio",
      option: options,
    },
    {
        key:"A7",
      name: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?(e.g. stroking hair, hugging them)",
      type: "radio",
      option: options,
    },
    {
        key:"A8",
      name: "would you describe your child's first words as:",
      type: "radio",
      option: options,
    },
    {
        key:"A9",
      name: "Does your child use simple gestures?(e.g. wave goodbye)",
      type: "radio",
      option: options,
    },
    {
        key:"A10_Autism_Spectrum_Quotient",
      name: "Does your child stare at nothing with no apparent purpose?",
      type: "radio",
      option: options,
    },
    {
        key:"Age_Years",
      name: "Age(in years)",
      type: "number",
    },
    {
        key:"Sex",
      name: "Sex",
      type: "radio",
      option: ["Male", "Female"],
    },
    {
        key:"Jaundice",
      name: "Jaundice",
      type: "radio",
      option: ["Yes", "No"],
    },
    {
        key:"Family_mem_with_ASD",
      name: "Is there any family member with ASD?",
      type: "radio",
      option: ["Yes", "No"],
    },
    {
        key:"Ethnicity",
      name: "Ethnicity",
      type: "radio",
      option: [
        "White-European",
        "Latino",
        "Black",
        "South Asian",
        "Middle Eastern",
        "Pacifica",
        "Native Indian",
        "Mixed",
        "Hispanic",
        "Turkish",
        "Others",
      ],
    },
    {
        key:"Who_completed_the_test",
      name: "Who completed the test",
      type: "radio",
      option: [
        "Parent",
        "Self",
        "Health Care Professional",
        "Relative",
        "Others",
      ],
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
      if(apiResult==="Yes"){
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
    <div className="form-container">
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
