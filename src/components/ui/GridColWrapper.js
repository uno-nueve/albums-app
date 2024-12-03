import styled from "styled-components";

const GridColsWrapper = styled.main`
    display: grid;
    grid-template-columns: ${(props) => (props.cols ? props.cols : "repeat(1, minmax(0, 1fr))")};
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);
`;

export default GridColsWrapper;
