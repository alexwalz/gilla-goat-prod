import React, { Component } from 'react';
import GlobalModal from './GlobalModal'
import Parallax from 'react-springy-parallax'
import StarsMoon from '../img/stars_moon.jpg'
import DesertMain from '../img/stars_lake.jpg'
import JungleMain from '../img/jungle.jpg'
import GarageMain from '../img/garage.jpg'
import StarsLayer from './Stars'
import StarsTreeLayer from './Stars/Trees'
import StarsTruckLayer from './Stars/Truck'
import JungleTruckLayer from './Jungle/Truck'
import GarageTruckLayer from './Garage/Truck'
import GarageBottomLayer from './Garage/Bottom'
import JungleRightLeaves from './Jungle/RightLeaves'
import JungleLeftLeaves from './Jungle/LeftLeaves'
import JungleTopVine from './Jungle/TopVine'
import JungleBottomVine from './Jungle/BottomVine'
import DesertTruckLayer from './Desert/Truck'
import CactusLayer from './Desert/cactus'
import JungleOuterLayer from './Jungle/JungleOuterLayer'
import MobileBg from '../img/mobile-bg.png';



class HomePage extends Component {


  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  render() {
    const styles = {
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }



    return (
      <Parallax ref='parallax' pages={4}>

         
        {/* Mobile  */}
        <Parallax.Layer offset={0} speed={0} factor={4.1} style={{ backgroundImage: `url(${MobileBg})`, backgroundSize: 'cover', backgroundPositionX: 'center' }} className='hide-on-med-and-up' />
        <Parallax.Layer offset={0} speed={0} className='hide-on-med-and-up' onClick={() => this.refs.parallax.scrollTo(1)} />
        <Parallax.Layer offset={1} speed={0} className='hide-on-med-and-up' onClick={() => this.refs.parallax.scrollTo(2)} />
        <Parallax.Layer offset={2} speed={0} className='hide-on-med-and-up' onClick={() => this.refs.parallax.scrollTo(3)} />
        <Parallax.Layer offset={3} speed={0} className='hide-on-med-and-up' onClick={() => this.refs.parallax.scrollTo(0)} />

        <Parallax.Layer offset={0} speed={0} style={{ backgroundImage: `url(${StarsMoon})`, backgroundSize: 'cover' }} className='hide-on-mobile' />
        <Parallax.Layer offset={1} speed={0} style={{ backgroundImage: `url(${DesertMain})`, backgroundSize: 'cover' }} className='hide-on-mobile' />
        <Parallax.Layer offset={2} speed={0} style={{ backgroundImage: `url(${JungleMain})`, backgroundSize: 'cover' }} className='hide-on-mobile' />
        <Parallax.Layer offset={3} speed={0} style={{ backgroundImage: `url(${GarageMain})`, backgroundSize: 'cover' }} className='hide-on-mobile' />


        <Parallax.Layer
          className='hide-on-mobile'
          offset={0}
          speed={0}
        >
          {/* stuff for stars page */}
          <Parallax.Layer
            className='hide-on-mobile'
            offset={0}
            speed={-0.45}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            onClick={() => this.refs.parallax.scrollTo(1)}>
              <StarsLayer />
          </Parallax.Layer>

          <Parallax.Layer
            className='hide-on-mobile'
            offset={0.6}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            onClick={() => this.refs.parallax.scrollTo(1)}>
            <StarsTreeLayer />
          </Parallax.Layer>

          <Parallax.Layer
            className='hide-on-mobile'
            offset={0.3}
            speed={0.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.refs.parallax.scrollTo(1)}>

            <StarsTruckLayer />

          </Parallax.Layer>

          <Parallax.Layer
            className='hide-on-mobile'
            offset={0}
            speed={0}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {/* <Nav /> */}
            <GlobalModal />
          </Parallax.Layer>
        </Parallax.Layer>




        {/* stuff for desert page */}
        <Parallax.Layer
          className='hide-on-mobile'
          offset={1}
          speed={-0.1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(2)}>

        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={1.29}
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.refs.parallax.scrollTo(2)}>
          <DesertTruckLayer />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={1.29}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          onClick={() => this.refs.parallax.scrollTo(2)}>
          <CactusLayer />
        </Parallax.Layer>




        {/* stuff for jungle page */}
        <Parallax.Layer
          className='hide-on-mobile'
          offset={2}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(3)}>

        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={2.25}
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
            <JungleTruckLayer />        
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={2.2}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <JungleOuterLayer />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={2.2}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <JungleRightLeaves />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={2.25}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <JungleLeftLeaves />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={1.75}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <JungleTopVine />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={1.85}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <JungleBottomVine />
        </Parallax.Layer>




        {/* stuff for garage page */}
        <Parallax.Layer
          className='hide-on-mobile'
          offset={3}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}>

        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={3.2}
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <GarageTruckLayer />
        </Parallax.Layer>

        <Parallax.Layer
          className='hide-on-mobile'
          offset={3.5}
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.refs.parallax.scrollTo(3)}>
          <GarageBottomLayer />
        </Parallax.Layer>

      </Parallax>
    );
  }
}

export default HomePage;
