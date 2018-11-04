# vue-prac

> 본 프로젝트는 싱글 파일 컴포넌트 체계로 "Vue.js 입문 - 장기효 지음(이지스 퍼블리싱)"의 예제를 이용하여 작성하였다. vue-cli를 이용해 프로젝트를 생성하였으며 라우팅을 이용해서 메인 페이지로부터 라우팅하거나- 컴포넌트를 직접 렌더하기도 하였다. 많은 시행착오를 거치며 책에서 다룬 내용 이외에 필요한것들은 아래에 링크를 참조하였다. 모든 설명은 책에 나와있으므로 책을 구매해서 학습하기를 추천한다.

## Initialize Vue project
```bash
npm install -g @vue/cli
vue create _project_name
```

## Needs fix

1. 예제 5-4 104p
``` html
<li v-for="system in systems">{{ system }}</liv>
```
v-bind:key가 필요하다는 오류가 나타나는 경우가 있을 것이다.
``` html
<li v-for="(system, index) in systems" v-bind:key="index"> {{ system }} </li>
```
로 수정하면 될 것이다.
이유는 "In 2.2.0+, when using v-for with a component, a key is now required."라고 <https://vue.org>에 나타나있다. 분명한 이유가 v2.2.0+ 인지, component인지에 대해서는 논란이 있다.

## Links

eventBus를 이용한 component간 통신 - A simple EventBus to communicate between Vue.js components (Medium)
<https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
