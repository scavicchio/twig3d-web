import React from 'react';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

const TreeViewComponent = () => (
  <div className="Tree" style={{ flex: 1 }}>
    <RichTreeView items={MUI_X_PRODUCTS} />
  </div>
);

export default TreeViewComponent;

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
    {
      id: 'grid',
      label: 'Data Grid',
      children: [
        { id: 'grid-community', label: '@mui/x-data-grid' },
        { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
        { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
      ],
    },
    {
      id: 'pickers',
      label: 'Date and Time Pickers',
      children: [
        { id: 'pickers-community', label: '@mui/x-date-pickers' },
        { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
      ],
    },
    {
      id: 'charts',
      label: 'Charts',
      children: [{ id: 'charts-community', label: '@mui/x-charts' }],
    },
    {
      id: 'tree-view',
      label: 'Tree View',
      children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
    },
  ];
  