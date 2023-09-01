import React from "react";

// UI组件
import { Button, Col, Form, Input, Row, Table, Select } from "antd";

// ahooks 是由蚂蚁 umi 团队、淘系 ice 团队以及阿里体育团队共同建设的 React Hooks 工具库。
// useAntdTable 基于 useRequest 实现，封装了常用的 Ant Design Form 与 Ant Design Table 联动逻辑，并且同时支持 antd v3 和 v4。
import { useAntdTable } from "ahooks";
import { PaginatedParams } from "ahooks/lib/useAntdTable";

import type { ColumnsType } from "antd/lib/table";
import type { Result } from './types'

const { Option } = Select;


const getTableData = (
  { current, pageSize }: PaginatedParams[0],
  formData: Record<string, any>
  ): Promise<Result> => {
  // function body
  // window.console.log('current:::', current);
  // window.console.log('pageSize:::', pageSize);
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => {
      // window.console.log('res:::', res)
      return {
        total: res.info.results,
        list: res.results,
      }
    });
};

// 表单组件(函数式组件)
// FC(Function Component)
const TableList: React.FC = () => {

  // 1. Hooks
  // https://4x.ant.design/components/form-cn/#API
  // 创建 Form 实例，用于管理所有数据状态。
  const [form] = Form.useForm();
  // window.console.log('form', form)


  // 2.
  // useAntdTable 接收两个参数：
  // 第一个参数是用于获取表格数据的函数 getTableData，
  // 第二个参数是配置对象 { defaultPageSize: 10, form }，其中 defaultPageSize 是默认的每页显示条数，form 是 Ant Design 的表单实例。
  // https://ahooks.js.org/zh-CN/hooks/use-antd-table
  // useAntdTable 接收 form 实例后，会返回 search 对象，用来处理表单相关事件。
  const { tableProps, search } = useAntdTable(getTableData, {
    defaultPageSize: 5,
    form,
  });
  console.log('tableProps', tableProps)
  // console.log('search', search)


  // type: 是当前的搜索类型，可能是 "simple" 或 "advance"，用于区分简单搜索和高级搜索。
  // changeType: 是切换搜索类型的方法，用于切换搜索表单的显示方式（简单搜索或高级搜索）。
  // submit: 是提交搜索表单的方法，用于触发数据请求并更新表格数据。
  // reset: 是重置搜索表单的方法，用于清空搜索条件并重新请求数据。
  const { type, changeType, submit, reset } = search;

  // 3.
  const columns: ColumnsType<any> = [
    {
      // 列头显示文字
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
              <Input placeholder="姓名" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="邮箱" name="email">
              <Input placeholder="邮箱" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="电话" name="phone">
              <Input placeholder="电话" />
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

  // 查询
  const searchForm = (
    <div style={{ marginBottom: 16 }}>
      <Form form={form} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Form.Item name="gender">
          <Select placeholder="请选择性别" style={{ width: 120, marginRight: 16 }} onChange={submit}>
            <Option value="">全部</Option>
            <Option value="male">男性</Option>
            <Option value="female">女性</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name">
          <Input.Search
            placeholder="输入姓名"
            style={{ width: 240 }}
            onSearch={submit}
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
      { type === "simple" ? searchForm : advanceSearchForm }
      <Table columns={columns} rowKey="email" {...tableProps} />
    </div>
  );
};

export default TableList;
