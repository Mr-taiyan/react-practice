import NiceModal, {
  createNiceModal,
  modalReducer,
  useNiceModal,
} from "./NiceModal";
import { Button } from "antd";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools();

const store = createStore(modalReducer, enhancer);

const MyModal = createNiceModal("my-modal", () => {
  return (
    <NiceModal id="my-modal" title="Nice Modal">
      Hello NiceModal
    </NiceModal>
  );
});

function MyModalExample() {
  const modal = useNiceModal("my-modal");
  return (
    <>
      <Button type="primary" onClick={() => modal.show()}>
        show modal
      </Button>
      <MyModal />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <h1>Nice Modal</h1>
      <MyModalExample />
    </Provider>
  );
}
