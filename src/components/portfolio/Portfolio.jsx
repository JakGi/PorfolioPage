import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webAppPortfolio } from "../../data";
import { inProgressPortfolio } from "../../data";
import { useEffect } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("webapp");
  const [data, setData] = useState([]);

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

  useEffect(() => {
    switch (selected) {
      case "webapp":
        setData(webAppPortfolio);
        break;
      case "inprogres":
        setData(inProgressPortfolio);
        break;
      default:
        setData(webAppPortfolio);
    }
  }, [selected]);

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
            key={item.id} 
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id} >
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
