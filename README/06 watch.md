## 06 watch
	4.8 watch

		vue2.x :

			watch:{
				obj:{
					handler(newVal , oldVal){
						console.log( newVal , oldVal  )
					},
					immediate:true,
					deep:true
				}
			}

		vue3.x :

			1> 监听数据数据「初始化监听」

				watch( msg , (newVal,oldVal)=>{
					console.log(  newVal,oldVal )
				},{
					immediate:true
				})

			2> 监听多个数据「一起监听」

				watch([msg,str],(newVal,oldVal)=>{
					console.log(  newVal,oldVal )
				},{
					immediate:true
				})

			3> 监听“对象”中某个对象

				watch( ()=>obj.arr , (newVal,oldVal)=>{
					console.log( newVal,oldVal )
				})

			4> 立即执行监听函数

				watchEffect(()=>{
					console.log(  msg.value  )
				})

		参考链接：https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect