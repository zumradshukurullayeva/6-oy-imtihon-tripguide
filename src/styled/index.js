import styled from "styled-components";

export const DarkTheme = {
    backgroundColor: '#222529',
    subBackgroundColor: '#3B3E44',
    color: '#FCFCFD',
    subColor: '#84878B',
    border: '1px solid #4A4E54',
    defaultBackcolor: '#141416',
    greyBackcolor: '#18191B',
    checkboxBorder: '1px solid rgb(255 255 255 / 70%)',
    dropcontenborder: '#3B3E44',
    dropColor: '#23262F',
    dropcontentbgColor: '#222529',
    dropdownLinkColor: '#F4F5F6',
    dropBtncolor: '#E7ECF3',
    profileNameColor: '#FCFCFD',
};

export const LightTheme = {
    backgroundColor: '#FFFFFF',
    subBackgroundColor: '#F4F5F7',
    color: '#3B3E44',
    subColor: '#B1B5C4',
    border: '1px solid #E7E8EA',
    defaultBackcolor: '#F5F5F5',
    greyBackcolor: '#E5E5E5',
    checkboxBorder: '1px solid rgba(0,0,0,.25)',
    dropcontenborder: '#E7ECF3',
    dropColor: '#F4F5F6',
    dropcontentbgColor: '#FFFFFF',
    dropdownLinkColor: '3B3E44',
    dropBtncolor: '#84878B',
    profileNameColor: '#3B3E44',
};

export const HeaderDiv = styled.header`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`;

export const FilterSectionDiv = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`;

export const FilterSectionBox = styled.div`
    background-color: ${(props) => props.theme.subBackgroundColor};
    border: ${(props) => props.theme.border};
`;

export const ExploreSectionBox = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    border: ${(props) => props.theme.border};
`;

export const SectionBoxBorder = styled.div`
    border: ${(props) => props.theme.border};
`;

export const FilterSectionP = styled.p`
    color: ${(props) => props.theme.subColor};
`;

export const DefoultBackground = styled.div`
    background-color: ${(props) => props.theme.defaultBackcolor};
    color: ${(props) => props.theme.color};
`;

export const GreyBackground = styled.div`
    background-color: ${(props) => props.theme.greyBackcolor};
    color: ${(props) => props.theme.color};
`;

export const Checkbox = styled.input`
    border-radius: 0.25em;
    appearance: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: ${(props) => props.theme.checkboxBorder}
`;

export const DropdownContent = styled.div `
display: none;
position: absolute;
left: -80px;
top: 20px;
border-radius: 16px;
border: 1px solid ${(props) => props.theme.dropcontenborder};
color: ${(props) => props.theme.dropColor}; 
background: ${(props) => props.theme.dropcontentbgColor} ;
min-width: 160px;
box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
z-index: 1;
`

export const DropdownLink = styled.a `
    color: ${(props) => props.theme.dropdownLinkColor};
    display: flex;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 8px;
    text-decoration: none;
    &:hover {
        background: '#FFFFFFF';
    }
`

export const DropdownButton = styled.button `
    background-color: transparent;
    color:${(props) => props.theme.dropBtncolor};
    border: none;
    text-transform: uppercase;
    cursor: pointer;
`

