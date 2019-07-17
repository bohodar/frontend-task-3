import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle  = createGlobalStyle`
  body {
    margin: -20px 0;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center
  }
`;

export const Wrapper = styled.section`
  position: relative;
  width: 75vw;
  min-width: 500px;
  
  margin: 50px 0;
  padding: 10px 0;
  
  background-color: white;
  box-shadow: 0 0 22px #555;
  border-radius: 4px;
`;

export const ListOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const PostsWrapper = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  
  width: 290px;
  
  margin: 10px 30px;
  padding: 30px 20px;
  
  border: 1px solid black;
  border-left: 5px solid cyan;
  border-radius: 4px;
  box-shadow: 0 0 14px #999;
  
  transition: .2s ease-in-out;
  
  text-align: center;  
  cursor: pointer;
  
  &:hover {
    transform: scale(1.04);
    border-left: 6px solid tomato ;
  }
  
  a {
    width: 100%;
    text-decoration: none;
    transition: .3s ease-in;
  }
`;

export const CurrentPostOuter = styled.div`
  position: relative;
  width: 80%;
  
  margin: 10px auto;
  padding: 20px 30px;
  
  border: 1px solid black;
  border-left: 5px solid #5997ac;
  border-radius: 4px;
  box-shadow: 0 0 14px #999;
  
  background-color: white;
`;

export const CurrentPostInner = styled.div`
  position: relative;
  margin: 20px 10px;
`;
export const BackButton = styled.button`
  position: relative;
  
  width: 120px;
  left: calc(50% - 55px);
  margin-top: 20px;
  padding: 6px 10px;
  
  border: 1px solid #333;
  border-radius: 8px;
  background-color: white;
  
  transition: .15s ease-in;
  
  a {
    color: #5997ac;
    font-weight: 600;
    text-decoration: none;
  }
  
  &:hover {
    background-color: #5997ac;
    
    a {
      color: white;
    }
  }
`;

export const PostWrap = styled.div`
  input {
    height: 2em;
    width: 90%;
  }
`;