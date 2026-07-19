import Trainer from './Trainer';

const trainers = [
  new Trainer(1, 'John Smith', 'john.smith@cognizant.com', '123-456-7890', 'React', ['JavaScript', 'HTML', 'CSS', 'Redux']),
  new Trainer(2, 'Jane Doe', 'jane.doe@cognizant.com', '234-567-8901', 'Java', ['Spring', 'Hibernate', 'Microservices']),
  new Trainer(3, 'Bob Johnson', 'bob.johnson@cognizant.com', '345-678-9012', 'Python', ['Django', 'Flask', 'Data Science']),
  new Trainer(4, 'Alice Williams', 'alice.williams@cognizant.com', '456-789-0123', 'Angular', ['TypeScript', 'RxJS', 'NGRX']),
  new Trainer(5, 'Charlie Brown', 'charlie.brown@cognizant.com', '567-890-1234', 'Node.js', ['Express', 'MongoDB', 'REST APIs'])
];

export default trainers;
