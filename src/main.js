import styled from '@emotion/styled';
import ReactDOM from 'react-dom';

const StyledDiv = styled`
  color: #000000;
`;

function App() {
  return <StyledDiv>hello</StyledDiv>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
