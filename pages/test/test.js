const app = getApp();
import temp from '../temp/temp';

Page({
	data: {
		text: 'test',
		array: [{ text: 'a' }],
		object: {
			text: 'blue'
		},
		name: 'taobao',
		a: {
			b: [1, 2, 3, 4]
		},
		items: [1, 2, 3],
		view: 'APP',
		staffA: { firstName: 'san', lastName: 'zhang' },
		count: 1,
		object: {
			key: 'Hello '
		},
		array: ['alipay'],
		zero: 100,
	},
	...temp.methods,
	onLoad() {
		this.$spliceData({ 'a.b': [1, 0, 5, 6] })
	},

	changeTitle() {
		// 错误！不要直接去修改 data 里的数据
		// this.data.text = 'changed data'  

		// 正确
		this.setData({
			text: 'ha'
		})
	},
	changeArray() {
		// 可以直接使用数据路径来修改数据
		this.setData({
			'array[0].text': 'b'
		})
	},
	changePlanetColor() {
		this.setData({
			'object.text': 'red'
		});
	},
	addNewKey() {
		this.setData({
			'newField.text': 'c'
		})
	},
	changeName() {
		this.setData({
			name: 'alipay',
		}, () => { // 接受传递回调函数
			console.log(this) // this 当前页面实例
			this.setData({ name: this.data.name + ', ' + 'welcome!' })
		})
	},
	handleTap1() {
		console.log('handleTap1handleTap1');
	},
	handleTap2() {
		console.log('handleTap2222handleTap22222');
	},
	handleTap3() {
		console.log('handleTap33333handleTap333333');
	},
	touchStart(){
		console.log('touchStarttouchStarttouchStart')
	},
	touchMove(){
		console.log('touchMovetouchMovetouchMovetouchMove')
	},
	tapName(e){
		console.log(e)
	}
})