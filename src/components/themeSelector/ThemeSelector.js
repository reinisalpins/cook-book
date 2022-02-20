import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "rgb(223,223,223)",
  fontColor: "#212121",
};

export const darkTheme = {
  body: "#423E3E",
  fontColor: "#fff",
  boxBody: '#E5E2E2',
  buttonBody: '#423E3E',
  buttonLetters: '#fff',
  hover : '#838383',

};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

    .box {
        background-color: ${(props) => props.theme.boxBody};
    }

    .box .cookThis {
        background-color: ${(props) => props.theme.buttonBody};
        color: ${(props) => props.theme.buttonLetters};
    }

    .box .cookThis:hover{
        background-color: ${(props) => props.theme.hover};
    }

    .create h2{
        color: ${(props) => props.theme.fontColor};
    }

    .create label {
        color: ${(props) => props.theme.fontColor};
    }

    .create h4 {
        color: ${(props) => props.theme.fontColor};
    }

    .box1 {
        background-color: ${(props) => props.theme.boxBody};
    }
`;