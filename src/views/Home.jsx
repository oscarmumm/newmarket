import { loaderProducts } from "../config/DataLoader";
import { useLoaderData } from "react-router-dom";
import CardsContainer from '../components/CardsContainer';
import { loaderSmartphones } from "../config/DataLoader";

const Home = () => {

  const {dataSmartphones} = useLoaderData();
  console.log(dataSmartphones)
  
  
  return (
    <div>
      <h1>Esta es la página Home</h1>
      <p></p>
    </div>
  );
}

export default Home;