import { useContext } from "react";

import { ModalContext } from "../context/context";

export const useGlobalContext = () => useContext(ModalContext);