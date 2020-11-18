/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import Panel from "../Panel";
import { Button, ButtonContainer } from "../Button";
import { useState, Fragment, useRef } from "react";
import classnames from "classnames";

const ParserContainer = styled.section`
  ${tw`flex flex-1 flex-row justify-center`}
  ${tw`w-screen`}

  h3 {
    ${tw`text-xl inline-block capitalize w-full p-2 font-semibold`}
  }
`;

const parseInputStyles = css`
  ${tw`w-full h-full`}
  ${tw`border border-solid border-1`}

  &.focused {
    border-color: transparent;

    textarea:focus {
      ${tw`border border-solid border-1`}
      outline: 0;
    }
  }
`;

const Textarea = styled.textarea`
  ${tw`p-2 w-full`}
  min-height: 500px;
`;

interface ParserInputProps {
  onUpdate: (value: string) => void;
  value: string;
}

function ParserInput({ value, onUpdate }: ParserInputProps) {
  const [hasFocus, setFocus] = useState(false);
  const ref = useRef(null);
  return (
    <Panel>
      <label
        css={parseInputStyles}
        className={classnames({ focused: hasFocus })}
      >
        <h3>Input</h3>
        <Textarea
          ref={ref}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
          }}
          onChange={() => onUpdate(ref.current.value)}
        />
      </label>
    </Panel>
  );
}

interface ParserOutputProps {
  value?: string;
}

function ParserOutput({ value }: ParserOutputProps) {
  return (
    <Panel>
      <h3>output</h3>
      <section>{value}</section>
    </Panel>
  );
}

function Parser() {
  const [rawText, setRawText] = useState("");
  const [parsedText, setParsedText] = useState("");

  return (
    <Fragment>
      <ParserContainer>
        <ParserInput onUpdate={setRawText} value={rawText} />
        <ParserOutput value={parsedText} />
      </ParserContainer>
      <ButtonContainer>
        <Button
          inverse
          type="button"
          onClick={() => {
            setRawText("");
            setParsedText("");
          }}
        >
          clear
        </Button>
        <Button primary type="button" onClick={() => setParsedText(rawText)}>
          Parse
        </Button>
      </ButtonContainer>
    </Fragment>
  );
}

export default Parser;
