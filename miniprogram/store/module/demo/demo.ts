import {
  observable,
  action
} from "mobx-miniprogram";

export default observable({
  // store
  demo: '',

  // 类似vuex/pinia actions
  demoActions: action(function () { })
});