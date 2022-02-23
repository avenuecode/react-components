// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** Array of column headings. */
  headerNames: Array<string>,
  /** Custom header element to present within component. */
  CustomTableHeader?: React.Component,
  /** Additional classNames to add to table header component. */
  classList?: string | Array<string>,
};

const TableHeader = (props: Props) => {
  const {
    headerNames,
    CustomTableHeader,
    classList,
    ...rest
  } = props;
  const hasHeaders = headerNames && headerNames.length > 0;

  return (
    <>
      {CustomTableHeader ? (
        <CustomTableHeader />
      ) : (
        <thead className={classNames('ac-table-header', classList)} {...rest}>
          {hasHeaders && (
            <tr>
              {headerNames.map(headerName => (
                <th key={headerName} scope="col">
                  {headerName}
                </th>
              ))}
            </tr>
          )}
        </thead>
      )}
    </>
  );
};

TableHeader.defaultProps = {
  classList: 'text-uppercase font-weight-bold',
  CustomTableHeader: null,
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
