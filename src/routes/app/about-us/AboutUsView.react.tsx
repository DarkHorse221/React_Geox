import teamMember1 from 'assets/icons/teamMembers/teamMember1.png';
import AboutUs_Image2 from 'assets/images/AboutUs_Image2.png';
import AboutUs_Image3 from 'assets/images/AboutUs_Image3.png';
import AboutUs_Image4 from 'assets/images/AboutUs_Image4.png';
import AboutUs_Image5 from 'assets/images/AboutUs_Image5.png';
import Button, { ButtonType } from 'components/Basic/Button';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import LandingSectionSummary from 'components/Specific/LandingSectionSummary';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { compose } from 'recompose';
import s from './AboutUs.module.scss';
import { aboutUsReducer, aboutUsStateInit } from './AboutUsReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const AboutUsView: React.FC<Props> = (props: Props) => {
  const [aboutUsState, dispatch] = React.useReducer(
    aboutUsReducer,
    {},
    aboutUsStateInit,
  );

  return (
    <div className={s.AboutUs}>
      <div className={s.Section1}>
        <div className={s.Section1__Content}>
          <Typography
            type={TypographyType.Titillium_Web_50_700}
            color={TypographyColor.WHITE}
            className={s.Section1__Content_Header}
          >
            There are many variations of passages of Lorem Ipsum available
          </Typography>
          <Typography
            type={TypographyType.ROBOTO_18_REGULAR}
            color={TypographyColor.WHITE}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </Typography>
        </div>
      </div>

      {/* Section 2 */}
      <div className={s.Section2}>
        <div className={s.Section2_Content}>
          <Typography
            type={TypographyType.Titillium_Web_45_700}
            className={s.Section2_Content_Header}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software .
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
        <img src={AboutUs_Image2} alt="" />
      </div>

      {/* Section 3 */}
      <div className={s.Section3}>
        <div className={s.Section3__Body}>
          <img src={AboutUs_Image3} alt="" />
          <div className={s.Section3__Content}>
            <div className={s.Section3__Content_Text}>
              <Typography
                type={TypographyType.Titillium_Web_40_700}
                color={TypographyColor.WHITE}
              >
                Manage your risks accurate
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_REGULAR}
                color={TypographyColor.LIGHT_GREY__ABAFBA}
                className={s.Section3__Content_TextDescription}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              <Button type={ButtonType.TRANSPARENT_WHITE}>Button Here</Button>
            </div>
            <div className={s.Section3__Content_Images}>
              <img src={AboutUs_Image4} alt="" className={s.FirstImage} />
              <img src={AboutUs_Image5} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className={s.Section4}>
        <Typography
          type={TypographyType.Titillium_Web_45_700}
          color={TypographyColor.WHITE}
          className={s.Section4__Title}
        >
          Lorem Ipsum is simply dummy text of the printing.
        </Typography>
        <Typography
          type={TypographyType.ROBOTO_16_REGULAR}
          color={TypographyColor.WHITE}
          className={s.Section4__Description}
        >
          Aims to bring together geospatial advocates to discover or generate
          innovative technology solutions. Connecting government entities,
          private companies with geospatial enthusiasts and investors.
        </Typography>
        <div className={s.Section4__TimelineContainer}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010"
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2011"
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2013"
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2015"
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2018"
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2019"
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - Present"
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      {/* Section 5 */}
      <div className={s.Section5}>
        <LandingSectionSummary
          title="DUMMY HEADING"
          subTitle="Lorem Ipsum is simply dummy text."
          description="Aims to bring together geospatial advocates to discover or generate innovative technology solutions. Connecting government entities, private companies with geospatial enthusiasts and investors."
          className={s.LandingSectionSummary}
        />

        <div className={s.Team}>
          <div className={s.Row}>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Eric Gundersen
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  CEO, Mapbox
                </Typography>
              </div>
            </div>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Ryan Mcintyre
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Managing Director, Foundry Group
                </Typography>
              </div>
            </div>
          </div>
          <div className={s.Row}>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Randy Glein
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Managing Director, DFJ Growth
                </Typography>
              </div>
            </div>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Eric Gundersen
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  CEO, Mapbox
                </Typography>
              </div>
            </div>
          </div>
          <div className={s.Row}>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Ira Ehrenpreis
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Managing Partner, DBL Partners
                </Typography>
              </div>
            </div>
            <div className={s.Team__Member}>
              <img src={teamMember1} alt="" />
              <div className={s.Team__MemberDetails}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  className={s.Team__MemberDetails_Name}
                >
                  Vikas Parekh
                </Typography>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Partner, SoftBank Vision Fund
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(AboutUsView);
