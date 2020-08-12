import Contact_Benefits_icon1 from 'assets/icons/Contact_Benefits_icon1.svg';
import Contact_Benefits_icon2 from 'assets/icons/Contact_Benefits_icon2.svg';
import Contact_Benefits_icon3 from 'assets/icons/Contact_Benefits_icon3.svg';
import Contact_Benefits_icon4 from 'assets/icons/Contact_Benefits_icon4.svg';
import Contact_Benefits_icon5 from 'assets/icons/Contact_Benefits_icon5.svg';
import KnowMoreButtonArrow from 'assets/icons/knowMoreButtonArrow.svg';
import Product_Section2_Icon1 from 'assets/icons/Product_Section2_Icon1.svg';
import Product_Section2_Icon2 from 'assets/icons/Product_Section2_Icon2.svg';
import Product_Section2_Icon3 from 'assets/icons/Product_Section2_Icon3.svg';
import Product_Section2_Icon4 from 'assets/icons/Product_Section2_Icon4.svg';
import productPageCircleBg from 'assets/images/productPageCircleBg.svg';
import Product_Image1 from 'assets/images/Product_Image1.png';
import Product_Image2 from 'assets/images/Product_Image2.png';
import Product_Image3 from 'assets/images/Product_Image3.png';
import Button, { ButtonType } from 'components/Basic/Button';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import BulletPointWithBorder from 'components/Specific/BulletPointWithBorder';
import Feature from 'components/Specific/Feature';
import LandingSectionSummary from 'components/Specific/LandingSectionSummary';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Product.module.scss';
import { productReducer, productStateInit } from './ProductReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ProductView: React.FC<Props> = (props: Props) => {
  const [productState, dispatch] = React.useReducer(
    productReducer,
    {},
    productStateInit,
  );

  return (
    <div className={s.Product}>
      <div className={s.ProductHeader}>
        <div className={s.ProductHeader__Content}>
          <img src={productPageCircleBg} alt="" />
          <div className={s.ProductHeader__Content_Body}>
            <Typography
              type={TypographyType.Titillium_Web_50_700}
              color={TypographyColor.WHITE}
            >
              There are many variations of passages of Lorem Ipsum available
            </Typography>
            <Typography
              type={TypographyType.ROBOTO_18_REGULAR}
              color={TypographyColor.WHITE}
              className={s.ProductHeader__Description}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </Typography>
            <div>
              <Button type={ButtonType.TRANSPARENT_WHITE}>Register</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className={s.Section2}>
        <div className={s.SectionSummary}>
          <LandingSectionSummary
            title="DUMMY HEADING"
            subTitle="Manage your risks accurate"
            description="Aims to bring together geospatial advocates to discover or generate innovative technology solutions.Connecting government entities, private companies with geospatial enthusiasts and investors."
            className={s.LandingSectionSummary}
          />
        </div>
        <div className={s.FeaturesContainer}>
          <div className={s.Features}>
            <Feature
              title="Storm Risk"
              description="We have refined iterative AI-based systems which have the ability to extract HD Vector."
              icon={Product_Section2_Icon1}
              className={s.Feature}
            />
            <Feature
              title="Storm Risk"
              description="We have refined iterative AI-based systems which have the ability to extract HD Vector."
              icon={Product_Section2_Icon2}
              className={s.Feature}
            />
          </div>
          <div className={s.Features}>
            <Feature
              title="Storm Risk"
              description="We have refined iterative AI-based systems which have the ability to extract HD Vector."
              icon={Product_Section2_Icon3}
              className={s.Feature}
            />
            <Feature
              title="Storm Risk"
              description="We have refined iterative AI-based systems which have the ability to extract HD Vector."
              icon={Product_Section2_Icon4}
              className={s.Feature}
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className={s.Section3}>
        <img src={Product_Image1} alt="" />
        <div className={s.Section3__Content}>
          <div className={s.Column}>
            <Typography type={TypographyType.Titillium_Web_45_700}>
              Online Quote
            </Typography>
            <Typography
              type={TypographyType.ROBOTO_16_REGULAR}
              className={s.Description}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <div className="KnowMoreButton KnowMoreButtonBlack">
              <Button type={ButtonType.TRANSPARENT_BLACK_WITHOUT_BORDER}>
                <Typography type={TypographyType.ROBOTO_18_REGULAR}>
                  Know more <img src={KnowMoreButtonArrow} alt="" />
                </Typography>
              </Button>
            </div>
          </div>
          <div className={s.Column}>
            <Typography type={TypographyType.Titillium_Web_45_700}>
              Online Quote
            </Typography>
            <Typography
              type={TypographyType.ROBOTO_16_REGULAR}
              className={s.Description}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <div className="KnowMoreButton KnowMoreButtonBlack">
              <Button type={ButtonType.TRANSPARENT_BLACK_WITHOUT_BORDER}>
                <Typography type={TypographyType.ROBOTO_18_REGULAR}>
                  Know more <img src={KnowMoreButtonArrow} alt="" />
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className={s.Section4}>
        <LandingSectionSummary
          title="DUMMY HEADING"
          subTitle="Portfolio assessment risk"
          description="Aims to bring together geospatial advocates to discover or generate innovative technology solutions.Connecting government entities, private companies with geospatial enthusiasts and investors."
          className={s.LandingSectionSummary}
        />
        <img src={Product_Image2} alt="" />
      </div>

      {/* Section 5 */}
      <div className={s.Section5}>
        <img src={Product_Image3} alt="" />
        <LandingSectionSummary
          title="DUMMY HEADING"
          subTitle="Claim"
          description={
            <>
              Simplex Services is a global IT consulting services provider
              delivering high value to clients through integrated, reliable,
              responsive and cost-effective solutions.
              <br />
              <br />
              We help businesses improve their operational excellence and
              transform them into a technology-driven enterprise. Our key
              performance areas include including Cloud Transformation, DevOps,
              Digital Workplace and Programme Management.
            </>
          }
          className={s.LandingSectionSummary}
        />
      </div>

      <div className={s.Section6}>
        <BulletPointWithBorder
          number="01"
          title="Boutique Consultancy"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <BulletPointWithBorder
          number="02"
          title="Proven Experience"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <BulletPointWithBorder
          number="03"
          title="Independent Perspective"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <BulletPointWithBorder
          number="04"
          title="Line of Business Expertise"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>

      <div className={s.Section7}>
        <LandingSectionSummary
          title="Benefits"
          subTitle="Cutting-Edge Technology"
          description="High-Quality Property Data is vital to insurance companies and agents for better business results."
          className={s.Section7__LandingSectionSummary}
        />
        <div className={s.Features}>
          <Feature
            title="10+ Data source"
            icon={Contact_Benefits_icon1}
            className={s.Feature}
          />
          <Feature
            title="Artificial intelligence"
            icon={Contact_Benefits_icon2}
            className={s.Feature}
          />
          <Feature
            title="3D – Patents"
            icon={Contact_Benefits_icon3}
            className={s.Feature}
          />
          <Feature
            title="Driven by Insurance Science"
            icon={Contact_Benefits_icon4}
            className={s.Feature}
          />
          <Feature
            title="multiple imagery provider"
            icon={Contact_Benefits_icon5}
            className={s.Feature}
          />
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ProductView);
