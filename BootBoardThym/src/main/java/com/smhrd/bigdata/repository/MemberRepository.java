package com.smhrd.bigdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smhrd.bigdata.entity.BootMember;

@Repository
// 레파지토리에서 다룰 형태
public interface MemberRepository extends JpaRepository<BootMember, Long>{
		
		// findByIdAndPw(String id, String pw) 순서, 양식에 맞추어 사용 
		public BootMember findByIdAndPw(String id, String pw);
}
