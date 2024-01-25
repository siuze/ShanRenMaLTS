local function cjk_comment(input,env)
	if env.engine.context:get_option('cjk_comment') then  --如果开启了cjk提示
		for option_ in input:iter() do	 --检查所有候选项
			local str = option_.text
			if utf8.len(str)==1 then
				local code =  utf8.codepoint(str)
				if (code >= 0xe000 and code <= 0xf8ff) or (code >= 0xf0000 and code <= 0xffffd) or (code >= 0x100000 and code <= 0x10fffd) then 
					option_.comment = option_.comment .. "〔PUA〕u" .. string.format("%X", code)
				-- elseif code >= 0x4e00 and code <= 0x9f5a then
				-- 	option_.comment = option_.comment .. "〔基本区〕u" .. string.format("%X", code) .. ""
				elseif code >= 0x9FA6 and code <= 0x9FBB then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[4.1 2003]"
				elseif code >= 0x9FBC and code <= 0x9FC3 then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[5.1 2003]"
				elseif code >= 0x9FC4 and code <= 0x9FCB then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[5.2 2003]"
				elseif code == 0x9FCC then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. " [6.1 2012]"
				elseif code >= 0x9FCD and code <= 0x9FD5 then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[8.0 2015]"
				elseif code >= 0x9FD6 and code <= 0x9FEA then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[10.0 2017]"
				elseif code >= 0x9FEB and code <= 0x9FEF then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. " [11.0 2018]"
				elseif code >= 0x9FF0 and code <= 0x9FFC then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 0x9FFD and code <= 0x9FFF then
					option_.comment = option_.comment .. "〔基本区补充〕u" .. string.format("%X", code) .. "[14.0 2021]"
				elseif code >= 0x3400 and code <= 0x4DB5 then
					option_.comment = option_.comment .. "〔扩A〕u" .. string.format("%X", code) .. " [3.0 2000]"
				elseif code >= 0x4DB6 and code <= 0x4DBF then
					option_.comment = option_.comment .. "〔扩A补充〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 0x20000 and code <= 0x2A6D6 then
					option_.comment = option_.comment .. "〔扩B〕u" .. string.format("%X", code) .. " [3.1 2001]"
				elseif code >= 0x2A6D7 and code <= 0x2A6DD then
					option_.comment = option_.comment .. "〔扩B补充〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 0x2A6DE and code <= 0x2A6DF then
					option_.comment = option_.comment .. "〔扩B补充〕u" .. string.format("%X", code) .. " [14.0 2021]"
				elseif code >= 0x2A700 and code <= 0x2B734 then
					option_.comment = option_.comment .. "〔扩C〕u" .. string.format("%X", code) .. " [5.2 2003]"
				elseif code >= 0x2B735 and code <= 0x2B738 then
					option_.comment = option_.comment .. "〔扩C补充〕u" .. string.format("%X", code) .. " [14.0 2021]"
				elseif code == 0x2B739 then
					option_.comment = option_.comment .. "〔扩C补充〕u" .. string.format("%X", code) .. " [15.0 2022]"
				elseif code >= 0x2B740 and code <= 0x2B81D then
					option_.comment = option_.comment .. "〔扩D〕u" .. string.format("%X", code) .. " [6.0 2010]"
				elseif code >= 0x2B820 and code <= 0x2CEA1 then
					option_.comment = option_.comment .. "〔扩E〕u" .. string.format("%X", code) .. " [8.0 2015]"
				elseif code >= 0x2CEB0 and code <= 0x2EBE0 then
					option_.comment = option_.comment .. "〔扩F〕u" .. string.format("%X", code) .. " [10.0 2017]"
				elseif code >= 0x30000 and code <= 0x3134A then
					option_.comment = option_.comment .. "〔扩G〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 0x31350 and code <= 0x323AF then
					option_.comment = option_.comment .. "〔扩H〕u" .. string.format("%X", code) .. " [15.0 2022]"
				elseif code >= 0x2EBF0 and code <= 0x2EE5D then
					option_.comment = option_.comment .. "〔扩I〕u" .. string.format("%X", code) .. " [15.1 2023]"
				elseif code >= 0x2E80 and code <= 0x2EF3 then
					option_.comment = option_.comment .. "〔部首补充〕u" .. string.format("%X", code) .. " [3.0 2000]"
				elseif code >= 0x2F00 and code <= 0x2FD5 then
					option_.comment = option_.comment .. "〔康熙部首〕u" .. string.format("%X", code) .. " [3.0 2000]" 
				elseif code >= 0xF900 and code <= 0xFAFF then	
					option_.comment = option_.comment .. "〔CJK兼容〕u" .. string.format("%X", code) .. "" 
				elseif code >= 0x2F800 and code <= 0x2FA1F then	
					option_.comment = option_.comment .. "〔兼容补充〕u" .. string.format("%X", code) .. " [3.1 2001]"
				elseif code >= 0x31C0 and code <= 0x31EF then	
					option_.comment = option_.comment .. "〔CJK笔画〕u" .. string.format("%X", code) .. "" 
				elseif code >= 0x2FF0 and code <= 0x2FFF or code == 0x31EF then
					option_.comment = option_.comment .. "〔表意文字描述〕u" .. string.format("%X", code) .. "" 
				elseif code >= 0x3105 and code <= 0x312F then	
					option_.comment = option_.comment .. "〔注音符号〕u" .. string.format("%X", code) .. "" 
				elseif code >= 0x31A0 and code <= 0x31BF then	
					option_.comment = option_.comment .. "〔注音扩展〕u" .. string.format("%X", code) .. "" 
				elseif code >= 0x3000 and code <= 0x303F then
					option_.comment = option_.comment .. "〔标点符号〕u" .. string.format("%X", code) .. ""
				end
			end
			yield(option_)
		end
	else
		for option_ in input:iter() do	 --直接打印
			yield(option_)
		end
	end
end
return cjk_comment


