import React from "react";
import Modal from "./components/ui/modal/Modal";

function App() {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setModal(true)}>Показать модалку</button>
      <Modal visible={modal} serVisible={setModal}>
        123
      </Modal>
    </div>
  );
}

export default App;
