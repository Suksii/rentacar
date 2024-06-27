import { createContext, useState, useContext } from 'react';
import Modal from "../components/Modal.jsx";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        content: "",
        showFooter: false,
        onSave: () => {},
        className: "",
        label: ""
    });

    const openModal = (props) => {
        setIsModalOpen(true);
        setModalData(props);

    }
    const closeModal = () => {
        setIsModalOpen(false);
        setModalData({
            title: "",
            content: "",
            showFooter: false,
            onSave: () => {},
            className: "",
            label: ""
        })}

    return (
        <ModalContext.Provider value={{
            openModal,
            closeModal,
            isModalOpen,
        }}>
            {isModalOpen && <Modal title={modalData?.title}
                                   content={modalData.content}
                                   showFooter={modalData.showFooter}
                                   onClose={closeModal}
                                   onSave={modalData.onSave}
                                   className={modalData.className}
                                   label={modalData.label}
            />
            }
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);

export default ModalContext;