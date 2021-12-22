import { Button } from 'semantic-ui-react';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <div>
        <Button content='Primary' primary />
        <Button content='Secondary' secondary />
      </div>
    </div>
  );
}

export default App;
