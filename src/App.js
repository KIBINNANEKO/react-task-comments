import './scss/css/index.css'
import CommentsWindow from './components/CommentsWindow';

function App() {
  return (
    <div className='wrapper main'>
      <div className="parent">
        <div className="wrapped-block">
          <div className="block">
           <CommentsWindow/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
