import React, { useState, useEffect } from "react";
import "./ServicePage.css";
import "fontsource-roboto";
import {
  Button,
  Card,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import firebase from "../../firebase";
import { ContactlessOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default (props) => {
  const [showOverview, setShowOverview] = useState(true);
  const [showKeyProjects, setShowKeyProjects] = useState(false);
  const [showKeyPeople, setShowKeyPeople] = useState(false);
  const [keyPeopleList, setKeyPeopleList] = useState([]);
  const [keyProjectsList, setKeyProjectsList] = useState([]);
  const [overViewData, setOverViewData] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  let slug = pathname.substring(13);

  useEffect(() => {
    firebase
      .database()
      .ref("websiteContent/keyPeople")
      .orderByChild("sector")
      .equalTo(slug)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        let data = [];
        for (let item in snapshot.val()) {
          data.push(snapshot.val()[item]);
        }

        setKeyPeopleList(data);
      });
    firebase
      .database()
      .ref("websiteContent/keyProjects")
      .orderByChild("sector")
      .equalTo(slug)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        let data = [];
        for (let item in snapshot.val()) {
          data.push(snapshot.val()[item]);
        }

        setKeyProjectsList(data);
      });
    firebase
      .database()
      .ref("websiteContent/overview")
      .orderByChild("sector")
      .equalTo(slug)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val());
        let data = [];
        for (let item in snapshot.val()) {
          data.push(snapshot.val()[item]);
        }

        setOverViewData(data);
      });
  }, []);

  return (
    <div className="sectorPage--container">
      <div
        className="sectorPage--img"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${overViewData[0]?.topImgUrl})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "55px",
            maxWidth: "65vw",
            marginTop: "75px",
          }}
        >
          {slug}
        </h1>
      </div>
      {slug === "Philanthropy Projects" ? (
        <div
          style={{
            position: "sticky",
            marginTop: "-65px",
            marginBottom: "30px",
          }}
        >
          <Link to="/support-philantropy">
            <Button size="large" variant="contained" color="secondary">
              Support Our Philanthropy Projects
            </Button>
          </Link>
        </div>
      ) : (
        <></>
      )}

      <div className="sectorPage--insideContainer">
        <Toolbar
          elevation={5}
          style={{ justifyContent: "center", backgroundColor: "black" }}
        >
          <Button
            onClick={() => {
              setShowOverview(true);
              setShowKeyPeople(false);
              setShowKeyProjects(false);
            }}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Overview
          </Button>
          <Button
            onClick={() => {
              setShowOverview(false);
              setShowKeyPeople(false);
              setShowKeyProjects(true);
            }}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Key Projects
          </Button>
          <Button
            onClick={() => {
              setShowOverview(false);
              setShowKeyPeople(true);
              setShowKeyProjects(false);
            }}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Key People
          </Button>
        </Toolbar>
        {showOverview && <OverView overViewData={overViewData} />}
        {showKeyProjects && <KeyProjects keyProjectsList={keyProjectsList} />}
        {showKeyPeople && <KeyPeople keyPeopleList={keyPeopleList} />}
      </div>
    </div>
  );
};

