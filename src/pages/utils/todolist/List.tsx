import { Drawer, Link, Table, Tag } from '@arco-design/web-react';
import { ColumnProps } from '@arco-design/web-react/es/Table';
import React, { CSSProperties, ReactElement, useState } from 'react';
import dayjs from 'dayjs';
interface Props {
  data?: any[];
}
function List(props: Props): ReactElement {
  const [visible, setVisible] = useState(false);
  const data = new Array(20).fill({}).map((item, index) => {
    return {
      key: index,
      title: 'Jane Doe' + index,
      createTime: '201760379313',
      deadLine: '201760389313',
      tag: '学习',
      status: '待办',
      operate: '1',
    };
  });
  const columns: ColumnProps[] = [
    {
      title: '名称',
      dataIndex: 'title',
      render: (item, row) => {
        return (
          <>
            <Link
              onClick={() => {
                setVisible(true);
              }}
            >
              {item}
            </Link>
          </>
        );
      },
    },
    {
      title: '分类',
      dataIndex: 'tag',
      render: (item, row) => {
        return <Tag color="green">{item}</Tag>;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '开始时间',
      dataIndex: 'createTime',
      render: (item) => {
        return dayjs(item).format('YYYY-MM-DD HH:mm');
      },
    },
    {
      title: '截止时间',
      dataIndex: 'deadLine',
      render: (item) => {
        return dayjs(item).format('YYYY-MM-DD HH:mm');
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      width: 200,
      render: (item, row) => {
        return (
          <>
            <Link
              onClick={() => {
                setVisible(true);
                console.log('详情');
              }}
            >
              详情
            </Link>
            <Link
              onClick={() => {
                console.log('完成');
              }}
            >
              完成
            </Link>
            <Link
              onClick={() => {
                console.log('撤销');
              }}
            >
              撤销
            </Link>
          </>
        );
      },
    },
  ];
  const style: CSSProperties = {
    width: '100%',
  };
  return (
    <>
      <Table
        columns={columns}
        data={data}
        style={style}
        pagination={{ pageSize: 9 }}
      />
      <Drawer
        width={600}
        title={<h3>待办详情</h3>}
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div>Here is an example text.</div>

        <div>Here is an example text.</div>
      </Drawer>
    </>
  );
}

export default List;
