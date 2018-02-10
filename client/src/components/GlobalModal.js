import React from 'react'
import {Modal, Grid } from 'semantic-ui-react'
import GlobalModalCard from './GlobalModalCard'
import NavLogo from '../img/nav-logo.png'


const GlobalModal = () => (
  <Modal trigger={
    <div className="nav-icon">
      {/* <Button className="globalButton" icon>
      <Icon style={{ color: "white" }} name='world' />
    </Button> */}
      <img src={NavLogo} alt="" className='nav-icon-img' style={{ float: 'right' }} />

    </div>
  } basic size='small'>
    <Modal.Content>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Contact Us" buttonText="Contact" description="See something that doesn't look right on our website or have further questions?  Contact Us!" />
          </Grid.Column>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Become A Vendor" buttonText="Sign Up" description="Need an Account?  Click here to request an account and get added to our list of our vendors in your area." />
          </Grid.Column>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Login" buttonText="Login" description="Login to see special Vendor pricing and incentives!" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Learn More" buttonText="Learn" description="See what makes our trailors the most versatile one you have seen yet!" />
          </Grid.Column>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Social Media" buttonText="Follow Us" description="We have vendors Nation wide! Join our team and find out ways to earn more money" />
          </Grid.Column>
          <Grid.Column>
            <GlobalModalCard color="rgba(255, 255, 255, 0.7)" name="Jungle Fever" buttonText="Filler" className="description-color" description="Need an Account?  Click here to login and see a list of our vendors in your area." />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Modal.Content>

  </Modal>
)

export default GlobalModal