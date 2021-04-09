import { matchRoutes } from 'react-router-config'

import app from './http'
import renderer from './render'
import createStore from './createStore'
import routes from '../share/routes'

app.get('*', (req, res) => {
  const store = createStore()
  // 1. 获取请求地址 req.path
  // 2. 获取路由信息 routes
  // 3. 根据请求地址匹配渲染组件的路由信息
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    // 如何才能知道数据什么时候获取完成
    if (route.loadData) {
      return route.loadData(store)
    }
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})
