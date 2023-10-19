package com.smhrd.bigdata.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.smhrd.bigdata.entity.BoardDTO;
import com.smhrd.bigdata.entity.BootBoard;
import com.smhrd.bigdata.repository.BoardRepository;



@Service
public class BoardService {
	
	@Autowired
	BoardRepository repo;
	
	// 모든 게시물을 전부다 가져오기 -> 페이징과는 관련이 없음!
	public List<BootBoard> boardList() {
		List<BootBoard> list = repo.findAll();
		
		return list;
	}
	
	public void write(BootBoard b) {
		//save~ : insert
		repo.save(b);
		
	}
	
	public BootBoard content(int idx) {
		BootBoard b = repo.findByIdx(idx);
		
		return b;
	}
	
	//페이징을 활용해서 특정 게시물만 가져오는 메서드! (index)
	public Page<BoardDTO> pagingBoardList(Pageable pageable) {
		//pageable : 사용자에게 보여지는 페이지의 기준 (default 1)
		
		//page 시작위치는 0   => 사용자가 선택한 페이지 -1
		int page = pageable.getPageNumber() -1;
		int pageLimit = 2; // 한 페이지에 보여줄 게시물 개수
		
		//한 페이지당 2개씩 게시글을 보여주고 정렬 기준 : idx 내림차순
		Page<BootBoard> pages = repo.findAll(PageRequest.of(page, pageLimit, Sort.by(Direction.DESC, "idx")));
		
		Page<BoardDTO> newPages = pages.map(oneBoard -> new BoardDTO(oneBoard));
		
		return newPages;
		
	}

}
