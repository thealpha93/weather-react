import React from "react";
import { Input, Button, Card, Space, Popconfirm, Table } from "antd";
import useWeather from "../hooks/weather/useWeather";
import useWeatherHistory from '../hooks/weather/useWeatherSearchHistory';

const WeatherPage = () => {
    const { city, setCity, weather, loading, error, getWeather } = useWeather();
    const { history, loading: historyLoading, bulkDeleteHistory } = useWeatherHistory();

    const columns = [
        // Define your table columns here
        { title: 'City', dataIndex: 'name', key: 'name' },
        { title: 'Temperature', dataIndex: 'main', key: 'main',  
        render: (_, {main}) => {
            return main.temp
        }    
    },
        // ... other columns
        {
            title: 'Action',
            key: 'id',
            render: (text, record) => {
                console.log("record ==>", record)
                return(
                
                <Space size="middle">
                    <a onClick={() => {/* Implement update functionality */ }}>Edit</a>
                    <Popconfirm title="Sure to delete?" onConfirm={() => bulkDeleteHistory([record.id])}>
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            )},
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };


    return (
        <div>
            <Input placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
            <Button onClick={getWeather} loading={loading}>Get Weather</Button>
            {error && <p style={{ color: "red" }}>Error fetching weather</p>}
            {weather && (
                <Card title={weather.name}>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Humidity: {weather.main.humidity}</p>
                    {/* ...other weather details */}
                </Card>
            )}

            <Button onClick={() => bulkDeleteHistory(/* Pass selected row keys here */)}>Bulk Delete</Button>
            <Table
                columns={columns}
                dataSource={history}
                loading={historyLoading}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
            />
        </div>
    );
};

export default WeatherPage;
