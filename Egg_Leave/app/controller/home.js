'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const {
			ctx
		} = this;
		ctx.body = [{
			name: '李四',
			num: '18030305',
			room: '5#B302',
			class: '18软工3班',
			tel: '123456789',
			traffic: '步行',
			prvin: '否',
			local: '菜鸟驿站取快递',
			date1: '2021.4.23 18:25',
			date2: '2021.4.23 21:00',
			sign: '李四',
			date3: '2021.4.23 19:00',
			teach: '张三',
			pro: '同意',
		}, {
			name: '王五',
			num: '18030001',
			room: '10#A102',
			class: '17金融1班',
			tel: '147258369',
			traffic: '滴滴',
			prvin: '否',
			local: '大润发购买生活用品',
			date1: '2021.4.26 11:00',
			date2: '2021.4.26 15:00',
			sign: '王五',
			date3: '2021.4.21 9:00',
			teach: '李四',
			pro: '同意',

		}, {
			name: '钱七',
			num: '18030002',
			room: '2#A503',
			class: '20口腔医学5班',
			tel: '987654321',
			traffic: '骑车',
			prvin: '否',
			local: '外出理发',
			date1: '2021.4.25 12:00',
			date2: '2021.4.25 20:00',
			sign: '钱七',
			date3: '2021.4.25 12:00',
			teach: '李四',
			pro: '同意',

		}, {
			name: '赵八',
			num: '18030003',
			room: '11#A803',
			class: '18软工3班',
			tel: '741852963',
			traffic: '步行',
			prvin: '是',
			local: '回家急事回家（福建省泉州市丰泽区幸福小区）',
			date1: '2021.4.23 8:00',
			date2: '2021.4.23 12:00',
			sign: '赵八',
			date3: '2021.4.22 17:00',
			teach: '李五',
			pro: '同意',

		}];
	}
}

module.exports = HomeController;
