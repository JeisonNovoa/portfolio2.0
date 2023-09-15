import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import BookShop from "../assests/img/BookShop.jpg";
import bleux from "../assests/img/bleux.png";
import gitCard from "../assests/img/gitCard.png";
import graphel from "../assests/img/graphel.png";
import passwordImg from "../assests/img/password.png";
import progressImg from "../assests/img/progress.png";
import colorSharp2 from "../assests/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "BookShop",
      description: "Development & API",
      imgUrl: BookShop,
      projectLink: "https://book-shop-bi9f18t8m-jeisonnovoa.vercel.app/",
    },
    {
      title: "Bleux",
      description: "Design & Development",
      imgUrl: bleux,
      projectLink: "https://sparkly-muffin-7d496b.netlify.app/",
    },
    {
      title: "search github users",
      description: "Development & API",
      imgUrl: gitCard,
      projectLink: "https://eloquent-custard-f9670b.netlify.app/",
    },
    {
      title: "Graphel",
      description: "Design & Development",
      imgUrl: graphel,
      projectLink: "https://marvelous-dolphin-5461d0.netlify.app/",
    },
    {
      title: "password generator",
      description: "Development",
      imgUrl: passwordImg,
      projectLink: "https://extraordinary-faloodeh-274bbc.netlify.app/",
    },
    {
      title: "progress bar",
      description: "Development",
      imgUrl: progressImg,
      projectLink: "https://iridescent-kitten-f11f24.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In this section, you will find my collection of outstanding
                    projects in Back-End web development. Each project
                    represents overcome challenges, innovative solutions, and my
                    dedication to the field. With a rigorous approach and
                    attention to detail, I have created solid and efficient
                    technical solutions to meet the needs of my clients and
                    users. From scalable web applications to robust content
                    management systems and APIs, this collection reflects the
                    diversity and versatility of my work. Each project is an
                    opportunity to demonstrate my knowledge and skills in
                    Back-End web development, delivering quality solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                        {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
