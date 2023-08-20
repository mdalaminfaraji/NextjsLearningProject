import Image from "next/image";
import image1 from "../../assests/banner14.png"

 const Home=()=> {
  return (
    <main>
     <div>Home Page</div>
     <Image src={image1} alt=""></Image>
    </main>
  )
}
export default Home;
