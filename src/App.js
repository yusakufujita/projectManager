import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopView from "./views/topView";
import ProjectTitles from "./views/projectView";
import Footer from "./views/Footer"; // フッターをインポート

const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<TopView />} />
            <Route path="/projects" element={<ProjectTitles />} />
          </Routes>
        </div>
        <Footer /> {/* フッターはメインコンテンツの外に配置 */}
      </div>
    </Router>
  );
};

export default App;
