import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Insight from "./pages/Insight";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import InsightPlacement from "./components/InsightsComponents/InsightPlacement";
import InsightPlacement2022 from "./components/InsightsComponents/InsightPlacement2022";
import InsightInternship from "./components/InsightsComponents/InsightInternship";
import InsightInternship2022 from "./components/InsightsComponents/InsightInternship2022";
import Footer from "./components/HomeComponents/Footer";
import Contact from "./components/HomeComponents/Contact";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import Comment from "./components/CommentComponent/Comment";
import Admin from "./pages/Admin";
import Data from "./components/Data";



import InsightPlacement2022cse from "./components/InsightsComponents/BranchComponents/cse/cse";
import InsightPlacementcse from "./components/InsightsComponents/BranchComponents/cse/cse2021";
import InsightPlacement2022ece from "./components/InsightsComponents/BranchComponents/ece/ece";
import InsightPlacementece from "./components/InsightsComponents/BranchComponents/ece/ece2021";
import InsightPlacement2022pe from "./components/InsightsComponents/BranchComponents/pe/pe";
import InsightPlacementpe from "./components/InsightsComponents/BranchComponents/pe/pe2021";
import InsightPlacement2022me from "./components/InsightsComponents/BranchComponents/me/me";
import InsightPlacementme from "./components/InsightsComponents/BranchComponents/me/me2021";
import InsightPlacement2022mme from "./components/InsightsComponents/BranchComponents/mme/mme";
import InsightPlacementmme from "./components/InsightsComponents/BranchComponents/mme/mme2021";
import InsightPlacement2022che from "./components/InsightsComponents/BranchComponents/chem/chem";
import InsightPlacementche from "./components/InsightsComponents/BranchComponents/chem/chem2021";
import InsightPlacement2022ce from "./components/InsightsComponents/BranchComponents/civ/civ";
import InsightPlacementce from "./components/InsightsComponents/BranchComponents/civ/civ2021";
import InsightPlacement2022ee from "./components/InsightsComponents/BranchComponents/ee/ee";
import InsightPlacementee from "./components/InsightsComponents/BranchComponents/ee/ee2021";
import InsightPlacement2022mnc from "./components/InsightsComponents/BranchComponents/mnc/mnc";
import InsightPlacementmnc from "./components/InsightsComponents/BranchComponents/mnc/mnc2021";
import InsightPlacement2022mech from "./components/InsightsComponents/BranchComponents/mech/mech";
import InsightPlacementmech from "./components/InsightsComponents/BranchComponents/mech/mech2021";
import InsightPlacementep from "./components/InsightsComponents/BranchComponents/ep/ep2021";
import InsightPlacement2022ep from "./components/InsightsComponents/BranchComponents/ep/ep";
import InsightPlacementfme from "./components/InsightsComponents/BranchComponents/fme/fme2021";
import InsightPlacement2022fme from "./components/InsightsComponents/BranchComponents/fme/fme";
import InsightPlacementagp from "./components/InsightsComponents/BranchComponents/agp/agp2021";
import InsightPlacement2022agp from "./components/InsightsComponents/BranchComponents/agp/agp";
import InsightPlacementagl from "./components/InsightsComponents/BranchComponents/agl/agl2021";
import InsightPlacement2022agl from "./components/InsightsComponents/BranchComponents/agl/agl";
import InsightPlacementese from "./components/InsightsComponents/BranchComponents/ese/ese2021";
import InsightPlacement2022ese from "./components/InsightsComponents/BranchComponents/ese/ese";





