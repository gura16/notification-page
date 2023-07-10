import "./App.css";
import image1 from "./images/Oval (2).png";
import image2 from "./images/Oval.svg";
import image3 from "./images/Oval (3).png";
import image4 from "./images/Oval (4).png";
import image5 from "./images/Oval (5).png";
import image6 from "./images/Oval (6).png";
import image7 from "./images/Oval (7).png";
import image8 from "./images/Oval (8).png";
import image9 from "./images/Rectangle (4).png";
import React, { useState } from "react";

function App() {
  const [isRead, setIsRead] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const handleMarkAsRead = () => {
    setIsRead(true);
    setNotificationCount(0);
  };
  return (
    <div className="card">
      <header>
        <div className="headerdiv">
          <h1>Notification</h1>
          <div className="number">{notificationCount}</div>
        </div>
        <p onClick={handleMarkAsRead} className="mark">
          Mark all as read
        </p>
      </header>
      <div className="notificationdiv">
        <ChildComponent
          image={image1}
          name="Mark Webber"
          text2="reacted to your recent post"
          text3="My first tournament today!"
          time="1m ago"
          redpress={isRead ? "" : "red"}
          notification={isRead ? "notification" : "notification blue"}
          displaymessage="nomessage"
        ></ChildComponent>
        <ChildComponent
          image={image3}
          name="Angela Gray"
          text2="folloved you"
          time="5m ago"
          redpress={isRead ? "" : "red"}
          notification={isRead ? "notification" : "notification blue"}
          displaymessage="nomessage"
        ></ChildComponent>
        <ChildComponent
          image={image4}
          name="Jacob Thompson"
          text2="has joined your group"
          Chess="Chess Club"
          time="1 day ago"
          redpress={isRead ? "" : "red"}
          notification={isRead ? "notification" : "notification blue"}
          displaymessage="nomessage"
        ></ChildComponent>
        <ChildComponent
          image={image5}
          name="Rizky Hasanuddin"
          text2="sent you a private message"
          time="5 days ago"
          notification="notification"
          displaymessage="message"
        ></ChildComponent>
        <ChildComponent
          image={image6}
          name="Kimberly Smith"
          image9={image9}
          text2="commented on your picture "
          time="1 week ago"
          notification="notification"
          imagestyle="image9"
          displaymessage="nomessage"
        ></ChildComponent>
        <ChildComponent
          image={image7}
          name="Nathan Peterson"
          text2="reacted to your recent post"
          text3="5 end-game strategies to increase your win rate"
          time="2 weeks ago"
          notification="notification"
          displaymessage="nomessage"
        ></ChildComponent>
        <ChildComponent
          image={image8}
          name="Anna Kim"
          text2="left the group"
          Chess="Chess Club"
          time="2 weeks ago"
          notification="notification"
          displaymessage="nomessage"
        ></ChildComponent>
      </div>
    </div>
  );
}

export default App;

function ChildComponent(props) {
  return (
    <div className={props.notification}>
      <img className="image1" src={props.image} />
      <div className="description">
        <p className="text">
          <span className="name">{props.name} </span>
          <span className="name3"> {props.text2} </span>
          <span className="name1"> {props.text3} </span>
          <span className="chess">{props.Chess}</span>
          <span className={props.redpress}></span>
        </p>
        <p className="time">{props.time}</p>
        <div className={props.displaymessage}>
          <p className="info">
            Hello, thanks for setting up the Chess Club. I’ve been a member for
            a few weeks now and I’m already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>
      <img className={props.imagestyle} src={props.image9} />
    </div>
  );
}
