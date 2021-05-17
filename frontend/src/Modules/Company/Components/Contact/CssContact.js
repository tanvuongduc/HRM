import styled from 'styled-components'

export default styled.div`
    width: 35%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #e6e9eb;
    h3 {
        padding: 10px 0;
    }
    div {
        width: 100%;
        height: auto;
        padding: 5px 0;
        border-top: 1px solid rgb(186 189 188);
        div {
            border: none;
            overflow: hidden;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
        /* position: fixed;
        bottom: 0; */
    }
    /* @media (min-width: 1024px) {} */
`;
