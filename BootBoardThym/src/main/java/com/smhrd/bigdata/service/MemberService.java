package com.smhrd.bigdata.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.bigdata.entity.BootMember;
import com.smhrd.bigdata.repository.MemberRepository;

@Service
public class MemberService {
	
	//컨트롤에서 서비스호출 서비스에서 레파지토리
	@Autowired
	MemberRepository repo;
	
	public BootMember login(BootMember member) {
		
		// repository 객체가 가지고 있는 함수(delete, find,
		// select * from bootmember where id=? and pw=? : 둘다 조건인건 제공해주지 않는다.. repository 인터페이스에 정의해준다.
		return repo.findByIdAndPw(member.getId(), member.getPw());
		
		
	}

}
