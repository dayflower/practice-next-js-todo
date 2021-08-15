import { useAtom } from 'jotai';
import React, { Fragment } from 'react';
import { Icon, List } from 'semantic-ui-react';
import { removeTodoItemAtom, todoItemsAtom } from '../../states/atoms/todo';

export const TodoList = (): JSX.Element => {
  const [todoItems] = useAtom(todoItemsAtom);
  const [, removeTodoItem] = useAtom(removeTodoItemAtom);

  const handleClickRemoveItem =
    (id: string) =>
    (e: React.MouseEvent): void => {
      e.preventDefault();
      removeTodoItem({ id });
    };

  return (
    <Fragment>
      <List divided relaxed>
        {todoItems.map((item) => (
          <List.Item key={item.id}>
            <List.Content>
              <List.Description>
                {item.message}
                <a href="#" onClick={handleClickRemoveItem(item.id)}>
                  <Icon name="remove" />
                </a>
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>

      <style jsx>{`
        :global(#__next .ui.list .item) {
          padding: 1rem 0.5rem;
        }

        :global(#__next .item:hover) {
          background: rgba(0, 0, 0, 0.03);
          color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </Fragment>
  );
};

export default TodoList;
