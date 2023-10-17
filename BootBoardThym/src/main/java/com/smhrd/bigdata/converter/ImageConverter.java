package com.smhrd.bigdata.converter;

import java.io.IOException;

// 1.넣어주는 파일 형태지정 2.넣어준파일을 어떤형식으로 지정할지 // 형식 나중에 지정
public interface ImageConverter<F,S>{
	// <> : generic, 사용자가 필요할 때 형태를 지정할 수 있음
	// F : 변환할 파일, S :변환 형태
	// 변환됬을때 결과값 S
	// 오버라이딩을 통해 지정될것
	public S convert(F f) throws IOException;
}
