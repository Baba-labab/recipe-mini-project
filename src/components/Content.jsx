export default function Content({ data }) {
  return (
    <div className="main-content">
      <img src={data[0].image} />
    </div>
  );
}
