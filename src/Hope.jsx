import FlipCard from './FlipCard';
import './Hope.css';
import WordAnimation from './wordAnimation';

function Hope() {
  
  const words = ["我们要好好的哟~","蛋糕好吃吗？","320"];
  return (
    <>

      
        <div className="page-container">
            <h3 style={{color:"white",position:"relative",bottom:"200px"}}>"让你我一同展望未来"</h3>

            <WordAnimation words={words}></WordAnimation>
            
        </div>
    </>
  );
}

export default Hope;