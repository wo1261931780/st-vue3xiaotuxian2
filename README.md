# st-vue3xiaotuxian2

Vue3小兔鲜电商项目进阶版 - TypeScript版本

## 系统架构

```mermaid
graph TB
    subgraph Frontend["前端应用"]
        App[App.vue<br/>应用入口]
        Router[Vue Router<br/>路由管理]
        Store[Pinia Store<br/>状态管理]
        
        subgraph Views["视图层"]
            Home[首页]
            Category[分类页面]
            ProductDetail[商品详情]
            Cart[购物车]
            Checkout[结算页面]
            UserCenter[用户中心]
            Order[订单管理]
        end
        
        subgraph Components["组件层"]
            Navigation[导航组件]
            ProductCard[商品卡片]
            CartItem[购物车项]
            SearchBar[搜索栏]
        end
        
        subgraph Core["核心功能"]
            APIs[API模块]
            Utils[工具函数]
            Styles[样式系统]
        end
    end
    
    subgraph UI["UI框架"]
        ElementPlus[Element Plus]
        VueUse[VueUse工具库]
    end
    
    subgraph TypeScript["TypeScript支持"]
        TSC[类型检查]
        TypeDefs[类型定义]
    end
    
    subgraph Build["构建工具"]
        Vite[Vite]
    end
    
    subgraph Backend["后端服务"]
        JavaAPI[Java后端API]
    end
    
    App --> Router
    App --> Store
    Router --> Views
    Views --> Components
    Views --> APIs
    Store --> APIs
    Components --> ElementPlus
    Components --> VueUse
    Core --> TypeScript
    APIs --> JavaAPI
    
    classDef frontendStyle fill:#42b983,stroke:#35495e,color:#fff
    classDef uiStyle fill:#409eff,stroke:#35495e,color:#fff
    classDef tsStyle fill:#3178c6,stroke:#35495e,color:#fff
    classDef backendStyle fill:#f56c6c,stroke:#35495e,color:#fff
    
    class App,Router,Store frontendStyle
    class ElementPlus,VueUse uiStyle
    class TSC,TypeDefs tsStyle
    class JavaAPI backendStyle
```

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
