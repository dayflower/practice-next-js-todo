import { useAtom } from 'jotai';
import React, { Fragment, useState } from 'react';
import { Card, Form } from 'semantic-ui-react';
import { addTodoItemAtom } from '../../states/atoms/todo';

export const TodoInputForm = (): JSX.Element => {
  const [text, setText] = useState('');
  const [, addTodoItem] = useAtom(addTodoItemAtom);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodoItem({ message: text });
    setText('');
  };

  const handleChangeInput = (e: React.ChangeEvent): void => {
    setText((e.target as HTMLInputElement).value);
  };

  return (
    <Fragment>
      <Card fluid>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={{ marginBottom: 0 }}>
              <Form.Field width={14}>
                <input required value={text} onChange={handleChangeInput} />
              </Form.Field>
              <Form.Button type="submit" primary fluid width={2}>
                Register
              </Form.Button>
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>

      <style jsx>{``}</style>
    </Fragment>
  );
};

export default TodoInputForm;
