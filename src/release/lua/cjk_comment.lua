local function cjk_comment(input,env)
	if env.engine.context:get_option('cjk_comment') then  --如果开启了中英文混输
		for option_ in input:iter() do	 --检查所有候选项
			local str = option_.text
			if utf8.len(str)==1 then
				local code =  utf8.codepoint(str)
				if (code >= 57344 and code <= 63743) or (code >= 983040 and code <= 1048573) or (code >= 1048576 and code <= 1114109) then --（U+E000-U+F8FF）（U+F0000-U+FFFFD，U+100000-U+10FFFD）
					option_.comment = option_.comment .. "〔PUA〕u" .. string.format("%X", code)
				elseif code >= 13312 and code <= 19893 then
					option_.comment = option_.comment .. "〔扩A〕u" .. string.format("%X", code) .. " [3.0 2000]"
				elseif code >= 131072 and code <= 173782 then
					option_.comment = option_.comment .. "〔扩B〕u" .. string.format("%X", code) .. " [3.1 2001]"
				elseif (code >= 40870 and code <= 40883)  or (code >= 40884 and code <= 40891) then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [4.1 2003]"
				elseif code >= 40892 and code <= 40899 then
					option_.comment = option_.comment .. "〔增改〕u" .. string.format("%X", code) .. " [5.1 2003]"
				elseif code >= 173824 and code <= 177972 then
					option_.comment = option_.comment .. "〔扩C〕u" .. string.format("%X", code) .. " [5.2 2003]"
				elseif code >= 40900 and code <= 40907 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [5.2 2003]"
				elseif code >= 177984 and code <= 178205 then
					option_.comment = option_.comment .. "〔扩D〕u" .. string.format("%X", code) .. " [6.0 2010]"
				elseif code == 40908 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [6.1 2012]"
				elseif code >= 178208 and code <= 183969 then
					option_.comment = option_.comment .. "〔扩E〕u" .. string.format("%X", code) .. " [8.0 2015]"
				elseif code >= 40909 and code <= 40917 then
					option_.comment = option_.comment .. "〔急用〕u" .. string.format("%X", code) .. " [8.0 2015]"
				elseif code >= 183984 and code <= 191456 then
					option_.comment = option_.comment .. "〔扩F〕u" .. string.format("%X", code) .. " [10.0 2017]"
				elseif code >= 40918 and code <= 40938 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [10.0 2017]"
				elseif code >= 40939 and code <= 40943 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [11.0 2018]"
				elseif code >= 196608 and code <= 201546 then
					option_.comment = option_.comment .. "〔扩G〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 40944 and code <= 40956 then
					option_.comment = option_.comment .. "〔急用〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 19894 and code <= 19903 then
					option_.comment = option_.comment .. "〔增改〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 173783 and code <= 173789 then
					option_.comment = option_.comment .. "〔工尺〕u" .. string.format("%X", code) .. " [13.0 2020]"
				elseif code >= 40957 and code <= 40959 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [14.0 2021]"
				elseif code == 173790 or code == 173791 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [14.0 2021]"
				elseif code >= 177973 and code <= 177976 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [14.0 2021]"
				elseif code >= 201552 and code <= 205743 then
					option_.comment = option_.comment .. "〔扩H〕u" .. string.format("%X", code) .. " [15.0 2022]"
				elseif code == 177977 then
					option_.comment = option_.comment .. "〔增补〕u" .. string.format("%X", code) .. " [15.0 2022]"
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


