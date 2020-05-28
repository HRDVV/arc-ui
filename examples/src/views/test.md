### 普通按钮
:::demo
```html
<arc-button round loading>默认按钮</arc-button>
<arc-button type="text" disabled>默认按钮</arc-button>
<arc-button type="primary" icon="icon-align-right">默认按钮</arc-button>
<arc-button type="warning" plain>默认按钮</arc-button>
<arc-button type="warning">默认按钮</arc-button>
<arc-button type="success" size="medium" plain>默认按钮</arc-button>
<arc-button type="success" size="medium" disabled>默认按钮</arc-button>
<arc-button type="info" size="small" plain disabled>默认按钮</arc-button>
<arc-button type="info" size="small">默认按钮</arc-button>
<arc-button type="error" size="mini" round plain>默认按钮</arc-button>
```
:::


### 按钮组
:::demo
```html
  <arc-button-group size="small">
    <arc-button type="success" plain>默认按钮</arc-button>
    <arc-button type="primary">默认按钮</arc-button>
    <arc-button type="primary">默认按钮</arc-button>
    <arc-button type="primary">默认按钮</arc-button>
  </arc-button-group>
```
:::

### 布局组件
:::demo
```html
  <arc-row :gutter="0">
    <arc-col :span="6">
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: pink;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: purple;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: yellow;"></p>
    </arc-col>
  </arc-row>
  <arc-row :gutter="20" style="margin-top: 20px;">
    <arc-col :span="6">
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: pink;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: purple;"></p>
    </arc-col>
    <arc-col :span="6">
      <p style="height: 30px;background: yellow;"></p>
    </arc-col>
  </arc-row>
  <arc-row style="margin-top: 20px;" :gutter="20">
    <arc-col
      :span="6"
      :offset="6"
    >
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
    <arc-col
      :span="6"
      :offset="6"
    >
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
  </arc-row>
  <arc-row style="margin-top: 20px;" :gutter="20">
    <arc-col
      :span="6"
      :push="6"
    >
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
  </arc-row>
  <arc-row style="margin-top: 20px;" :gutter="20">
    <arc-col
      :span="6"
      :push="6"
      :md="12"
      :sm="6"
    >
      <p style="height: 30px;background: skyblue;"></p>
    </arc-col>
  </arc-row>
```
:::

### 输入框
:::demo
```html
  <arc-input v-model="demo" style="margin-right: 5px;width: 180px" maxlength="7" type="number" placeholder="阿拉斯加">
    <span slot="prefix">
      <i class="icon icon-arrow-left" ></i>
    </span>
  </arc-input>
  <arc-input :value="2323" style="margin-right: 5px;width: 180px">
    <span slot="suffix">22</span>
  </arc-input>
  <arc-input :value="2323" style="margin-right: 5px;width: 180px" prefix="icon-align-right"></arc-input>
  <arc-input :value="2323" style="margin-right: 5px;width: 180px" suffix="icon-align-right"></arc-input>
  <arc-input size="medium" style="margin-right: 5px;width: 180px" readonly></arc-input>
  <arc-input size="small" style="margin-right: 5px;width: 180px"></arc-input>
  <arc-input size="mini" style="margin-right: 5px;width: 180px"></arc-input>
```
:::

<!-- <script>
export default {
  data() {
    return {
      demo: ''
    }
  }
}
</script>
 -->
