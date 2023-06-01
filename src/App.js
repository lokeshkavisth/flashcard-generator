import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Toast from "./components/Toast";
import Container from "./containers/Container";
// import ShareModal from "./components/ShareModal";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen pb-10">
      <Navbar />

      {/* <div className="m-20"> */}
      {/* <ShareModal /> */}
      {/* <Toast /> */}
      {/* <Spinner /> */}
      {/* </div> */}

      <Container />
    </div>
  );
}

export default App;
