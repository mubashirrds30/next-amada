import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext(false)

function Context({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [downloadBrochureUrl, setDownloadBrochureUrl] = useState(null);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isModalOpen])

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, downloadBrochureUrl, setDownloadBrochureUrl, product, setProduct }}>
            {children}
        </ModalContext.Provider>
    );
}

export default Context