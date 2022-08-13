import React,{useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton';


function Navbar() {
  const logo = "CyRlogo.png";
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handleClick = () => {
    // Cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  }
  return (
    <>
        <NavContainer>
            <img className='logo'src={logo}></img>
              <div className={`nav-container ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} className='active' href='#'>Inicio</a>
                <a onClick={handleClick} href='#'>Productos</a>
                <a onClick={handleClick} href='#'>About</a>
              </div>
              <div className='icon-container'>
                <a href='#'><i class='bx bx-user-circle'></i></a>
                <a href='#'><i class='bx bx-cart' ></i></a>
              </div>
              <div className='burguerButton'>
              <BurguerButton clicked={clicked} handleClick={handleClick}/>
              </div>
              <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar;

const NavContainer = styled.nav `
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  .logo {
    width: 122px;
    margin: 8px 0px 0px 40px;
    @media screen and (max-width:768.5px ){
      width:110px;
      height:55px;
      margin: 12px 0px 0px 20px;
    }
    @media screen and (max-width:428.5px ){
      width:90px;
      height:45px;
      margin: 20px 0px 0px 10px;
    }
  }
  .nav-container {
    position: absolute;
    top:-700px;
    left:-2000px;
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    transition: all .5s ease;
    @media screen and (min-width: 768.5px) {
      padding-top:30px;
      position:initial;
      margin:0;
      display:flex;
      a {
        margin-right:55px;
      }
    }
    a {
      font-weight: 500;
      text-decoration:none;
      color:#000;
      transition: all 200ms linear;
      display:block;
      @media screen and (max-width: 768.5px) {
        margin-bottom:15px;
        font-size:20px;
      }
      m
      &:hover {
        color: #8167a9;
      }
    }
    .active {
      color: #8167a9;
    }
  }
  .nav-container.active {
    width:100%;
    display:block;
    position:absolute;
    margin-left:auto;
    margin-right:auto;
    top:15%;
    left:5px;
    right:0;
    text-align:center;
    @media screen and (max-width: 428.5px) {
      left:-14px;
    }
  }
  .icon-container {
    padding: 30px 40px 0px 0px;
    a {
      text-decoration: none;
      i {
        font-size: 25px;
        color: #000;
        padding-left:15px;
      }
    }
  }
  .burguerButton {
    @media screen and (min-width: 768.5px) {
      display: none;
    }
  }
`

const BgDiv = styled.div`
  position:absolute;
  top:-1000px;
  left:-1000px;
  width:100%;
  height:100%;
  z-index:-1;
  transition: all .6s ease;
  &.active{
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
`