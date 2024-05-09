
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

  const questionArray = [
    {
      name: "Does your child look at you when you call his/her name?",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "How easy is it for you to get eye contact with your child?",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child point to indicate that he/she wants something?(e.g. a toy that is out of reach)",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child point to share interest with you?(e.g. pointing at an interesting sight)",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child pretend?(e.g. care for dolls, talk on a toy phone)",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child follow where you’re looking?",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?(e.g. stroking hair, hugging them)",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "would you describe your child’s first words as:",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child use simple gestures?(e.g. wave goodbye)",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Does your child stare at nothing with no apparent purpose?",
      type: "radio",
      option: ["1", "2", "3", "4", "5"],
    },
    {
      name: "Age(in years)",
      type: "number",
    },
    {
      name: "Sex",
      type: "radio",
      option: ["Male", "Female"],
    },
    {
      name: "Jaundice",
      type: "radio",
      option: ["Yes", "No"],
    },
    {
      name: "Family_mem_with_ASD",
      type: "radio",
      option: ["Yes", "No"],
    },
    {
      name: "Ethnicity",
      type: "radio",
      option: [
        "White-European",
        "Latino",
        "Black",
        "South_Asian",
        "Middle Eastern",
        "Pacifica",
        "Native_Indian",
        "Mixed",
        "Hispanic",
        "Turkish",
        "Others",
      ],
    },
    {
      name: "Who completed the test",
      type: "radio",
      option: [
        "Parent",
        "Self",
        "Health care professional",
        "Relative",
        "School_and_NGO",
        "Others",
      ],
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
    try {
      console.log(formData);
      const response = await axios.post('/your-backend-endpoint', formData);
      console.log('Response from backend:', response.data);
      // Display success message or redirect to another page
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error message to the user
    }
  };

  return (
    <div className="form-container">
      <h1>Autism Detection Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <p className="question-text">
            Q.{questionNo + 1} {questionArray[questionNo].name}
          </p>
          {questionArray[questionNo].type === 'radio' ? (
            <div className="options-container">
              {questionArray[questionNo].option.map((option, index) => (
                <label key={index} className="option-label">
                  <input
                    type="radio"
                    name={questionArray[questionNo].name}
                    value={option}
                    checked={formData[questionArray[questionNo].name] === option}
                    onChange={(e) =>
                      handleInputChange(questionArray[questionNo].name, e.target.value)
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          ) : questionArray[questionNo].type === 'number' ? (
            <input
              type="number"
              name={questionArray[questionNo].name}
              value={formData[questionArray[questionNo].name] || ''}
              onChange={(e) =>
                handleInputChange(questionArray[questionNo].name, e.target.value)
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
            <button type="submit" className="submit-button">
              Submit
            </button>
          ) : (
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AutismDetectionForm;
