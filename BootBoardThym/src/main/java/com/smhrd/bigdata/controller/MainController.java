package com.smhrd.bigdata.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.smhrd.bigdata.entity.BoardDTO;
import com.smhrd.bigdata.entity.BootBoard;
import com.smhrd.bigdata.entity.BootMember;
import com.smhrd.bigdata.service.BoardService;

@Controller
public class MainController {
	
	//
	//
	//
	@Autowired
	BoardService service;
	
	@GetMapping("/")
	public String index(HttpSession session, Model model, @PageableDefault(page=1) Pageable pageable) { // Pageable 주소값에 추가해야서 넘겨야한다.
		
		//게시물을 가져오도록 수정 
		BootMember member = (BootMember)session.getAttribute("loginMember"); // 다운캐스팅
		// loginMember 세션값을 확인 -> O(게시물 정보 가져오기) / X(바로 index로 이동)
		if(member !=null) { // 로그인 상태 -> 게시물 정보 가져오기
			Page<BoardDTO> list = service.pagingBoardList(pageable);
			
			// blockLimit -> 3 (3페이지만 보여지게!)
			int blockLimit = 3;
			
			// startPage번호, endPage번호 // Math.ceil 반올림 
			int startPage = (((int) Math.ceil(((double) pageable.getPageNumber() / blockLimit))) - 1) * blockLimit + 1;
	        int endPage = Math.min((startPage + blockLimit - 1), list.getTotalPages());
	          
	          
			// model에 값을 저장
	        model.addAttribute("startPage", startPage); // 화면에 출력되는 숫자(1~)
	        model.addAttribute("endPage", endPage); // 화면에 출력되는 숫자 (1~)
	        
			model.addAttribute("list", list); // Page (시작 숫자 0~)
			
			// list 저장 공가 => 세션(x):게시판글을 이후에도 저장할필요가없다, request(Model)
			//System.out.println(list.size());
		}
		
		return "index";
	}
	
	@GetMapping("/boardform")
	public String boardForm() {
		return "boardform";
	}

}
