import { StyledBox } from "./box.styled";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Box = ({ children }: Props) => {
  return <StyledBox>{children}</StyledBox>;
};
