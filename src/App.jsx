import Navbar from "./component/Navbar";
import AllRoutes from "./pages/AllRoutes";
export default function App() {


  return (
    <>
    <Navbar/>
    <section className="w-[80%] m-auto">
     <AllRoutes/>
    </section>
    </>
  )
}