import React from 'react';

const StudentInfo = ({ name, course, section }) => {
    return (
        <div>
            <h2>Student Information</h2>
            <p><strong>Name:</strong> Adrian Morrissey F. Belo{name}</p>
            <p><strong>Course:</strong> ADT{course}</p>
            <p><strong>Section:</strong> BSCS-3A{section}</p>
        </div>
    );
};

export default StudentInfo;
