package com.smhrd.bigdata.controller;

import java.util.List;
// 주석주석
//주석2주석2

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.smhrd.bigdata.entity.BootBoard;
import com.smhrd.bigdata.entity.BootMember;
import com.smhrd.bigdata.service.BoardService;

@Controller
public class MainController {
   
	// 두번째  보내기?
	// 첫수정
	// main 수정
	// 머지
	// 박태성 어디다 올려?
   @Autowired
   BoardService service;
   
   @GetMapping("/")
   public String index(HttpSession session, Model model) {
      BootMember member = (BootMember)session.getAttribute("loginMember");
      // loginMember 세션값 확인 -> O(게시물 정보 가져오기) / X(바로 index로 이동)
      if(session != null) { // 로그인 상태 -> 게시물 정보 가져오기
         List<BootBoard> list = service.boardList();
         
         model.addAttribute("list",list);
         
         // list 저장 공간 => session(X), request(Model)
         System.out.println(list.size());
      }
      
      return "index";
   }
   
   @GetMapping("/boardform")
   public String boardForm() {
      
      return "boardform";
   }

}