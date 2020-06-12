// @flow
import React from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

type Props = {
  /** String or formatted message to display as caption for the table. */
  caption?: React.Element,
  /** Array of column headings. */
  headerNames: Array<string>,
  /** 2D array of shape: `[[row1-value1, row1-value2], [row2-value1, row2-value2], ...]` */
  tableData?: Array<any>,
  /** Custom header element to present within table header. */
  CustomTableHeader?: React.Component,
  /** Custom body element to present within table body. */
  CustomTableBody?: React.Component,
  /** Additional classNames to add to table component. */
  classList?: string | Array<string>,
}

const Table = (props: Props) => {
  const {
    headerNames,
    tableData,
    CustomTableHeader,
    CustomTableBody,
    classList,
    caption,
    ...rest
  } = props;

  return (
    <table className={classNames('ac-table table table-hover', classList)} {...rest}>
      <caption>{caption}</caption>
      <TableHeader headerNames={headerNames} CustomTableHeader={CustomTableHeader} />
      <TableBody tableData={tableData} CustomTableBody={CustomTableBody} />
    </table>
  );
};

Table.defaultProps = {
  caption: null,
  tableData: [],
  CustomTableHeader: null,
  CustomTableBody: null,
  classList: '',
};

Table.displayName = 'Table';

export default Table;
