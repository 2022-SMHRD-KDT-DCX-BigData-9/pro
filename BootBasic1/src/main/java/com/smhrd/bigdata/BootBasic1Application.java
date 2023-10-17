package com.smhrd.bigdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication 오노테이션이 있는 위치 기준으로
// 하위에 있는 클래스만 객체화 시켜줌!!
// -> controller / mapper / service -> 일을 할 수 있게 됨
@SpringBootApplication
public class BootBasic1Application {

	public static void main(String[] args) {
		SpringApplication.run(BootBasic1Application.class, args);
	}

}
