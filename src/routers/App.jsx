import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems />
      <main>
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
