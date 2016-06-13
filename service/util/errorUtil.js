//抛出异常
exports.handlerErr = function(status,mes){
	var errObj = new Error(mes);
	errObj.number = status;
	throw errObj;
}

//操作过程中的状态码
exports.errorStatus = function(){
	return {
		sysError:'1000', //系统错误
		opeFail:'1001', //操作失败
		accessError:'1002', //权限不够
		operSuccess:'1010', //操作成功
	}
}
