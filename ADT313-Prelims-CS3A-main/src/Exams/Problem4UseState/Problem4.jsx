import { useState } from "react";

export default function Problem4() {

  const [name, setName] = useState("");
  const [yearlevel, setYearlevel] = useState("");
  const [course, setCourse] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleYearlevelChange = (event) => {
    setYearlevel(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const formValues = {
    name,
    yearlevel,
    course,
  };

  return (
    <>
      <div style={{ display: 'block' }}>
        Name: 
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div style={{ display: 'block' }}>
        <p>Yearlevel:</p>
        <input
          type='radio'
          id='firstYear'
          name='yearlevel'
          value='First Year'
          checked={yearlevel === 'First Year'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='firstYear'>First Year</label>
        <br />
        
        <input
          type='radio'
          id='secondYear'
          name='yearlevel'
          value='Second Year'
          checked={yearlevel === 'Second Year'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='secondYear'>Second Year</label>
        <br />

        <input
          type='radio'
          id='thirdYear'
          name='yearlevel'
          value='Third Year'
          checked={yearlevel === 'Third Year'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='thirdYear'>Third Year</label>
        <br />

        <input
          type='radio'
          id='fourthYear'
          name='yearlevel'
          value='Fourth Year'
          checked={yearlevel === 'Fourth Year'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='fourthYear'>Fourth Year</label>
        <br />

        <input
          type='radio'
          id='fifthYear'
          name='yearlevel'
          value='Fifth Year'
          checked={yearlevel === 'Fifth Year'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='fifthYear'>Fifth Year</label>
        <br />

        <input
          type='radio'
          id='irregular'
          name='yearlevel'
          value='Irregular'
          checked={yearlevel === 'Irregular'}
          onChange={handleYearlevelChange}
        />
        <label htmlFor='irregular'>Irregular</label>
        <br />
      </div>

      <div style={{ display: 'block' }}>
        Course:
        <select value={course} onChange={handleCourseChange}>
          <option value='BSCS'>BSCS</option>
          <option value='BSIT'>BSIT</option>
          <option value='BSCpE'>BSCpE</option>
          <option value='ACT'>ACT</option>
        </select>
      </div>

      <div>
        <h3>Form Values:</h3>
        <div>{JSON.stringify(formValues,"",2)}</div>
      </div>
    </>
  );
}
