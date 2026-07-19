import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('books');

  // Conditional rendering using switch case
  const renderComponent = () => {
    switch(selectedComponent) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  // Conditional rendering using if-else
  const getButtonStyle = (buttonType) => {
    return selectedComponent === buttonType ? 
      { padding: '10px 20px', margin: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' } :
      { padding: '10px 20px', margin: '5px', backgroundColor: '#f0f0f0', color: 'black', border: '1px solid #ccc', borderRadius: '5px' };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App - Content Management</h1>
      
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => setSelectedComponent('books')}
          style={getButtonStyle('books')}
        >
          Books
        </button>
        <button 
          onClick={() => setSelectedComponent('blogs')}
          style={getButtonStyle('blogs')}
        >
          Blogs
        </button>
        <button 
          onClick={() => setSelectedComponent('courses')}
          style={getButtonStyle('courses')}
        >
          Courses
        </button>
      </div>

      {/* Conditional rendering using ternary operator */}
      <div style={{ margin: '20px 0' }}>
        {selectedComponent === 'books' && <BookDetails />}
        {selectedComponent === 'blogs' && <BlogDetails />}
        {selectedComponent === 'courses' && <CourseDetails />}
      </div>

      {/* Alternative conditional rendering using function */}
      <div style={{ margin: '20px 0' }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
