import React, { useState } from 'react';
import { Button, Card } from '@arco-design/web-react';
import styles from './style/index.module.less';
import List from './List';
import { IconPlus } from '@arco-design/web-react/icon';
import Create from './create';
function ToDoList() {
  const [visible, setVisible] = useState(false);
  return (
    <Card style={{ height: '80vh' }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>ToDoList</div>
          <Button type="primary" onClick={() => setVisible(true)}>
            <IconPlus />
            新建todo
          </Button>
        </div>
        <List />
        <Create visible={visible} setVisible={setVisible} />
      </div>
    </Card>
  );
}

export default ToDoList;
