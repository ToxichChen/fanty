import styled from 'styled-components';

const Box = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    min-width: 300px;
    max-width: 500px;
    width: 95%;
    min-height: 50vh;
    border-radius: 10px;
    background-color: #081624;
    box-shadow: 0 0 10px 10px rgba(226, 30, 228, 0.9),
    0 0 10000px 100000px rgba(0, 0, 8, 1);
    z-index: 100000;
`;

const Img = styled.img`
    max-width: 50%;
    margin-bottom: 12px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    max-width: 80%;
    margin-bottom: 25px;
    text-align: center;
    line-height: 25px;
`;

const Block = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 80%;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 8px;
    max-width: 49%;
    width: 100%;
    padding: 10px 5px;
    background-color: #6f2b95;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #fff;
`;

export {
    Box,
    Title,
    Img,
    Text,
    Block,
    Button
};
