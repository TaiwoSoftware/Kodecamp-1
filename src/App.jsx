import "./App.css";
import CardComponent from "./components/CardComponent";
function App() {
  return (
    <>
      <CardComponent
        userName={"Akerele Taiwo"}
        userAge={19}
        userLocation={"Lagos, Nigeria"}
        userHobbies={["coding,", " ", "singing,", " ", "Playing the piano"]}
      />

      <CardComponent
        userName={"Kelvin Daniel"}
        userAge={29}
        userLocation={"port-harcourt, Nigeria"}
        userHobbies={["football,", " ", "Tapping,", " ", "running"]}
      />

      <CardComponent
        userName={"Favour David"}
        userAge={19}
        userLocation={"Lagos, Nigeria"}
        userHobbies={["Drumming,", " ", "singing,"]}
      />
    </>
  );
}

export default App;
