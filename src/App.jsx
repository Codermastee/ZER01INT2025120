import './App.css';
import useBackgroundColor from './useBackgroundColor'; // Import the custom hook

function App() {
  const [bgColor, changeColor, resetColor] = useBackgroundColor('black'); // Initialize with 'white'

  return (
    <>
      <div
        style={{
          width: 300,
          height: 300,
          border: '1px solid black',
          backgroundColor: bgColor,
        }}
      ></div>
      <button
        onClick={() => changeColor('skyblue')}
        style={{ margin: '10px', padding: '10px' }}
      >
        Change Color
      </button>
      <button onClick={resetColor} style={{ margin: '10px', padding: '10px' }}>
        Reset Color
      </button>
    </>
  );
}

export default App;
