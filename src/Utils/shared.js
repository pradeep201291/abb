import { useNavigate } from "react-router-dom";

const useNavigateTo = (path = "") => {
  const navigate = useNavigate()

  navigate(path);
};

export default useNavigateTo;
