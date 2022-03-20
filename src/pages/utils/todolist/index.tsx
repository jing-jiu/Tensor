import React from 'react';
import { Card } from '@arco-design/web-react';
import styles from './style/index.module.less';
function toDoList() {
  return (
    <Card style={{ height: '80vh' }}>
      <div className={styles.container}>
        new list
      </div>
    </Card>
  );
}

export default toDoList;
