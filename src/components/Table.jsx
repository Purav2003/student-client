import React from 'react';
import { Table } from 'antd';

const TableComponent = ({
    columns,
    data,
    loading = false
}) => {
    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                loading={loading}
                pagination={{ pageSize: 5 }}
                className="rounded-lg border-none -z-[1000] overflow-auto max-h-[450px] min-h-[450px]"
            />
        </div>
    );
}

export default TableComponent;