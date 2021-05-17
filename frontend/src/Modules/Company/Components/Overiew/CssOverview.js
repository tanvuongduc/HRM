import styled from "styled-components"

export default styled.div`
    width: 60%;
    height: auto;
    border-radius: 10px;
    background-color: #e6e9eb;
    padding: 10px 30px;
    h3 {
        padding: 10px 0 20px 0;
        border-bottom: 1px solid rgb(186 189 188);
    }
    div {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        div {
            width: 33.33%;
            height: auto;
            justify-content: center;
            font-size: 20px;
        }
        div:last-child {
            border: none;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    /* @media (min-width: 1024px) {} */
`;
