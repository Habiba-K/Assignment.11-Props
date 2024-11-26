import Image from "next/image";
import Grid from "./Grid/page";
import UseState from "./UseState/page"
import ParentComponent from "./ParentComponent";

export default function Home() {
  return (
  <div>
    
    <ParentComponent></ParentComponent>
    <UseState/>
    <Grid/>
  </div>
  
  );
}
