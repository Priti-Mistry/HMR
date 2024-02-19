// DragDropTable.js
import React from 'react';
import { Table } from 'antd';
import { DndContext, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const DragDropTable = ({ dataSource, columns }) => {
  const { items, setItems } = React.useState(dataSource);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const newItems = [...items];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, active);
      setItems(newItems);
    }
  };

  return (
    <DndContext
      sensors={{
        sortable: {
          strategy: sortableKeyboardCoordinates
        }
      }}
      onDragEnd={handleDragEnd}
    >
      <Table dataSource={items} columns={columns} rowKey="id" />
      <DragOverlay>
        {({ active }) => (
          <div>{active && `Dragging item ${active.id}`}</div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropTable;
