import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("webapp");

  const list = [
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "inprogres",
      title: "In progess",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="/PorfolioPage/assets/sunsiadek.png" alt="comunityapp" />
          <h3>Community App</h3>
        </div>
      </div>
    </div>
  );
}
