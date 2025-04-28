import { useNavigate } from "react-router-dom";

export const useNavigateToPage = () => {
  const navigate = useNavigate();

  return (path: string, context?: object) => navigate(path, context ?? {});
};

export const returnValue = (text: string) => {
  return text;
};
