import BusinessRequest from '../../core/http'

const HttpBusinessRequest = {

	/**
	 * mock请求示例
	 * 
	 */
	queryMockServer(){
		var args = {
			method: "get",
			url: 'api://user'
		};

		return new BusinessRequest().baseRequest(args);
	}

}

export default HttpBusinessRequest;

