## **************** vue2 和 vue3 区别  ****************

1. 	v-if 与 v-for 的优先级对比

		2.x 版本中  v-for > v-if
		3.x 版本中  v-if  > v-for

2. 	v-for 中的 Ref 数组

		vue2.x 会自动把ref填充内容
		vue3.x 需要手动添加
			<ul>
		      <li v-for='item in 5' :key='item' :ref="setItemRef">
		        {{ item }}
		      </li>
		    </ul>

		    methods:{
		    	setItemRef(el){
		    		this.arr.push( el );
		    	}
			}

3. 	$children 

		vue2.x :  访问当前实例的子组件

		vue3.x :  在 3.x 中，$children 已被移除，且不再支持。

			设置：<HelloWorld msg="Welcome" ref='hw'/>

			访问：this.$refs.hw 

4. setup
	
	- 是什么 ： 
	组合式 API

	- 来解决什么问题 :  
	
	使用 (data、computed、methods、watch) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。


	- 响应区别： 

			vue2.x : Object.defineProperty()

			vue3.x : Proxy 

			1. Object.defineProperty()存在的问题

				1. 不能监听数组的变化
				2. 必须遍历对象的每一个属性

			2. Proxy 不需要遍历

	- 使用渲染函数:

		ref  :  就是定义数据的    		简单类型

		reactive  :  就是定义数据的  	复杂类型

	- 最关键的是需要： return 才能使用








