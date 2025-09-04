function AboutPage() {
  return (
    <div className="main-content" style={{ marginBottom: "-12px" }}>
      <h1>About</h1>
      {/* <h2>Project Description</h2> */}
      <p
        style={{
          border: "1px solid #eee",
          padding: "20px",
          margin: "40px 0",
          borderRadius: "8px",
          lineHeight: "1.5",
        }}
      >
        This is a recipe management system designed specifically for you. Its
        main functions include generating your own recipes, managing your
        favorite recipes, and modifying and deleting recipes, allowing you to
        stay organized in your daily meals. Welcome to your exclusive recipe
        manager.
      </p>
      <h2>Team</h2>
      <div className="about-container">
        <div className="team-container">
          <div
            style={{
              width: "100px",
              height: "100px",
              // backgroundImage: "url(image/zixuan.JPG)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
            }}
          ></div>
          <h3>Barbara</h3>
          {/* <img src="" alt="Profile Picture" /> */}
          <a href="https://github.com/Baba-labab" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/barbara-goldbeck-7ba383367"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="team-container">
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundImage: "url(image/zixuan.JPG)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
            }}
          ></div>
          <h3>Zixuan</h3>
          <a href="https://github.com/ZixuanLiu96" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zixuan-liu-53357026a/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