export default function App() {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />

          <Route path="/:type/:id/:year" element={<Data />} />

          <Route path="/admin_register" exact element={<AdminRegister />} />

          <Route path="/admin_login" exact element={<AdminLogin />} />
          <Route path="/register" exact element={<AdminRegister />} />

          <Route path="/" exact element={<Home />} />

          <Route path="/insight" exact element={<Insight />} />
          {/* <Route
            path="/insight/placement"
            exact
            element={<InsightPlacement />}
          /> */}
          <Route
            path="/insight/placement/2021"
            exact
            element={<InsightPlacement />}
          />
          <Route
            path="/insight/placement/2022"
            exact
            element={<InsightPlacement2022 />}
          />

          <Route
            path="/insight/internship/2021"
            exact
            element={<InsightInternship />}
          />
          <Route
            path="/insight/internship/2022"
            exact
            element={<InsightInternship2022 />}
          />

          <Route path="/stats" exact element={<Stats />}></Route>
          <Route path="/placement_process" exact element={<Comment />}></Route>
          <Route path="*" exact element={<>Not found</>}></Route>




          {/* ////////////////routes for branch specific pages/////////////////  */}
          <Route
            path="/insight/placement/2022/cse"
            exact
            element={<InsightPlacement2022cse />}
          />
          <Route
            path="/insight/placement/2021/cse"
            exact
            element={<InsightPlacementcse />}
          />
          <Route
            path="/insight/placement/2021/ece"
            exact
            element={<InsightPlacementece />}
          />
          <Route
            path="/insight/placement/2022/ece"
            exact
            element={<InsightPlacement2022ece />}
          />
          <Route
            path="/insight/placement/2021/pe"
            exact
            element={<InsightPlacementpe />}
          />
          <Route
            path="/insight/placement/2022/pe"
            exact
            element={<InsightPlacement2022pe />}
          />
          <Route
            path="/insight/placement/2021/me"
            exact
            element={<InsightPlacementme />}
          />
          <Route
            path="/insight/placement/2022/me"
            exact
            element={<InsightPlacement2022me />}
          />
          <Route
            path="/insight/placement/2021/mme"
            exact
            element={<InsightPlacementmme />}
          />
          <Route
            path="/insight/placement/2022/mme"
            exact
            element={<InsightPlacement2022mme />}
          />
          <Route
            path="/insight/placement/2021/che"
            exact
            element={<InsightPlacementche />}
          />
          <Route
            path="/insight/placement/2022/che"
            exact
            element={<InsightPlacement2022che />}
          />
          <Route
            path="/insight/placement/2021/ce"
            exact
            element={<InsightPlacementce />}
          />
          <Route
            path="/insight/placement/2022/ce"
            exact
            element={<InsightPlacement2022ce />}
          />
          <Route
            path="/insight/placement/2022/ee"
            exact
            element={<InsightPlacement2022ee />}
          />
          <Route
            path="/insight/placement/2021/ee"
            exact
            element={<InsightPlacementee />}
          />
          <Route
            path="/insight/placement/2022/mnc"
            exact
            element={<InsightPlacement2022mnc />}
          />
          <Route
            path="/insight/placement/2021/mnc"
            exact
            element={<InsightPlacementmnc />}
          />
          <Route
            path="/insight/placement/2021/mech"
            exact
            element={<InsightPlacementmech />}
          />
          <Route
            path="/insight/placement/2022/mech"
            exact
            element={<InsightPlacement2022mech />}
          />
          <Route
            path="/insight/placement/2021/ep"
            exact
            element={<InsightPlacementep />}
          />
          <Route
            path="/insight/placement/2022/ep"
            exact
            element={<InsightPlacement2022ep />}
          />
          <Route
            path="/insight/placement/2021/fme"
            exact
            element={<InsightPlacementfme />}
          />
          <Route
            path="/insight/placement/2022/fme"
            exact
            element={<InsightPlacement2022fme />}
          />
          <Route
            path="/insight/placement/2021/agp"
            exact
            element={<InsightPlacementagp />}
          />
          <Route
            path="/insight/placement/2022/agp"
            exact
            element={<InsightPlacement2022agp />}
          />
          <Route
            path="/insight/placement/2021/agl"
            exact
            element={<InsightPlacementagl />}
          />
          <Route
            path="/insight/placement/2022/agl"
            exact
            element={<InsightPlacement2022agl />}
          />
          <Route
            path="/insight/placement/2021/ese"
            exact
            element={<InsightPlacementese />}
          />
          <Route
            path="/insight/placement/2022/ese"
            exact
            element={<InsightPlacement2022ese />}
          />
          {/* //////////////// end || routes for branch specific pages/////////////////  */}
        </Routes>
        <Contact />
        <Footer />
     
    </div>
  );
}
