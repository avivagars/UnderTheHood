import { Col, Row } from "react-bootstrap";
import van from "../IMG_3207.jpg";
import van2 from "../IMG_3822.png";
import "./About.css"

export function About() {
  return (
    <div className="about">
      <h1 className="text-align-center fs-1">About Under The Hood </h1>
      
      <p style={{margin: "60px"}}>
        Hi! My name is Aviva Gars and I am a software engineer at Ada
        Developer's Academy. I chose to create a user friendly car connect app
        because I felt like it was important that we start generalizing and
        normalizing the mechanic industry. Women and POC are significantly more
        likely to receive higher price quotes than men when they are equally
        uninformed. This male dominated industry has only 4.3% of female mechanics,
        2% identify as LGBTQIA+. 8.5% identify as Black or African American, 2.4% asian,
        and 17% Hispanic or latino/a. 
    
        This discrepancy should cause alarm considering women own 62% of cars in the 
        USA yet have little to no influence on how those cars are taken care of. 
        My app aims to empower women, POC, and gender expansive folk to understand and 
        take informed action with their cars all while keeping money in the bank.

        Additionally my app could help employ "handy-women/men", retired folk, and those
        looking to share their knowledge on an online space. 

      </p>
      <h1 className="text-align-center fs-3"> My Story </h1>
      <Row className="text-center align-middle container row" style={{marginLeft: 90, marginRight: 90}}>
        <Col>
          <img
            className="img-fluid mx-auto d-block"
            style={{ height: 300,  }}
            src={van2}
            alt="van"
          />
        </Col>
        <Col>
          <img
            className="img-fluid mx-auto d-block"
            style={{ height: 300 }}
            src={van}
            alt="van"
          />
        </Col>
      </Row>
      <p style={{margin: "60px"}}> 
      In 2020 after the pandemic hit, my partner and I (like many others) used the time 
      to reevaluate our lives and priorities. We had just graduated college and realized
      we weren't in jobs we loved, weren't living in a place where we were happy, and 
      wanted to explore the world. We purchased a 1995 Chevy G20 and built the van out to 
      live in and explore the country over throughout the following year.
      We ran into so many issues dealing with an older vehicle and to our luck my partner's
      mechanic brother was able to assist. Not only did he physically help, but when
      we needed to go to an outside source he was their to negotiate and determine what 
      we actually needed. I realized if I had someone like him throughout my car-owning
      life I would have saved myself so much time, energy, money and gained so much
      knowledge. This source is literally indispensable and I wish a brother-in-law 
      mechanic on everyone. 
      Building out this van is what led me to believe I could follow my dreams of exploration 
      all while making money. This van led me to software engineering and this van led
      me to Ada. As tribute I give you Under The Hood.
      </p>
    </div>
  );
}
