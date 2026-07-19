function CourseDetails() {
  const courses = [
    { id: 1, title: 'React Complete Guide', instructor: 'Max' },
    { id: 2, title: 'Node.js Masterclass', instructor: 'Andrew' }
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Course Details</h3>
      {courses.map(course => (
        <div key={course.id} style={{ margin: '10px 0' }}>
          <p><strong>{course.title}</strong> by {course.instructor}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
