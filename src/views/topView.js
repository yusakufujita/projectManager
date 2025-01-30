import { useNavigate } from "react-router-dom";
import Header from "../topView/components/Header";
import FeatureSection from "../topView/components/FeatureSection";
import FAQ from "../topView/components/FAQ";
import "../topView/topView.module.css";

const TopView = () => {
  const navigate = useNavigate(); // ページ遷移用

  return (
    <div>
      <Header />
      <main>
        <FeatureSection />
        <FAQ />
      </main>
    </div>
  );
};

export default TopView;