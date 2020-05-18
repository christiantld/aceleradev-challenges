import { format } from "date-fns";

const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  return format(date, "dd/MM/yyyy");
};

export default formatDate;
