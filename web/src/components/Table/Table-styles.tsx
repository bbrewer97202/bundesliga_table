import Styled from 'styled-components';

export const TeamIcon = Styled.img`
  display: inline-block;
  width: 20px;
  height: auto;
  margin-right: 0.5em;
  vertical-align: middle;
`;

export const Table = Styled.table`
  border-spacing: 0;
  width: 100%;
`;

export const TableRow = Styled.tr`
  &:nth-of-type(even) {
    background-color: #eee;
  }
`;

export const TableHead = Styled.th`
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};
  padding: 0.2rem 0.6rem;
  background-color: #685e5a;
  color: #fff;
`;

export const TableCell = Styled.td`
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'center')};
  padding: 0.2rem 0.6rem;
  height: 32px;
`;
