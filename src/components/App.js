import Banner from "./Banner.js";
import ContactPart from "./ContactPart.js";
import HomePart from "./HomePart.js";
import ProfilePart from "./ProfilePart.js";
import ProjectPart from "./ProjectPart.js";
import SideBar from "./SideBar.js";

function App() {
  return (
    <div>
      <SideBar />
      <Banner />
      <HomePart />
      <ProfilePart />
      <ProjectPart />
      <ContactPart />
    </div>
  );
}

export default App;
