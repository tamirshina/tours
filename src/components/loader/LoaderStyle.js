import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
    background-color: #fff;
    z-index: 99;
`;

const LoadingImage = styled.img` 
    z-index: 100;
    height: 150px;
    width: 150px;
`;

export { LoadingContainer, LoadingImage };