import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const FieldLabel = styled.h2`
  font-weight: bold;
  white-space: nowrap;
`;

export const Field = styled(Box)`
  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #d5d1d1;
`;

export const FieldValueContainer = styled.p`
  min-height: 24px;
`;

export function FieldValue({ children }: React.PropsWithChildren) {
  return (
    <FieldValueContainer>
      {children || <Text sx={{ opacity: 0.6 }}>Indefinido</Text>}
    </FieldValueContainer>
  );
}
