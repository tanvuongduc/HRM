import styled from "styled-components"

export default styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #e6e9eb;
    div:first-child {
        width: 100%;
        height: auto;
        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        h3 {
            display: inline;
        }
    }
    div:last-child {
        padding-top: 10px;
        width: 100%;
        height: auto;
        border-top: 1px solid rgb(186 189 188);
    }
`;
