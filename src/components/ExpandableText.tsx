import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const summary = isExpanded ? children : children.substring(0, limit);

  if (children.length <= limit) <Text>{children}</Text>;

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!isExpanded)}
        padding={"5px"}
        fontWeight="bold"
        colorScheme="yellow"
        size="xl"
        marginLeft={1}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
