import style from './style.css';
import './App.css';
import image1 from './Image/image1.jpg'

function App() {
  return (
    <div className="App" 
    style={{border:'solid 1',color:'black',maxWidh:'100vw'}}>
      <h1 className="app-title" > Anis Boutouria </h1>
   
     <img src="/image2.png" alt="image from public"/>
     <br/>
     <img src= {image1}  alt="image from src"/>
     <br/>
     <video width={320} height={240} controls>
     <source src="myVideo.mp4" type="video/mp4" />
     </video>
    </div>
  );
}

export default App;
