package com.smhrd.bigdata.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.bigdata.entity.BootBoard;
import com.smhrd.bigdata.repository.BoardRepository;



@Service
public class BoardService {
	
	@Autowired
	BoardRepository repo;
	
	public List<BootBoard> boardList() {
		List<BootBoard> list = repo.findAll();
		
		return list;
	}
	
	public void write(BootBoard b) {
		//save~ : insert
		repo.save(b);
		
	}
	
	public BootBoard content(int idx) {
		BootBoard c = repo.findByIdx(idx); // b를 c 로 바꿈
		
		return c;// b를 c 로 바꿈
	}

}
