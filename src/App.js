import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '5rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function App() {
  const classes = useStyles();
  const [income, setIncome] = React.useState(0)
  const [commissions, setCommissions] = React.useState(0)
  const [construction, setConstruction] = React.useState(0)
  const [other, setOther] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  const handleChangeincome = (e) => {
    if (e.target.value === '')
      setIncome(0)
    else
      setIncome(e.target.value)
  }

  const handleChangecommissions = (e) => {
    if (e.target.value === '')
      setCommissions(0)
    else
      setCommissions(e.target.value)
  }

  const handleChangeconstruction = (e) => {
    if (e.target.value === '')
      setConstruction(0)
    else
      setConstruction(e.target.value)
  }

  const handleChangeOther = (e) => {
    if (e.target.value === '')
      setOther(0)
    else
      setOther(e.target.value)
  }

  useEffect(() => {
    var sum = parseInt(income) + parseInt(commissions) + parseInt(construction) + parseInt(other)
    setTotal(sum)
  }, [income, commissions, construction, other])

  return (
    <div className="container">
      <Grid container className="sub_container">
        <Grid item xs={12} sm={6}>
          <img src="./assets/logo.png" alt="logo" style={{ width: 150, height: 'auto', marginBottom: '5rem' }} />
        </Grid>
        <Grid item xs={12} sm={6} className="header_nav_menu">
          <div className="nav_menu_item">Item 1</div>
          <div className="nav_menu_item">Item 2</div>
          <div className="nav_menu_item">Item 3</div>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={10} className="calcualtor_container" >
            <div className="calcualtor_sub_container">
              <Grid container>
                <Grid item xs={12}>
                  <div className="title">The QuickBooks Calculator</div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      {/* <div>Income from sales</div> */}
                      <TextField
                        id="Income"
                        label="Income from sales (£)"
                        variant="outlined"
                        onChange={handleChangeincome}
                        value={income !== 0 ? income : ''}
                        className="textfield"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <div>commissions</div> */}
                      <TextField
                        id="commissions"
                        label="commissions (£)"
                        variant="outlined"
                        onChange={handleChangecommissions}
                        value={commissions !== 0 ? commissions : ''}
                        className="textfield"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <div>Construction</div> */}
                      <TextField
                        id="Construction"
                        label="Construction (£)"
                        variant="outlined"
                        onChange={handleChangeconstruction}
                        value={construction !== 0 ? construction : ''}
                        className="textfield"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <div>Other income</div> */}
                      <TextField
                        id="Other"
                        label="Other income (£)"
                        variant="outlined"
                        onChange={handleChangeOther}
                        value={other !== 0 ? other : ''}
                        className="textfield"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <div>Total</div> */}
                  <Button variant="contained" className="btn_total">{`£${total}`}</Button>
                </Grid>
                <Grid item xs={12}>
                  <div class="socialmedia_title">Share my results</div>
                </Grid>
                <Grid item xs={12} className="footer_container">
                  <div>
                    <a href="https://www.facebook.com/QuickBooksUK/?brand_redir=158468347517152" target="_blank">
                      <img src="./assets/face_book.png" className="footter_img" alt="alt" />
                    </a>
                    <a href="https://www.linkedin.com/learning/search?keywords=intutit+QuickBooks&upsellOrderOrigin=sem_src.go-pa_c.LLS-C_EMEA_All_UK_Search_Google-NB_DR-PRS_Broad_Course-DSA_All_English_Core_pkw._pmt.b_pcrid.473976941175_pdv.c_plc._trgid.dsa-977546817247_net.g_learning&trk=learning-topics_learning-search-bar_search-submit" target="_blank">
                      <img src="./assets/in.png" className="footter_img" alt="alt" />
                    </a>
                    <a href="https://www.pinterest.co.uk/QuickBooks/" target="_blank">
                      <img src="./assets/instagram.png" className="footter_img" alt="alt" />
                    </a>
                    <a href="https://www.instagram.com/quickbooks/?hl=en" target="_blank">
                      <img src="./assets/camera.png" className="footter_img" alt="alt" />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.youtube.com/channel/UCCwZXz89GntOdmoH4220tyw" target="_blank">
                      <img src="./assets/media.png" className="footter_img" alt="alt" />
                    </a>
                    <a href="mailto:someone@quickbooks.com">
                      <img src="./assets/message.png" className="footter_img" alt="alt" />
                    </a>
                    <a href="https://www.tkmaxx.com/">
                      <img src="./assets/chars.png" className="footter_img" alt="alt" />
                    </a>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div style={{ width: '70%' }}>
              <div className="title">Frequently asked questions</div>
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Praesent fermentum posuere varius?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="multi-line-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Integer semper efficitur lacus, nec semper lectus tempus id?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="multi-line-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Sed erat dolor, pellentesque eu pulvinar eget, finibus at arcu?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="multi-line-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Praesent sollicitudin mauris a mattis tincidunt?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="multi-line-text-truncate">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}