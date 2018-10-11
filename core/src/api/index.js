import { fetch } from './fetch.js'

const baseURL = 'https://cnodejs.org/api/v1'

/*
 * page Number 页数
 * tab String 主题分类。目前有 ask share job good
 * limit Number 每一页的主题数量
 * mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */
export const fetchTopics = (data = {}) => {
  const url = `${baseURL}/topics`
  return fetch({
    url,
    methods: 'GET',
    params: data
  })
}
