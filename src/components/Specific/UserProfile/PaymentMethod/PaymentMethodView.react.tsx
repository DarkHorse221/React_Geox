import { Checkbox } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreditCardIcon from 'assets/icons/CreditCardIcon.svg';
import paypalFullLogo from 'assets/icons/paypalFullLogo.svg';
import PaypalIcon from 'assets/icons/PaypalIcon.svg';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import Link, { LinkType } from 'components/Basic/Link';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './PaymentMethod.module.scss';
import {
  paymentMethodReducer,
  paymentMethodStateInit,
} from './PaymentMethodReducer';

interface Props {
  history?: History;
}

const PaymentMethodView: React.FC<Props> = (props: Props) => {
  const [paymentMethodState, dispatch] = React.useReducer(
    paymentMethodReducer,
    {},
    paymentMethodStateInit,
  );

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={s.PaymentMethod}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={CreditCardIcon} alt="" />
          <Typography type={TypographyType.ROBOTO_20_MEDIUM}>
            Credit or Debit card
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={s.AccordionDetails}>
          <GeoXTextField
            name="email"
            label="Name of Account Holder"
            placeholder="Enter Name of Account Holder"
            required
          />
          <div className="input-row">
            <GeoXTextField
              name="email"
              label="Bank Name"
              placeholder="Enter Bank Name"
              required
            />
            <GeoXTextField
              name="email"
              label="Sort Code"
              placeholder="Sort Code"
              required
            />
          </div>
          <GeoXTextField
            name="email"
            label="Account Number"
            placeholder="Enter Account Number"
            required
            type="number"
          />

          <div className={s.RememberThisCardContainer}>
            <Checkbox defaultChecked color="primary" className={s.CheckBox} />
            <div>
              <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                Remember this Card
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_REGULAR}
                color={TypographyColor.LIGHT_GREY__ABAFBA}
              >
                By completing your purchase you agree to these Term of Service.
              </Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={CreditCardIcon} alt="" />
          <Typography type={TypographyType.ROBOTO_20_MEDIUM}>
            For international
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="input-row">
            <GeoXTextField
              name="email"
              label="IBAN"
              placeholder="Enter IBAN"
              required
            />
            <GeoXTextField
              name="email"
              label="BIC"
              placeholder="BIC"
              required
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={PaypalIcon} alt="" />
          <Typography type={TypographyType.ROBOTO_20_MEDIUM}>
            Credit or Debit card
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={s.AccordionDetailsPaypal}>
          <Link to="" type={LinkType.UNDERLINE_AND_BLUE}>
            Connect to paypal
          </Link>
          <img src={paypalFullLogo} alt="" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PaymentMethodView);
