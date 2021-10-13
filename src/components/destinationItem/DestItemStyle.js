import styled from 'styled-components';

const DestinationBox = styled.div`
  
  flex: 0 0 21%;
  border: solid #c4c4c4;
  

&:hover{
  border: solid black;
}
@media screen and (max-width: 900px) {

  direction: ltr;
}
`;

const BoxContent = styled.div`
  
    display: grid;
    justify-content: right;
  
  @media screen and (max-width: 900px) {
    
      display: flex;
      flex-direction: row-reverse;
      width: 300px;
  }

  @media screen and (max-width: 900px) and (orientation: portrait){
      width: 300px;
  }
  @media screen and (max-width: 300px) and (orientation: portrait){
      width: 250px;
  }
  @media screen and (max-width: 900px) and (orientation: landscape){
      width: 270px;
  }
`;
const DestinationImage = styled.img`

    height: 200px;
    width: 400px;

  @media screen and (max-width: 1900px) {
      width: auto;
      max-width: 350px;
  }

  @media screen and (max-width: 1500px) {
      width: auto;
      max-width: 250px;
  }
  
  @media screen and (max-width: 900px) {
      width: auto;
      max-width: 250px;
      width: 190px;
      height: 130px;
  }

  @media screen and (max-width: 900px) and (orientation: landscape) {
      width: 130px;
      height: 130px;
  }

  @media screen and (max-width: 350px) {
      max-width: 190px;
      width: 130px;
      height: 130px;
  }
   
`;

const DestinationTitle = styled.span`

    text-align: right;
    margin-right: 5%;
  
  @media screen and (max-width: 900px) {
      margin-right: 10px;
  }
`;
export { DestinationBox, BoxContent, DestinationImage, DestinationTitle };