import CalculateScore from './Components/CalculateScore';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div>
      <CalculateScore 
        name="John Doe" 
        school="Springfield High School" 
        total={85} 
        goal={100} 
      />
    </div>
  );
}

export default App;
