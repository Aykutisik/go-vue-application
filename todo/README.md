# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Run Component Tests.
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Publish contract
"pact:publish": "pact-broker publish pacts/todo-todo-backend.json --consumer-app-version='$(npx @pact-foundation/absolute-version)' --auto-detect-version-properties --broker-base-url=https://aykut.pactflow.io/ --broker-token=9rCrv_BBppRPFIroVB7UKQ"

### Solving 
npm i -D babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-loader
import "babel-polyfill";




import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})


