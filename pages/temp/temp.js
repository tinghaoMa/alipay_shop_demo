const app = getApp();
export default {
		methods:{
			onClick(){
				this.setData({
					count:this.data.count+1
				})
			},
		}
}