const OverView = ({ overViewData }) => {
  const overViewData1 = [
    {
      title:
        "We are living in transformative times. Technology is transforming everything around us; the way we work, think and live. Our clients’ success depends on their ability to continually adapt and change, to stay ahead and remain competitive.",
      content:
        "GHD Digital was born with a single vision, to help our clients transform their business, embrace the future and change communities for good. With a geographic footprint spanning across Australia, APAC, North America, the UK and the Middle East, our team of data scientists, design thinkers, immersive digital consultants, project managers and innovators, build on the expertise of GHD’s 10,000 people to help clients reimagine their digital future. People-first and outcomes obsessed, we combine industry insights with digital mindsets to maximise opportunities for growth and success. From transforming company culture to delivering real-time actionable insights, GHD Digital has the collective skills to help drive companies forward in the digital age.",
      imgUrl: "https://picsum.photos/1000",
    },
  ];
  return (
    <>
      <div className="overview--card--container">
        {overViewData.map((project) => (
          <Card className="overview--card">
            <Typography
              style={{ fontSize: "25px", marginLeft: "25px" }}
              variant="h6"
            >
              <strong>{project.heading}</strong>
            </Typography>

            <div className="overview--card--insideContainer">
              <Typography
                style={{ fontSize: "25px", margin: "0 25px" }}
                className="overview--card--projectContent"
                variant="subtitle1"
                component="p"
              >
                {project.content}
              </Typography>
              <img
                className="overview--card--img"
                alt="Remy Sharp"
                src="https://picsum.photos/1000"
              />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

const KeyPeople = ({ keyPeopleList }) => {
  return (
    <>
      <div className="keyPeople--card--container">
        {keyPeopleList.map((person) => (
          <Card className="keyPeople--card">
            <Avatar
              className="keyPeople--card--avatar"
              alt="Remy Sharp"
              src={person.imgUrl}
            />
            <Card
              style={{ backgroundColor: "#f8f8f8" }}
              elevation={3}
              className="keyPeople--card--info"
            >
              <Typography variant="h5">{person.name}</Typography>
              <Typography variant="subtitle1">{person.position}</Typography>
              <Typography variant="h6">Tel: {person.phone}</Typography>
              <Typography variant="h6">Email: {person.email}</Typography>
            </Card>
          </Card>
        ))}
      </div>
    </>
  );
};

const KeyProjects = ({ keyProjectsList }) => {
  const keyProjectsList1 = [
    {
      title: "Remote site inspection to smooth bidding process",
      content:
        "In response to the health risks and shutdowns associated with the COVID-19 pandemic, site inspections and bid walks are becoming increasingly difficult for industries that require employees, customers, or prospective bidders on site. Under regular circumstances, bid walks enable contractors to physically survey the site, gather site information, ask questions, and assess the scope and size of a project. When groups can no longer be in the same physical space, live virtual site inspections may be the answer.",
      imgUrl: "https://picsum.photos/1000",
    },
    {
      title: "Remote site inspection to smooth bidding process",
      content:
        "In response to the health risks and shutdowns associated with the COVID-19 pandemic, site inspections and bid walks are becoming increasingly difficult for industries that require employees, customers, or prospective bidders on site. Under regular circumstances, bid walks enable contractors to physically survey the site, gather site information, ask questions, and assess the scope and size of a project. When groups can no longer be in the same physical space, live virtual site inspections may be the answer.",
      imgUrl: "https://picsum.photos/1000",
    },
    {
      title: "Remote site inspection to smooth bidding process",
      content:
        "In response to the health risks and shutdowns associated with the COVID-19 pandemic, site inspections and bid walks are becoming increasingly difficult for industries that require employees, customers, or prospective bidders on site. Under regular circumstances, bid walks enable contractors to physically survey the site, gather site information, ask questions, and assess the scope and size of a project. When groups can no longer be in the same physical space, live virtual site inspections may be the answer.",
      imgUrl: "https://picsum.photos/1000",
    },
  ];
  return (
    <>
      <div className="keyProjects--card--container">
        {keyProjectsList.map((project) => (
          <Card className="keyProjects--card">
            <Typography style={{ marginLeft: "25px" }} variant="h6">
              {project.title}
            </Typography>

            <div className="keyProjects--card--insideContainer">
              <img
                className="projects--card--img"
                alt="Remy Sharp"
                src="https://picsum.photos/1000"
              />
              <Typography
                className="keyProjects--card--projectContent"
                variant="subtitle1"
              >
                {project.content}
              </Typography>
              <Button
                style={{ alignSelf: "flex-end", marginBottom: "25px" }}
                variant="contained"
                color="primary"
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

{
  /*<OverView />
      <KeyPeople />
      <Projects />*/
}

const projectsData = [{}, {}, {}, {}, {}, {}, {}];
