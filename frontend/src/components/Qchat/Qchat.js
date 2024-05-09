import { Fragment, React, useState } from "react";
import Quiz from "./Quiz";
import "./style.css";

const Qchat = () => {
  const questionArray = [
    {
      name: "Does your child look at you when you call his/her name?",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "How easy is it for you to get eye contact with your child?",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child point to indicate that he/she wants something?(e.g. a toy that is out of reach)",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child point to share interest with you?(e.g. pointing at an interesting sight)",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child pretend?(e.g. care for dolls, talk on a toy phone)",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child follow where you’re looking?",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?(e.g. stroking hair, hugging them)",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "would you describe your child’s first words as:",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child use simple gestures?(e.g. wave goodbye)",
      type: "radio",
      option: ["1","2","3","4","5"],
    },
    {
      name: "Does your child stare at nothing with no apparent purpose?",
      type: "radio",
      option: ["1","2","3","4","5"],
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

  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQustion] = useState(questionArray[0]);
  const [options, setOptions] = useState(["1","2","3","4","5"]);
  const handleNext = () => {
    if (questionNo === questionArray.length - 1) {
      alert("You have reached the end of the quiz");
      return;
    }
    setQuestionNo(questionNo + 1);
    setQustion(questionArray[questionNo]);
    setOptions(questionArray[questionNo].option);
  };
  const handlePrevious = () => {
    if (questionNo === 0) {
      alert("You are at the beginning of the quiz");
      return;
    }
    setQuestionNo(questionNo - 1);
    setQustion(questionArray[questionNo]);
    setOptions(questionArray[questionNo].option);
  };

  return (
    <div className="container">
      <h1>Qchat-10 Test</h1>
      <div className="container qchat-container mt-sm-5 mt-1 mb-4">
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5">
            <b>Q.{questionNo+1} {question.name}</b>
          </div>
          {
            (question.type==="radio" ? 
            (<div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                {
                    options.map((option, index) => (
                        <Fragment key={index}>
                        <label className="options">
                            {option}
                            <input type="radio" name={question.name} />
                            <span className="checkmark" />
                        </label>
                        </Fragment>
                    ))
                }
          </div>)
          :
          (<input type="number"></input>)
            )
          }
        </div>
        <div className="d-flex align-items-center pt-3">
          <div id="prev">
            <button className="btn btn-secondary" onClick={handlePrevious}>
              Previous
            </button>
          </div>
          {questionNo === questionArray.length - 1 ? (
            <div className="ml-auto mr-sm-5">
              <button className="btn btn-success">Submit</button>
            </div>
          ) : null}
          {
            questionNo !== questionArray.length - 1 ? (
              <div className="ml-auto mr-sm-5">
                <button className="btn btn-warning" onClick={handleNext}>
                  Next
                </button>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default Qchat;
