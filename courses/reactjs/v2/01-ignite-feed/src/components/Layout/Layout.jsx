import { Sidebar } from '../Sidebar/';
import { Post } from '../Post/';

import styles from './Layout.module.css';
import { data } from '../../data';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        {data.map(item => (
          <Post key={item.id} data={item} />
        ))}
      </main>
    </div>
  );
}
export { Layout };
