import {
  StyledHistoryIcon,
  StyledViewLink,
  StyledContainer,
  FlexContainer,
  StyledView,
} from "@/design-system/StyledViewAllExpenses";

function ViewAllExpenses() {
  return (
    <FlexContainer>
      <StyledViewLink href="/details">
        <StyledContainer>
          <StyledHistoryIcon
            icon="icon-park-outline:history-query"
            color="white"
            width="32"
          />
          <StyledView>View All Expenses</StyledView>
        </StyledContainer>
      </StyledViewLink>
    </FlexContainer>
  );
}

export default ViewAllExpenses;
