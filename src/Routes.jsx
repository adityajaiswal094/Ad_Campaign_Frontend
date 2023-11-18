import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
const Readytogo = React.lazy(() => import("./pages/ReadyToGo"));
const ChooseProduct = React.lazy(() => import("./pages/ChooseProduct"));
const CampaignType = React.lazy(() => import("./pages/CampaignType"));
const CampaignSettings = React.lazy(() => import("./pages/CampaignSettings"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigntype" element={<CampaignType />} />
          <Route path="/chooseproduct" element={<ChooseProduct />} />
          <Route path="/campaignsettings" element={<CampaignSettings />} />
          <Route path="/readytogo" element={<Readytogo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
