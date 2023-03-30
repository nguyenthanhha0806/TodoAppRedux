import { Col, Row, Input, Space, Button, Select, Tag } from 'antd';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'


import { addTodo } from '../../redux/actions';
import Todo from '../Todo';
import { todoRemainingSelector } from '../../redux/selector';

export default function TodoList() {
    const inputRef = useRef(null);
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const dispatch = useDispatch();
    const todoList = useSelector(todoRemainingSelector);
    // console.log(todoList)
    const handleAddButtonClick = () => {
        dispatch(addTodo(
            {
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false
            }
        ))
        setTodoName('');
        setPriority('Medium');
        inputRef.current.focus();
    }
    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }
    const handlePriority = (value) => {
        setPriority(value)
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />)}

                {/* <Todo name='Learn Redux' prioriry='Medium' />
                <Todo name='Learn JavaScript' prioriry='Low' /> */}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }} compact="true">
                    <Input ref={inputRef} value={todoName} onChange={handleInputChange} />
                    <Select value={priority} onChange={handlePriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}