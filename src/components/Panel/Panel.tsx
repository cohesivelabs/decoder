/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Panel = styled.section`
  ${tw`flex flex-1 flex-col`}
  ${tw`m-4 p-4`}
  ${tw`shadow-lg`}
  min-height: 200px;
`;

export default Panel;
