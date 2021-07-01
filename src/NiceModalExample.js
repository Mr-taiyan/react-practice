import { func } from "prop-types";
import NiceModal, { createNiceModal, useNiceModal } from "./NiceModal";
import { Button } from "antd";

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
