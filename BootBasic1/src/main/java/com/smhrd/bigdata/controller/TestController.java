package com.smhrd.bigdata.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// Controller : View 반환
// RestController : Model(Data) 반환 -> 비동기통신
@Controller
class TestController {
	
	//localhost:8087/bigdata/
	@GetMapping("/")
	public String test() {
		
		// WEB-INF/veiws/test.jsp -> View Resolver
		return "test";
	}

}
