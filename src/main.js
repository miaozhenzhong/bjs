// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {bus} from './common/EventBus'
import 'babel-polyfill'
import store from './vuex'
Vue.use(store);
Vue.config.productionTip = false
Vue.prototype.$bus = bus
import {jsonPost, Get,formPost} from './common/request'
Vue.prototype.$jsonPost = jsonPost
Vue.prototype.$Get = Get
Vue.prototype.$formPost = formPost
//按需引入
import 'vue-awesome/icons/caret-up';
import 'vue-awesome/icons/layer-group';
import 'vue-awesome/icons/check-circle';
import 'vue-awesome/icons/eye';
import 'vue-awesome/icons/sign-out-alt';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/upload'
import 'vue-awesome/icons/file-powerpoint'
import 'vue-awesome/icons/calculator'
import 'vue-awesome/icons/check-circle' 
import 'vue-awesome/icons/gavel';
import 'vue-awesome/icons/users';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/file-contract'
import 'vue-awesome/icons/file-download'
import 'vue-awesome/icons/undo-alt'



import icon from 'vue-awesome/components/Icon'

import '../static/them.less'
// 全局注册（在 `main .js` 文件中）

Vue.component('icon', icon)
//按需引入Element-ui
import {
  Pagination,
  DatePicker,
  Collapse,
  CollapseItem,
  Upload,
  MenuItemGroup,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  ColorPicker,
  Table,
  TableColumn,
  Tree,
  Alert,
  Icon,
  Steps,
  Step,
  Cascader,
  Container,
  Header,
  Aside,
  Main,
  Tabs,
  TabPane,
  MessageBox,
  Message,
  Notification,
  Tooltip,
} from 'element-ui';
Vue.use(Pagination)
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Upload);
Vue.use(Tabs);
Vue.use(MenuItemGroup);
Vue.use(TabPane);
Vue.use(Tooltip);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(ColorPicker);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Cascader);
Vue.use(DatePicker)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
