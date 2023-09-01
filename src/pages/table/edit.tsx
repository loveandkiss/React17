import React, { FC, ChangeEvent, useState, useRef, useEffect } from "react";
import { Button, Col, Form, Input, Row, Table, Select } from "antd";
import type  { TableProps, TablePaginationConfig } from 'antd'
import type { ColumnsType } from 'antd/es/table';

// API
import { getTableData } from '../../services/table'

// types
import type { DataType } from '../../services/types/table.d'


// const { Item } = Form;
const { Option } = Select;
const { Search } = Input;


// type TablePaginationPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';



// 函数组件
const TableEdit: FC = () => {
  // 获取表单实例
  const [form] = Form.useForm();
  // useState
  const [current, setCurrent] = useState<number | undefined>(1)
  const [pageSize, setPageSize] = useState<number | undefined>(10)
  const [gender, setGender] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  // 表单数据
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [type, setType] = useState<'simple' | 'advance'>('simple');


  // useRef
  // const ref = useRef(0)
  // window.console.log('ref', ref.current) // 0

  // 获取表单数据
  const handleGetTableData = async () => {
    let query = `page=${current}&size=${pageSize}`;
    if (name) {
      query += `&name=${name}`
    }
    if (gender) {
      query += `&gender=${gender}`
    }
    const res = await getTableData(query)
    setDataSource(res?.results)
  }

  // useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。
  //  它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    handleGetTableData()
  }, [gender, name, email, phone, current, pageSize])

  const submit = () => {
    window.console.log('submit', form.getFieldsValue())
  }

  const handleChange = (val: string) => {
    setGender(val)
  }
  const handleSearch = (val: string) => {
    setName(val)
  }

  // ChangeEvent 泛型接口
  const handleInputNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value)
  }
  const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }
  const handleInputPhoneChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhone(e.target.value)
  }

  const reset = () => {
    window.console.log('reset')
  }

  const changeType = () => {
    setType(prevType => {
      return prevType === 'simple' ? 'advance' : 'simple'
    })
  }


  const pagination: TablePaginationConfig = {
    defaultPageSize: 10,
    position: ['bottomRight'],
    showSizeChanger: false,
    pageSizeOptions: [10, 20, 50, 100],
    // total: 1000,
    showTotal: (total: number) => `共${total}条`
  }

  // 分页、排序、筛选变化时触发
  const handleTableChange = (pagination: TablePaginationConfig ) => {
    // window.console.log('pagination', pagination)
    const { current, pageSize, defaultCurrent, position } = pagination
    setCurrent(current)
    setPageSize(pageSize)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "姓名",
      // 列数据在数据项中对应的路径，支持通过数组查询嵌套路径
      dataIndex: ["name", "last"],
    },
    {
      title: "邮箱",
      dataIndex: "email",
    },
    {
      title: "电话",
      dataIndex: "phone",
    },
    {
      title: "性别",
      dataIndex: "gender",
    },
  ];

  // 高级查询
  const advanceSearchForm = (
    <div>
      <Form form={form}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="姓名" name="name">
              <Input value={name} placeholder="姓名" onChange={handleInputNameChange}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="邮箱" name="email">
              <Input value={email} placeholder="邮箱" onChange={handleInputEmailChange}/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="电话" name="phone">
              <Input value={phone} placeholder="电话" onChange={handleInputPhoneChange}/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" onClick={submit}>
              查询
            </Button>
            <Button onClick={reset} style={{ marginLeft: 16 }}>
              重置
            </Button>
            <Button type="link" onClick={changeType}>
              基础查询
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );

  // 普通查询
  const searchForm = (
    <div style={{ marginBottom: 16 }}>
      <Form form={form} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Form.Item label="性别" name="gender">
          <Select value={gender} style={{ width: 120, marginRight: 16 }} onChange={handleChange}>
            <Option value="">全部</Option>
            <Option value="male">男性</Option>
            <Option value="female">女性</Option>
          </Select>
        </Form.Item>
        <Form.Item label="姓名" name="name">
          <Search
            value={name}
            placeholder="输入姓名"
            style={{ width: 240 }}
            onSearch={handleSearch}
          />
        </Form.Item>

        <Button type="link" onClick={changeType}>
          高级查询
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      {type === "simple" ? searchForm : advanceSearchForm}
      <Table columns={columns} rowKey="email" dataSource={dataSource} pagination={pagination} onChange={handleTableChange}/>
    </div>
  );
};

export default TableEdit;
