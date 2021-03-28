//import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import MainPageCompanent from  './main';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import UploadPage from '././upload';
import ProductPage from './product';
import {Button} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';


function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
          <Button size="large" 
          onClick={function(){
            history.push('/upload');
          }}
          icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
          <Switch>
            <Route exact={true} path={"/"}>
              <MainPageCompanent />
            </Route>
            <Route exact={true} path={"/product/:id"}>
              <ProductPage />
            </Route>
            <Route exact={true} path={"/upload"}>
              <UploadPage />
            </Route>
          </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
