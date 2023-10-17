package com.smhrd.bigdata.converter;

import java.io.File;
import java.io.IOException;
import java.util.Base64;

import org.apache.commons.io.FileUtils;

public class ImageToBase64 implements ImageConverter<File, String >{
	
	//하위클래스에서 무조건 재정의
	
	@Override
	public String convert(File f) throws IOException { // throws IOException ImageConverter 추상메서드에 동일 적용
		
		// File 객체를 String 으로 변환 (Base64 사용)
		// 1. Filel 객체 -> byte[] 변환
		// 전부 빨간줄일땐 예외가 발생
		byte[] fileContent = FileUtils.readFileToByteArray(f);
		
		// 2. byte[] -> String(base64)
 		String result= Base64.getEncoder().encodeToString(fileContent);
 		
		return result;
	}
	
	

}
