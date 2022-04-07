import './App.css';
import './index.css';

let curDate = new Date(2020,5,5,10);
curDate= curDate.getHours();
let greetings= "";
const cssStyle ={
   color :'green'
}
if(curDate >=1 && curDate <12){
  greetings = "Good Morning";
  cssStyle.color = 'green';
}
else if (curDate >=12 && curDate <19){
greetings= "Good Afternoon";
cssStyle.color = 'Orange';
}
else{
  greetings="Good Night";
  cssStyle.color = 'Black';

}
function App() {
  return (
    <div>
      <h1>
        {" "}Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
    </div>
  );
}

export default App;
