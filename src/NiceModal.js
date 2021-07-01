import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

export const modalReducer = (state = { hiding: {} }, action) => {
  switch (action.type) {
    case "nice-modal/show":
      return {
        ...state,
        [action.payload.modalId]: action.payload.args || true,
        hiding: {
          ...state.hiding,
          [action.payload.modalId]: false,
        },
      };
    case "nice-modal/hide":
      return action.payload.force
        ? {
            ...state,
            [action.payload.modalId]: false,
            hiding: { [action.payload.modalId]: false },
          }
        : { ...state, hiding: { [action.payload.modalId]: true } };
    default:
      return state;
  }
};

function showModal(modalId, args) {
  return {
    type: "nice-modal/show",
    payload: {
      modalId,
      args,
    },
  };
}

function hideModal(modalId, force) {
  return {
    type: "nice-modal/hide",
    payload: {
      modalId,
      force,
    },
  };
}

const modalCallbacks = {};

export const useNiceModal = (modalId) => {
  const dispatch = useDispatch();
  const show = useCallback(
    (args) => {
      return new Promise((resolve) => {
        modalCallbacks[modalId] = resolve;
        dispatch(showModal(modalId, args));
      });
    },
    [dispatch, modalId]
  );
  const resolve = useCallback(
    (args) => {
      if (modalCallbacks[modalId]) {
        modalCallbacks[modalId](args);
        delete modalCallbacks[modalId];
      }
    },
    [modalId]
  );

  const hide = useCallback(
    (force) => {
      dispatch(hideModal(modalId, force));
      delete modalCallbacks[modalId];
    },
    [dispatch, modalId]
  );

  const args = useSelector((s) => s[modalId]);
  const hiding = useSelector((s) => s.hiding[modalId]);

  return useMemo(
    () => ({ args, hiding, visible: !!args, show, hide, resolve }),
    [args, hide, show, resolve, hiding]
  );
};

export default function NiceModal({ id, children, ...rest }) {
  const modal = useNiceModal(id);
  return (
    <Modal
      onCancel={() => modal.hide()}
      onOk={() => modal.hide()}
      afterClose={() => modal.hide(true)}
      visible={!modal.hiding}
      {...rest}
    >
      {children}
    </Modal>
  );
}

export function createNiceModal(modalId, Comp) {
  return (props) => {
    const { visible, args } = useNiceModal(modalId);
    if (!visible) return null;
    return <Comp {...args} {...props} />;
  };
}
