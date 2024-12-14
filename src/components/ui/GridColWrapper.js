import styled from "styled-components";

const GridColsWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.cols ? props.cols : "repeat(1, minmax(0, 1fr))")};
    width: 100%;
`;

export default GridColsWrapper;
