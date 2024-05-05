import { useEffect, useState } from "react";
import { List } from "./list";

 
export function App() {

  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getBots(){
      try {
        const url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = fetch(url);
        const data = (await response).json();
        setBots(data);
        setIsLoading(false)
      } catch (error) {
        setError(`faild to fetch data ${error}`);
      }
    }
    getBots()
  }, [])

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      {error ? (
        <h1>{error}</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <List botsList={bots}/>
        
      )}
    </div>
  );
}
