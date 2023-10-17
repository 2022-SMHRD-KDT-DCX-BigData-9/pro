package com.smhrd.bigdata.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.smhrd.bigdata.converter.ImageConverter;
import com.smhrd.bigdata.converter.ImageToBase64;
import com.smhrd.bigdata.entity.BootBoard;
import com.smhrd.bigdata.service.BoardService;

@Controller
public class BoardController {
	//
	@Autowired
	BoardService service;
	
	@PostMapping("/board/write")
	public String write(BootBoard b, @RequestPart("photo") MultipartFile photo) {
		
		System.out.println(b.getTitle());
		System.out.println(b.getWriter());
		System.out.println(b.getContent());
		
		System.out.println(photo.getOriginalFilename()); // 파일이름확인
		// 파일 이름이 겹치지 않도록 -> UUID (시스템 적으로 절대 겹치지 않는 문자열을 생성)
		// UUID+OriginalFilename
		System.out.println(UUID.randomUUID().toString());
		
		String newFileName = UUID.randomUUID().toString() + photo.getOriginalFilename();
		
		// 이미지 파일 저장 -> 지정한 경로에!
		// 런타임 오류 : 코드가 실행되었을 때 발생하는 오류 -> 예외처리( try~catch)
		try { // 실행할 코드
			photo.transferTo(new File(newFileName));
		}catch(Exception e) { // 예회가 발생했을 경우 어떻게 처리할건지 //최상위ㅣ Exception
			e.printStackTrace();// 예외발생 정차 콘솔에 출력
			
		}
		// 이미지값 
		b.setImg(newFileName); // 새로만들어준 이름으로 img 필드 초기화
		
		service.write(b);
		
		return "redirect:/";
	}
	// a태그는 전부 getmapping // {변수}  변수가있는 경로를 가져올때
	@GetMapping("/board/content/{idx}")
	public String content(@PathVariable("idx") int idx, Model model) throws IOException { // 어떤 변수타입을 가져올지 뒤에 써준다.
		// 1. controller(idx) -> service 
		
		// 2. service : repository 메서드 호출(select * from bootboard where idx=?)
		
		// 3. repository : idx를 조건으로 주는 findby~ 추상메서드 정의
		
		//-> title~ img(파일이름) -> 콘솔창에 출력해보기
		BootBoard b =service.content(idx);
		
		// 특정 경로에 저장되어 있는 파일 가져오기 (img-파일이름)
		File file =new File("c:\\uploadImage\\"+b.getImg());
		// -> 전송하기위해선 문자열 형태로 변환(base64 형식을 사용해서 인코딩)	
		
		// List는 인터페이스라 new List불가 대신 ArrayList로 구현하고 실제는 상위 인터페이스인 List list = new ArrayList(); 업케스팅
		// ArrayList는 중간에 삭제하려면 연속적 공간이라 재배치가 일어나 비효율 
		// linkedList 따로되어 있어 중간데이터를 지워도 주소부하나만 바꾸면 되어서 효율적 그래서 List업캐스팅형태를 사용
		//ImageToBase64 converter = new ImageToBase64();
		ImageConverter<File,String> converter = new ImageToBase64();  // 업캐스팅
		
		String fileStringValue = converter.convert(file); 
		System.out.println(fileStringValue);
		b.setImg(fileStringValue);
		
		model.addAttribute("board", b);
		return "boardcontent";
		
		
	}

}
