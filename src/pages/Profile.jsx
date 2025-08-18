export default function Profile() {
  return (
    <div className="main-content" style={{ height: "68vh" }}>
      <h1>My profile</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "60px",
        }}
      >
        <img src="/image/profile.jpg" alt="profile" width={200} height={200} />
        <div width={200} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="file"
            style={{
              alignSelf: "center",
              fontSize: "12px",
              width: "165px",
              marginTop: "-50px",
            }}
          />
        </div>
        <div className="recipe-text" style={{ marginTop: "-20px" }}>
          <h3>user name</h3>
          <p>Write your slogan here!</p>
        </div>
      </div>
    </div>
  );
}
