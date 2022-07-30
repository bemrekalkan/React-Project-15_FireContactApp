import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toastify = (msg) => {
  toast.success(msg, {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toastify;
