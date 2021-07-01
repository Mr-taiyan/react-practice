import { useCallback } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

export const modalReducer = (state = { hiding: {} }, action) => {
  switch (action.type) {
    case "nice-modal/show": {
      const { modalId, args } = action.payload;
      return {
        ...state,
        [modalId]: args || true,
        hiding: {
          ...state.hiding,
          [modalId]: false,
        },
      };
    }
    case "nice-modal/hide": {
      const { modalId, force } = action.payload;
      return force
        ? {
            ...state,
            [modalId]: false,
            hiding: {
              [modalId]: false,
            },
          }
        : {
            ...state,
            hiding: { [modalId]: true },
          };
    }
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

export const useNiceModal = (modalId) => {
  const dispatch = useDispatch();

  const show = useCallback(
    (args) => {
      dispatch(showModal(modalId, args));
    },
    [modalId, dispatch]
  );

  const hide = useCallback(
    (force) => {
      dispatch(hideModal(modalId, force));
    },
    [dispatch, modalId]
  );

  const args = useSelector((s) => s[modalId]);
  const hiding = useSelector((s) => s.hiding[modalId]);

  return { args, hiding, visible: !!args, show, hide };
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
    if (!visible) return;
    return <Comp {...args} {...props} />;
  };
}
