import { Button } from 'antd';
import router from 'umi/router';

export default function(props) {
  const { name } = props.match.params;
  console.log('name', name);
  return (
    <div>
      <h1>D</h1>
      <Button
        onClick={() => {
          router.goBack();
        }}
      >
        返回
      </Button>
    </div>
  );
}
