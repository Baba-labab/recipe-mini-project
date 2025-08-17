export default function Button({ children, id }) {
  return (
    <>
      <button className="btn" data-id={id}>
        {children}
      </button>
    </>
  );
}
