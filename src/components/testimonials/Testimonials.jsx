import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
        id: 2,
        name: "InfoShare Academy",
        img: "/PorfolioPage/assets/infoshare.png",
        desc: "Szkolenie obejmowało 324 godzin warszatowych w trypie dziennym.Dostarczyło ono wiedzy i praktycznych umiejetności z zakresu : HTML, CSS , SCSS, JS, React, Redux, Firebase, TypeSctipt, Gti, HTTP, Scrum, NodeJS, Webpack, ESlint, Babel, Prettier, Husky.",
        link: <a href="http://infoshareacademy.com" alt="infoshare" target="_blank" rel="noreferrer">InfoShareAcademy</a>,
        featured: false,
      },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt=""/>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>
                {d.link}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
