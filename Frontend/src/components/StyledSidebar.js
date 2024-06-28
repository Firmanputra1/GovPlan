import styled from 'styled-components';

const StyledSidebar = styled.aside`
    width: px;
    height: 100%;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
`;

const Nav = styled.nav`
    ul {
        list-style-type: none;
        padding: 0;
        li {
            margin-bottom: 0.5rem;
            a {
                color: #fff;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export { StyledSidebar, Nav };
