import Content from "../components/Content";
import { useEffect } from "react";

export default function HomePage({ data, onHandleDel, onHandleLike, onReset }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    onReset();
  }, [onReset]);
  return (
    <Content data={data} onHandleDel={onHandleDel} handleLike={onHandleLike}>
      <h2 style={{ marginBottom: "20px" }}>
        {data.length
          ? `You have ${data.length} recipes`
          : `You haven't collected any recipes! `}
      </h2>
    </Content>
  );
}
