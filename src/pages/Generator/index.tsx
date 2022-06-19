import { PageContainer } from '@ant-design/pro-components'
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '简单输入框',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <PageContainer title="表单设计器">
      <Generator defaultValue={defaultValue} />
    </PageContainer>
  );
};

export default Demo;