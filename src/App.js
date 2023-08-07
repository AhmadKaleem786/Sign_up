import Tabss from "./components/tabs";
import Details from "./components/details";
import CheckModal from "./components/checkModal";
import VerifyModal from "./components/verifyModal";
import YourCompany from "./components/yourCompany";
import Payment from "./components/payment";
import Review from "./components/review";
import Submit from "./components/submit";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {

  const { statuscheck, paging} = useSelector((store)=>store.detail)
  const { page1, page2, page3, page4, page5} = useSelector((store)=>store.page)
  return (
    <main>
      <Tabss />
      {page1 && paging && <VerifyModal />}
      {page1 && statuscheck && <CheckModal />}
      {page1 && <Details />}
      {page2 && <YourCompany />}
      {page3 && <Payment />}
      {page4 && <Review />}
      {page5 && <Submit />}
    </main>
  );
}

export default App;
