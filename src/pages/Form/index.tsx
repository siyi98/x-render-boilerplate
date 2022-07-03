
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema ={
  "type": "object",
  "properties": {
    "input": {
      "title": "简单输入框",
      "type": "string",
      "min": 6,
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "只允许填写英文字母和数字"
        }
      ]
    },
    "select": {
      "title": "单选",
      "type": "string",
      "enum": [
        "a",
        "b",
        "c"
      ],
      "enumNames": [
        "选项1",
        "选项2",
        "选项3"
      ],
      "widget": "radio"
    },
    "listName2": {
      "title": "对象数组",
      "description": "对象数组嵌套功能",
      "type": "array",
      "min": 1,
      "max": 3,
      "items": {
        "type": "object",
        "properties": {
          "input1": {
            "title": "简单输入框",
            "type": "string"
          },
          "select1": {
            "title": "单选",
            "type": "string",
            "enum": [
              "a",
              "b",
              "c"
            ],
            "enumNames": [
              "早",
              "中",
              "晚"
            ]
          }
        }
      }
    }
  }
}

const Demo = () => {
  const form = useForm();
  const onFinish = (formData: any, errors: any) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <PageContainer style={{background:'#fff'}}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </PageContainer>
  );
};

export default Demo;
