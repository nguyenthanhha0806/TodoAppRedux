import { Col, Row, Input, Space, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'


import { addTodo } from '../../redux/actions';
import Todo from '../Todo';

export default function TodoList() {
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        dispatch(addTodo(
            {
                id: uuidv4(),
                name: todoName,
                prioriry: priority,
                completed: false
            }
        ))
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
                <Todo name='Learn React' prioriry='High' />
                <Todo name='Learn Redux' prioriry='Medium' />
                <Todo name='Learn JavaScript' prioriry='Low' />
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }} compact="true">
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue={priority} onChange={handlePriority}>
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