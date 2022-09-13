import { FunctionComponent } from "react";
import styled from "styled-components";

interface ColInterface {
    size: number;
    colSize?: number;
    styleString?: any;
    align?: string;
    active?: any;
    bgColor?: string;
}

interface ContainerInterface {
    styleString?: any;
}

export const Container: FunctionComponent<ContainerInterface> = styled("div")<{
    styleString?: any;
}>`
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans";
    display: flex;
    flex-wrap: wrap;
    ${props => props.styleString}
`;

export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number;
    colSize?: number;
    styleString?: any;
    align?: string;
    active?: any;
    bgColor?: string;
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    text-align: ${props => props.align};
    background-color: ${props => props.bgColor};
    ${props => props.styleString};
    ${props => props.active};
`;
