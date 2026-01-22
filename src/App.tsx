import SetRobux from "./components/SetRobux";

export default function App(){
  return(
    <div>
      <h2>RoTools</h2>
      <br />
      <SetRobux/>
      <br />
      <p>&copy; {new Date().getFullYear()} thenamelessdev. Licensed under the MIT license.</p>
    </div>
  )
}