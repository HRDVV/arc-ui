
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
       <arc-button type="primary" style="display: block">默认按钮</arc-button>
    </arc-col>
    <arc-col :span="6">
       <arc-button type="primary" style="display: block">默认按钮</arc-button>
    </arc-col>
    <arc-col :span="6">
       <arc-button type="primary" style="display: block">默认按钮</arc-button>
    </arc-col>
    <arc-col :span="6">
       <arc-button type="primary" style="display: block">默认按钮</arc-button>
    </arc-col>
  </arc-row>
```
:::

