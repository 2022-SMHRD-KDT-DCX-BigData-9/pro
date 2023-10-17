package com.smhrd.bigdata.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
@Getter
public class BoardDTO {
	
	private long idx;
	private String title;
	private String writer;
	private String content;
	private Date indate;
	private int count;
	private String img;
	
	public BoardDTO(BootBoard board) {
		
		
		this.idx = board.getIdx();
		this.title = board.getTitle();
		this.writer = board.getWriter();
		this.content = board.getContent();
		this.indate = board.getIndate();
		this.count = board.getCount();
		this.img = board.getImg();
				
	}


}
