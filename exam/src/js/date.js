	var $ = require('./jquery.min.js')

	module.exports = function (){

		//存活于这星球时间
		function liveTime(){
			var lvTime = ''
			function getInfor(datestr){
				var targetDate = new Date (datestr).getTime()
				var curDate = new Date().getTime()
				var offset =Math.abs(targetDate-curDate)
				var totalSeconds = Math.floor(offset/1000)
				var seconds = totalSeconds%60
				var totalMinutes = Math.floor(totalSeconds/60)
				var minutes = totalMinutes%60
				var totalHours = Math.floor(totalMinutes/60)
				var hours = totalHours%24
				var totalDays = Math.floor(totalHours/24)
				var days = totalDays%30
				var totalmonth = Math.floor(totalDays/30.5)
				var month = totalmonth%12
				var years = Math.floor(totalmonth/12)
				return lvTime = (years + '年' + month + '月' + days + '天' +hours+'小时'+minutes+'分钟'+seconds+'秒')
			}
			getInfor('1992-11-06T20:48:20')
			$('#contact .live>span').text(lvTime)
			setTimeout(liveTime,1000)
		}


		// 工作时间计算
		function workTime(){
			var wkTime = ''
			function getInfor(datestr){
				var targetDate = new Date (datestr).getTime()
				var curDate = new Date().getTime()
				var offset =Math.abs(targetDate-curDate)
				var totalSeconds = Math.floor(offset/1000)
				var seconds = totalSeconds%60
				var totalMinutes = Math.floor(totalSeconds/60)
				var minutes = totalMinutes%60
				var totalHours = Math.floor(totalMinutes/60)
				var hours = totalHours%24
				var totalDays = Math.floor(totalHours/24)
				var days = totalDays%30
				var totalmonth = Math.floor(totalDays/30.5)
				var month = totalmonth%12
				var years = Math.floor(totalmonth/12)
				return wkTime = (years + '年' + month + '月' + days + '天' +hours+'小时'+minutes+'分钟'+seconds+'秒')
			}
			getInfor('2015-07-06T08:30:25')
			$('#contact .work>span').text(wkTime)
			setTimeout(workTime,1000)
		}

		//学习时间计算
		function studyTime(){
			var sdTime = ''
			function getInfor(datestr){
				var targetDate = new Date (datestr).getTime()
				var curDate = new Date().getTime()
				var offset =Math.abs(targetDate-curDate)
				var totalSeconds = Math.floor(offset/1000)
				var seconds = totalSeconds%60
				var totalMinutes = Math.floor(totalSeconds/60)
				var minutes = totalMinutes%60
				var totalHours = Math.floor(totalMinutes/60)
				var hours = totalHours%24
				var totalDays = Math.floor(totalHours/24)
				var days = totalDays%30
				var totalmonth = Math.floor(totalDays/30.5)
				var month = totalmonth%12
				var years = Math.floor(totalmonth/12)
				return sdTime = (month + '月' + days + '天' +hours+'小时'+minutes+'分钟'+seconds+'秒')
			}
			getInfor('2017-04')
			$('#contact .study>span').text(sdTime)
			setTimeout(studyTime,1000)
		}
		liveTime()
		workTime()
		studyTime()
	}()
