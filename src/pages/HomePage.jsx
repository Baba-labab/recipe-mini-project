import Content from "../components/Content";
import { useEffect } from "react";

export default function HomePage({ data, onHandleDel, onHandleLike }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content data={data} onHandleDel={onHandleDel} handleLike={onHandleLike} />
  );
}
