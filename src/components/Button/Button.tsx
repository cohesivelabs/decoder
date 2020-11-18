/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";

interface ButtonProps {
  primary?: boolean;
  inverse?: boolean;
}

export const ButtonContainer = styled.div`
  ${tw`flex flex-1 justify-end`}
`;

export const Button = styled.button`
  ${tw`border border-1 rounded capitalize m-3 w-1/5 py-2 px-10`}
  ${(props: ButtonProps) =>
    props.primary && tw`bg-black text-white border-white`}
  ${(props) => props.inverse && tw`bg-white text-black border-black `}

  &, &:hover, &:active, &:focus {
    outline: 0;
  }
  &:hover {
    ${tw`bg-gray-700 border-black text-white `}
  }

  &:active {
    ${tw`bg-white border-gray-700 text-gray-700 `}
  }
`;
