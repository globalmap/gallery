import Gallery from "./components/Gallery/Gallery"
import WrapModal from "./components/Modal/WrapModal"
import SideBar from "./components/SideBar/SideBar"
import { ModalContextProvider } from "./context/providers"

function App() {
  return (
    <ModalContextProvider>
      <SideBar />
      <Gallery />

      <WrapModal />
    </ModalContextProvider>
  )
}

export default App
