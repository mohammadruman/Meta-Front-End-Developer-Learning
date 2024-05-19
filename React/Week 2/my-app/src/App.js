// import virat from './virat.jpg';
import Card from "./Card";
import Heading from "./Heading";
import Btn from './Btn';

// function Logo(){
//   const userPic = <img src={virat} />;
//   return userPic;
// }
function App() {
return (
 <div className="App">

  <h1>Task: Add three card elemens</h1>
  <Card h2="First card h2" h3="First card h3"></Card>
    <Card h2="First card h2" h3="First card h3"></Card>
  <Card h2="First card h2" h3="First card h3"></Card>
  <Btn />

  {/* <Logo /> */}
   </div>
 );
}

export default App;