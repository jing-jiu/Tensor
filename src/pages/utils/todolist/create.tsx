import React from 'react';
import { Calendar, Form, Input, Modal, Select } from '@arco-design/web-react';
const FormItem = Form.Item;
const Option = Select.Option;
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
function Create({ visible, setVisible }: Props) {
  const [form] = Form.useForm();
  const options = ['学习', '工作', '生活', '其他'];
  return (
    <Modal
      title="新建todo"
      visible={visible}
      onOk={() => {
        form.validate().then(() => {
          console.log(form.getFields());
          setVisible(false);
        });
      }}
      onCancel={() => {
        Modal.confirm({
          title: '取消后不会保存当前数据，确认取消新建？',
          onOk: () => {
            setVisible(false);
          },
          onCancel: () => {
            setVisible(true);
          },
        });
      }}
    >
      <Form form={form}>
        {/* 名称 */}
        <FormItem label="待办名称" field="title" rules={[{ required: true }]}>
          <Input placeholder="请输入待办名称" />
        </FormItem>
        {/* 分类 */}
        <FormItem label="分类" field="tag" rules={[{ required: true }]}>
          <Select
            placeholder="请选择分类"
            style={{ width: 154 }}
            onChange={(value) => form.setFieldValue('tag', value)}
          >
            {options.map((option, index) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </FormItem>
        {/* 描述 */}
        <FormItem label="描述" field="desc" rules={[{ required: true }]}>
          <Input.TextArea placeholder="请输入待办描述" rows={5} />
        </FormItem>
        {/* 开始时间 */}
        <FormItem
          label="开始时间"
          field="createTime"
          rules={[{ required: true }]}
        >
          <Calendar
            panel
            panelTodayBtn
            style={{ marginRight: 50 }}
            onChange={(a) => {
              form.setFieldValue('createTime', a.format('YYYY-MM-DD'));
            }}
          />
        </FormItem>
        {/* 截止时间 */}
        <FormItem
          label="截止时间"
          field="deadLine"
          rules={[{ required: true }]}
        >
          <Calendar
            panel
            panelTodayBtn
            style={{ marginRight: 50 }}
            onChange={(a) => {
              form.setFieldValue('deadLine', a.format('YYYY-MM-DD'));
            }}
          />
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Create;
